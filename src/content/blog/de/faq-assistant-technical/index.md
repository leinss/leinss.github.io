---
title: "Wie ich einen RAG-FAQ-Assistenten mit n8n und Kimi gebaut habe"
description: "Ein technischer Teardown des FAQ-Assistenten: Suche über eine Postgres-Wissensbasis und eine belegte Antwort, das RAG-Muster in n8n."
date: "Jul 4 2026"
tags: ["n8n", "rag", "kimi", "ai", "teardown", "own-your-stack"]
lang: "de"
---

> **Kurz gesagt:** Der FAQ-Assistent ist Retrieval-Augmented Generation in zehn n8n-Nodes: in einer Postgres-Wissensbasis die am besten passenden Passagen zur Frage suchen, diese Kimi K2 als Kontext geben und eine belegte Antwort zurückgeben. Der Retrieval-Schritt hält das Modell davon ab, etwas zu erfinden. Es kann nur aus dem antworten, was die Suche liefert. Das ist der Teardown der [Live-FAQ-Demo](https://leinss-consulting.de/de/blog/faq-assistent-ki-support/).

Ein Chatbot, der Antworten erfindet, ist schlimmer als kein Chatbot. Der [FAQ-Assistent auf meiner Beratungsseite](https://leinss-consulting.de/de/blog/faq-assistent-ki-support/) antwortet nur aus einer Wissensbasis, die ich kontrolliere, und verweigert, wenn die Antwort nicht drinsteht. Dieses Verhalten ist Retrieval-Augmented Generation (RAG), und so ist es verdrahtet. Sie können [das Workflow-JSON herunterladen](https://leinss-consulting.de/workflows/faq-assistent.json) und jeden Node prüfen.

## Die RAG-Pipeline

| Stufe | Node(s) | Was passiert |
| --- | --- | --- |
| Eingang | Webhook → validieren → if | Frage annehmen, leere Eingabe abweisen |
| Abrufen | HTTP → Wissensbasis-Suche | Postgres nach den 5 passendsten Passagen fragen |
| Erden | Code → Anfrage aufbauen | Diese Passagen als Kontext in den Prompt setzen |
| Erzeugen | HTTP → Kimi K2 | *Nur* aus dem gelieferten Kontext antworten |
| Zurückgeben | Code → formatieren → respond | Die Antwort bereinigen und zurücksenden |

## Retrieval ist der ganze Trick

Der Erzeugungsschritt ist gewöhnlich. Der Teil, der ihn vertrauenswürdig macht, ist das Retrieval: In den Prompt gehen die fünf besten Passagen der Suche und sonst nichts, das Modell kann also nur aus der Wissensbasis antworten.

**Wie diese Suche arbeitet, ist eine Entscheidung, und ich habe sie zweimal getroffen.** Das Workflow-JSON zum Herunterladen macht das Lehrbuchding: Ein Aufruf einer Embeddings-API wandelt die Frage in einen Vektor, und eine Ähnlichkeitssuche liefert die nächstliegenden Passagen über einem Schwellwert von 0,5. Die Instanz hinter der Live-Demo überspringt den Embedding-Aufruf ganz und nutzt Postgres-Volltextsuche über denselben deutschsprachigen Bestand, erreichbar über einen kleinen PostgREST-Endpunkt. Das ist ein HTTP-Aufruf statt zwei, keine Embedding-Kosten pro Frage, und bei einer Wissensbasis dieser Größe sind die gelieferten Passagen genauso gut.

Beides ist Retrieval-Augmented Generation. Die Retrieval-Hälfte ist austauschbar, und das ist das Nützliche daran: Das Belegen hängt nicht an Vektoren, es hängt daran, dass das Modell nur sieht, was die Suche geliefert hat.

Die Wissensbasis selbst wird von einem separaten Ingestion-Workflow gefüllt, der die Quelldokumente in Stücke teilt und speichert. Ingestion getrennt zu halten heißt, ich kann Inhalte neu indizieren, ohne den Live-Antwortpfad anzufassen.

## Der Fall ohne Treffer ist der wichtige

Der interessante Fehlerfall ist eine Frage, die der Bestand nicht beantworten kann. Die Suche liefert eine leere Liste, und n8n behandelt eine leere Liste standardmäßig als null Einträge. Damit bricht der Rest der Kette ab und der Aufrufer bekommt einen leeren Body: keine Antwort und kein Fehler, also das Schlechteste aus beidem.

Die Abhilfe sind eine Einstellung und eine Verzweigung. Der Suchknoten gibt immer Daten aus, also läuft der nächste Node mit null Treffern, baut den Prompt ohne Kontext und erzeugt eine ordentliche Antwort im Sinne von „das habe ich nicht, hier erreichen Sie einen Menschen". Derselbe Node läuft auch bei einem Fehler weiter, sodass ein Besucher diese Antwort selbst dann bekommt, wenn die Suche gerade nicht erreichbar ist.

## Wo n8n aufhört und Code anfängt

n8n übernimmt Webhook, HTTP-Aufrufe und Verzweigung. Das Urteilsvermögen steckt in den Code-Nodes:

- **Validieren** weist leere oder fehlerhafte Fragen ab, bevor ein kostenpflichtiger API-Aufruf feuert.
- **Anfrage aufbauen** ist der wichtige: Er nimmt die rohen Suchergebnisse, kürzt sie auf das, was passt, und konstruiert den kontextbelegten Prompt mit klarer Anweisung, nur aus den gelieferten Passagen zu antworten.
- **Formatieren** parst die Antwort des Modells, behandelt den Fall der leeren Antwort und formt das JSON, das der Webhook zurückgibt.

Dieser mittlere Node ist der Ort, an dem Retrieval zur *Antwort* wird. „Setze diese fünf Passagen zu einem belegten Prompt zusammen und nichts weiter" lässt sich nicht in einem Dropdown ausdrücken. Das sind ein paar Zeilen echter Code, genau [wo n8n aufhört und Code übernimmt](/blog/de/where-n8n-stops-and-code-starts/).

## Warum Selbst-Hosting hier zählt

Die Wissensbasis sind Unternehmensdaten, und die Fragen der Nutzer sind oft sensibel. Speicher und Workflow auf Infrastruktur zu betreiben, die ich kontrolliere, heißt, keins von beiden verlässt meinen Server außer für den Modellaufruf selbst. Das ist der Sinn [des selbst gehosteten Stacks, den ich statt SaaS betreibe](/blog/de/self-hosted-stack/). Wenn Sie einen belegten Assistenten über Ihren eigenen Dokumenten wollen, gebaut und übergeben, mache ich das bei [Leinss Consulting](https://leinss-consulting.de/de/).
