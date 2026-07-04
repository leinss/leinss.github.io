---
title: "How I extract invoice data with Claude Vision and n8n"
description: "A technical teardown of the invoice-reader workflow: Claude Sonnet 4 vision, a form trigger, and one code node that turns a scanned invoice into structured JSON."
date: "Jul 4 2026"
tags: ["n8n", "claude", "ai", "automation", "teardown", "own-your-stack"]
lang: "en"
---

> **Short answer:** The invoice reader is three n8n nodes: a form that takes the upload, one HTTP call to Claude Sonnet 4's vision API with the invoice image, and a code node that parses the model's reply into clean JSON. Vision does the reading; the code node does the part a no-code tool can't — stripping the model's markdown fences and safely parsing the result. This is the teardown of the [live invoice demo](https://leinss-consulting.de/en/blog/automating-invoice-processing/).

The [invoice-processing demo on my consulting site](https://leinss-consulting.de/en/blog/automating-invoice-processing/) reads a real invoice and returns structured fields. People assume there's a mountain of OCR rules behind it. There isn't. Here's the whole thing, and you can [download the exact workflow JSON](https://leinss-consulting.de/workflows/n8n-invoice-cloud.json) and run it yourself.

## The whole pipeline is three nodes

| # | Node | What it does |
| --- | --- | --- |
| 1 | Form trigger | Takes the uploaded invoice (image or PDF page) |
| 2 | HTTP → Claude Vision | Sends the image to Claude Sonnet 4, asks for structured fields |
| 3 | Code → Parse JSON | Cleans and parses the model's reply into an object |

That's it. No OCR engine, no template per vendor, no regex zoo. A vision model reads the document the way a person would, so the workflow that used to need dozens of parsing rules collapses to one API call and a bit of glue.

## The vision call

The one real step is an HTTP request to Claude's messages API with the model set to Sonnet 4 and the invoice passed inline as a base64 image. The prompt asks for the fields I care about — number, date, line items, totals, tax — as JSON. Because the model reads pixels, it doesn't care whether the layout is a clean PDF export or a phone photo of a crumpled paper invoice.

## Where n8n stops and code starts

The GUI can fire the HTTP request. What it can't do cleanly is deal with what comes back. Language models like to wrap JSON in a ```` ```json ```` code fence and occasionally add a sentence of commentary. So the third node is a few lines of JavaScript that:

1. Pulls `content[0].text` out of the API response
2. Strips the markdown fences with a regex
3. Extracts the outermost `{ ... }` block and runs `JSON.parse`

None of that is hard, but all of it is the difference between a demo and something you can trust in production. This is the exact line where a no-code tool stops being enough and a few lines of real code take over. It's the theme of [where n8n ends and code begins](/blog/en/n8n-automation-stack/), and it shows up in every workflow I ship.

## Why it's built this way

Three nodes means almost nothing to maintain. When a new invoice layout shows up, there's no template to add — the vision model already handles it. The only code is the parse step, and it's stable because the model's output shape is stable. Simple, in this case, is also hard to break.

This runs on my own n8n, part of [the self-hosted stack I run instead of paying for SaaS](/blog/en/self-hosted-stack/). If you want a reader like this built for your document types and handed to your team, that's what I do at [Leinss Consulting](https://leinss-consulting.de/en/).
