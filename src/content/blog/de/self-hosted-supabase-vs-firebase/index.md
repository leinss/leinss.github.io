---
title: "Selbst gehostetes Supabase vs Firebase: Das Backend, das mir gehört"
description: "Wie sich selbst gehostetes Supabase gegen Firebase schlägt: bei Datenhoheit, Postgres statt proprietärem NoSQL, Preis und Lock-in. Von jemandem, der Supabase auf eigener Infrastruktur betreibt."
date: "Jul 4 2026"
tags: ["supabase", "firebase", "self-hosting", "postgres", "saas-alternatives", "own-your-stack"]
lang: "de"
---

> **Kurz gesagt:** Firebase ist Googles proprietäres Backend-as-a-Service; Supabase ist eine quelloffene Alternative auf reinem Postgres, die man selbst hosten kann. Firebase ist der schnellste Weg, eine App auszuliefern, und der schwerste, den man wieder verlässt: Ihre Daten liegen in einem Datenspeicher, den nur Google betreibt. Selbst gehostetes Supabase gibt Ihnen dieselben Bausteine (Auth, Datenbank, Storage, Realtime) auf einer Postgres-Instanz, die Ihnen gehört. Ich betreibe Supabase auf eigener Infrastruktur, und hier ist der Handel.

Firebase bringt Sie am schnellsten zur laufenden App. Dieses Tempo ist echt, und ebenso die Rechnung und das Lock-in, die damit kommen. So schlägt sich die eigene Alternative.

## Gegenübergestellt

| Kriterium | Selbst gehostetes Supabase | Firebase |
| --- | --- | --- |
| Quelle | Offen (Apache-2.0) | Geschlossen (Google) |
| Datenbank | Standard-Postgres (SQL) | Firestore (proprietäres NoSQL) |
| Wo die Daten liegen | Mein Server, in der EU | Googles Cloud |
| Preismodell | Pauschal: der Server, der es trägt | Nach Verbrauch pro Lesen/Schreiben/Storage |
| Portabilität | Nur Postgres, Dump und umziehen | Export ist ein Projekt für sich |
| Lock-in | Gering (offener Stack, Standard-SQL) | Hoch (proprietäre APIs) |
| Einrichtung | Docker-Stack, echte Ops-Arbeit | Konsole, Minuten |
| Am besten für | Besitz, SQL, kein Lock-in | Ein MVP schnell ausliefern |

## Was sie teilen

Beide geben einer App dieselben Kern-Dienste ab Werk: eine Datenbank, Authentifizierung, Datei-Storage, Echtzeit-Updates und automatisch erzeugte APIs, damit der Client mit Daten reden kann, ohne dass Sie ein Backend von Hand schreiben. Um eine App an den Start zu bringen, decken beide dasselbe ab.

## Wo sie sich unterscheiden

**Postgres statt proprietärem Datenspeicher.** Das ist der Punkt, der langfristig zählt. Supabase ist Postgres, die standardisierteste relationale Datenbank überhaupt: SQL, Fremdschlüssel, Transaktionen und ein jahrzehntetiefes Werkzeug-Ökosystem. Firestore ist Googles eigenes NoSQL-Modell mit eigenen Abfrageregeln und eigenen Grenzen. Ihr Datenmodell und die halbe App richten sich nach dem, was Sie wählen.

**Ihre Daten wieder herausbekommen.** Weil Supabase Postgres ist, ist ein Wechsel weg davon ein Datenbank-Dump. Firestore zu verlassen heißt, Daten aus einem proprietären NoSQL-Speicher neu zu modellieren und die Abfragen dagegen neu zu schreiben. Die Ausstiegskosten sind das eigentliche Maß für Lock-in, und es ist ungleich verteilt.

**Die Rechnung.** Firebases Blaze-Tarif rechnet nach Verbrauch: abgerechnet wird pro Lesevorgang, Schreibvorgang, gespeichertem Byte und Gigabyte raus. Bei null ist das billig, im Wachstum unvorhersehbar, und eine schlechte Abfrage kann die Rechnung hochtreiben. Selbst gehostetes Supabase kostet den Server, auf dem es läuft, pauschal, ob die App tausend oder eine Million Lesevorgänge macht.

**Wo die Daten liegen.** Firebase läuft in Googles Cloud. Selbst gehostetes Supabase hält Nutzerdaten auf Infrastruktur, die ich in der EU kontrolliere, was in dem Moment zählt, in dem diese Daten personenbezogen nach DSGVO sind.

**Der ehrliche Aufwand.** Firebase gewinnt beim Tempo zur ersten laufenden App, deutlich. Supabase selbst zu hosten ist die schwerste Aufgabe in meinem Stack: es sind mehrere Dienste (Datenbank, Auth, Storage, ein API-Gateway) die zusammen laufen, plus Backups und Updates. Das ist echte Betriebsarbeit, kein Wochenend-Tutorial.

## Was sollten Sie nehmen?

- **Nehmen Sie Firebase**, um ein MVP schnell auszuliefern, wenn Sie keine Infrastruktur betreiben wollen und bereit sind, das Lock-in und die verbrauchsbasierte Rechnung zu akzeptieren, die damit kommen.
- **Hosten Sie Supabase selbst**, wenn Sie Ihre Daten in Standard-Postgres wollen, das Ihnen gehört, pauschale und planbare Kosten, kein proprietäres Lock-in und Nutzerdaten in der EU, und Sie das Betriebsgewicht tragen können.

Ein Mittelweg, den ich tatsächlich empfehle: auf Supabases gehostetem Tarif starten (derselbe offene Stack, kein Ops) und auf selbst gehostet umziehen, wenn sich der Besitz lohnt. So oder so sind Sie auf Postgres, der Umzug ist also eine Datenbank-Migration, kein Neuschrieb. Diese Reihenfolge („die tragenden Teile besitzen, sobald sie wichtig werden") ist die ganze Idee hinter [dem selbst gehosteten Stack, den ich statt SaaS betreibe](/blog/de/self-hosted-stack/).

Wenn Sie ein eigenes Backend gebaut, betrieben und an Ihr Team übergeben haben wollen, ist das genau die Art Arbeit, die ich bei [Leinss Consulting](https://consulting.leinss.xyz/de/) mache.
