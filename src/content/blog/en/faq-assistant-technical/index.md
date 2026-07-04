---
title: "How I built a RAG FAQ assistant with n8n and Kimi"
description: "A technical teardown of the FAQ-assistant workflow: embeddings, vector search over a Postgres knowledge base, and a grounded answer — the retrieval-augmented generation pattern in n8n."
date: "Jul 4 2026"
tags: ["n8n", "rag", "kimi", "ai", "teardown", "own-your-stack"]
lang: "en"
---

> **Short answer:** The FAQ assistant is retrieval-augmented generation in ten n8n nodes: embed the question, search a Postgres knowledge base for the closest passages, hand those to Kimi K2 as context, and return a grounded answer. The retrieval step is what stops the model inventing things — it can only answer from what the search returns. This is the teardown of the [live FAQ demo](https://leinss-consulting.de/en/blog/faq-automation-ai-support/).

A chatbot that makes up answers is worse than no chatbot. The [FAQ assistant on my consulting site](https://leinss-consulting.de/en/blog/faq-automation-ai-support/) only answers from a knowledge base I control, and refuses when the answer isn't in there. That behaviour is retrieval-augmented generation (RAG), and here's how it's wired. You can [download the workflow JSON](https://leinss-consulting.de/workflows/faq-assistent.json) and inspect every node.

## The RAG pipeline

| Stage | Node(s) | What happens |
| --- | --- | --- |
| Intake | Webhook → validate → if | Take the question, reject empty input |
| Embed | HTTP → embeddings | Turn the question into a vector (Moonshot embeddings) |
| Retrieve | HTTP → vector search | Find the 5 closest passages in the Postgres store |
| Ground | Code → build request | Assemble those passages into the prompt as context |
| Generate | HTTP → Kimi K2 | Answer *only* from the supplied context |
| Return | Code → format → respond | Clean the reply and send it back |

## Retrieval is the whole trick

The generation step is ordinary. The part that makes it trustworthy is retrieval. The question gets embedded into a vector, and that vector is compared against the embedded knowledge base with a similarity search — I ask for the top 5 matches above a 0.5 threshold. Only those passages go into the prompt. If nothing clears the threshold, the model has nothing to answer from and says so, instead of guessing.

The knowledge base itself is filled by a separate ingestion workflow that chunks the source documents, embeds each chunk, and stores it. Keeping ingestion separate means I can re-index content without touching the live answer path.

## Where n8n stops and code starts

n8n handles the webhook, the HTTP calls, and the branching. The judgment lives in the code nodes:

- **Validate** rejects empty or malformed questions before any paid API call fires.
- **Build request** is the important one: it takes the raw search results, trims them to what fits, and constructs the context-grounded prompt with clear instructions to answer only from the passages provided.
- **Format** parses the model's reply, handles the empty-response case, and shapes the JSON the webhook returns.

That middle node is where retrieval becomes an *answer*. You can't express "assemble these five passages into a grounded prompt and nothing more" in a dropdown — it's a few lines of real code, which is exactly [where n8n stops and code takes over](/blog/en/n8n-automation-stack/).

## Why self-hosted matters here

The knowledge base is company data, and the questions users ask are often sensitive. Running the store and the workflow on infrastructure I control means neither leaves my box except for the model call itself. That's the point of [the self-hosted stack I run instead of paying for SaaS](/blog/en/self-hosted-stack/). If you want a grounded assistant over your own docs, built and handed over, that's what I do at [Leinss Consulting](https://leinss-consulting.de/en/).
