---
title: "How I run a self-hosted research agent in my daily work"
description: "The practical setup: an agent harness on my own machine for research and drafting, pointed at cloud or local models, with the keys and transcripts staying with me."
date: "Jul 4 2026"
tags: ["ai-agents", "pi", "research", "self-hosting", "own-your-stack"]
lang: "en"
---

> **Short answer:** My research agent is a self-hosted harness on my own machine, driven from the terminal, pointed at whichever model fits the task: a cloud model for hard reasoning, a local one through LM Studio for anything sensitive. It reads sources, extracts and summarises, and drafts, while the prompts, transcripts, and files stay with me. It's a workflow habit, not magic: the value is that it's always there, shaped how I work, and nothing leaves the box unless I send it.

The [own-the-agent argument](/blog/en/own-your-ai-agent/) is easy to nod along to and harder to picture in daily use. So here's the concrete version: how a self-hosted agent actually fits into my week, and what it does for research specifically.

## The setup, in plain terms

I run an agent harness locally, [Pi](https://github.com/earendil-works/pi) is the one I reshape most, driven from the terminal. Two deliberate choices make it mine:

- **Bring-your-own-model.** The harness points at whatever model suits the task. Hard reasoning gets a strong cloud model; anything with sensitive content runs against a local model through [LM Studio](https://lmstudio.ai/), so the text never leaves my machine.
- **My tools, my rules.** I give the agent exactly the tools I want it to have (read these files, search the web, run this script) and nothing else. The permissions are mine to set, not a product's to decide.

That's the whole trick. No dashboard, no account, no history sitting on someone else's server.

## What it does for research

Research is where an agent earns its keep, because most of it is gather-then-condense:

- **Sweep and summarise.** Point it at a set of sources and get back a condensed, cited digest instead of twenty open tabs.
- **Extract from documents.** Pull the specific facts, figures, or clauses I need out of long PDFs and reports, into a structure I can use.
- **Draft against my notes.** Turn a pile of rough notes into a first draft I then edit, in my own voice, grounded in what I actually wrote.
- **Interrogate a corpus.** Ask questions across a folder of documents and get answers with the sources attached.

None of that is unique to a self-hosted agent. What *is* unique is that the sources, the questions, and the outputs never become someone else's training data or someone else's analytics.

## Why self-hosted specifically

Two reasons, both practical:

1. **Sensitive material stays put.** Client documents, draft strategy, anything under NDA: that goes to a local model on my own machine, not to a third-party product. The [own-your-stack case](/blog/en/self-hosted-stack/) is strongest exactly here.
2. **It's shaped to me.** Because I own the harness, the agent behaves the way I want after months of small adjustments. A rented product resets to its defaults; mine accumulates my preferences.

## The honest part

This is a habit, not a magic button. It's worth setting up if you do enough research or drafting that an always-there, owned agent pays back the effort of running it. If you ask a chatbot something twice a month, don't bother, a rented tab is fine.

If you want the fuller picture, [Pi vs OpenClaw](/blog/en/pi-vs-openclaw/) covers the terminal agent versus the chat-channel assistant. And if you'd like an owned agent or automation built for your business and handed over, that's what I do at [Leinss Consulting](https://leinss-consulting.de/en/).
