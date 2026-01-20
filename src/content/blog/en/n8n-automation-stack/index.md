---
title: "My n8n Workflow Automation Stack"
description: "The tools, patterns, and integrations I use for production automation workflows"
date: "Dec 28 2024"
tags: ["n8n", "tools", "automation", "workflow"]
lang: "en"
---

After building dozens of automation workflows, I've settled on a reliable stack. Here's what works.

## Core Stack

### n8n (Self-Hosted)
The heart of everything. Self-hosted for:
- Data privacy
- No execution limits
- Custom nodes
- Full control

### PostgreSQL
For n8n's internal database and workflow data storage. Reliable and well-understood.

### Redis
Queue management and caching for high-volume workflows.

### Caddy
Reverse proxy with automatic HTTPS. Simple config, just works.

## Essential Integrations

### Communication
- **Slack**: Team notifications, approvals
- **Email (SMTP)**: Customer communication
- **Telegram**: Personal alerts

### Data Sources
- **Airtable**: Quick databases and forms
- **Google Sheets**: Collaborative data entry
- **PostgreSQL**: Production data

### AI/ML
- **OpenAI**: GPT for text processing
- **Anthropic**: Claude for analysis tasks
- **Local LLMs**: Sensitive data processing

### Business Tools
- **Notion**: Documentation triggers
- **Linear**: Issue management
- **Stripe**: Payment webhooks

## Workflow Patterns I Use

### 1. Event-Driven Processing
```
Webhook → Validate → Process → Notify → Log
```

### 2. Scheduled Batch Jobs
```
Cron → Fetch Data → Transform → Sync → Report
```

### 3. Human-in-the-Loop
```
Trigger → AI Draft → Human Review → Execute
```

### 4. Error Recovery
```
Main Flow → Try/Catch → Retry Logic → Alert on Failure
```

## Production Best Practices

### Version Control
- Export workflows as JSON
- Store in Git repository
- Tag releases

### Monitoring
- Execution logging
- Error alerting
- Performance metrics

### Security
- Credential encryption
- Webhook authentication
- Network isolation

## Sample Architecture

<!-- TODO: Add architecture diagram -->

```
Internet
    ↓
Caddy (SSL)
    ↓
n8n (Docker)
    ↓
PostgreSQL + Redis
```

## Lessons Learned

1. **Start simple**: Add complexity only when needed
2. **Log everything**: You'll thank yourself later
3. **Test in staging**: Production bugs are expensive
4. **Document workflows**: Future you needs context

---

*Running a similar stack? I'd love to compare notes on what's working for you.*
