---
title: "Where n8n stops and code starts"
description: "Three times a no-code workflow got painful enough that I moved it into real code (invoice batches, a lead router, a meeting bot) and the rule I now use to draw the line."
date: "Jul 4 2026"
tags: ["n8n", "automation", "engineering", "own-your-stack", "code"]
lang: "en"
---

> **Short answer:** n8n is where I start almost every automation, and where most of them stay. But three kinds of pain reliably push a workflow out of the canvas and into code: sustained throughput against rate limits, business logic that turns into a forest of IF branches, and long-running jobs that need to resume after a failure. The line I draw now: n8n owns triggers, I/O, and human-facing steps; code owns anything that has to be correct when something breaks.

I like n8n. Most of what I build starts there and never needs to leave. But "just add another node" has a ceiling, and I've hit it enough times to know the shape of it. Here are three workflows that outgrew the canvas, what actually broke, and what I moved into code.

## 1. The invoice batch that melted the queue

The [invoice reader](/blog/en/invoice-extractor-technical/) is three nodes and it's genuinely solid for one upload at a time. Then a client dropped a month-end folder of a few hundred invoices in at once.

n8n looped over the items and fired the vision API as fast as it could. No real backoff, so it walked straight into rate limits; and when item 200-something failed, the whole execution was a painful thing to resume without re-processing everything before it. The GUI has retry settings, but not the kind of control this needed.

**What moved to code:** a proper job queue with a concurrency cap, exponential backoff on 429s, and idempotent per-invoice state so a re-run only touches what actually failed. n8n kept the trigger and the "batch done" notification. The lesson: n8n is excellent for one-shot; sustained batch throughput wants a real queue.

## 2. The lead router that became a branch forest

The [lead-response workflow](/blog/en/lead-response-technical/) started clean: classify the message, draft a reply. Then reality added rules. Hot leads should also hit the CRM. Obvious spam should be dropped. Existing customers should route to support, not sales. Out-of-hours messages should queue.

Each new rule was another IF node, and within a month the canvas was an unreadable thicket where changing one branch risked breaking two others. The logic was fine; expressing it as a visual tree was the problem.

**What moved to code:** the routing lives in one code step now (later a tiny service) with a clean rules table: readable, testable, changeable without tracing wires. n8n still owns the webhook, the sends, and the CRM writes. The lesson: branching business logic belongs in code, not in a forest of IF nodes.

## 3. The meeting bot that timed out on long calls

The [meeting assistant](/blog/en/meeting-assistant-technical/) was fine for a twenty-minute standup. Then someone fed it a ninety-minute workshop recording.

That blew past the transcription limits and n8n's own execution timeout, and worst of all, a failure partway through meant re-transcribing the whole file, paying for it twice. A single long-running node with no checkpoints is a bad place to keep expensive, fragile work.

**What moved to code:** a chunked, checkpointed pipeline: split the audio, transcribe each piece with its own retry, save progress so a failure resumes mid-file instead of restarting. n8n triggers it and emails the finished minutes. The lesson: long-running, resumable work needs state that n8n's execution model doesn't give you.

## The rule I use now

Notice the pattern across all three: the same three needs kept showing up (**idempotency, retries with real backoff, and state you can observe and resume**) and n8n gives you no clean place to put any of them. That's not a knock on n8n. It's just not what a workflow canvas is for.

So the line isn't "n8n versus code." It's this:

- **n8n owns** the triggers, the I/O, the integrations, and the human-facing steps, the plumbing it's genuinely great at.
- **Code owns** anything that has to be *correct under failure*: queues, retries, idempotency, chunking, real branching logic.

Every one of my [workflow teardowns](/blog/en/n8n-automation-stack/) has a small code node doing exactly this, at exactly this seam. Knowing where the seam is, and being able to cross it, is the difference between an automation that demos well and one you can hand to a business and trust.

That's also why I run all of it on my own stack: crossing that line means writing and owning real code, not filing a feature request. It's the whole argument in [the self-hosted stack I run instead of paying for SaaS](/blog/en/self-hosted-stack/). If you've got a workflow that's started to hurt in one of these three ways, that's exactly the kind of thing I fix at [Leinss Consulting](https://leinss-consulting.de/en/).
