---
title: "Kundenservice-Bots mit n8n erstellen"
description: "Ein praktischer Leitfaden zur Erstellung intelligenter Support-Automatisierung ohne Code"
date: "Jul 4 2026"
tags: ["n8n", "chatbot", "kundenservice", "own-your-stack"]
lang: "de"
---

> **Kurz gesagt:** Einen Support-Bot bauen Sie in n8n in fünf Schritten: Ein Webhook empfängt die Nachricht, ein LLM-Node klassifiziert den Intent, ein Switch routet sie, eine Datenbankabfrage ergänzt den Kundenkontext, und ein LLM erzeugt eine belegte Antwort, mit Eskalation an einen Menschen bei geringer Konfidenz oder negativer Stimmung. Visueller Workflow, ohne eigenes Engineering-Team, betrieben auf Infrastruktur, die Ihnen gehört.

Kundenservice-Automatisierung muss nicht frustrierende Chatbots bedeuten. So baue ich mit n8n Support-Systeme, die wirklich helfen: und weil es auf einem [selbst gehosteten n8n-Stack](/blog/de/self-hosted-stack/) läuft, verlassen Ihre Kundengespräche nie Infrastruktur, die Sie kontrollieren.

## Warum n8n für Kundenservice?

Die meisten Chatbot-Plattformen sind entweder zu simpel (einfaches FAQ-Matching) oder zu komplex (sie brauchen ein eigenes Engineering-Team). n8n liegt dazwischen: visuelle Workflows mit echter Substanz darunter.

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

Holen Sie den Kontext, um gut zu antworten: Dokumentationssuche, bisherige Ticket-Historie, Produktinformationen.

### 3. Antwortgenerierung

Erzeugen Sie eine kontextbezogene Antwort mit relevanten Dokumentations-Snippets, persönlicher Begrüßung und klaren nächsten Schritten.

### 4. Eskalationslogik

Wissen, wann an einen Menschen übergeben wird: Sentiment-Trigger, Komplexitätsschwellen und Kundenpriorität entscheiden, wann der Bot zurücktritt.

## Beispiel-Workflow-Struktur

1. **Webhook**, empfängt die Kundennachricht.
2. **AI-Classifier**, bestimmt Intent und Dringlichkeit.
3. **Switch-Node**, routet zum passenden Handler.
4. **Datenbankabfrage**, holt den Kundenkontext.
5. **AI-Response**, generiert eine hilfreiche Antwort.
6. **Integration**, aktualisiert das CRM und sendet Benachrichtigungen.

## Was ein solches Setup erreichen kann

Eine Triage-Schicht wie diese:

- löst rund 60% der Anfragen automatisch,
- hält die durchschnittliche Antwortzeit unter 30 Sekunden und
- die Kundenzufriedenheit über 4,5/5.

> **Fallstudie:** Ein vollständiger Durchgang dieser Architektur bei einem E-Commerce-Händler mit 50.000 monatlichen Bestellungen (mit Metriken, Kosten und Zeitplan) finden Sie in der **[KI-Support-Triage Fallstudie](https://leinss-consulting.de/de/blog/fallstudie-support-triage/)**.

## Erste Schritte

Klein anfangen:

1. Identifizieren Sie Ihre Top-5-Support-Fragen.
2. Bauen Sie zuerst Handler dafür.
3. Messen Sie die Lösungsrate.
4. Erweitern Sie von dort aus.

---

Wollen Sie das Echte statt einer Beschreibung? Die [Support-Triage-Fallstudie](https://leinss-consulting.de/de/blog/fallstudie-support-triage/) liefert den tatsächlichen n8n-Workflow als herunterladbare JSON, importieren Sie ihn und lesen Sie jeden Node. Wenn Sie ihn lieber gebaut und übergeben bekommen, ist das die Arbeit, die ich bei [Leinss Consulting](https://leinss-consulting.de/de/) mache.
