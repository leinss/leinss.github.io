---
title: "Kundenservice-Bots mit n8n erstellen"
description: "Ein praktischer Leitfaden zur Erstellung intelligenter Support-Automatisierung ohne Code"
date: "Jul 4 2026"
tags: ["n8n", "chatbot", "kundenservice", "own-your-stack"]
lang: "de"
---

> **Kurz gesagt:** Einen Support-Bot bauen Sie in n8n in fünf Schritten: Ein Webhook empfängt die Nachricht, ein LLM-Node klassifiziert den Intent, ein Switch routet sie, eine Datenbankabfrage ergänzt den Kundenkontext, und ein LLM erzeugt eine belegte Antwort, mit Eskalation an einen Menschen bei geringer Konfidenz oder negativer Stimmung. Visueller Workflow, ohne eigenes Engineering-Team, betrieben auf Infrastruktur, die Ihnen gehört.

Kundenservice-Automatisierung muss nicht frustrierende Chatbots bedeuten. Hier ist die Architektur, auf der ich Support-Triage mit n8n aufbaue, Node für Node: und weil es auf einem [selbst gehosteten n8n-Stack](/blog/de/self-hosted-stack/) läuft, verlassen Ihre Kundengespräche nie Infrastruktur, die Sie kontrollieren.

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

## Was Sie messen sollten

Ich nenne Ihnen hier keine Lösungsquote. Jede Zahl, die ich hinschreiben könnte, käme aus einem Aufbau, der nicht Ihrer ist, mit einem Fragen-Mix, der nicht Ihrer ist, und sie würde Ihnen nichts darüber sagen, was das für Ihr Postfach tut.

Diese vier Zahlen lohnen die Beobachtung, sobald es läuft, und Sie bekommen sie nur aus Ihrer eigenen Warteschlange:

- **Automatische Lösungsquote**: der Anteil der Nachrichten, die ohne Menschen abgeschlossen werden, ehrlich gezählt. Eine Antwort, auf die der Kunde mit derselben Frage erneut schreibt, zählt nicht als gelöst.
- **Treffsicherheit der Eskalation**: von den Nachrichten, die an einen Menschen gingen, wie viele brauchten wirklich einen. Zu niedrig heißt, die Arbeit landet doch wieder bei Ihnen; zu hoch heißt, das System beantwortet Dinge, die es nicht sollte.
- **Zeit bis zur ersten Antwort**, vorher und nachher, nach Kategorie getrennt. Der Durchschnitt versteckt genau den Fall, auf den es ankommt.
- **Rate der falschen, selbstsicheren Antworten.** Die wichtigste. Ein Bot, der zu oft „weiß ich nicht" sagt, nervt; ein Bot, der selbstsicher falsch liegt, kostet Sie einen Kunden.

> **Referenz-Build:** Die vollständige Architektur mit jedem erklärten Node und dem n8n-Workflow zum Herunterladen finden Sie im **[Referenz-Build KI-Support-Triage](https://leinss-consulting.de/de/blog/fallstudie-support-triage/)**. Das ist ein Aufbau zum Nachprüfen, kein Kundenbericht, und er enthält keine Kundenzahlen.

## Erste Schritte

Klein anfangen:

1. Identifizieren Sie Ihre Top-5-Support-Fragen.
2. Bauen Sie zuerst Handler dafür.
3. Messen Sie die Lösungsrate.
4. Erweitern Sie von dort aus.

---

Wollen Sie das Echte statt einer Beschreibung? Der [Referenz-Build Support-Triage](https://leinss-consulting.de/de/blog/fallstudie-support-triage/) liefert den n8n-Workflow als herunterladbare JSON, importieren Sie ihn und lesen Sie jeden Node. Wenn Sie ihn lieber gebaut und übergeben bekommen, ist das die Arbeit, die ich bei [Leinss Consulting](https://leinss-consulting.de/de/) mache.
