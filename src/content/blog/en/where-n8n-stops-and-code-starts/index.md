---
title: "Where n8n stops and code starts"
description: "Three seams where a workflow canvas runs out: sustained throughput, branching business logic, and long-running work that has to resume. What n8n's execution model gives you at each one, and what you have to write yourself."
date: "Jul 4 2026"
tags: ["n8n", "automation", "engineering", "own-your-stack", "code"]
lang: "en"
---

> **Short answer:** n8n is where I start almost every automation, and where most of them stay. Three needs reliably push work out of the canvas and into code: sustained throughput against rate limits, business logic that turns into a forest of IF branches, and long-running jobs that have to resume after a failure. The line I draw: n8n owns triggers, I/O, and human-facing steps; code owns anything that has to be correct when something breaks.

I like n8n. Most of what I build starts there and never needs to leave. But "just add another node" has a ceiling, and it is worth knowing the shape of it before you hit it rather than after.

The demo workflows behind [the teardowns on this site](/blog/en/invoice-extractor-technical/) are built from six node types in total: webhook, IF, code, HTTP request, respond-to-webhook, and send-email. Every one of them has at least one code node, and those code nodes all sit at the same kind of seam. Here is where that seam comes from.

## 1. Sustained throughput

The [invoice reader](/blog/en/invoice-extractor-technical/) handles one upload per request: take the file, call a vision model, parse the reply, respond. For a document at a time that shape is right, and there is nothing in it worth moving to code.

Point a month-end folder of several hundred invoices at the same shape and it stops being right. n8n iterates the items inside one execution and calls the API as fast as the loop runs. The GUI gives you per-node retry settings, and they are genuinely useful, but they are not the same as a rate-limit strategy: there is no per-item exponential backoff on a 429, no concurrency cap you can tune to the provider's limit, and no idempotency key, so a failure at item 200 leaves you re-running the 199 that already succeeded and paying for them twice.

**What code owns here:** a job queue with a concurrency cap, exponential backoff on rate-limit responses, and per-item state so a re-run touches only what actually failed. n8n keeps the trigger and the "batch finished" notification, which is exactly the part it is good at.

## 2. Branching business logic

The [lead-response workflow](/blog/en/lead-response-technical/) classifies an inbound message, then drafts a reply from that classification. It has one IF node, and it decides one thing: is the input valid.

Routing is where that changes. The classification already returns the fields you would route on (intent, fit, language), and the obvious next rules are easy to list: hot leads also go to the CRM, obvious spam is dropped, existing customers go to support rather than sales, out-of-hours messages queue. Each of those is another IF node and another pair of wires, and they compose badly: to see what happens to one message you trace a path across the canvas by eye, and changing one branch can break another without anything telling you.

**What code owns here:** the routing table. The same four rules in one code node are a list you can read top to bottom, test with a handful of example messages, and diff in a pull request. The logic was never the problem; a visual tree is the wrong representation for it.

## 3. Long-running work that has to resume

The [meeting assistant](/blog/en/meeting-assistant-technical/) is two HTTP calls in one execution: transcribe the audio, then turn the transcript into structured minutes.

The transcription hop is the one to design around, because it is both the slowest and the most expensive. It is a single node that either finishes or does not. There are no checkpoints inside a node, so a failure at the summarise step throws away the transcript and you transcribe the whole file again. Longer files make this worse in every dimension at once: more time in one node, more exposure to a timeout, and more money lost per retry.

**What code owns here:** splitting the audio, retrying each piece on its own, and saving progress so a failure resumes mid-file instead of restarting. n8n triggers it and emails the finished minutes.

## The pattern across all three

The same three needs show up every time: **idempotency, retries with real backoff, and state you can observe and resume**. A workflow canvas gives you no clean place to put any of them. That is not a knock on n8n. It is not what a canvas is for.

So the line is not "n8n versus code". It is this:

- **n8n owns** the triggers, the I/O, the integrations, and the human-facing steps. The plumbing it is genuinely great at.
- **Code owns** anything that has to be *correct under failure*: queues, retries, idempotency, chunking, real branching logic.

Worth being clear about where my own demos sit: none of them needs a queue or a checkpoint today. They take one request at a time, and their code nodes are small on purpose. The seam matters when the same shape has to run at volume, and knowing where it is before that happens is the difference between an automation that demos well and one you can hand to a business and trust.

That is also why I run all of it on my own stack: crossing that line means writing and owning real code, not filing a feature request. It is the whole argument in [the self-hosted stack I run instead of paying for SaaS](/blog/en/self-hosted-stack/). If you have a workflow that has started to hurt in one of these three ways, that is exactly the kind of thing I fix at [Leinss Consulting](https://consulting.leinss.xyz/en/).
