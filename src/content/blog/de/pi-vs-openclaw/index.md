---
title: "Pi vs OpenClaw: der minimale Agent und der Assistent drumherum"
description: "Wie Pi und OpenClaw zusammenhängen — Pi ist der minimale, umformbare Agenten-Harness; OpenClaw ist das selbst gehostete Assistenz-Gateway, das darauf aufbaut — und wann man zu welchem greift."
date: "Jul 4 2026"
tags: ["pi", "openclaw", "ai-agents", "self-hosting", "own-your-stack"]
lang: "de"
---

> **Kurz gesagt:** Pi und OpenClaw sind keine Konkurrenten — Pi ist der Motor, OpenClaw das Auto. Pi ist ein minimaler, erweiterbarer Agenten-Harness, den Sie im Terminal betreiben und um Ihren eigenen Arbeitsablauf formen. OpenClaw ist ein selbst gehosteter persönlicher Assistent, der einen Agenten auf die Chat-Kanäle setzt, die Sie ohnehin nutzen, und er betreibt Pi unter der Haube. Greifen Sie zu Pi, wenn Sie einen Coding- oder Automatisierungs-Agenten wollen, den Sie durchgängig kontrollieren; zu OpenClaw, wenn Sie einen selbst gehosteten Assistenten auf WhatsApp oder Telegram wollen.

Man fragt, ob man Pi *oder* OpenClaw nutzen soll, als wäre es eine Wahl zwischen Rivalen. Ist es nicht. Der eine baut auf dem anderen. So hängen sie wirklich zusammen, aus dem Betrieb beider.

## Gegenübergestellt

| Kriterium | Pi | OpenClaw |
| --- | --- | --- |
| Was es ist | Minimaler Agenten-Harness | Assistenz-Gateway |
| Oberfläche | Terminal (TUI) | Chat-Kanäle (WhatsApp, Telegram, mehr) |
| Baut auf | Eigener Agenten-Schleife | Pi, unter der Haube |
| Erweiterbarkeit | Pakete und eigene Werkzeuge | Die Kanäle und Skills um den Agenten |
| Am besten für | Coding, Automatisierung, eigene Agenten | Ein Alltags-Assistent, selbst gehostet |
| Wer es betreibt | Entwickler, die die Schleife formen wollen | Alle, die einen eigenen Assistenten wollen |
| Gemeinsam | Open Source, selbst hostbar, eigenes Modell | Dasselbe |

## Was Pi ist

[Pi](https://github.com/earendil-works/pi) ist ein minimaler Agenten-Harness — ein kleines Programm, das die Agenten-Schleife lokal fährt: Anfrage lesen, Werkzeug aufrufen, Ergebnis zurückspeisen, wiederholen. Seine Hauptoberfläche ist ein Terminal, und der ganze Sinn ist, dass es *umformbar* ist: Sie erweitern es mit Paketen und eigenen Werkzeugen und biegen es um Ihre tatsächliche Arbeitsweise. Es ist das „ohne Ballast"-Ende des Coding-Agenten-Spektrums — Sie bekommen die Schleife und die Kontrolle, kein ummauertes Produkt.

## Was OpenClaw ist

[OpenClaw](https://openclaw.ai/) ist ein selbst gehosteter persönlicher Assistent, der Sie auf den Kanälen trifft, die Sie ohnehin nutzen — schreiben Sie ihm auf WhatsApp oder Telegram, und er handelt in Ihrem Namen. Unter der Haube ist der Agent, der die Arbeit tut, Pi. OpenClaw legt das Gateway, die Kanäle und das Immer-da-Assistenz-Framing obendrauf. Es ging binnen einer Woche von null zu einem der meistgesternten Projekte auf GitHub, was zeigt, wie groß der Appetit auf einen Assistenten ist, den man selbst betreibt, statt ihn zu mieten.

## Wann man zu welchem greift

- **Nehmen Sie Pi**, wenn Sie einen Agenten wollen, den Sie vom Terminal für Coding, Skripting oder eigene Automatisierung steuern, und Schleife und Werkzeuge selbst formen möchten.
- **Nehmen Sie OpenClaw**, wenn Sie einen selbst gehosteten Assistenten für Alltagsaufgaben wollen, erreichbar per Chat, ohne das Gateway selbst zu bauen.
- **Nehmen Sie beide**, wie ich: Pi als Agenten, den ich für echte Arbeit umforme, OpenClaw, wenn ich diese Fähigkeit auf einem Chat-Kanal will, auf eigener Infrastruktur.

Der Grund, warum sich eines von beidem gegenüber einem gemieteten Assistenten lohnt, ist derselbe: Sie besitzen den Harness, die Schlüssel und die Daten. Das ist der Fall in [Besitzen Sie den Agenten, nicht nur das Modell](/blog/de/own-your-ai-agent/), und die praktische Seite steht in [wie ich einen selbst gehosteten Recherche-Agenten nutze](/blog/de/self-hosted-research-agent/). Es ist die Agenten-Variante [des selbst gehosteten Stacks, den ich statt SaaS betreibe](/blog/de/self-hosted-stack/).
