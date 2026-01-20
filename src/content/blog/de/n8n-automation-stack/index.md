---
title: "Mein n8n Workflow-Automatisierungs-Stack"
description: "Die Tools, Patterns und Integrationen die ich für Produktions-Automatisierungs-Workflows nutze"
date: "Dec 28 2024"
tags: ["n8n", "tools", "automatisierung", "workflow"]
lang: "de"
---

Nach dem Bau dutzender Automatisierungs-Workflows habe ich mich auf einen zuverlässigen Stack festgelegt. Das funktioniert.

## Kern-Stack

### n8n (Self-Hosted)
Das Herzstück von allem. Self-hosted für:
- Datenschutz
- Keine Ausführungslimits
- Custom Nodes
- Volle Kontrolle

### PostgreSQL
Für n8ns interne Datenbank und Workflow-Datenspeicherung. Zuverlässig und gut verstanden.

### Redis
Queue-Management und Caching für High-Volume Workflows.

### Caddy
Reverse Proxy mit automatischem HTTPS. Einfache Config, funktioniert einfach.

## Essentielle Integrationen

### Kommunikation
- **Slack**: Team-Benachrichtigungen, Freigaben
- **Email (SMTP)**: Kundenkommunikation
- **Telegram**: Persönliche Alerts

### Datenquellen
- **Airtable**: Schnelle Datenbanken und Formulare
- **Google Sheets**: Kollaborative Dateneingabe
- **PostgreSQL**: Produktionsdaten

### AI/ML
- **OpenAI**: GPT für Textverarbeitung
- **Anthropic**: Claude für Analyseaufgaben
- **Lokale LLMs**: Verarbeitung sensibler Daten

### Business-Tools
- **Notion**: Dokumentations-Trigger
- **Linear**: Issue-Management
- **Stripe**: Payment-Webhooks

## Workflow-Patterns die ich nutze

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

## Best Practices für Produktion

### Versionskontrolle
- Workflows als JSON exportieren
- In Git-Repository speichern
- Releases taggen

### Monitoring
- Ausführungs-Logging
- Fehler-Alerting
- Performance-Metriken

### Sicherheit
- Credential-Verschlüsselung
- Webhook-Authentifizierung
- Netzwerk-Isolation

## Beispiel-Architektur

<!-- TODO: Architektur-Diagramm hinzufügen -->

```
Internet
    ↓
Caddy (SSL)
    ↓
n8n (Docker)
    ↓
PostgreSQL + Redis
```

## Gelernte Lektionen

1. **Einfach starten**: Komplexität nur bei Bedarf hinzufügen
2. **Alles loggen**: Du wirst es dir später danken
3. **In Staging testen**: Produktions-Bugs sind teuer
4. **Workflows dokumentieren**: Dein zukünftiges Ich braucht Kontext

---

*Nutzt du einen ähnlichen Stack? Ich würde gerne vergleichen, was bei dir funktioniert.*
