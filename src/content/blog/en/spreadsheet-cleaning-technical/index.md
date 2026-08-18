---
title: "How I clean messy spreadsheets with an LLM and n8n"
description: "A technical teardown of the spreadsheet-cleaning workflow: an LLM given raw CSV and plain-language rules, constrained to return valid JSON, with code nodes guarding the input and output."
date: "Jul 4 2026"
tags: ["n8n", "ai", "data-cleaning", "automation", "teardown", "own-your-stack"]
lang: "en"
---

> **Short answer:** The spreadsheet cleaner takes raw CSV plus plain-language instructions ("dedupe, fix capitalisation, split names"), builds a system prompt that tells an LLM to normalise the data and always return valid JSON, and formats the result back out. n8n handles intake and response; code nodes validate the CSV, assemble the prompt, and parse the reply. It works because messy-data rules are easier to describe in a sentence than to code. This is the teardown of the [spreadsheet-rescue demo](https://consulting.leinss.xyz/en/blog/from-spreadsheets-to-systems/).

Cleaning a contact list (deduping, fixing "SMITH, john" into "John Smith", splitting a full-name column) is the kind of task that takes a pile of brittle rules to code and one sentence to describe. So I let an LLM do the describing-to-doing. The [spreadsheet workflow on my consulting site](https://consulting.leinss.xyz/en/blog/from-spreadsheets-to-systems/) is the result, and the [JSON is downloadable](https://consulting.leinss.xyz/workflows/excel-retter.json).

## The pipeline

| Stage | Node(s) | What happens |
| --- | --- | --- |
| Intake | Webhook → validate → if | Take the CSV and the cleaning instructions |
| Prompt | Code → build request | Wrap the data and rules in a strict system prompt |
| Clean | HTTP → LLM | Normalise the data, return valid JSON only |
| Format | Code → format | Parse the reply, handle failures, shape the output |
| Return | Respond | Send the cleaned data back |

## Rules you describe instead of code

The core idea: don't write a parser for every mess. Pass the raw CSV and the user's plain-language instructions to a model, under a system prompt that pins down the contract: "you are a data-cleaning assistant, normalise the data according to the instructions, and always return a valid JSON object." The model applies the rules the way a careful assistant would, and because the contract demands JSON, the output is machine-readable.

This is the right tool for *fuzzy* rules: casing, name splitting, obvious duplicates, inconsistent formats. For hard, deterministic rules you'd still write code. Knowing which is which is most of the job.

## Where n8n stops and code starts

n8n is the webhook and the HTTP call. Everything that makes it trustworthy is in the code nodes:

- **Validate** rejects an empty CSV or missing instructions before the model runs.
- **Build request** is the design work: it constructs the system prompt that fixes the JSON contract and injects the data and rules. Get this node right and the model behaves; get it vague and you get prose back.
- **Format result** parses the reply, throws a clear error on an empty response, and shapes the final JSON.

The prompt-building node is exactly "where code starts", the reliability of the whole thing lives in a few lines that most no-code tools give you no clean place to write. It's the recurring boundary from [my n8n automation stack](/blog/en/n8n-automation-stack/).

## Why I keep the data on my own box

The whole point of cleaning a spreadsheet is that it's *your* data: customers, contacts, orders. Running the workflow on infrastructure I control means the file stays with me apart from the single model call, instead of being uploaded to someone else's cleaning SaaS. That's the argument in [the self-hosted stack I run instead of paying for SaaS](/blog/en/self-hosted-stack/). Want a data-cleaning pipeline built for your formats and handed over? That's what I do at [Leinss Consulting](https://consulting.leinss.xyz/en/).
