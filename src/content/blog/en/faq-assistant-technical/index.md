---
title: "How I built a RAG FAQ assistant with n8n and Kimi"
description: "A technical teardown of the FAQ-assistant workflow: embeddings, vector search over a Postgres knowledge base, and a grounded answer, the retrieval-augmented generation pattern in n8n."
date: "Jul 4 2026"
tags: ["n8n", "rag", "kimi", "ai", "teardown", "own-your-stack"]
lang: "en"
---

> **Short answer:** The FAQ assistant is retrieval-augmented generation in ten n8n nodes: search a Postgres knowledge base for the passages closest to the question, hand those to Kimi K2 as context, and return a grounded answer. The retrieval step is what stops the model inventing things. It can only answer from what the search returns. This is the teardown of the [live FAQ demo](https://leinss-consulting.de/en/blog/faq-automation-ai-support/).

A chatbot that makes up answers is worse than no chatbot. The [FAQ assistant on my consulting site](https://leinss-consulting.de/en/blog/faq-automation-ai-support/) only answers from a knowledge base I control, and refuses when the answer isn't in there. That behaviour is retrieval-augmented generation (RAG), and here's how it's wired. You can [download the workflow JSON](https://leinss-consulting.de/workflows/faq-assistent.json) and inspect every node.

## The RAG pipeline

| Stage | Node(s) | What happens |
| --- | --- | --- |
| Intake | Webhook → validate → if | Take the question, reject empty input |
| Retrieve | HTTP → knowledge-base search | Ask Postgres for the 5 best-matching passages |
| Ground | Code → build request | Assemble those passages into the prompt as context |
| Generate | HTTP → Kimi K2 | Answer *only* from the supplied context |
| Return | Code → format → respond | Clean the reply and send it back |

## Retrieval is the whole trick

The generation step is ordinary. The part that makes it trustworthy is retrieval: the prompt gets the top five passages the search returns and nothing else, so the model can only answer from what is in the knowledge base.

**How that search works is a choice, and I have made it twice.** The workflow JSON you can download does the textbook thing: one call to an embeddings API turns the question into a vector, and a similarity search returns the closest passages above a 0.5 threshold. The instance behind the live demo skips the embedding call entirely and uses Postgres full-text search over the same German-language corpus, reached through a small PostgREST endpoint. That is one HTTP call instead of two, no per-question embedding cost, and on a knowledge base this size the passages it returns are as good.

Both are retrieval-augmented generation. The retrieval half is swappable, which is the useful thing to know: the grounding argument does not depend on vectors, it depends on the model only seeing what the search returned.

The knowledge base itself is filled by a separate ingestion workflow that chunks the source documents and stores them. Keeping ingestion separate means I can re-index content without touching the live answer path.

## The empty-result case is the one to get right

The interesting failure is a question the corpus cannot answer. The search returns an empty list, and by default n8n treats an empty list as zero items, which short-circuits the rest of the chain and returns an empty body to the caller: no answer and no error, the worst of both.

The fix is one setting and one branch. The search node is set to always output data, so the next node runs with zero matches, builds the no-context prompt, and produces a proper "I do not have that, here is how to reach a human" answer. The same node keeps running on error, so if the search backend is down the visitor still gets that answer instead of a failure.

## Where n8n stops and code starts

n8n handles the webhook, the HTTP calls, and the branching. The judgment lives in the code nodes:

- **Validate** rejects empty or malformed questions before any paid API call fires.
- **Build request** is the important one: it takes the raw search results, trims them to what fits, and constructs the context-grounded prompt with clear instructions to answer only from the passages provided.
- **Format** parses the model's reply, handles the empty-response case, and shapes the JSON the webhook returns.

That middle node is where retrieval becomes an *answer*. You can't express "assemble these five passages into a grounded prompt and nothing more" in a dropdown. It's a few lines of real code, which is exactly [where n8n stops and code takes over](/blog/en/where-n8n-stops-and-code-starts/).

## Why self-hosted matters here

The knowledge base is company data, and the questions users ask are often sensitive. Running the store and the workflow on infrastructure I control means neither leaves my box except for the model call itself. That's the point of [the self-hosted stack I run instead of paying for SaaS](/blog/en/self-hosted-stack/). If you want a grounded assistant over your own docs, built and handed over, that's what I do at [Leinss Consulting](https://leinss-consulting.de/en/).
