---
title: "Wie ich aus Meeting-Audio Protokolle mache: mit Whisper, Claude und n8n"
description: "Ein technischer Teardown des Meeting-Protokoll-Workflows: Whisper-Transkription, erzwungenes Schema für die Extraktion von Entscheidungen und Aufgaben, und ein Protokoll per E-Mail."
date: "Jul 4 2026"
tags: ["n8n", "claude", "whisper", "ai", "teardown", "own-your-stack"]
lang: "de"
---

> **Kurz gesagt:** Der Meeting-Bot nimmt eine Audiodatei, transkribiert sie mit Whisper und lässt dann ein Modell strukturierte Protokolle extrahieren (Entscheidungen, Aufgaben, Zuständige) gegen ein festes Schema statt als Fließtext. Ein Code-Node formatiert das zu Markdown, und n8n verschickt es. Das erzwungene Schema macht die Zusammenfassung verlässlich statt zu einer Textwand. Das ist der Teardown des [Meeting-Protokoll-Workflows](https://leinss-consulting.de/de/blog/meeting-protokoll-automatisieren/).

„Fasse dieses Meeting zusammen" liefert einen Absatz, den niemand liest. Was Leute wirklich wollen, ist eine Liste von Entscheidungen und wer welche Aufgabe verantwortet. Der [Meeting-Protokoll-Workflow auf meiner Beratungsseite](https://leinss-consulting.de/de/blog/meeting-protokoll-automatisieren/) erzeugt genau das, und hier ist wie. Das [Workflow-JSON ist herunterladbar](https://leinss-consulting.de/workflows/meeting-protokoll.json).

**Eines vorweg, weil Sie es nachprüfen können:** Das Widget auf der Demo-Seite transkribiert derzeit nicht. Es braucht einen Whisper-Dienst, dieser Dienst läuft nicht auf der Maschine, auf der die Demos liegen, und statt eines Fehlers gibt das Widget eine Beispiel-Zusammenfassung zurück. Einen solchen Dienst aufzusetzen ist Infrastruktur, die ich für eine Demo nicht ausgegeben habe. Lesen Sie das hier also als Teardown des Workflows, der echt und herunterladbar ist, nicht als Beleg dafür, dass der Knopf durchgängig funktioniert.

## Die Pipeline

| Stufe | Node(s) | Was passiert |
| --- | --- | --- |
| Eingang | Webhook → validieren → if | Audiodatei und Meeting-Metadaten annehmen |
| Transkribieren | HTTP → Whisper | Audio zu Klartext-Transkript |
| Strukturieren | HTTP → Modell | Entscheidungen, Aufgaben, Zuständige in ein festes Schema extrahieren |
| Formatieren | Code → Markdown | Die strukturierten Daten als lesbares Protokoll rendern |
| Zustellen | E-Mail → respond | Protokoll senden, dem Aufrufer bestätigen |

## Das erzwungene Schema macht die Ausgabe verlässlich

Der spannende Node ist der Extraktions-Aufruf, und der Kniff ist, dass er keine Zusammenfassung in Prosa verlangt. Er legt die gewünschte Form vorab fest: eine Liste von Entscheidungen, eine Liste von Aufgaben je mit Zuständigem, zentrale Diskussionspunkte. Das Transkript geht als Freitext rein; strukturierte Protokolle kommen raus.

Es gibt zwei Wege, diese Form zu erzwingen, und meine beiden Kopien dieses Workflows nutzen je einen davon, was den Vergleich greifbar macht:

- **Tool-Use**, im JSON zum Herunterladen. Es definiert ein Tool namens `extract_meeting_data` mit einem JSON-Schema für diese Felder und weist Claude an, es aufzurufen. Die Antwort kommt als Argumente passend zum Schema, von der API geprüft, bevor Sie sie überhaupt sehen.
- **JSON-Modus**, auf meiner eigenen Instanz. Er fragt Kimi über das JSON-Antwortformat der API nach einem JSON-Objekt mit denselben Feldern. Sie bekommen gültiges JSON, aber die *Felder* sind ein Versprechen aus dem Prompt, kein von der API erzwungener Vertrag.

Tool-Use ist die stärkere Garantie und die erste Wahl, wenn etwas Nachgelagertes das Ergebnis parst. JSON-Modus läuft in der Demo, weil das ein Kimi-Aufruf statt eines zweiten Anbieters ist, und der Parse-Node behandelt die Form ohnehin. Zu wissen, welches von beidem man hat, ist der Punkt: das eine ist erzwungen, das andere ist höflich erbeten.

## Wo n8n aufhört und Code anfängt

n8n bewegt das Audio, ruft Whisper auf, ruft das Modell auf und verschickt die E-Mail. Die Code-Nodes übernehmen das Formen:

- **Validieren** zieht Titel, Teilnehmer und das Audio-Binary aus dem eingehenden Formular und weist die Anfrage ab, wenn das Audio fehlt.
- **Transkript extrahieren** behandelt, dass Whisper Klartext statt JSON zurückgibt.
- **Markdown formatieren** liest das strukturierte Ergebnis aus der Antwort und rendert Entscheidungen und Aufgaben in sauberes Markdown: Überschriften, Checklisten, Zuständige in Fett.

Dieser letzte Node ist der „wo Code anfängt"-Moment: ein strukturiertes API-Ergebnis in ein Dokument zu verwandeln, das ein Mensch lesen will, ist Logik, keine Einstellung. Es ist dieselbe Grenze, die ich in [meinem n8n-Automatisierungs-Stack](/blog/de/n8n-automation-stack/) beschreibe.

## Warum ich es selbst betreibe

Meeting-Audio ist ungefähr so sensibel, wie Unternehmensdaten werden. Transkription und Zusammenfassung durch einen Workflow auf Infrastruktur zu führen, die ich kontrolliere, hält die Aufnahme aus fremder SaaS heraus, außer für die Modellaufrufe, die ich wähle. Das ist der Fall hinter [dem selbst gehosteten Stack, den ich statt SaaS betreibe](/blog/de/self-hosted-stack/). So etwas für die Meetings Ihres Teams, gebaut und übergeben? Das mache ich bei [Leinss Consulting](https://leinss-consulting.de/de/).
