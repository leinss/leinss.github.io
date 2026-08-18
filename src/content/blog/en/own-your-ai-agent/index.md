---
title: "Own the agent, not just the model"
description: "Renting a model API is fine. Renting the agent (the harness that decides, remembers, and acts) is where you give up control. Why I run open, self-hostable agent harnesses like Pi and OpenClaw."
date: "Jul 4 2026"
tags: ["ai-agents", "pi", "openclaw", "self-hosting", "own-your-stack"]
lang: "en"
---

> **Short answer:** The model is the easy part to swap; the agent is the part that matters. The agent harness is the loop that decides what to do, remembers what happened, and calls tools on your behalf. Rent that from a closed product and you don't control your prompts, your history, your tools, or which model runs. I run open, self-hostable harnesses instead (Pi as the minimal core, OpenClaw as the assistant around it) so the agent is mine to reshape and the data stays with me.

Everyone's talking about which model is best. Fewer people notice that the model is the one part you can already swap out with a config change. The thing that actually shapes your experience, and quietly owns your data, is the layer around the model: the **agent harness**. It's worth owning that, and it's the same argument I make about [the rest of my stack](/blog/en/self-hosted-stack/).

## Model vs agent: what's actually what

The **model** is the LLM behind an API: Claude, a Kimi, a local model. It's stateless; you send it text, it sends text back.

The **agent** is everything that turns that into something useful: the loop that reads your request, decides which tool to call, runs it, feeds the result back, remembers the conversation, and keeps going until the job's done. That loop is the harness. It holds your prompts, your history, your tool permissions, and the choice of which model to call.

When you use a closed AI assistant product, you're renting the harness. The model underneath is almost incidental. You can't see the loop, can't change the tools, can't take your history elsewhere, and can't point it at a different model when a better or cheaper one appears.

## What owning the harness gets you

I run open harnesses for exactly the reasons I self-host the rest of the stack:

- **Reshape the loop.** [Pi](https://github.com/earendil-works/pi) is a minimal, extensible agent harness, a terminal agent you bend around your own workflow with your own tools. When I need it to behave differently, I change it, I don't file a request.
- **Own the keys and the data.** The prompts, the transcripts, the files an agent touches, all of it stays with me. Nothing routes through a product I don't control.
- **Point it at any model.** Bring-your-own-key means I choose the model per task, cloud or local. For anything sensitive I can run it against a model on my own machine through [LM Studio](https://lmstudio.ai/), so the text never leaves the box.
- **No lock-in.** [OpenClaw](https://openclaw.ai/) puts an agent on the channels I already use, self-hosted on my own devices. It's built on Pi under the hood, it's open source, and if I want out, I own the whole thing anyway.

## The honest caveat

Owning the agent is more work than opening a chat tab. You run it, you update it, you wire up its tools, you keep its keys. If you just want to ask a chatbot a question now and then, a rented product is the right call, and I still use those where they earn their place.

But an agent that does real work (reads your files, touches your systems, acts on your behalf) is exactly the kind of load-bearing layer worth owning, for the same reason you'd own the automation it drives. Rent the model if you like; own the agent.

## Read next

- [Pi vs OpenClaw](/blog/en/pi-vs-openclaw/): the minimal agent core and the assistant gateway around it, and when to reach for each.
- [How I run a self-hosted research agent in my daily work](/blog/en/self-hosted-research-agent/), the practical setup.

Owned automation and owned agents are the same idea one layer apart. If you want either built for your business and handed over, that's what I do at [Leinss Consulting](https://consulting.leinss.xyz/en/).
