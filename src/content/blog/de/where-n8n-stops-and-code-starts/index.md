---
title: "Wo n8n aufhört und Code anfängt"
description: "Dreimal wurde ein No-Code-Workflow schmerzhaft genug, dass ich ihn in echten Code überführt habe (Rechnungs-Batches, ein Lead-Router, ein Meeting-Bot) und die Regel, mit der ich jetzt die Grenze ziehe."
date: "Jul 4 2026"
tags: ["n8n", "automation", "engineering", "own-your-stack", "code"]
lang: "de"
---

> **Kurz gesagt:** n8n ist der Ort, an dem fast jede Automatisierung bei mir beginnt, und wo die meisten bleiben. Aber drei Arten von Schmerz drängen einen Workflow zuverlässig aus der Oberfläche in den Code: anhaltender Durchsatz gegen Rate-Limits, Geschäftslogik, die zu einem Wald aus IF-Verzweigungen wird, und lang laufende Jobs, die nach einem Fehler fortsetzen müssen. Die Grenze, die ich jetzt ziehe: n8n besitzt Trigger, I/O und die Schritte am Menschen; Code besitzt alles, was korrekt sein muss, wenn etwas kaputtgeht.

Ich mag n8n. Das meiste, was ich baue, beginnt dort und muss es nie verlassen. Aber „einfach noch einen Node hinzufügen" hat eine Decke, und ich bin oft genug dagegen gestoßen, um ihre Form zu kennen. Hier sind drei Workflows, die der Oberfläche entwachsen sind, was tatsächlich brach, und was ich in Code überführt habe.

## 1. Der Rechnungs-Batch, der die Queue schmelzen ließ

Der [Rechnungsleser](/blog/de/invoice-extractor-technical/) sind drei Nodes und wirklich solide für einen Upload nach dem anderen. Dann warf ein Kunde zum Monatsende einen Ordner mit ein paar hundert Rechnungen auf einmal hinein.

n8n lief über die Einträge und feuerte die Vision-API so schnell es ging. Kein echtes Backoff, also lief es direkt in Rate-Limits; und als Eintrag 200-und-etwas scheiterte, war der ganze Durchlauf mühsam fortzusetzen, ohne alles davor neu zu verarbeiten. Die Oberfläche hat Retry-Einstellungen, aber nicht die Art Kontrolle, die das brauchte.

**Was in Code wanderte:** eine richtige Job-Queue mit Concurrency-Deckel, exponentielles Backoff bei 429ern und idempotenter Zustand pro Rechnung, sodass ein erneuter Lauf nur das anfasst, was wirklich scheiterte. n8n behielt den Trigger und die „Batch fertig"-Benachrichtigung. Die Lektion: n8n ist hervorragend für den Einzelfall; anhaltender Batch-Durchsatz will eine echte Queue.

## 2. Der Lead-Router, der zum Verzweigungswald wurde

Der [Lead-Response-Workflow](/blog/de/lead-response-technical/) begann sauber: Nachricht klassifizieren, Antwort entwerfen. Dann fügte die Realität Regeln hinzu. Heiße Leads sollten auch ins CRM. Offensichtlicher Spam sollte fallen. Bestandskunden sollten zum Support, nicht zum Vertrieb. Nachrichten außerhalb der Zeiten sollten in eine Warteschlange.

Jede neue Regel war ein weiterer IF-Node, und binnen eines Monats war die Oberfläche ein unlesbares Dickicht, in dem eine Verzweigung zu ändern zwei andere zu brechen drohte. Die Logik war in Ordnung; sie als visuellen Baum auszudrücken war das Problem.

**Was in Code wanderte:** das Routing lebt jetzt in einem Code-Schritt (später ein winziger Service) mit einer sauberen Regeltabelle: lesbar, testbar, änderbar, ohne Drähte zu verfolgen. n8n besitzt weiter den Webhook, die Sends und die CRM-Schreibvorgänge. Die Lektion: verzweigende Geschäftslogik gehört in Code, nicht in einen Wald aus IF-Nodes.

## 3. Der Meeting-Bot, der bei langen Calls in den Timeout lief

Der [Meeting-Assistent](/blog/de/meeting-assistant-technical/) war fein für ein zwanzigminütiges Standup. Dann fütterte ihn jemand mit der Aufnahme eines neunzigminütigen Workshops.

Das sprengte die Transkriptionsgrenzen und n8ns eigenen Ausführungs-Timeout, und am schlimmsten: ein Fehler mittendrin hieß, die ganze Datei neu zu transkribieren, und dafür doppelt zu zahlen. Ein einzelner lang laufender Node ohne Checkpoints ist ein schlechter Ort für teure, fragile Arbeit.

**Was in Code wanderte:** eine gestückelte, gecheckpointete Pipeline: das Audio teilen, jedes Stück mit eigenem Retry transkribieren, den Fortschritt speichern, sodass ein Fehler mitten in der Datei fortsetzt, statt neu zu starten. n8n stößt es an und mailt das fertige Protokoll. Die Lektion: lang laufende, fortsetzbare Arbeit braucht Zustand, den n8ns Ausführungsmodell nicht hergibt.

## Die Regel, die ich jetzt nutze

Sehen Sie das Muster über alle drei: dieselben drei Bedürfnisse tauchten immer wieder auf: **Idempotenz, Retries mit echtem Backoff und Zustand, den man beobachten und fortsetzen kann**, und n8n gibt Ihnen keinen sauberen Ort für eines davon. Das ist kein Vorwurf an n8n. Es ist einfach nicht, wofür eine Workflow-Oberfläche da ist.

Die Grenze ist also nicht „n8n gegen Code". Sie ist diese:

- **n8n besitzt** die Trigger, das I/O, die Integrationen und die Schritte am Menschen. Die Klempnerei, in der es wirklich gut ist.
- **Code besitzt** alles, was *korrekt unter Fehlern* sein muss: Queues, Retries, Idempotenz, Stückelung, echte Verzweigungslogik.

Jeder meiner [Workflow-Teardowns](/blog/de/n8n-automation-stack/) hat einen kleinen Code-Node, der genau das tut, an genau dieser Naht. Zu wissen, wo die Naht ist, und sie überschreiten zu können, ist der Unterschied zwischen einer Automatisierung, die gut vorführt, und einer, die Sie einem Unternehmen übergeben und der Sie trauen können.

Deshalb betreibe ich das alles auch auf meinem eigenen Stack: diese Linie zu überschreiten heißt, echten Code zu schreiben und zu besitzen, keinen Feature-Wunsch einzureichen. Das ist das ganze Argument in [dem selbst gehosteten Stack, den ich statt SaaS betreibe](/blog/de/self-hosted-stack/). Wenn Sie einen Workflow haben, der auf eine dieser drei Arten wehzutun begonnen hat, ist das genau die Art Sache, die ich bei [Leinss Consulting](https://leinss-consulting.de/de/) behebe.
