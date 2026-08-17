---
title: "My n8n automation stack"
description: "What actually runs the automation on my own infrastructure: one n8n container, a rate-limit sidecar in front of the public webhooks, workflows in Git, and the six node types every workflow is built from."
date: "Jul 4 2026"
tags: ["n8n", "self-hosting", "own-your-stack", "automation"]
lang: "en"
---

> **Short answer:** One self-hosted n8n container behind a reverse proxy, with an OpenResty sidecar in front of the public webhooks so a paid model call cannot be triggered without limit. Workflows are exported to Git as JSON. The models are a hosted one for the demos and a local one for anything sensitive. It is deliberately small, and I will say plainly what is not in it.

Descriptions of self-hosted stacks tend to list everything the tool *can* connect to. This is the opposite: what is actually running, and what I left out.

## What runs

**n8n, one container.** Self-hosted, pinned to a version, deployed by Ansible rather than by hand. Data stays on infrastructure I control, there is no per-execution billing, and code nodes can do things the GUI cannot.

**SQLite, not Postgres.** n8n's own state lives in a file in the container's data volume. This is n8n's default and it is the right call at my volume: the demos take one request at a time and there is nothing to gain from a database server for that. Queue mode, with Postgres and Redis behind it, is what you move to when one instance stops being enough. I have not needed it, and saying I run it would be inventing a scale I do not have.

**A reverse proxy** terminating TLS with certificates that renew themselves.

**An OpenResty sidecar** between the proxy and n8n. The public demo webhooks each trigger a paid model call, so the sidecar carries a per-IP burst limit, a daily cap per webhook, and an origin allowlist, while the editor and API pass through untouched. The write endpoint that feeds the FAQ knowledge base needs a shared secret. This is the layer that turns "a webhook on the internet" into something I am willing to leave running.

**Postgres** is in the picture, but not for n8n. It holds the FAQ knowledge base the [assistant](/blog/en/faq-assistant-technical/) searches, reached over a small HTTP endpoint.

**Models.** A hosted model for the demo workflows, chosen because it is cheap per call, and a local model server for anything sensitive, so the text never leaves the machine. Which model a workflow calls is a URL and an auth header, which is exactly how it should be.

## The six node types

Every workflow I run is built from six: **webhook**, **IF**, **code**, **HTTP request**, **respond to webhook**, and **send email**.

That is not minimalism for its own sake. n8n ships hundreds of service-specific nodes, and I reach for an HTTP request node instead almost every time, because an HTTP call is documented by the service, does not go stale when the node lags behind an API version, and reads the same in every workflow. The service nodes are genuinely useful for OAuth-heavy integrations where they save real work; that just has not been the shape of what I build.

The **code** node is the one that carries the weight, and it is always at the same seam: validating input before a paid call, parsing what a model sends back, and shaping the result for whatever comes next. That is [where n8n stops and code starts](/blog/en/where-n8n-stops-and-code-starts/).

## Practices that matter

**Workflows live in Git.** Every workflow is exported as JSON and committed next to the deployment code that puts it on the box. That is the whole portability story: if n8n disappeared tomorrow, the logic is in files I own, not in a vendor's account.

**Credentials are never in the export.** They come from an encrypted store at deploy time, with the encryption key held outside the repository.

**The rate limiter is monitored.** It exports counters, they get scraped, and there are alert rules on the daily caps. An unmonitored cap tells you nothing until a widget is already dead.

**The exposure is not documented publicly**, and that is deliberate. The architecture below is the honest shape of it; the specifics of how it is reachable are not something to publish.

```
Internet
    ↓
Reverse proxy (HTTPS)
    ↓
Rate-limit sidecar
    ↓
n8n (Docker)
```

## What I would change first

If the volume arrived to justify it: queue mode with Postgres and Redis, so executions survive a restart and can run across more than one worker. That is the upgrade path, and it is worth knowing it exists before you need it rather than during an incident.

## Want this, but owned?

Standing up a stack like this (self-hosted, documented, and handed over so it isn't locked in one person's head) is the work I do at [Leinss Consulting](https://leinss-consulting.de/en/). If you run a similar setup, I'm always happy to compare notes.
