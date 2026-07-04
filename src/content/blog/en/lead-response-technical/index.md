---
title: "How I automate personalized lead responses with n8n and Kimi"
description: "A technical teardown of the lead-response workflow: a two-stage LLM pipeline that classifies an inbound lead, then drafts a personalized reply in the right language."
date: "Jul 4 2026"
tags: ["n8n", "kimi", "ai", "automation", "teardown", "own-your-stack"]
lang: "en"
---

> **Short answer:** The lead-response bot runs two LLM passes over a contact-form submission: first Kimi K2 classifies the lead (intent, fit, language) into JSON, then a second Kimi call uses that classification to draft a personalized reply in the sender's language. n8n handles the form, the branching, and the send; code nodes validate the input and parse the classification between the two passes. Splitting classify-then-write is what makes the reply feel targeted. This is the teardown of the [live lead-response demo](https://leinss-consulting.de/en/blog/automating-communication/).

A generic auto-reply is worse than a slow human one. The [lead-response demo on my consulting site](https://leinss-consulting.de/en/blog/automating-communication/) reads an inbound message and drafts a reply that actually responds to it. The trick is doing it in two passes, not one. The [workflow JSON is downloadable](https://leinss-consulting.de/workflows/blitz-antwort.json).

## Two passes, not one

| Stage | Node(s) | What happens |
| --- | --- | --- |
| Intake | Webhook → validate → if | Take name, email, message, company; reject if incomplete |
| Classify | HTTP → Kimi K2 | Score intent, fit, and language as JSON |
| Parse | Code → parse | Turn the classification into a usable object |
| Draft | HTTP → Kimi K2 | Write a personalized reply, steered by the classification |
| Assemble | Code → build email | Set subject and body in the right language |
| Return | Respond | Confirm receipt |

## Why classify before writing

You could ask one prompt to "read this and reply." It works, badly — the model has to guess tone and intent while it writes. Splitting the job is more reliable:

1. **Classify** runs first with a system prompt that turns it into a lead-qualification assistant. It returns structured fields: what the lead wants, how good a fit it is, and which language they wrote in.
2. **Draft** runs second. It gets the original message *and* the classification, with a persona system prompt, so it writes in a consistent voice aimed at that specific lead and answers in their language.

The classification also gives me something to route on later — a hot lead and a tyre-kicker can get different handling — without re-reading the message.

## Where n8n stops and code starts

n8n owns the webhook, the two HTTP calls, and the response. The two code nodes are the seams:

- **Validate** checks name, email, and message are present before spending a single token.
- **Parse classification** does the unglamorous but essential work: strip the model's ```` ```json ```` fences, `JSON.parse`, and fail safely if the shape is off — so the draft step always gets clean structured input.
- **Assemble email** reads the language flag from the classification and builds the subject and body accordingly.

That parse-between-passes node is pure "where code starts": you can't reliably chain two model calls in a GUI without a bit of real code cleaning the handoff. It's the boundary I keep hitting, described in [my n8n automation stack](/blog/en/n8n-automation-stack/).

## Why it runs on my own stack

Inbound leads are business data, and the reply goes out under my name. Running the pipeline on infrastructure I control means the message and the classification stay with me, apart from the model calls I choose to make. That's the logic of [the self-hosted stack I run instead of paying for SaaS](/blog/en/self-hosted-stack/). Want fast, personalized lead handling built for your pipeline and handed over? That's what I do at [Leinss Consulting](https://leinss-consulting.de/en/).
