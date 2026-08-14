---
title: "Umami vs Google Analytics: Die Analyse, die ich stattdessen selbst hoste"
description: "Wie sich Umami, eine selbst gehostete, datenschutzfreundliche Analyse, gegen Google Analytics schlägt: bei Datenhoheit, DSGVO, Cookies und Sampling. Von jemandem, der es produktiv betreibt."
date: "Jul 4 2026"
tags: ["umami", "google-analytics", "self-hosting", "privacy", "saas-alternatives", "own-your-stack"]
lang: "de"
---

> **Kurz gesagt:** Umami ist quelloffene Analyse, die man selbst hostet; Google Analytics ist gratis, weil Sie mit den Daten Ihrer Besucher bezahlen. Umami hält jeden Aufruf auf meinem eigenen Server in der EU, braucht kein Cookie-Banner und sampelt die Zahlen nie. GA4 kann mehr und ist aufwendiger zu lernen, und es schickt Ihren Traffic an Google. Diese Seite läuft auf Umami, hier ist die Begründung.

Die Analyse, die gerade Ihren Besuch zählt, ist Umami, auf Infrastruktur, die mir gehört. Ich bin bewusst von Google Analytics weggegangen. Das ist der Vergleich, den ich jedem gebe, der zwischen beiden entscheidet.

## Gegenübergestellt

| Kriterium | Umami (selbst gehostet) | Google Analytics 4 |
| --- | --- | --- |
| Quelle | Offen (MIT) | Geschlossen (Google) |
| Wo die Daten liegen | Mein Server, in der EU | Googles Cloud |
| Cookie- / Consent-Banner | Nicht nötig | In der EU vorgeschrieben |
| Sampling | Keins, jeder Aufruf zählt | Ab Schwellenwerten gesampelt |
| Preis | Der Server, auf dem es läuft | Gratis (Sie zahlen mit Daten) |
| Einrichtung | Docker + Postgres, selbst betrieben | Tag einfügen, fertig |
| Lernkurve | Ein Dashboard | GA4 ist ein eigenes Handwerk |
| Am besten für | Datenhoheit und ein klarer Blick | Ad-Attribution, tiefe Funnels |

## Was sie teilen

Beide beantworten die Alltagsfragen: Wie viele Leute kamen, woher, auf welche Seiten. Für einen Blog oder eine kleine Unternehmensseite sind die Zahlen, auf die Sie täglich schauen, in beiden Tools dieselben. Wenn Sie nur eine Besucherzählung brauchen, schaffen das beide.

## Wo sie sich unterscheiden

**Wohin die Daten gehen.** GA4 schickt jeden Besuch an Google, und genau das ist das Geschäftsmodell: Ihr Traffic wird zu deren Daten. Umami schreibt in eine Postgres-Datenbank auf einem Server, den ich kontrolliere. Niemand sonst bekommt eine Kopie.

**Das Cookie-Banner.** Weil GA4 Besucher profiliert, heißt der Einsatz in der EU: Consent-Banner und eine Rechtsgrundlage nach DSGVO. Umami zählt Besuche ohne Cookies und ohne personenbezogene Kennungen, es gibt also nichts einzuwilligen. Das Banner fällt weg.

**Sampling.** Ab bestimmten Mengen schätzen GA-Berichte aus einer Stichprobe, statt jedes Ereignis zu zählen. Umami zählt jeden Aufruf, die Zahl im Dashboard ist also die tatsächliche Zahl.

**Aufwand.** GA4 ist mächtig und ehrlich gesagt anspruchsvoll: Events, Conversions, ein Berichtsmodell, das man lernen muss. Umami ist eine Seite. Wenn Sie bezahlte Anzeigen schalten und Multi-Touch-Attribution brauchen, ist diese Mächtigkeit der Punkt. Wenn Sie nur die Wahrheit über Ihren Traffic wollen, ist sie Ballast.

## Was sollten Sie nehmen?

- **Bleiben Sie bei Google Analytics**, wenn Sie bezahlte Akquise betreiben, seine Attribution und Audience-Werkzeuge brauchen und damit einverstanden sind, Traffic-Daten an Google zu schicken.
- **Wechseln Sie zu Umami**, wenn Besucherdaten Ihnen gehören sollen, Sie eine Seite ohne Cookie-Banner wollen und eine Zahl, der Sie ohne Sampling-Sternchen trauen können.

Der Haken, den man benennen sollte: Umami *gut* selbst zu hosten heißt Docker, eine Datenbank, ein Reverse Proxy, Backups und Updates. Richtig gemacht ist es privat und läuft einfach. Diese Lücke ist Engineering, und das ist das Thema von [dem selbst gehosteten Stack, den ich statt SaaS betreibe](/blog/de/self-hosted-stack/).

Wenn Sie eigene, private Analyse lieber eingerichtet und an Ihr Team übergeben bekommen, statt sie selbst zu betreiben, ist das genau die Art Arbeit, die ich bei [Leinss Consulting](https://leinss-consulting.de/de/) mache.
