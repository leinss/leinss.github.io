---
title: "Wo n8n aufhört und Code anfängt"
description: "Drei Nähte, an denen eine Workflow-Oberfläche endet: anhaltender Durchsatz, verzweigende Geschäftslogik und lang laufende Arbeit, die fortsetzen muss. Was n8ns Ausführungsmodell an jeder Stelle hergibt, und was Sie selbst schreiben müssen."
date: "Jul 4 2026"
tags: ["n8n", "automation", "engineering", "own-your-stack", "code"]
lang: "de"
---

> **Kurz gesagt:** n8n ist der Ort, an dem fast jede Automatisierung bei mir beginnt, und wo die meisten bleiben. Drei Bedürfnisse drängen Arbeit zuverlässig aus der Oberfläche in den Code: anhaltender Durchsatz gegen Rate-Limits, Geschäftslogik, die zu einem Wald aus IF-Verzweigungen wird, und lang laufende Jobs, die nach einem Fehler fortsetzen müssen. Die Grenze, die ich ziehe: n8n besitzt Trigger, I/O und die Schritte am Menschen; Code besitzt alles, was korrekt sein muss, wenn etwas kaputtgeht.

Ich mag n8n. Das meiste, was ich baue, beginnt dort und muss es nie verlassen. Aber „einfach noch einen Node hinzufügen" hat eine Decke, und es lohnt sich, ihre Form zu kennen, bevor man dagegen stößt, nicht danach.

Die Demo-Workflows hinter [den Teardowns auf dieser Seite](/blog/de/invoice-extractor-technical/) bestehen aus insgesamt sechs Node-Typen: Webhook, IF, Code, HTTP-Request, Respond-to-Webhook und E-Mail. Jeder von ihnen hat mindestens einen Code-Node, und diese Code-Nodes sitzen alle an derselben Art Naht. Hier kommt diese Naht her.

## 1. Anhaltender Durchsatz

Der [Rechnungsleser](/blog/de/invoice-extractor-technical/) verarbeitet einen Upload pro Anfrage: Datei nehmen, Vision-Modell aufrufen, Antwort parsen, zurückgeben. Für ein Dokument nach dem anderen ist diese Form richtig, und nichts daran gehört in Code.

Richten Sie dieselbe Form auf einen Monatsend-Ordner mit mehreren hundert Rechnungen, und sie ist es nicht mehr. n8n läuft über die Einträge innerhalb einer Ausführung und ruft die API so schnell auf, wie die Schleife läuft. Die Oberfläche gibt Ihnen Retry-Einstellungen pro Node, und die sind wirklich nützlich, aber sie sind keine Rate-Limit-Strategie: kein exponentielles Backoff pro Eintrag bei einem 429, kein Concurrency-Deckel, den Sie auf das Limit des Anbieters einstellen, und kein Idempotenzschlüssel. Ein Fehler bei Eintrag 200 heißt also, die 199 erfolgreichen erneut zu verarbeiten und doppelt zu bezahlen.

**Was hier Code besitzt:** eine Job-Queue mit Concurrency-Deckel, exponentielles Backoff bei Rate-Limit-Antworten und Zustand pro Eintrag, sodass ein erneuter Lauf nur anfasst, was wirklich scheiterte. n8n behält den Trigger und die „Batch fertig"-Benachrichtigung, also genau den Teil, in dem es gut ist.

## 2. Verzweigende Geschäftslogik

Der [Lead-Response-Workflow](/blog/de/lead-response-technical/) klassifiziert eine eingehende Nachricht und entwirft daraus eine Antwort. Er hat einen IF-Node, und der entscheidet eine Sache: ist die Eingabe gültig.

Beim Routing ändert sich das. Die Klassifikation liefert bereits die Felder, nach denen Sie routen würden (Intent, Passung, Sprache), und die nächsten Regeln sind leicht aufzuzählen: heiße Leads gehen zusätzlich ins CRM, offensichtlicher Spam fällt weg, Bestandskunden gehen zum Support statt zum Vertrieb, Nachrichten außerhalb der Zeiten warten in einer Schlange. Jede davon ist ein weiterer IF-Node und ein weiteres Paar Drähte, und sie setzen sich schlecht zusammen: um zu sehen, was mit einer Nachricht passiert, verfolgen Sie einen Pfad über die Oberfläche mit dem Auge, und eine Verzweigung zu ändern kann eine andere brechen, ohne dass Ihnen das jemand sagt.

**Was hier Code besitzt:** die Routing-Tabelle. Dieselben vier Regeln in einem Code-Node sind eine Liste, die Sie von oben nach unten lesen, mit einer Handvoll Beispielnachrichten testen und in einem Pull Request im Diff sehen. Die Logik war nie das Problem; ein visueller Baum ist die falsche Darstellung dafür.

## 3. Lang laufende Arbeit, die fortsetzen muss

Der [Meeting-Assistent](/blog/de/meeting-assistant-technical/) sind zwei HTTP-Aufrufe in einer Ausführung: das Audio transkribieren, dann aus dem Transkript strukturierte Protokolle machen.

Der Transkriptionsschritt ist der, um den herum man entwerfen muss, weil er zugleich der langsamste und der teuerste ist. Er ist ein einzelner Node, der entweder fertig wird oder nicht. Innerhalb eines Nodes gibt es keine Checkpoints, also wirft ein Fehler beim Zusammenfassen das Transkript weg, und Sie transkribieren die ganze Datei erneut. Längere Dateien verschlechtern das in jeder Dimension gleichzeitig: mehr Zeit in einem Node, mehr Angriffsfläche für einen Timeout und mehr verlorenes Geld pro Wiederholung.

**Was hier Code besitzt:** das Audio teilen, jedes Stück für sich wiederholen und den Fortschritt speichern, sodass ein Fehler mitten in der Datei fortsetzt, statt neu zu starten. n8n stößt es an und mailt das fertige Protokoll.

## Das Muster über alle drei

Jedes Mal tauchen dieselben drei Bedürfnisse auf: **Idempotenz, Retries mit echtem Backoff und Zustand, den man beobachten und fortsetzen kann**. Eine Workflow-Oberfläche gibt Ihnen für keines davon einen sauberen Ort. Das ist kein Vorwurf an n8n. Dafür ist eine Oberfläche nicht da.

Die Grenze ist also nicht „n8n gegen Code". Sie ist diese:

- **n8n besitzt** die Trigger, das I/O, die Integrationen und die Schritte am Menschen. Die Klempnerei, in der es wirklich gut ist.
- **Code besitzt** alles, was *korrekt unter Fehlern* sein muss: Queues, Retries, Idempotenz, Stückelung, echte Verzweigungslogik.

Klar gesagt, wo meine eigenen Demos stehen: keine davon braucht heute eine Queue oder einen Checkpoint. Sie nehmen eine Anfrage nach der anderen, und ihre Code-Nodes sind bewusst klein. Die Naht wird wichtig, wenn dieselbe Form in Menge laufen muss, und zu wissen, wo sie liegt, bevor das passiert, ist der Unterschied zwischen einer Automatisierung, die gut vorführt, und einer, die Sie einem Unternehmen übergeben und der Sie trauen können.

Deshalb betreibe ich das alles auch auf meinem eigenen Stack: diese Linie zu überschreiten heißt, echten Code zu schreiben und zu besitzen, keinen Feature-Wunsch einzureichen. Das ist das ganze Argument in [dem selbst gehosteten Stack, den ich statt SaaS betreibe](/blog/de/self-hosted-stack/). Wenn Sie einen Workflow haben, der auf eine dieser drei Arten wehzutun begonnen hat, ist das genau die Art Sache, die ich bei [Leinss Consulting](https://leinss-consulting.de/de/) behebe.
