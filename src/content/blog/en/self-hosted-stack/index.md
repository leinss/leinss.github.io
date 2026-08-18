---
title: "The self-hosted stack I run instead of paying for SaaS"
description: "The analytics, newsletter, automation, backend, and local-AI tools I self-host on my own EU infrastructure, and the rented SaaS each one replaces."
date: "Jul 4 2026"
tags: ["self-hosting", "privacy", "saas-alternatives", "own-your-stack"]
lang: "en"
---

> **Short answer:** I run my analytics, newsletter, automation, backend, and local AI on infrastructure I own in the EU: Umami, Listmonk, n8n, Supabase, and LM Studio, instead of renting Google Analytics, Mailchimp, Zapier, Firebase, and a cloud LLM. Owning the stack means no per-seat tax, no data leaving the EU, and nothing I can't change. It costs more engineering up front and pays back in control.

Most businesses run on rented SaaS. It's the fast way to start, and for a while it's the right one. But every rented tool is a meter running, a copy of your data on someone else's server, and a hard limit on what you're allowed to change. Past a certain point, owning the stack beats renting it. This is the one I run.

## What I self-host, and what it replaces

| I run (self-hosted) | Instead of renting | Why I own it |
| --- | --- | --- |
| **Umami** | Google Analytics | Visitor data stays on my server; no third-party tracking, no sampling |
| **Listmonk** | Mailchimp | The subscriber list is mine; no per-contact bill |
| **n8n** | Zapier / Make | Unlimited runs, real code when a workflow outgrows the GUI, data never leaves my box |
| **Supabase** | Firebase | Plain Postgres I control, not a proprietary datastore I rent |
| **LM Studio** | Cloud LLM APIs | Prompts and documents never get shipped to a third party |

None of these is a wishlist item. The analytics counting this visit and the newsletter form at the bottom of this page both run on that self-hosted setup: Umami and Listmonk, on my own hardware.

## Why owning beats renting

**Cost stops being a meter.** Rented SaaS bills per seat, per contact, per task, per run, so your bill grows with your success. Self-hosted, one more workflow or ten thousand more subscribers cost roughly nothing extra. You pay for the box, not for using it.

**Your data stays put.** Analytics, email lists, customer records, the documents an automation reads: all of it stays on infrastructure I control, in the EU. Under the GDPR that isn't a nice-to-have; for anyone handling client data it's the whole point.

**Nothing is a black box.** When a rented tool won't do the thing you need, you file a feature request and wait. When I need n8n to do something its GUI can't, I drop into code. Owning the layer means the ceiling is my own skill, not a vendor's roadmap.

## "So should everyone self-host?"

No, and I'd distrust anyone who said yes. If you're small and moving fast, rented tools are the right call, and I still use them where they earn their place. Self-hosting starts to pay off when one of these is true:

- Your data can't leave the EU: GDPR, professional confidentiality, a regulated industry.
- The per-seat or per-run bill has quietly become a tax on growth.
- You've hit the wall of what the SaaS will let you change.

The honest sequence is: start on rented tools, then own the load-bearing pieces as they start to matter. The catch, and it's the part that decides everything, is that owning them *well* isn't a weekend of following a tutorial. It's Docker, a reverse proxy, backups, auth, monitoring, updates. Done right, "self-hosted" means resilient and private. Done badly, it means a liability with your customers' data sitting on it. That gap is engineering, and it's exactly the part a low-code guide leaves out.

## Each pick, compared in detail

For the load-bearing tools I've written up the head-to-head against the SaaS they replace, each from running it in production:

- [Umami vs Google Analytics](/blog/en/umami-vs-google-analytics/), analytics with no cookie banner and no sampling
- [Listmonk vs Mailchimp](/blog/en/listmonk-vs-mailchimp/), owning the list instead of paying per contact
- [Self-hosted Supabase vs Firebase](/blog/en/self-hosted-supabase-vs-firebase/), Postgres you own vs proprietary NoSQL
- [Postiz vs Buffer](/blog/en/postiz-vs-buffer/), social scheduling without per-channel billing

## Want a setup like this for your business?

Owned automation (built on your infrastructure, documented, handed to your team) is what I do for companies at [Leinss Consulting](https://consulting.leinss.xyz/en/). Start fast on proven tools; own the parts that matter. No lock-in, no rented black boxes.
