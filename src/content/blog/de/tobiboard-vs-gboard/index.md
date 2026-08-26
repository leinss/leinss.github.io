---
title: "TobiBoard vs. Gboard: Ein Tastatur-Vergleich mit Fokus auf Datenschutz"
description: "Wie sich TobiBoard, eine quelloffene Android-Tastatur mit KI direkt auf dem Gerät, bei Datenschutz, Datensammlung, KI-Funktionen und Kontrolle gegen Gboard schlägt."
date: "Jul 4 2026"
tags: ["tobiboard", "gboard", "android", "datenschutz", "tastatur"]
lang: "de"
---

> **Kurz gesagt:** Gboard ist ausgefeilt und tief in Googles Ökosystem verwoben; TobiBoard ist quelloffen, hält deine Eingaben auf dem Gerät und sendet niemandem Telemetrie. Beide tippen offline. Der echte Unterschied ist Kontrolle: Gboard ist Closed-Source-Software eines Werbekonzerns, während TobiBoard kein Konto, kein Backend hat und sogar Spracherkennung und Textkorrektur auf deinem Telefon rechnet. Genau dafür habe ich TobiBoard gebaut.

Ich pflege [TobiBoard](/projects/TobiBoard/) selbst, bin also nicht neutral, aber ich halte den Vergleich fair. Gboard ist eine wirklich gute Tastatur. Die Frage ist, was du dafür eintauschst.

## Direkt gegenübergestellt

| Kriterium | TobiBoard | Gboard |
|-----------|-----------|--------|
| Quelle | Offen (GPL-3.0, HeliBoard-Fork) | Geschlossen (Google) |
| Telemetrie | Keine, kein Backend | Sendet Nutzungsdaten an Google |
| Konto | Keins | Google-Ökosystem |
| Alltags-Tippen | On-Device, offline | On-Device + Google-Dienste |
| KI-Funktionen | Standardmäßig auf dem Gerät, Cloud optional mit eigenem Schlüssel | Googles, in Googles Cloud |
| Kosten | Kostenlos | Kostenlos |
| Bezugsquelle | GitHub, Obtainium, selbst gehostetes F-Droid | Play Store / vorinstalliert |
| Am besten für | Kontrolle und Datenschutz | Bequemlichkeit, Google-Integration |

## Was sie teilen

Beide Tastaturen erledigen die Alltagsarbeit (Tippen, Wischen, Autokorrektur, Vorschläge, mehrsprachige Wörterbücher) **auf deinem Gerät, offline**. Wenn du nur eine Tastatur willst, die ohne Verbindung funktioniert, kann das jede von beiden.

TobiBoard erbt das von [HeliBoard](https://github.com/Helium314/HeliBoard) (AOSP-/OpenBoard-Linie), von dem es abgeleitet ist. Das ist das Fundament; die Unterschiede sitzen obendrauf.

## Wo sie sich unterscheiden

**Quelle und Telemetrie.** Gboard ist Closed Source und stammt von Google. Es sendet Nutzungsdaten zurück, um Modelle und Dienste zu verbessern. TobiBoard ist GPL-3.0, hat überhaupt kein Backend und sammelt nichts: es gibt keinen Server, an den deine Daten gehen könnten.

**KI, und wo sie rechnet.** Gboards smarte Funktionen laufen über Google. TobiBoard liefert **zwei KI-Helfer, die auf dem Telefon selbst rechnen**:

- **Voice-to-Text**: Return lang drücken, aufs Mikro tippen, sprechen; deine Worte kommen als Text zurück. Die Erkennung läuft lokal auf Parakeet TDT 0.6B über [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) und erkennt Deutsch, Englisch, Spanisch und Französisch automatisch.
- **Text Fix**: groben Text markieren, Fix drücken, eine saubere Version in derselben Sprache erhalten. Läuft lokal auf Qwen 2.5 über MediaPipe.

Kein Konto, kein API-Schlüssel, und Diktieren funktioniert im Flugmodus. Der Preis dafür gehört genannt: jedes Modell ist ein einmaliger Download von einigen hundert Megabyte, und ein Telefon ist langsamer als ein Rechenzentrum.

Wenn du lieber ein Cloud-Modell nutzt, ist genau das die bewusste Entscheidung: hinterlege deinen eigenen [OpenRouter](https://openrouter.ai/)- oder [PayPerQ](https://ppq.ai/)-Schlüssel, dann laufen die KI-Funktionen dort, bei OpenRouter standardmäßig ohne Datenspeicherung. So oder so geht es an einen Anbieter, den *du* gewählt hast, nicht an mich und nicht an Google.

**Wie du es installierst.** Gboard kommt aus dem Play Store oder vorinstalliert. TobiBoard kommt am Store vorbei: Hol dir das [APK von GitHub Releases](https://github.com/leinss/TobiBoard/releases/latest), richte [Obtainium](https://github.com/ImranR98/Obtainium) auf das Repo für automatische Updates, oder füge das selbst gehostete F-Droid-Repo unter [leinss.xyz/TobiBoard/repo](https://leinss.xyz/TobiBoard/repo) hinzu.

## Was solltest du wählen?

- **Bei Gboard bleiben**, wenn du dich in Googles Ökosystem wohlfühlst und die ausgefeilteste, funktionsreichste Tastatur ohne Einrichtung willst.
- **Zu TobiBoard wechseln**, wenn deine Eingaben dir gehören sollen: quelloffen, keine Telemetrie, kein Konto und KI, die auf deinem eigenen Telefon rechnet statt auf fremden Servern.

TobiBoard ist Open Source: lies den Code, bau es selbst oder meld ein Issue: [github.com/leinss/TobiBoard](https://github.com/leinss/TobiBoard). Wenn Datenschutz auf deinen eigenen Geräten das Thema ist, gefällt dir vielleicht auch [TobiVoice](/projects/TobiVoice/) für On-Device-Voice-to-Text auf dem Mac.
