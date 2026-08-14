---
title: "Wie ich unordentliche Tabellen mit einem LLM und n8n bereinige"
description: "Ein technischer Teardown des Tabellen-Bereinigungs-Workflows: ein LLM bekommt rohes CSV und Regeln in Alltagssprache, an valides JSON gebunden, mit Code-Nodes, die Ein- und Ausgabe absichern."
date: "Jul 4 2026"
tags: ["n8n", "ai", "data-cleaning", "automation", "teardown", "own-your-stack"]
lang: "de"
---

> **Kurz gesagt:** Der Tabellen-Bereiniger nimmt rohes CSV plus Anweisungen in Alltagssprache („dedupliziere, korrigiere Groß-/Kleinschreibung, trenne Namen"), baut einen System-Prompt, der ein LLM anweist, die Daten zu normalisieren und immer valides JSON zurückzugeben, und formatiert das Ergebnis wieder heraus. n8n übernimmt Eingang und Antwort; Code-Nodes validieren das CSV, bauen den Prompt und parsen die Antwort. Es funktioniert, weil Regeln für unordentliche Daten leichter in einem Satz zu beschreiben als zu programmieren sind. Das ist der Teardown der [Tabellen-Rettungs-Demo](https://leinss-consulting.de/de/blog/von-tabellen-zu-systemen/).

Eine Kontaktliste zu bereinigen (deduplizieren, „SMITH, john" zu „John Smith" richten, eine Vollnamen-Spalte aufteilen) ist die Art Aufgabe, die einen Haufen spröder Regeln zum Programmieren und einen Satz zum Beschreiben braucht. Also lasse ich ein LLM das Beschreiben-zum-Tun übernehmen. Der [Tabellen-Workflow auf meiner Beratungsseite](https://leinss-consulting.de/de/blog/von-tabellen-zu-systemen/) ist das Ergebnis, und das [JSON ist herunterladbar](https://leinss-consulting.de/workflows/excel-retter.json).

## Die Pipeline

| Stufe | Node(s) | Was passiert |
| --- | --- | --- |
| Eingang | Webhook → validieren → if | CSV und Bereinigungsanweisungen annehmen |
| Prompt | Code → Anfrage aufbauen | Daten und Regeln in einen strikten System-Prompt fassen |
| Bereinigen | HTTP → LLM | Die Daten normalisieren, nur valides JSON zurückgeben |
| Formatieren | Code → formatieren | Antwort parsen, Fehler behandeln, Ausgabe formen |
| Zurückgeben | Respond | Die bereinigten Daten zurücksenden |

## Regeln, die man beschreibt statt programmiert

Der Kerngedanke: keinen Parser für jedes Chaos schreiben. Rohes CSV und die Alltagssprache-Anweisungen des Nutzers an ein Modell geben, unter einem System-Prompt, der den Vertrag festnagelt: „du bist ein Datenbereinigungsassistent, normalisiere die Daten gemäß den Anweisungen und gib immer ein valides JSON-Objekt zurück". Das Modell wendet die Regeln an, wie es ein sorgfältiger Assistent täte, und weil der Vertrag JSON verlangt, ist die Ausgabe maschinenlesbar.

Das ist das richtige Werkzeug für *unscharfe* Regeln: Schreibweise, Namenstrennung, offensichtliche Duplikate, uneinheitliche Formate. Für harte, deterministische Regeln schriebe man weiter Code. Zu wissen, was was ist, ist der Großteil der Arbeit.

## Wo n8n aufhört und Code anfängt

n8n ist der Webhook und der HTTP-Aufruf. Alles, was es vertrauenswürdig macht, steckt in den Code-Nodes:

- **Validieren** weist ein leeres CSV oder fehlende Anweisungen ab, bevor das Modell läuft.
- **Anfrage aufbauen** ist die Designarbeit: Er konstruiert den System-Prompt, der den JSON-Vertrag festlegt, und injiziert Daten und Regeln. Ist dieser Node richtig, benimmt sich das Modell; ist er vage, bekommen Sie Prosa zurück.
- **Ergebnis formatieren** parst die Antwort, wirft einen klaren Fehler bei leerer Antwort und formt das finale JSON.

Der Prompt-bauende Node ist genau „wo Code anfängt": die Verlässlichkeit des Ganzen lebt in ein paar Zeilen, für die die meisten No-Code-Tools keinen sauberen Ort zum Schreiben bieten. Es ist die wiederkehrende Grenze aus [meinem n8n-Automatisierungs-Stack](/blog/de/n8n-automation-stack/).

## Warum ich die Daten auf meinem eigenen Server halte

Der ganze Sinn, eine Tabelle zu bereinigen, ist, dass es *Ihre* Daten sind: Kunden, Kontakte, Aufträge. Den Workflow auf Infrastruktur zu betreiben, die ich kontrolliere, heißt, die Datei bleibt bei mir, abgesehen vom einen Modellaufruf, statt in die Bereinigungs-SaaS eines anderen hochgeladen zu werden. Das ist das Argument in [dem selbst gehosteten Stack, den ich statt SaaS betreibe](/blog/de/self-hosted-stack/). Eine Datenbereinigungs-Pipeline, für Ihre Formate gebaut und übergeben? Das mache ich bei [Leinss Consulting](https://leinss-consulting.de/de/).
