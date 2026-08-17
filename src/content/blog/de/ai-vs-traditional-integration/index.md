---
title: "Wo ein Modell einen Parser schlägt, und wo nicht"
description: "Unordentliche Dokumente zu lesen hieß früher: ein Template pro Format. Ein Vision- oder Sprachmodell nimmt diese Arbeit weg, kostet aber Geld, Latenz und eine Ausgabe, die Sie prüfen müssen. Wo welcher Ansatz hingehört."
date: "Dec 20 2024"
tags: ["ai", "automatisierung", "integration", "vergleich"]
lang: "de"
---

> **Kurz gesagt:** Setzen Sie ein Modell dort ein, wo die Eingabe unordentlich und von Menschen gemacht ist (Rechnungen, E-Mails, historisch gewachsene Tabellen), denn dort kostet ein Parser mit Template pro Format am meisten und bricht am häufigsten. Behalten Sie gewöhnlichen Code, wo die Eingabe die Ausgabe eines Systems mit Schema ist. Jeder Modellaufruf bringt Latenz, einen Preis pro Aufruf und eine Antwort, die Sie prüfen müssen, bevor Sie ihr trauen. Er muss sich also lohnen.

Klassische Integrationsarbeit heißt, Felder zwischen Systemen abzubilden: diese Spalte wird jenes Feld, in diesem Format, mit diesen Regeln. Wenn beide Enden Systeme mit Schema sind, ist das der richtige Ansatz, und nichts hier spricht dagegen. Er ist deterministisch, er ist billig, und wenn er bricht, bricht er laut.

Teuer wird es bei der Eingabe, die nie ein Schema hatte.

## Die Falle „ein Template pro Format"

Nehmen Sie Rechnungen. Jeder Lieferant legt sie anders an, also heißt klassische Dokumentenverarbeitung: OCR plus ein Template pro Lieferant, mit Koordinaten, Ankertexten und Regeln dafür, wo die Summe steht. Jeder neue Lieferant ist ein neues Template, jedes Redesign bricht ein bestehendes, und die Arbeit hört nie auf, weil Ihre Lieferanten ihre Layouts nicht mit Ihnen abstimmen.

Ein Vision-Modell liest die Seite, statt Positionen auf ihr abzugleichen. In [dem Rechnungsleser, den ich betreibe](/blog/de/invoice-extractor-technical/), schrumpft diese ganze Schicht auf einen API-Aufruf und einen Parse-Schritt: keine Templates, und ein neuer Lieferant ist kein Ereignis mehr. Dieselbe Verschiebung gilt für eingehende E-Mails, Supportnachrichten und [Tabellen, die niemand entworfen hat](/blog/de/spreadsheet-cleaning-technical/).

## Was es Sie kostet

Der Tausch ist real und schnell erzählt:

- **Geld pro Durchlauf.** Ein Parser kostet CPU. Ein Modell kostet pro Aufruf, dauerhaft. Bei hohem Volumen ändert das die Rechnung.
- **Latenz.** Hunderte Millisekunden bis Sekunden pro Aufruf statt Mikrosekunden.
- **Nichtdeterminismus.** Dieselbe Eingabe kann eine anders geformte Antwort erzeugen. Deshalb hat jeder meiner Workflows einen Code-Node, der die Antwort prüft und parst, statt ihr zu trauen.
- **Kein Prüfpfad von allein.** „Das Modell hat entschieden" ist keine Erklärung. Wenn Sie zeigen müssen, warum ein Wert extrahiert wurde, müssen Sie das selbst bauen.

Was Sie damit *nicht* bekommen: ein System, das sich selbst repariert. Ein Modell lernt zwischen Aufrufen nicht aus Ihren Korrekturen, und es bemerkt nicht, dass eine vorgelagerte API sich geändert hat. Das bleibt bei Ihnen.

## Wo was hingehört

- **Gewöhnlicher Code** für Daten von System zu System mit Schema, für alles, was prüfbar oder exakt reproduzierbar sein muss, und für Pfade mit hohem Volumen, wo der Preis pro Aufruf zählt.
- **Ein Modell** für das Lesen menschengemachter Dokumente und freien Textes, für Klassifikation, die Bedeutung verstehen statt Stichwörter treffen muss, und für den langen Schwanz an Formaten, für die Sie sonst ein Template schreiben würden.
- **Beides**, meistens: ein Modell am Rand, um Unordnung in Struktur zu wandeln, gewöhnlicher Code in der Mitte, um zu entscheiden und festzuhalten, was als Nächstes passiert. Das ist dieselbe Naht, die ich in [wo n8n aufhört und Code anfängt](/blog/de/where-n8n-stops-and-code-starts/) beschreibe.

## Wenn Sie es an einem Ablauf ausprobieren wollen

Nehmen Sie die Integration, die am häufigsten bricht, und prüfen Sie, ob sie bricht, weil die Eingabe menschengemacht ist. Wenn ja, setzen Sie ein Modell davor, das strukturierte Ausgaben liefert, behalten Sie Ihre bestehende Logik dahinter und vergleichen Sie die Fehlerraten einen Monat lang. Wenn sie aus einem anderen Grund bricht, hilft ein Modell nicht, und Sie haben sich die Rechnung gespart.
