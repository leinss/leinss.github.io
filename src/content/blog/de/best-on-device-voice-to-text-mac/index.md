---
title: "On-Device-Voice-to-Text auf dem Mac: Die Optionen im Vergleich"
description: "Diktieren auf dem Mac, ohne Audio in die Cloud zu senden — wie sich TobiVoice, die eingebaute macOS-Diktierfunktion und Cloud-Tools bei Datenschutz, Tempo und Alltag schlagen."
date: "Jul 4 2026"
tags: ["voice-to-text", "macos", "on-device", "datenschutz", "tobivoice"]
lang: "de"
---

> **Kurz gesagt:** Für Voice-to-Text auf dem Mac, bei dem das Audio das Gerät nie verlässt, gibt es drei Optionen: die eingebaute macOS-Diktierfunktion (auf Apple Silicon on-device, gut für kurze Sätze), eine Cloud-Diktier-App (am genauesten, aber dein Audio wird hochgeladen) oder eine dedizierte On-Device-App wie TobiVoice (lokale Modelle, offline, für den Ganztags-Einsatz mit globalen Kürzeln und App-Modi gebaut). Wenn Datenschutz und Alltags-Tempo beide zählen, ist eine On-Device-App der Sweet Spot.

Ich habe [TobiVoice](/projects/TobiVoice/) gebaut, weil ich ein Diktat wollte, das ich den ganzen Tag anlasse, ohne meine Stimme an irgendjemandes Server zu schicken. So schlagen sich die ehrlichen Optionen.

## Die drei Optionen

| Option | Wo es läuft | Datenschutz | Am besten für |
|--------|-------------|-------------|---------------|
| macOS-Diktierfunktion | On-Device (Apple Silicon) | Audio bleibt lokal | Gelegentliches kurzes Diktat |
| Cloud-Diktier-Apps | Cloud-Server | Audio wird hochgeladen | Maximale Genauigkeit, wenn du die Cloud akzeptierst |
| TobiVoice | On-Device (lokale Modelle) | Audio verlässt deinen Mac nie | Schnelles, privates Ganztags-Diktat |

## Die eingebaute macOS-Diktierfunktion

Sie ist bereits da, kostenlos, und auf Apple Silicon läuft sie für viele Sprachen on-device. Für einen schnellen Satz ist sie völlig in Ordnung.

Wo sie schwächelt, ist der dauerhafte Alltagseinsatz: Die Genauigkeit driftet bei längeren Passagen, es gibt keinen Push-to-Talk-Workflow, auf den du dich stützen kannst, und du kannst ihr kein persönliches Wörterbuch beibringen oder sie sich an die App anpassen lassen, in der du schreibst.

## Cloud-Diktier-Apps

Die großen Cloud-Modelle sind genau — oft die genaueste Option. Der Haken steckt schon im Namen: Dein Audio wird auf fremde Server hochgeladen, und die meisten dieser Tools sind Abos.

Ist deine Arbeit sensibel — Mandantengespräche, Gesundheit, Recht, alles unter Vertraulichkeit — ist „wir senden deine Stimme in die Cloud" die Linie, die du vielleicht nicht überschreiten willst.

## TobiVoice: on-device, für den ganzen Tag gebaut

[TobiVoice](/projects/TobiVoice/) ist eine native macOS-App (macOS 14 oder neuer), die auf **lokalen KI-Modellen** transkribiert, sodass die Verarbeitung komplett offline läuft und dein Audio deinen Mac nie verlässt. Was es zum Alltagswerkzeug macht statt zur Eintagsfliege:

- **Nahezu sofortige Transkription** auf lokalen Modellen — kein Cloud-Umweg.
- **Globale Kürzel** für schnelle Aufnahme und Push-to-Talk.
- **Kontextbewusste Modi**, die sich an die App anpassen, in der du schreibst.
- **Ein persönliches Wörterbuch** für eigene Begriffe und Ersetzungen.
- **100 % offline** — nichts wird jemals hochgeladen.

Es ist die Kombination, die zählt: Du bekommst die Ergonomie einer Cloud-App (Kürzel, Tempo, eigene Begriffe) ohne die Cloud.

## Wie du wählst

1. **Brauchst du nur ab und zu einen Satz?** Die eingebaute Diktierfunktion reicht — du hast sie schon.
2. **Jagst du maximale Genauigkeit und die Cloud stört dich nicht?** Eine Cloud-App liegt knapp vorn.
3. **Willst du Tempo und Datenschutz für den Ganztags-Einsatz?** Eine On-Device-App wie [TobiVoice](/projects/TobiVoice/) passt.

Dasselbe Prinzip zieht sich durch alles, was ich baue: Der nützliche Teil sollte auf deinem Gerät liegen. Bist du auf Android, macht [TobiBoard vs. Gboard](/blog/de/tobiboard-vs-gboard/) denselben Fall für deine Tastatur.
