---
title: "Where a model beats a parser, and where it doesn't"
description: "Reading messy documents used to mean a template per format. A vision or language model removes that work, but it adds cost, latency, and output you have to validate. Where each approach belongs."
date: "Dec 20 2024"
tags: ["ai", "automation", "integration", "comparison"]
lang: "en"
---

> **Short answer:** Put a model where the input is messy and made by humans (invoices, emails, spreadsheets that grew organically) because that is where a template-per-format parser costs the most to build and breaks the most often. Keep ordinary code where the input is a system's output with a schema. Every model call adds latency, a per-call price, and a reply you have to validate before you trust it, so it should earn its place.

Classic integration work means mapping fields between systems: this column becomes that field, in this format, with these rules. When both ends are systems with schemas, that is the right approach and nothing here argues against it. It is deterministic, it is cheap, and when it breaks it breaks loudly.

The place it gets expensive is the input that never had a schema.

## The template-per-format trap

Take invoices. Every supplier lays them out differently, so classic document processing means OCR plus a template per supplier: coordinates, anchor text, rules for where the total sits. Each new supplier is a new template, each redesign breaks an existing one, and the work never ends because your suppliers do not coordinate their layouts with you.

A vision model reads the page instead of matching positions on it. In [the invoice reader I run](/blog/en/invoice-extractor-technical/), that whole layer collapses into one API call and a parse step: no templates, and a new supplier is not an event. The same shift applies to inbound email, support messages, and [spreadsheets nobody designed](/blog/en/spreadsheet-cleaning-technical/).

## What it costs you

The trade is real, and short:

- **Money per run.** A parser costs CPU. A model costs per call, forever. At high volume that changes the arithmetic.
- **Latency.** Hundreds of milliseconds to seconds per call, versus microseconds.
- **Nondeterminism.** The same input can produce a differently shaped answer. This is why every one of my workflows has a code node that validates and parses the reply rather than trusting it.
- **No audit trail by default.** "The model decided" is not an explanation. If you need to show why a value was extracted, you have to build that.

What it does *not* buy you: a system that fixes itself. A model does not learn from your corrections between calls, and it does not notice that an upstream API changed. Those still land on you.

## Where each one belongs

- **Ordinary code** for system-to-system data with a schema, for anything that must be auditable or exactly reproducible, and for high-volume paths where per-call cost matters.
- **A model** for reading human-made documents and free text, for classification that needs to understand meaning rather than match keywords, and for the long tail of formats you would otherwise write a template for.
- **Both**, most of the time: a model at the edge to turn mess into structure, ordinary code in the middle to decide and record what happens next. That is the same seam I describe in [where n8n stops and code starts](/blog/en/where-n8n-stops-and-code-starts/).

## If you want to try it on one flow

Pick the integration that breaks most often, and check whether it breaks because the input is human-made. If it does, put a model in front of it to produce structured output, keep your existing logic behind that, and compare error rates for a month. If it breaks for any other reason, a model will not help and you have saved yourself the bill.
