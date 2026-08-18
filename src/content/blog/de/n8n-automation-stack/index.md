---
title: "Mein n8n-Automatisierungs-Stack"
description: "Was die Automatisierung auf meiner eigenen Infrastruktur wirklich betreibt: ein n8n-Container, ein Rate-Limit-Sidecar vor den öffentlichen Webhooks, Workflows in Git und die sechs Node-Typen, aus denen jeder Workflow besteht."
date: "Jul 4 2026"
tags: ["n8n", "self-hosting", "own-your-stack", "automatisierung"]
lang: "de"
---

> **Kurz gesagt:** Ein selbst gehosteter n8n-Container hinter einem Reverse Proxy, mit einem OpenResty-Sidecar vor den öffentlichen Webhooks, damit ein kostenpflichtiger Modellaufruf nicht unbegrenzt ausgelöst werden kann. Workflows werden als JSON nach Git exportiert. Als Modelle laufen ein gehostetes für die Demos und ein lokales für alles Sensible. Der Stack ist bewusst klein, und ich sage klar, was nicht drin ist.

Beschreibungen selbst gehosteter Stacks zählen gern alles auf, womit sich das Werkzeug verbinden *könnte*. Das hier ist das Gegenteil: was wirklich läuft, und was ich weggelassen habe.

## Was läuft

**n8n, ein Container.** Selbst gehostet, auf eine Version festgenagelt, per Ansible ausgerollt statt von Hand. Die Daten bleiben auf Infrastruktur, die ich kontrolliere, es gibt keine Abrechnung pro Ausführung, und Code-Nodes können, was die Oberfläche nicht kann.

**SQLite, nicht Postgres.** n8ns eigener Zustand liegt in einer Datei im Datenvolume des Containers. Das ist n8ns Standard und bei meinem Volumen die richtige Wahl: Die Demos nehmen eine Anfrage nach der anderen, dafür bringt ein Datenbankserver nichts. Der Queue-Modus, mit Postgres und Redis dahinter, ist das, wohin man wechselt, wenn eine Instanz nicht mehr reicht. Ich habe ihn nicht gebraucht, und zu behaupten, ich betriebe ihn, wäre eine erfundene Größenordnung.

**Ein Reverse Proxy**, der TLS terminiert, mit Zertifikaten, die sich selbst erneuern.

**Ein OpenResty-Sidecar** zwischen Proxy und n8n. Die öffentlichen Demo-Webhooks lösen je einen kostenpflichtigen Modellaufruf aus, also trägt das Sidecar ein Burst-Limit pro IP, eine Tagesobergrenze pro Webhook und eine Origin-Freigabeliste, während Editor und API unangetastet durchgehen. Der Schreib-Endpunkt, der die FAQ-Wissensbasis füttert, verlangt ein gemeinsames Geheimnis. Diese Schicht macht aus „ein Webhook im Internet" etwas, das ich laufen lassen will.

**Postgres** kommt vor, aber nicht für n8n. Dort liegt die FAQ-Wissensbasis, die der [Assistent](/blog/de/faq-assistant-technical/) durchsucht, erreichbar über einen kleinen HTTP-Endpunkt.

**Modelle.** Ein gehostetes Modell für die Demo-Workflows, gewählt, weil es pro Aufruf günstig ist, und ein lokaler Modell-Server für alles Sensible, sodass der Text die Maschine nicht verlässt. Welches Modell ein Workflow aufruft, sind eine URL und ein Auth-Header, und genau so soll es sein.

## Die sechs Node-Typen

Jeder Workflow, den ich betreibe, besteht aus sechs: **Webhook**, **IF**, **Code**, **HTTP-Request**, **Respond-to-Webhook** und **E-Mail senden**.

Das ist kein Minimalismus um seiner selbst willen. n8n liefert hunderte dienstspezifische Nodes, und ich greife fast immer stattdessen zum HTTP-Request-Node, weil ein HTTP-Aufruf vom Dienst selbst dokumentiert ist, nicht veraltet, wenn ein Node einer API-Version hinterherhinkt, und in jedem Workflow gleich liest. Die Dienst-Nodes sind bei OAuth-lastigen Integrationen wirklich nützlich und sparen dort echte Arbeit; nur hatte das, was ich baue, bisher nicht diese Form.

Der **Code**-Node trägt das Gewicht, und er sitzt immer an derselben Naht: Eingaben prüfen, bevor ein kostenpflichtiger Aufruf feuert, parsen, was ein Modell zurückschickt, und das Ergebnis für den nächsten Schritt formen. Das ist [wo n8n aufhört und Code anfängt](/blog/de/where-n8n-stops-and-code-starts/).

## Praktiken, auf die es ankommt

**Workflows liegen in Git.** Jeder Workflow wird als JSON exportiert und neben dem Deployment-Code abgelegt, der ihn auf die Maschine bringt. Das ist die ganze Portabilität: Wäre n8n morgen weg, läge die Logik in Dateien, die mir gehören, nicht in einem Anbieter-Konto.

**Zugangsdaten stehen nie im Export.** Sie kommen zum Deploy-Zeitpunkt aus einem verschlüsselten Speicher, der Schlüssel liegt außerhalb des Repositories.

**Der Rate-Limiter wird überwacht.** Er exportiert Zähler, die werden abgeholt, und auf den Tagesobergrenzen liegen Alarmregeln. Eine unüberwachte Obergrenze sagt Ihnen nichts, bis ein Widget bereits tot ist.

**Wie das Ganze exponiert ist, steht bewusst nicht öffentlich.** Die Architektur unten ist die ehrliche Form davon; die Einzelheiten der Erreichbarkeit gehören nicht auf eine öffentliche Seite.

```
Internet
    ↓
Reverse Proxy (HTTPS)
    ↓
Rate-Limit-Sidecar
    ↓
n8n (Docker)
```

## Was ich als Erstes ändern würde

Käme das Volumen, das es rechtfertigt: Queue-Modus mit Postgres und Redis, damit Ausführungen einen Neustart überleben und über mehr als einen Worker laufen können. Das ist der Weg nach oben, und es lohnt sich, ihn zu kennen, bevor man ihn braucht, nicht während eines Vorfalls.

## Wollen Sie das, aber besessen?

So einen Stack aufzusetzen (selbst gehostet, dokumentiert und so übergeben, dass er nicht im Kopf einer einzelnen Person eingeschlossen ist) ist die Arbeit, die ich bei [Leinss Consulting](https://consulting.leinss.xyz/de/) mache. Wenn Sie ein ähnliches Setup betreiben, vergleiche ich gern Notizen.
