---
title: "TobiBoard vs. Gboard: Ein Tastatur-Vergleich mit Fokus auf Datenschutz"
description: "Wie sich TobiBoard, eine quelloffene On-Device-Android-Tastatur, bei Datenschutz, Datensammlung, KI-Funktionen und Kontrolle gegen Gboard schlägt."
date: "Jul 4 2026"
tags: ["tobiboard", "gboard", "android", "datenschutz", "tastatur"]
lang: "de"
---

> **Kurz gesagt:** Gboard ist ausgefeilt und tief in Googles Ökosystem verwoben; TobiBoard ist quelloffen, hält deine Eingaben auf dem Gerät und sendet niemandem Telemetrie. Beide tippen offline. Der echte Unterschied ist Kontrolle: Gboard ist Closed-Source-Software eines Werbekonzerns, während TobiBoard kein Konto, kein Backend hat und KI nur dann ergänzt, wenn du dich mit deinem eigenen API-Schlüssel dafür entscheidest. Genau dafür habe ich TobiBoard gebaut.

Ich pflege [TobiBoard](/projects/TobiBoard/) selbst, bin also nicht neutral, aber ich halte den Vergleich fair. Gboard ist eine wirklich gute Tastatur. Die Frage ist, was du dafür eintauschst.

## Direkt gegenübergestellt

| Kriterium | TobiBoard | Gboard |
|-----------|-----------|--------|
| Quelle | Offen (GPL-3.0, HeliBoard-Fork) | Geschlossen (Google) |
| Telemetrie | Keine, kein Backend | Sendet Nutzungsdaten an Google |
| Konto | Keins | Google-Ökosystem |
| Alltags-Tippen | On-Device, offline | On-Device + Google-Dienste |
| KI-Funktionen | Optional, eigener Schlüssel | Googles, standardmäßig an |
| Kosten | Kostenlos | Kostenlos |
| Bezugsquelle | GitHub, Obtainium, selbst gehostetes F-Droid | Play Store / vorinstalliert |
| Am besten für | Kontrolle und Datenschutz | Bequemlichkeit, Google-Integration |

## Was sie teilen

Beide Tastaturen erledigen die Alltagsarbeit (Tippen, Wischen, Autokorrektur, Vorschläge, mehrsprachige Wörterbücher) **auf deinem Gerät, offline**. Wenn du nur eine Tastatur willst, die ohne Verbindung funktioniert, kann das jede von beiden.

TobiBoard erbt das von [HeliBoard](https://github.com/Helium314/HeliBoard) (AOSP-/OpenBoard-Linie), von dem es abgeleitet ist. Das ist das Fundament; die Unterschiede sitzen obendrauf.

## Wo sie sich unterscheiden

**Quelle und Telemetrie.** Gboard ist Closed Source und stammt von Google. Es sendet Nutzungsdaten zurück, um Modelle und Dienste zu verbessern. TobiBoard ist GPL-3.0, hat überhaupt kein Backend und sammelt nichts: es gibt keinen Server, an den deine Daten gehen könnten.

**KI, und wer den Schlüssel hält.** Gboards smarte Funktionen laufen über Google. TobiBoard liefert **zwei optionale KI-Helfer, die standardmäßig aus sind**:

- **Voice-to-Text**: Return lang drücken, aufs Mikro tippen, sprechen; deine Worte kommen als sauberer Text zurück.
- **Text Fix**: groben Text markieren, Fix drücken, eine saubere Version in derselben Sprache erhalten.

Beide laufen nur, wenn du deinen eigenen [OpenRouter](https://openrouter.ai/)- oder [PayPerQ](https://ppq.ai/)-Schlüssel hinterlegst, und OpenRouter-Routen sind standardmäßig ohne Datenspeicherung. Nichts erreicht die Cloud, bevor du dich dafür entscheidest, und selbst dann geht es an einen Anbieter, den *du* gewählt hast, nicht an mich und nicht an Google.

**Wie du es installierst.** Gboard kommt aus dem Play Store oder vorinstalliert. TobiBoard kommt am Store vorbei: Hol dir das [APK von GitHub Releases](https://github.com/leinss/TobiBoard/releases/latest), richte [Obtainium](https://github.com/ImranR98/Obtainium) auf das Repo für automatische Updates, oder füge das selbst gehostete F-Droid-Repo unter [leinss.xyz/TobiBoard/repo](https://leinss.xyz/TobiBoard/repo) hinzu.

## Was solltest du wählen?

- **Bei Gboard bleiben**, wenn du dich in Googles Ökosystem wohlfühlst und die ausgefeilteste, funktionsreichste Tastatur ohne Einrichtung willst.
- **Zu TobiBoard wechseln**, wenn deine Eingaben dir gehören sollen: quelloffen, keine Telemetrie, kein Konto und KI, die nur auf deinem eigenen Schlüssel läuft, wenn du sie anforderst.

TobiBoard ist Open Source: lies den Code, bau es selbst oder meld ein Issue: [github.com/leinss/TobiBoard](https://github.com/leinss/TobiBoard). Wenn Datenschutz auf deinen eigenen Geräten das Thema ist, gefällt dir vielleicht auch [TobiVoice](/projects/TobiVoice/) für On-Device-Voice-to-Text auf dem Mac.
