---
title: "Wie ich einen RAG-FAQ-Assistenten mit n8n und Kimi gebaut habe"
description: "Ein technischer Teardown des FAQ-Assistenten: Embeddings, Vektorsuche über eine Postgres-Wissensbasis und eine belegte Antwort, das RAG-Muster in n8n."
date: "Jul 4 2026"
tags: ["n8n", "rag", "kimi", "ai", "teardown", "own-your-stack"]
lang: "de"
---

> **Kurz gesagt:** Der FAQ-Assistent ist Retrieval-Augmented Generation in zehn n8n-Nodes: die Frage einbetten, in einer Postgres-Wissensbasis die nächstliegenden Passagen suchen, diese Kimi K2 als Kontext geben und eine belegte Antwort zurückgeben. Der Retrieval-Schritt hält das Modell davon ab, etwas zu erfinden. Es kann nur aus dem antworten, was die Suche liefert. Das ist der Teardown der [Live-FAQ-Demo](https://leinss-consulting.de/de/blog/faq-assistent-ki-support/).

Ein Chatbot, der Antworten erfindet, ist schlimmer als kein Chatbot. Der [FAQ-Assistent auf meiner Beratungsseite](https://leinss-consulting.de/de/blog/faq-assistent-ki-support/) antwortet nur aus einer Wissensbasis, die ich kontrolliere, und verweigert, wenn die Antwort nicht drinsteht. Dieses Verhalten ist Retrieval-Augmented Generation (RAG), und so ist es verdrahtet. Sie können [das Workflow-JSON herunterladen](https://leinss-consulting.de/workflows/faq-assistent.json) und jeden Node prüfen.

## Die RAG-Pipeline

| Stufe | Node(s) | Was passiert |
| --- | --- | --- |
| Eingang | Webhook → validieren → if | Frage annehmen, leere Eingabe abweisen |
| Einbetten | HTTP → Embeddings | Die Frage in einen Vektor wandeln (Moonshot-Embeddings) |
| Abrufen | HTTP → Vektorsuche | Die 5 nächsten Passagen im Postgres-Speicher finden |
| Erden | Code → Anfrage aufbauen | Diese Passagen als Kontext in den Prompt setzen |
| Erzeugen | HTTP → Kimi K2 | *Nur* aus dem gelieferten Kontext antworten |
| Zurückgeben | Code → formatieren → respond | Die Antwort bereinigen und zurücksenden |

## Retrieval ist der ganze Trick

Der Erzeugungsschritt ist gewöhnlich. Der Teil, der ihn vertrauenswürdig macht, ist das Retrieval. Die Frage wird in einen Vektor eingebettet, und dieser Vektor wird per Ähnlichkeitssuche mit der eingebetteten Wissensbasis verglichen: ich frage die Top 5 Treffer über einem Schwellwert von 0,5 ab. Nur diese Passagen gehen in den Prompt. Klärt nichts den Schwellwert, hat das Modell nichts, woraus es antworten könnte, und sagt das, statt zu raten.

Die Wissensbasis selbst wird von einem separaten Ingestion-Workflow gefüllt, der die Quelldokumente in Stücke teilt, jedes Stück einbettet und speichert. Ingestion getrennt zu halten heißt, ich kann Inhalte neu indizieren, ohne den Live-Antwortpfad anzufassen.

## Wo n8n aufhört und Code anfängt

n8n übernimmt Webhook, HTTP-Aufrufe und Verzweigung. Das Urteilsvermögen steckt in den Code-Nodes:

- **Validieren** weist leere oder fehlerhafte Fragen ab, bevor ein kostenpflichtiger API-Aufruf feuert.
- **Anfrage aufbauen** ist der wichtige: Er nimmt die rohen Suchergebnisse, kürzt sie auf das, was passt, und konstruiert den kontextbelegten Prompt mit klarer Anweisung, nur aus den gelieferten Passagen zu antworten.
- **Formatieren** parst die Antwort des Modells, behandelt den Fall der leeren Antwort und formt das JSON, das der Webhook zurückgibt.

Dieser mittlere Node ist der Ort, an dem Retrieval zur *Antwort* wird. „Setze diese fünf Passagen zu einem belegten Prompt zusammen und nichts weiter" lässt sich nicht in einem Dropdown ausdrücken. Das sind ein paar Zeilen echter Code, genau [wo n8n aufhört und Code übernimmt](/blog/de/n8n-automation-stack/).

## Warum Selbst-Hosting hier zählt

Die Wissensbasis sind Unternehmensdaten, und die Fragen der Nutzer sind oft sensibel. Speicher und Workflow auf Infrastruktur zu betreiben, die ich kontrolliere, heißt, keins von beiden verlässt meinen Server außer für den Modellaufruf selbst. Das ist der Sinn [des selbst gehosteten Stacks, den ich statt SaaS betreibe](/blog/de/self-hosted-stack/). Wenn Sie einen belegten Assistenten über Ihren eigenen Dokumenten wollen, gebaut und übergeben, mache ich das bei [Leinss Consulting](https://leinss-consulting.de/de/).
