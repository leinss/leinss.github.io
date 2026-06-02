---
title: "TobiBoard"
slug: "TobiBoard"
description: "A privacy-first, on-device Android keyboard with optional, bring-your-own-key AI voice-to-text and text fix."
date: "Jun 2026"
demoURL: "https://github.com/leinss/TobiBoard/releases/latest"
repoURL: "https://github.com/leinss/TobiBoard"
---

![TobiBoard](/images/projects/TobiBoard/feature.png)

**TobiBoard** is a fast, private Android keyboard that runs **entirely on your device** — a fork of [HeliBoard](https://github.com/Helium314/HeliBoard) with all of its offline typing, glide, autocorrect, suggestions and dictionaries. On top of that it adds **two optional AI helpers** you switch on with your own API key, or ignore completely.

## Two optional AI features

- **Voice-to-Text** — long-press Return, tap the mic, speak; your words land as polished text.
- **Text Fix** — select rough text, hit Fix; get back a clean, well-formatted message in the same language.

Both are **off by default** and only run when you add your own [OpenRouter](https://openrouter.ai/) or [PayPerQ](https://ppq.ai/) key. Nothing leaves your device until you opt in, and OpenRouter routes default to **zero data retention**. No account, no subscription, no telemetry, no backend.

## Get it

- **APK** — download from [GitHub Releases](https://github.com/leinss/TobiBoard/releases/latest).
- **Automatic updates** — install [Obtainium](https://github.com/ImranR98/Obtainium) and point it at this GitHub repo; it tracks new releases for you, no store needed.
- **IzzyOnDroid** — inclusion request submitted, in review.

TobiBoard installs side-by-side with HeliBoard, so you can keep both.

![Screenshot](/images/projects/TobiBoard/screenshot.png)

## Open source

GPL-3.0, forked from HeliBoard (AOSP / OpenBoard lineage). Everyday typing stays fully on-device; the two AI features are the only part that reaches the cloud, and only with your own key. Source and build instructions: [github.com/leinss/TobiBoard](https://github.com/leinss/TobiBoard).
