---
title: "Wie ich einen selbst gehosteten Recherche-Agenten im Alltag nutze"
description: "Der praktische Aufbau: ein Agenten-Harness auf der eigenen Maschine für Recherche und Entwürfe, auf Cloud- oder lokale Modelle gerichtet, während Schlüssel und Transkripte bei mir bleiben."
date: "Jul 4 2026"
tags: ["ai-agents", "pi", "research", "self-hosting", "own-your-stack"]
lang: "de"
---

> **Kurz gesagt:** Mein Recherche-Agent ist ein selbst gehosteter Harness auf meiner eigenen Maschine, vom Terminal gesteuert, auf das Modell gerichtet, das zur Aufgabe passt: ein Cloud-Modell für schweres Denken, ein lokales über LM Studio für alles Sensible. Er liest Quellen, extrahiert und fasst zusammen und entwirft, während Prompts, Transkripte und Dateien bei mir bleiben. Es ist eine Arbeitsgewohnheit, kein Zauber: der Wert liegt darin, dass er immer da ist, so geformt, wie ich arbeite, und nichts den Rechner verlässt, außer ich schicke es.

Dem [Besitze-den-Agenten-Argument](/blog/de/own-your-ai-agent/) nickt man leicht zu, aber es ist schwerer, es sich im Alltag vorzustellen. Also hier die konkrete Fassung: wie ein selbst gehosteter Agent tatsächlich in meine Woche passt, und was er speziell für Recherche tut.

## Der Aufbau, in einfachen Worten

Ich betreibe einen Agenten-Harness lokal ([Pi](https://github.com/earendil-works/pi) ist der, den ich am meisten umforme) vom Terminal gesteuert. Zwei bewusste Entscheidungen machen ihn zu meinem:

- **Eigenes Modell.** Der Harness richtet sich auf das Modell, das zur Aufgabe passt. Schweres Denken bekommt ein starkes Cloud-Modell; alles mit sensiblem Inhalt läuft gegen ein lokales Modell über [LM Studio](https://lmstudio.ai/), sodass der Text meine Maschine nie verlässt.
- **Meine Werkzeuge, meine Regeln.** Ich gebe dem Agenten genau die Werkzeuge, die er haben soll (diese Dateien lesen, im Web suchen, dieses Skript ausführen) und nichts sonst. Die Berechtigungen setze ich, nicht ein Produkt.

Das ist der ganze Trick. Kein Dashboard, kein Konto, kein Verlauf auf fremdem Server.

## Was er für Recherche tut

Recherche ist, wo ein Agent sich verdient macht, weil das meiste davon Sammeln-dann-Verdichten ist:

- **Durchgehen und zusammenfassen.** Auf eine Reihe von Quellen richten und einen verdichteten, belegten Auszug zurückbekommen, statt zwanzig offener Tabs.
- **Aus Dokumenten extrahieren.** Die konkreten Fakten, Zahlen oder Klauseln, die ich brauche, aus langen PDFs und Berichten ziehen, in eine Struktur, die ich nutzen kann.
- **Gegen meine Notizen entwerfen.** Aus einem Haufen roher Notizen einen ersten Entwurf machen, den ich dann bearbeite, in meiner eigenen Stimme, gegründet auf dem, was ich tatsächlich geschrieben habe.
- **Einen Korpus befragen.** Fragen über einen Ordner voller Dokumente stellen und Antworten mit angehängten Quellen bekommen.

Nichts davon ist einem selbst gehosteten Agenten vorbehalten. Was *besonders* ist: die Quellen, die Fragen und die Ergebnisse werden nie zu fremden Trainingsdaten oder fremder Analyse.

## Warum ausgerechnet selbst gehostet

Zwei Gründe, beide praktisch:

1. **Sensibles Material bleibt liegen.** Mandantendokumente, Strategie-Entwürfe, alles unter NDA: das geht an ein lokales Modell auf meiner eigenen Maschine, nicht an ein Drittprodukt. Der [Own-your-Stack-Fall](/blog/de/self-hosted-stack/) ist genau hier am stärksten.
2. **Er ist auf mich geformt.** Weil ich den Harness besitze, verhält sich der Agent nach Monaten kleiner Anpassungen so, wie ich will. Ein gemietetes Produkt fällt auf seine Standards zurück; meiner sammelt meine Vorlieben.

## Der ehrliche Teil

Das ist eine Gewohnheit, kein Zauberknopf. Es lohnt sich einzurichten, wenn Sie genug recherchieren oder entwerfen, dass ein immer-da, eigener Agent den Aufwand seines Betriebs zurückzahlt. Wenn Sie zweimal im Monat einen Chatbot etwas fragen, lassen Sie es, ein gemieteter Tab reicht.

Wollen Sie das ganze Bild, deckt [Pi vs OpenClaw](/blog/de/pi-vs-openclaw/) den Terminal-Agenten gegenüber dem Chat-Kanal-Assistenten ab. Und wenn Sie einen eigenen Agenten oder eigene Automatisierung für Ihr Unternehmen gebaut und übergeben haben wollen, mache ich das bei [Leinss Consulting](https://consulting.leinss.xyz/de/).
