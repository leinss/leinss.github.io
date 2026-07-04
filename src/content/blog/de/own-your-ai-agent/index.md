---
title: "Besitzen Sie den Agenten, nicht nur das Modell"
description: "Eine Modell-API zu mieten ist in Ordnung. Den Agenten zu mieten — die Schleife, die entscheidet, sich erinnert und handelt — ist der Punkt, an dem Sie Kontrolle abgeben. Warum ich offene, selbst hostbare Agenten-Harnesses wie Pi und OpenClaw betreibe."
date: "Jul 4 2026"
tags: ["ai-agents", "pi", "openclaw", "self-hosting", "own-your-stack"]
lang: "de"
---

> **Kurz gesagt:** Das Modell ist der Teil, den man leicht tauscht; der Agent ist der Teil, der zählt. Der Agenten-Harness ist die Schleife, die entscheidet, was zu tun ist, sich merkt, was passiert ist, und in Ihrem Namen Werkzeuge aufruft. Mieten Sie das von einem geschlossenen Produkt, kontrollieren Sie weder Ihre Prompts noch Ihren Verlauf, Ihre Werkzeuge oder welches Modell läuft. Ich betreibe stattdessen offene, selbst hostbare Harnesses — Pi als minimalen Kern, OpenClaw als Assistenten drumherum — sodass der Agent meiner ist, ihn umzuformen, und die Daten bei mir bleiben.

Alle reden darüber, welches Modell das beste ist. Weniger fällt auf, dass das Modell der eine Teil ist, den Sie schon mit einer Konfigurationsänderung austauschen können. Was Ihr Erlebnis wirklich formt — und still Ihre Daten besitzt — ist die Schicht um das Modell: der **Agenten-Harness**. Den zu besitzen lohnt sich, und es ist dasselbe Argument, das ich über [den Rest meines Stacks](/blog/de/self-hosted-stack/) mache.

## Modell vs Agent: was eigentlich was ist

Das **Modell** ist das LLM hinter einer API — Claude, ein Kimi, ein lokales Modell. Es ist zustandslos; Sie schicken Text, es schickt Text zurück.

Der **Agent** ist alles, was daraus etwas Nützliches macht: die Schleife, die Ihre Anfrage liest, entscheidet, welches Werkzeug aufzurufen ist, es ausführt, das Ergebnis zurückspeist, sich an das Gespräch erinnert und weitermacht, bis die Aufgabe erledigt ist. Diese Schleife ist der Harness. Sie hält Ihre Prompts, Ihren Verlauf, Ihre Werkzeug-Berechtigungen und die Wahl, welches Modell aufgerufen wird.

Wenn Sie ein geschlossenes KI-Assistenzprodukt nutzen, mieten Sie den Harness. Das Modell darunter ist fast nebensächlich — Sie sehen die Schleife nicht, können die Werkzeuge nicht ändern, Ihren Verlauf nicht mitnehmen und es nicht auf ein anderes Modell richten, wenn ein besseres oder günstigeres auftaucht.

## Was das Besitzen des Harness bringt

Ich betreibe offene Harnesses aus genau den Gründen, aus denen ich den Rest des Stacks selbst hoste:

- **Die Schleife umformen.** [Pi](https://github.com/earendil-works/pi) ist ein minimaler, erweiterbarer Agenten-Harness — ein Terminal-Agent, den Sie mit eigenen Werkzeugen um Ihren Arbeitsablauf biegen. Wenn er sich anders verhalten soll, ändere ich ihn, statt einen Wunsch einzureichen.
- **Schlüssel und Daten besitzen.** Die Prompts, die Transkripte, die Dateien, die ein Agent anfasst — alles bleibt bei mir. Nichts läuft durch ein Produkt, das ich nicht kontrolliere.
- **Auf jedes Modell richten.** Bring-your-own-key heißt, ich wähle das Modell je Aufgabe, Cloud oder lokal. Für alles Sensible kann ich es gegen ein Modell auf meiner eigenen Maschine laufen lassen, über [LM Studio](https://lmstudio.ai/), sodass der Text den Rechner nie verlässt.
- **Kein Lock-in.** [OpenClaw](https://openclaw.ai/) setzt einen Agenten auf die Kanäle, die ich ohnehin nutze, selbst gehostet auf eigenen Geräten. Er baut unter der Haube auf Pi, ist quelloffen, und will ich raus, gehört mir das Ganze sowieso.

## Der ehrliche Vorbehalt

Den Agenten zu besitzen ist mehr Arbeit, als einen Chat-Tab zu öffnen. Sie betreiben ihn, updaten ihn, verdrahten seine Werkzeuge, halten seine Schlüssel. Wenn Sie nur ab und zu einem Chatbot eine Frage stellen wollen, ist ein gemietetes Produkt die richtige Wahl, und ich nutze die selbst, wo sie ihren Platz verdienen.

Aber ein Agent, der echte Arbeit tut — Ihre Dateien liest, Ihre Systeme anfasst, in Ihrem Namen handelt — ist genau die Art tragender Schicht, die zu besitzen sich lohnt, aus demselben Grund, aus dem Sie die Automatisierung besitzen würden, die er antreibt. Mieten Sie das Modell, wenn Sie mögen; besitzen Sie den Agenten.

## Weiterlesen

- [Pi vs OpenClaw](/blog/de/pi-vs-openclaw/) — der minimale Agenten-Kern und das Assistenz-Gateway drumherum, und wann man zu welchem greift.
- [Wie ich einen selbst gehosteten Recherche-Agenten im Alltag nutze](/blog/de/self-hosted-research-agent/) — der praktische Aufbau.

Eigene Automatisierung und eigene Agenten sind dieselbe Idee eine Schicht weiter. Wenn Sie eines von beidem für Ihr Unternehmen gebaut und übergeben haben wollen, mache ich das bei [Leinss Consulting](https://leinss-consulting.de/de/).
