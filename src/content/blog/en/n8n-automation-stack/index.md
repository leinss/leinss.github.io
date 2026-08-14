---
title: "My n8n automation stack"
description: "The tools, patterns, and integrations I use to run production automation on infrastructure I own."
date: "Jul 4 2026"
tags: ["n8n", "self-hosting", "own-your-stack", "automation"]
lang: "en"
---

> **Short answer:** I run production automation on a self-hosted n8n instance backed by PostgreSQL and Redis, behind a reverse proxy with automatic HTTPS. A frontier cloud model (Claude) handles heavy analysis; a local model server (LM Studio) handles anything sensitive. Workflows are exported to Git as JSON, so the whole thing is versioned and portable. Nothing is locked in a vendor.

After building dozens of automation workflows, I've settled on a stack I trust. The through-line: I own the parts that matter. Here's what runs it, and why. (For the wider "why own instead of rent" argument, see [the self-hosted stack I run instead of paying for SaaS](/blog/en/self-hosted-stack/).)

## Core stack

### n8n (self-hosted)
The heart of everything. Self-hosted, on purpose:
- Data stays on infrastructure I control
- No execution limits or per-task billing
- Custom nodes when I need them
- Full control over versions and updates

### PostgreSQL
n8n's internal database and workflow data storage. Reliable and well understood.

### Redis
Queue management and caching for high-volume workflows.

### Reverse proxy (automatic HTTPS)
Terminates TLS in front of n8n. Certificates renew themselves; the config is small and boring, which is exactly what you want at this layer.

## Integrations I reach for

### Communication
- **Slack**: team notifications, approvals
- **Email (SMTP)**, customer communication
- **Telegram**, personal alerts

### Data sources
- **Airtable**, quick databases and forms
- **Google Sheets**, collaborative data entry
- **PostgreSQL**, production data

### AI
- **Anthropic (Claude)**, analysis and generation where a frontier model is worth the call
- **LM Studio (local models)**: anything sensitive stays on my own hardware, with no data leaving the box

### Business tools
- **Notion**, documentation triggers
- **Linear**, issue management
- **Stripe**, payment webhooks

## Workflow patterns I use

### 1. Event-driven processing
```
Webhook → Validate → Process → Notify → Log
```

### 2. Scheduled batch jobs
```
Cron → Fetch Data → Transform → Sync → Report
```

### 3. Human-in-the-loop
```
Trigger → AI Draft → Human Review → Execute
```

### 4. Error recovery
```
Main Flow → Try/Catch → Retry Logic → Alert on Failure
```

## Production practices

### Version control
- Export workflows as JSON
- Store in a Git repository
- Tag releases

### Monitoring
- Execution logging
- Error alerting
- Performance metrics

### Security
- Credential encryption
- Webhook authentication
- Network isolation

## Illustrative architecture

```
Internet
    ↓
Reverse proxy (HTTPS)
    ↓
n8n (Docker)
    ↓
PostgreSQL + Redis
```

How I actually expose and harden this is deliberately not on a public page, but the shape is this simple.

## Lessons learned

1. **Start simple**, add complexity only when it earns its place
2. **Log everything**, you'll thank yourself later
3. **Test in staging**, production bugs are expensive
4. **Document workflows**, future you needs the context

## Want this, but owned?

Standing up a stack like this (self-hosted, documented, and handed over so it isn't locked in one person's head) is the work I do at [Leinss Consulting](https://leinss-consulting.de/en/). If you run a similar setup, I'm always happy to compare notes.
