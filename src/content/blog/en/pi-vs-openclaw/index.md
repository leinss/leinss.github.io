---
title: "Pi vs OpenClaw: the minimal agent and the assistant around it"
description: "How Pi and OpenClaw relate — Pi is the minimal, reshapeable agent harness; OpenClaw is the self-hosted personal-assistant gateway built on it — and when to reach for each."
date: "Jul 4 2026"
tags: ["pi", "openclaw", "ai-agents", "self-hosting", "own-your-stack"]
lang: "en"
---

> **Short answer:** Pi and OpenClaw aren't competitors — Pi is the engine, OpenClaw is the car. Pi is a minimal, extensible agent harness you run in the terminal and reshape around your own workflow. OpenClaw is a self-hosted personal assistant that puts an agent on the chat channels you already use, and it runs Pi under the hood. Reach for Pi when you want a coding or automation agent you control end to end; reach for OpenClaw when you want a self-hosted assistant on WhatsApp or Telegram.

People ask whether to use Pi *or* OpenClaw as if it's a choice between rivals. It isn't. One is built on the other. Here's how they actually relate, from running both.

## Side by side

| Dimension | Pi | OpenClaw |
| --- | --- | --- |
| What it is | Minimal agent harness | Personal-assistant gateway |
| Interface | Terminal (TUI) | Chat channels (WhatsApp, Telegram, more) |
| Built on | Its own agent loop | Pi, under the hood |
| Extensibility | Packages and custom tools | The channels and skills around the agent |
| Best for | Coding, automation, custom agents | An everyday assistant you self-host |
| Who runs it | Developers who want to reshape the loop | Anyone wanting an owned assistant |
| Shared trait | Open source, self-hostable, bring-your-own-model | Same |

## What Pi is

[Pi](https://github.com/earendil-works/pi) is a minimal agent harness — a small program that runs the agent loop locally: read the request, call a tool, feed the result back, repeat. Its main interface is a terminal, and the whole point is that it's *reshapeable*: you extend it with packages and your own tools and bend it around how you actually work. It's the "no bloat" end of the coding-agent spectrum — you get the loop and the control, not a walled product.

## What OpenClaw is

[OpenClaw](https://openclaw.ai/) is a self-hosted personal assistant that meets you on the channels you already use — message it on WhatsApp or Telegram and it acts on your behalf. Under the hood, the agent doing the work is Pi. OpenClaw adds the gateway, the channels, and the always-on assistant framing on top. It went from nothing to one of the most-starred projects on GitHub in a week, which tells you how much appetite there is for an assistant you run yourself instead of renting.

## When to reach for which

- **Use Pi** when you want an agent you drive from the terminal for coding, scripting, or custom automation, and you want to shape the loop and tools yourself.
- **Use OpenClaw** when you want a self-hosted assistant for everyday tasks, reachable from chat, without building the gateway yourself.
- **Use both** the way I do: Pi as the agent I reshape for real work, OpenClaw when I want that capability on a chat channel, on my own infrastructure.

The reason either is worth the setup over a rented assistant is the same: you own the harness, the keys, and the data. That's the case in [own the agent, not just the model](/blog/en/own-your-ai-agent/), and the practical side is in [how I run a self-hosted research agent](/blog/en/self-hosted-research-agent/). It's the agent-shaped version of [the self-hosted stack I run instead of paying for SaaS](/blog/en/self-hosted-stack/).
