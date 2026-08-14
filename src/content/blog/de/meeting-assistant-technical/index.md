---
title: "Wie ich aus Meeting-Audio Protokolle mache: mit Whisper, Claude und n8n"
description: "Ein technischer Teardown des Meeting-Protokoll-Workflows: Whisper-Transkription, Claude-Tool-Use für strukturierte Extraktion von Entscheidungen und Aufgaben, und ein Protokoll per E-Mail."
date: "Jul 4 2026"
tags: ["n8n", "claude", "whisper", "ai", "teardown", "own-your-stack"]
lang: "de"
---

> **Kurz gesagt:** Der Meeting-Bot nimmt eine Audiodatei, transkribiert sie mit Whisper und lässt dann Claude Sonnet 4.6 strukturierte Protokolle extrahieren (Entscheidungen, Aufgaben, Zuständige) per Tool-Use, sodass die Ausgabe ein festes Schema ist, kein Fließtext. Ein Code-Node formatiert das zu Markdown, und n8n verschickt es. Der Tool-Use-Schritt macht die Zusammenfassung verlässlich statt zu einer Textwand. Das ist der Teardown der [Live-Meeting-Demo](https://leinss-consulting.de/de/blog/meeting-protokoll-automatisieren/).

„Fasse dieses Meeting zusammen" liefert einen Absatz, den niemand liest. Was Leute wirklich wollen, ist eine Liste von Entscheidungen und wer welche Aufgabe verantwortet. Der [Meeting-Protokoll-Workflow auf meiner Beratungsseite](https://leinss-consulting.de/de/blog/meeting-protokoll-automatisieren/) erzeugt genau das, und hier ist wie. Das [Workflow-JSON ist herunterladbar](https://leinss-consulting.de/workflows/meeting-protokoll.json).

## Die Pipeline

| Stufe | Node(s) | Was passiert |
| --- | --- | --- |
| Eingang | Webhook → validieren → if | Audiodatei und Meeting-Metadaten annehmen |
| Transkribieren | HTTP → Whisper | Audio zu Klartext-Transkript |
| Strukturieren | HTTP → Claude (Tool-Use) | Entscheidungen, Aufgaben, Zuständige in ein festes Schema extrahieren |
| Formatieren | Code → Markdown | Die strukturierten Daten als lesbares Protokoll rendern |
| Zustellen | E-Mail → respond | Protokoll senden, dem Aufrufer bestätigen |

## Tool-Use macht die Ausgabe verlässlich

Der spannende Node ist der Claude-Aufruf, und der Kniff ist, dass er keine Zusammenfassung in Prosa verlangt. Er definiert ein Tool, `extract_meeting_data`, mit einem Schema für die Felder, die ich will: eine Liste von Entscheidungen, eine Liste von Aufgaben je mit Zuständigem, zentrale Diskussionspunkte. Claude wird angewiesen, dieses Tool aufzurufen, also kommt die Antwort jedes Mal als strukturierte Argumente passend zum Schema zurück.

Das ist der Unterschied zwischen „bitte formatiere deine Antwort als JSON" (klappt meistens) und Tool-Use (erzwingt die Form). Für alles Nachgelagerte, das das Ergebnis parsen muss, ist diese Garantie viel wert. Das Transkript geht als Freitext rein; strukturierte Protokolle kommen raus.

## Wo n8n aufhört und Code anfängt

n8n bewegt das Audio, ruft Whisper auf, ruft Claude auf und verschickt die E-Mail. Die Code-Nodes übernehmen das Formen:

- **Validieren** zieht Titel, Teilnehmer und das Audio-Binary aus dem eingehenden Formular und weist die Anfrage ab, wenn das Audio fehlt.
- **Transkript extrahieren** behandelt, dass Whisper Klartext statt JSON zurückgibt.
- **Markdown formatieren** liest Claudes `tool_use`-Block aus der Antwort und rendert Entscheidungen und Aufgaben in sauberes Markdown: Überschriften, Checklisten, Zuständige in Fett.

Dieser letzte Node ist der „wo Code anfängt"-Moment: ein strukturiertes API-Ergebnis in ein Dokument zu verwandeln, das ein Mensch lesen will, ist Logik, keine Einstellung. Es ist dieselbe Grenze, die ich in [meinem n8n-Automatisierungs-Stack](/blog/de/n8n-automation-stack/) beschreibe.

## Warum ich es selbst betreibe

Meeting-Audio ist ungefähr so sensibel, wie Unternehmensdaten werden. Transkription und Zusammenfassung durch einen Workflow auf Infrastruktur zu führen, die ich kontrolliere, hält die Aufnahme aus fremder SaaS heraus, außer für die Modellaufrufe, die ich wähle. Das ist der Fall hinter [dem selbst gehosteten Stack, den ich statt SaaS betreibe](/blog/de/self-hosted-stack/). So etwas für die Meetings Ihres Teams, gebaut und übergeben? Das mache ich bei [Leinss Consulting](https://leinss-consulting.de/de/).
