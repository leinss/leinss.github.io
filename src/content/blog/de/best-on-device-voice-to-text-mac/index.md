---
title: "On-Device-Voice-to-Text auf dem Mac: Die Optionen im Vergleich"
description: "Diktieren auf dem Mac, ohne Audio in die Cloud zu senden: wie sich die eingebaute macOS-Diktierfunktion, Cloud-Tools und eine dedizierte On-Device-App bei Datenschutz, Tempo und Alltag schlagen."
date: "Jul 4 2026"
tags: ["voice-to-text", "macos", "on-device", "datenschutz", "tobivoice"]
lang: "de"
---

> **Kurz gesagt:** Für Voice-to-Text auf dem Mac, bei dem das Audio das Gerät nie verlässt, gibt es drei Optionen: die eingebaute macOS-Diktierfunktion (auf Apple Silicon on-device, gut für kurze Sätze), eine Cloud-Diktier-App (am genauesten, aber dein Audio wird hochgeladen) oder eine dedizierte On-Device-App, die lokale Modelle mit einer Ergonomie fährt, die du wirklich den ganzen Tag nutzt. Wenn Datenschutz und Alltags-Tempo beide zählen, ist eine On-Device-App der Sweet Spot, genau deshalb habe ich mir eine gebaut.

Als die eingebaute Option nicht reichte und ich meine Stimme nicht an fremde Server schicken wollte, habe ich mir selbst eine gebaut: [TobiVoice](/projects/TobiVoice/), eine native macOS-App, die auf lokalen Modellen transkribiert. Es ist ein persönlicher Build, den ich täglich nutze, keine App, die du heute herunterladen kannst. Aber warum es sie gibt, ist hier der springende Punkt, also vergleiche ich die ehrlichen Optionen.

## Die drei Optionen

| Option | Wo es läuft | Datenschutz | Am besten für |
|--------|-------------|-------------|---------------|
| macOS-Diktierfunktion | On-Device (Apple Silicon) | Audio bleibt lokal | Gelegentliches kurzes Diktat |
| Cloud-Diktier-Apps | Cloud-Server | Audio wird hochgeladen | Maximale Genauigkeit, wenn du die Cloud akzeptierst |
| Dedizierte On-Device-App | On-Device (lokale Modelle) | Audio verlässt deinen Mac nie | Schnelles, privates Ganztags-Diktat |

## Die eingebaute macOS-Diktierfunktion

Sie ist bereits da, kostenlos, und auf Apple Silicon läuft sie für viele Sprachen on-device. Für einen schnellen Satz ist sie völlig in Ordnung.

Wo sie schwächelt, ist der dauerhafte Alltagseinsatz: Die Genauigkeit driftet bei längeren Passagen, es gibt keinen Push-to-Talk-Workflow, auf den du dich stützen kannst, und du kannst ihr kein persönliches Wörterbuch beibringen oder sie sich an die App anpassen lassen, in der du schreibst.

## Cloud-Diktier-Apps

Die großen Cloud-Modelle sind genau, oft die genaueste Option. Der Haken steckt schon im Namen: Dein Audio wird auf fremde Server hochgeladen, und die meisten dieser Tools sind Abos.

Ist deine Arbeit sensibel (Mandantengespräche, Gesundheit, Recht, alles unter Vertraulichkeit) ist „wir senden deine Stimme in die Cloud" die Linie, die du vielleicht nicht überschreiten willst.

## Eine dedizierte On-Device-App

Das ist die Lücke, die ich mit [TobiVoice](/projects/TobiVoice/) für mich selbst gefüllt habe: eine native macOS-App (macOS 14 oder neuer), die auf **lokalen KI-Modellen** transkribiert, sodass die Verarbeitung komplett offline läuft und das Audio den Mac nie verlässt. Was eine On-Device-App zum Alltagswerkzeug macht statt zur Eintagsfliege:

- **Nahezu sofortige Transkription** auf lokalen Modellen, kein Cloud-Umweg.
- **Globale Kürzel** für schnelle Aufnahme und Push-to-Talk.
- **Kontextbewusste Modi**, die sich an die App anpassen, in der du schreibst.
- **Ein persönliches Wörterbuch** für eigene Begriffe und Ersetzungen.
- **100 % offline**. Nichts wird jemals hochgeladen.

Es ist die Kombination, die zählt: die Ergonomie einer Cloud-App (Kürzel, Tempo, eigene Begriffe) ohne die Cloud. Nichts davon braucht einen Server. Es braucht nur jemanden, der bereit ist, es sauber on-device zu bauen, statt zur einfachen Cloud-API zu greifen.

## Wie du wählst

1. **Brauchst du nur ab und zu einen Satz?** Die eingebaute Diktierfunktion reicht, du hast sie schon.
2. **Jagst du maximale Genauigkeit und die Cloud stört dich nicht?** Eine Cloud-App liegt knapp vorn.
3. **Willst du Tempo und Datenschutz für den Ganztags-Einsatz?** Eine dedizierte On-Device-App passt: der Grund, warum ich mir selbst eine gebaut habe, statt mich mit einem der Extreme zufriedenzugeben.

Dasselbe Prinzip zieht sich durch alles, was ich baue: Der nützliche Teil sollte auf deinem Gerät liegen, gebaut von jemandem, der weiß, wie das dort geht. Bist du auf Android, macht [TobiBoard vs. Gboard](/blog/de/tobiboard-vs-gboard/) denselben Fall für deine Tastatur.
