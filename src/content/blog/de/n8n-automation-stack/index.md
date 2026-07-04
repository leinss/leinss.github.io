---
title: "Mein n8n-Automatisierungs-Stack"
description: "Die Tools, Patterns und Integrationen, mit denen ich Produktions-Automatisierung auf Infrastruktur betreibe, die mir gehört."
date: "Jul 4 2026"
tags: ["n8n", "self-hosting", "own-your-stack", "automatisierung"]
lang: "de"
---

> **Kurz gesagt:** Ich betreibe Produktions-Automatisierung auf einer selbst gehosteten n8n-Instanz mit PostgreSQL und Redis, hinter einem Reverse Proxy mit automatischem HTTPS. Ein Frontier-Cloud-Modell (Claude) übernimmt die schwere Analyse; ein lokaler Modell-Server (LM Studio) alles Sensible. Workflows werden als JSON nach Git exportiert — das Ganze ist versioniert und portabel, nichts ist bei einem Anbieter eingeschlossen.

Nach dem Bau dutzender Automatisierungs-Workflows habe ich mich auf einen Stack festgelegt, dem ich vertraue. Der rote Faden: Mir gehören die Teile, auf die es ankommt. Hier steht, was ihn betreibt, und warum. (Zum größeren Argument „besitzen statt mieten" siehe [der selbst gehostete Stack, den ich statt SaaS betreibe](/blog/de/self-hosted-stack/).)

## Kern-Stack

### n8n (selbst gehostet)
Das Herzstück von allem. Selbst gehostet, mit Absicht:
- Daten bleiben auf Infrastruktur, die ich kontrolliere
- Keine Ausführungslimits, keine Abrechnung pro Aufgabe
- Custom Nodes, wenn ich sie brauche
- Volle Kontrolle über Versionen und Updates

### PostgreSQL
n8ns interne Datenbank und Workflow-Datenspeicherung. Zuverlässig und gut verstanden.

### Redis
Queue-Management und Caching für Workflows mit hohem Volumen.

### Reverse Proxy (automatisches HTTPS)
Terminiert TLS vor n8n. Zertifikate erneuern sich selbst; die Config ist klein und langweilig — genau das, was man auf dieser Ebene will.

## Integrationen, zu denen ich greife

### Kommunikation
- **Slack** — Team-Benachrichtigungen, Freigaben
- **E-Mail (SMTP)** — Kundenkommunikation
- **Telegram** — persönliche Alerts

### Datenquellen
- **Airtable** — schnelle Datenbanken und Formulare
- **Google Sheets** — kollaborative Dateneingabe
- **PostgreSQL** — Produktionsdaten

### KI
- **Anthropic (Claude)** — Analyse und Generierung, wo sich ein Frontier-Modell lohnt
- **LM Studio (lokale Modelle)** — alles Sensible bleibt auf meiner eigenen Hardware, keine Daten verlassen die Maschine

### Business-Tools
- **Notion** — Dokumentations-Trigger
- **Linear** — Issue-Management
- **Stripe** — Payment-Webhooks

## Workflow-Patterns, die ich nutze

### 1. Event-Driven Processing
```
Webhook → Validieren → Verarbeiten → Benachrichtigen → Loggen
```

### 2. Geplante Batch-Jobs
```
Cron → Daten holen → Transformieren → Synchronisieren → Berichten
```

### 3. Human-in-the-Loop
```
Trigger → AI-Entwurf → Menschliche Prüfung → Ausführen
```

### 4. Fehlerbehandlung
```
Hauptfluss → Try/Catch → Retry-Logik → Alert bei Fehler
```

## Praktiken für den Produktivbetrieb

### Versionskontrolle
- Workflows als JSON exportieren
- In einem Git-Repository speichern
- Releases taggen

### Monitoring
- Ausführungs-Logging
- Fehler-Alerting
- Performance-Metriken

### Sicherheit
- Credential-Verschlüsselung
- Webhook-Authentifizierung
- Netzwerk-Isolation

## Illustrative Architektur

```
Internet
    ↓
Reverse Proxy (HTTPS)
    ↓
n8n (Docker)
    ↓
PostgreSQL + Redis
```

Wie ich das tatsächlich exponiere und härte, steht bewusst nicht auf einer öffentlichen Seite, aber die Form ist so einfach.

## Gelernte Lektionen

1. **Einfach starten** — Komplexität nur dann, wenn sie sich verdient
2. **Alles loggen** — Sie werden es sich später danken
3. **In Staging testen** — Produktions-Bugs sind teuer
4. **Workflows dokumentieren** — Ihr zukünftiges Ich braucht den Kontext

## Sie wollen das, aber besessen?

Einen solchen Stack aufzusetzen — selbst gehostet, dokumentiert und übergeben, damit er nicht im Kopf einer Person eingeschlossen ist — ist die Arbeit, die ich bei [Leinss Consulting](https://leinss-consulting.de/de/) mache. Wenn Sie ein ähnliches Setup betreiben, tausche ich mich gerne aus.
