---
title: "Listmonk vs Mailchimp: Der Newsletter, den ich stattdessen selbst hoste"
description: "Wie sich Listmonk, ein selbst gehostetes Open-Source-Newsletter-Tool, gegen Mailchimp schlägt: bei Listenbesitz, Preis pro Kontakt, Zustellbarkeit und Kontrolle. Von jemandem, der es betreibt."
date: "Jul 4 2026"
tags: ["listmonk", "mailchimp", "self-hosting", "newsletter", "saas-alternatives", "own-your-stack"]
lang: "de"
---

> **Kurz gesagt:** Listmonk ist ein selbst gehosteter Newsletter-Manager; Mailchimp ist eine gehostete Plattform, die pro Kontakt abrechnet. Bei Listmonk liegt die Abonnentenliste in meiner eigenen Datenbank, der Versand kostet, was reine E-Mail-Zustellung kostet, und die Rechnung steigt nicht mit der Liste. Mailchimp ist schneller im Start und nimmt Ihnen die Zustellbarkeit ab. Mein Newsletter läuft auf Listmonk: hier ist der Handel, den ich eingegangen bin.

Das Anmeldeformular unten auf dieser Seite schickt an Listmonk, auf Infrastruktur, die mir gehört. Ich miete meine Verteilerliste nicht. So schlägt es sich gegen die Standardwahl.

## Gegenübergestellt

| Kriterium | Listmonk (selbst gehostet) | Mailchimp |
| --- | --- | --- |
| Quelle | Offen (AGPL-3.0) | Geschlossen (Intuit) |
| Wem die Liste gehört | Mir, in eigener Datenbank | Mailchimps Plattform |
| Preismodell | Pauschal: Sie zahlen den Server | Pro Kontakt, steigt mit der Liste |
| Versand | Eigener SMTP- / SES-Anbieter | Gebündelt, für Sie erledigt |
| Zustellbarkeit | Selbst einzurichten (SPF, DKIM) | Für Sie übernommen |
| Datenstandort | Mein Server, in der EU | Mailchimps Cloud (USA) |
| Einrichtung | Ein Binary + Postgres | Anmelden, fertig |
| Am besten für | Besitz, pauschale Kosten im Wachstum | Schneller Start, Versand ohne Aufwand |

## Was sie teilen

Beide versenden Kampagnen und transaktionale E-Mails, verwalten Abonnenten und Segmente, verfolgen Öffnungen und Klicks und beherrschen Double-Opt-in. Für die eigentliche Aufgabe „E-Mail schreiben, an eine Liste senden, sehen wer geöffnet hat" sind sie vergleichbar.

## Wo sie sich unterscheiden

**Wem die Liste gehört.** Bei Mailchimp liegen Ihre Abonnenten auf deren Plattform, zu deren Bedingungen. Bei Listmonk ist die Liste eine Tabelle in einer Postgres-Datenbank, die ich kontrolliere, jederzeit exportierbar, weil sie nie weg war. Sollte mich eine Preisänderung oder Richtlinienentscheidung je stören, bin ich ihr nicht ausgeliefert.

**Die Rechnung.** Mailchimp rechnet nach Kontaktzahl ab, das Wachstum der Liste treibt also die Rechnung, ob Sie mehr versenden oder nicht. Listmonks Kosten sind Server plus reiner Versand, beide grob pauschal. Zehntausend Abonnenten zu halten kostet ungefähr so viel wie hundert.

**Zustellbarkeit.** Das ist Mailchimps eigentlicher Wert und der ehrliche Grund, es zu nutzen: Sie pflegen die Versand-Reputation, damit Ihre Post im Posteingang landet. Listmonk selbst zu hosten heißt, einen eigenen Versandanbieter anzubinden und SPF, DKIM und DMARC korrekt zu setzen. Richtig gemacht ist die Zustellung sauber; falsch gemacht landen Sie im Spam. Diese Arbeit nimmt Mailchimp Ihnen ab.

**Wo die Daten liegen.** Mailchimp ist eine US-Plattform. Listmonk hält Abonnentendaten auf Infrastruktur, die ich in der EU kontrolliere, was zählt, wenn die Liste Kundendaten nach DSGVO sind.

## Was sollten Sie nehmen?

- **Bleiben Sie bei Mailchimp**, wenn Sie null Infrastruktur wollen, Zustellbarkeit ohne Aufwand, und Ihre Liste klein genug ist, dass der Preis pro Kontakt noch nicht wehtut.
- **Wechseln Sie zu Listmonk**, wenn die Rechnung pro Kontakt zur Wachstumssteuer geworden ist oder die Abonnentenliste Daten sind, die Sie besitzen und in der EU halten müssen.

Der ehrliche Haken: den Versand zu besitzen ist der Teil, der Engineering braucht. Listmonk selbst ist ein einzelnes Binary; es zuverlässig senden zu lassen ist DNS, ein Versandanbieter und Monitoring. Diese Lücke ist das Thema von [dem selbst gehosteten Stack, den ich statt SaaS betreibe](/blog/de/self-hosted-stack/).

Wenn Sie einen eigenen Newsletter sauber eingerichtet haben wollen, samt Zustellbarkeit, und an Ihr Team übergeben, ist das genau die Art Arbeit, die ich bei [Leinss Consulting](https://leinss-consulting.de/de/) mache.
