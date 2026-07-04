---
title: "Kundenservice-Bots mit n8n erstellen"
description: "Ein praktischer Leitfaden zur Erstellung intelligenter Support-Automatisierung ohne Code"
date: "Jan 10 2025"
tags: ["n8n", "chatbot", "automation", "kundenservice"]
lang: "de"
---

> **Kurz gesagt:** Einen Support-Bot baust du in n8n in fünf Schritten: Ein Webhook empfängt die Nachricht, ein LLM-Node klassifiziert den Intent, ein Switch routet sie, eine Datenbankabfrage ergänzt den Kundenkontext, und ein LLM erzeugt eine belegte Antwort — mit Eskalation an einen Menschen bei geringer Konfidenz oder negativer Stimmung. Visueller Workflow, ohne eigenes Engineering-Team.

Kundenservice-Automatisierung muss nicht frustrierende Chatbots bedeuten. So baue ich mit n8n Support-Systeme, die wirklich helfen.

## Warum n8n für Kundenservice?

Die meisten Chatbot-Plattformen sind entweder zu simpel (einfaches FAQ-Matching) oder zu komplex (sie brauchen ein eigenes Engineering-Team). n8n liegt dazwischen: visuelle Workflows mit echter Power darunter.

## Architektur-Überblick

```
Kundenanfrage
    ↓
n8n Webhook
    ↓
Intent-Klassifizierung (AI)
    ↓
Routing zum Handler
    ↓
Antwort + Aktion
```

## Die Schlüsselkomponenten

### 1. Intent-Klassifizierung

Ein LLM-Node klassifiziert jede eingehende Nachricht: Supportanfrage, Verkaufsanfrage, Bug-Report oder allgemeine Frage.

### 2. Kontext-Abruf

Hol den Kontext, um gut zu antworten: Dokumentationssuche, bisherige Ticket-Historie, Produktinformationen.

### 3. Antwortgenerierung

Erzeuge eine kontextbezogene Antwort mit relevanten Dokumentations-Snippets, persönlicher Begrüßung und klaren nächsten Schritten.

### 4. Eskalationslogik

Wissen, wann an einen Menschen übergeben wird — Sentiment-Trigger, Komplexitätsschwellen und Kundenpriorität entscheiden, wann der Bot zurücktritt.

## Beispiel-Workflow-Struktur

1. **Webhook** — empfängt die Kundennachricht.
2. **AI-Classifier** — bestimmt Intent und Dringlichkeit.
3. **Switch-Node** — routet zum passenden Handler.
4. **Datenbankabfrage** — holt den Kundenkontext.
5. **AI-Response** — generiert eine hilfreiche Antwort.
6. **Integration** — aktualisiert das CRM und sendet Benachrichtigungen.

## Was ein solches Setup erreichen kann

Eine Triage-Schicht wie diese:

- löst rund 60% der Anfragen automatisch,
- hält die durchschnittliche Antwortzeit unter 30 Sekunden und
- die Kundenzufriedenheit über 4,5/5.

> **Fallstudie:** Ein vollständiger Durchgang dieser Architektur bei einem E-Commerce-Händler mit 50.000 monatlichen Bestellungen — mit Metriken, Kosten und Zeitplan — findest du in der **[KI-Support-Triage Fallstudie](https://leinss-consulting.de/de/blog/fallstudie-support-triage/)**.

## Erste Schritte

Klein anfangen:

1. Identifiziere deine Top-5-Support-Fragen.
2. Baue zuerst Handler dafür.
3. Miss die Lösungsrate.
4. Erweitere von dort aus.

---

*Willst du den kompletten Workflow sehen? Schreib mir und ich teile das Template.*
