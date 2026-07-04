---
title: "Wie ich Rechnungsdaten mit Claude Vision und n8n extrahiere"
description: "Ein technischer Teardown des Rechnungsleser-Workflows: Claude Sonnet 4 Vision, ein Formular-Trigger und ein Code-Node, der aus einer gescannten Rechnung strukturiertes JSON macht."
date: "Jul 4 2026"
tags: ["n8n", "claude", "ai", "automation", "teardown", "own-your-stack"]
lang: "de"
---

> **Kurz gesagt:** Der Rechnungsleser sind drei n8n-Nodes: ein Formular für den Upload, ein HTTP-Aufruf an die Vision-API von Claude Sonnet 4 mit dem Rechnungsbild und ein Code-Node, der die Antwort des Modells in sauberes JSON parst. Vision übernimmt das Lesen; der Code-Node den Teil, den ein No-Code-Tool nicht kann — die Markdown-Zäune des Modells entfernen und das Ergebnis sicher parsen. Das ist der Teardown der [Live-Rechnungs-Demo](https://leinss-consulting.de/de/blog/rechnungsverarbeitung-automatisieren/).

Die [Rechnungs-Demo auf meiner Beratungsseite](https://leinss-consulting.de/de/blog/rechnungsverarbeitung-automatisieren/) liest eine echte Rechnung und gibt strukturierte Felder zurück. Man vermutet einen Berg OCR-Regeln dahinter. Den gibt es nicht. Hier ist das Ganze, und Sie können [das genaue Workflow-JSON herunterladen](https://leinss-consulting.de/workflows/n8n-invoice-cloud.json) und selbst laufen lassen.

## Die ganze Pipeline sind drei Nodes

| # | Node | Was er tut |
| --- | --- | --- |
| 1 | Formular-Trigger | Nimmt die hochgeladene Rechnung (Bild oder PDF-Seite) |
| 2 | HTTP → Claude Vision | Schickt das Bild an Claude Sonnet 4, fragt strukturierte Felder ab |
| 3 | Code → JSON parsen | Bereinigt und parst die Antwort des Modells in ein Objekt |

Das ist alles. Keine OCR-Engine, kein Template pro Lieferant, kein Regex-Zoo. Ein Vision-Modell liest das Dokument so, wie ein Mensch es täte, also schrumpft der Workflow, der früher Dutzende Parsing-Regeln brauchte, auf einen API-Aufruf und etwas Klebstoff.

## Der Vision-Aufruf

Der eine echte Schritt ist ein HTTP-Request an die Messages-API von Claude, Modell auf Sonnet 4 gesetzt, die Rechnung inline als Base64-Bild übergeben. Der Prompt fragt die Felder ab, die mich interessieren — Nummer, Datum, Positionen, Summen, Steuer — als JSON. Weil das Modell Pixel liest, ist es ihm egal, ob das Layout ein sauberer PDF-Export oder ein Handyfoto einer zerknitterten Papierrechnung ist.

## Wo n8n aufhört und Code anfängt

Die Oberfläche kann den HTTP-Request auslösen. Was sie nicht sauber kann, ist mit dem umzugehen, was zurückkommt. Sprachmodelle verpacken JSON gern in einen ```` ```json ````-Zaun und hängen gelegentlich einen Kommentarsatz an. Der dritte Node sind also ein paar Zeilen JavaScript, die:

1. `content[0].text` aus der API-Antwort ziehen
2. die Markdown-Zäune per Regex entfernen
3. den äußersten `{ ... }`-Block extrahieren und `JSON.parse` ausführen

Nichts davon ist schwer, aber alles zusammen ist der Unterschied zwischen einer Demo und etwas, dem Sie im Produktivbetrieb trauen können. Genau hier hört ein No-Code-Tool auf zu genügen, und ein paar Zeilen echter Code übernehmen. Das ist das Thema von [wo n8n endet und Code beginnt](/blog/de/n8n-automation-stack/), und es taucht in jedem Workflow auf, den ich ausliefere.

## Warum es so gebaut ist

Drei Nodes heißt fast nichts zu warten. Taucht ein neues Rechnungslayout auf, gibt es kein Template hinzuzufügen — das Vision-Modell kann es bereits. Der einzige Code ist der Parse-Schritt, und er ist stabil, weil die Ausgabeform des Modells stabil ist. Einfach ist hier auch belastbar.

Das läuft auf meinem eigenen n8n, Teil [des selbst gehosteten Stacks, den ich statt SaaS betreibe](/blog/de/self-hosted-stack/). Wenn Sie einen solchen Leser für Ihre Dokumenttypen gebaut und an Ihr Team übergeben haben wollen, mache ich das bei [Leinss Consulting](https://leinss-consulting.de/de/).
