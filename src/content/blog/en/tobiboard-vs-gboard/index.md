---
title: "TobiBoard vs Gboard: A Privacy-First Keyboard Comparison"
description: "How TobiBoard, an open-source on-device Android keyboard, compares to Gboard on privacy, data collection, AI features, and control."
date: "Jul 4 2026"
tags: ["tobiboard", "gboard", "android", "privacy", "keyboard"]
lang: "en"
---

> **Short answer:** Gboard is polished and deeply tied into Google's ecosystem; TobiBoard is open-source, keeps your typing on-device, and sends no telemetry to anyone. Both type offline. The real difference is control: Gboard is closed-source software from an advertising company, while TobiBoard has no account, no backend, and adds AI only when you opt in with your own API key. I built TobiBoard for people who want the second thing.

I fork and maintain [TobiBoard](/projects/TobiBoard/), so I'm not neutral here, but I'll keep the comparison fair. Gboard is a genuinely good keyboard. The question is what you trade for it.

## Side by side

| Dimension | TobiBoard | Gboard |
|-----------|-----------|--------|
| Source | Open (GPL-3.0, HeliBoard fork) | Closed (Google) |
| Telemetry | None, no backend | Sends usage data to Google |
| Account | None | Google ecosystem |
| Everyday typing | On-device, offline | On-device + Google services |
| AI features | Optional, bring-your-own-key | Google's, on by default |
| Cost | Free | Free |
| Where to get it | GitHub, Obtainium, self-hosted F-Droid | Play Store / pre-installed |
| Best for | Control and privacy | Convenience, Google integration |

## What they share

Both keyboards do the everyday work (typing, glide, autocorrect, suggestions, multilingual dictionaries) **on your device, offline**. If all you want is a keyboard that works without a connection, either one does that.

TobiBoard inherits this from [HeliBoard](https://github.com/Helium314/HeliBoard) (AOSP/OpenBoard lineage), which it's forked from. That's the foundation; the differences are what sits on top.

## Where they differ

**Source and telemetry.** Gboard is closed-source and made by Google. It sends usage data back to improve its models and services. TobiBoard is GPL-3.0, has no backend at all, and collects nothing, there's no server for your data to go to.

**AI, and who holds the key.** Gboard's smart features run through Google. TobiBoard ships **two optional AI helpers that are off by default**:

- **Voice-to-Text**: long-press Return, tap the mic, speak; your words come back as polished text.
- **Text Fix**: select rough text, hit Fix, get a clean version in the same language.

Both run only when you add your own [OpenRouter](https://openrouter.ai/) or [PayPerQ](https://ppq.ai/) key, and OpenRouter routes default to zero data retention. Nothing reaches the cloud until you opt in, and even then it goes to a provider *you* chose: not to me, and not to Google.

**How you install it.** Gboard comes from the Play Store or pre-installed. TobiBoard ships outside the store: grab the [APK from GitHub Releases](https://github.com/leinss/TobiBoard/releases/latest), point [Obtainium](https://github.com/ImranR98/Obtainium) at the repo for automatic updates, or add the self-hosted F-Droid repo at [leinss.xyz/TobiBoard/repo](https://leinss.xyz/TobiBoard/repo).

## Which should you pick?

- **Stay on Gboard** if you're happy in Google's ecosystem and want the most polished, feature-complete keyboard with zero setup.
- **Switch to TobiBoard** if you want your typing to stay yours: open-source, no telemetry, no account, and AI that only runs on your own key when you ask for it.

TobiBoard is open source: read the code, build it yourself, or file an issue: [github.com/leinss/TobiBoard](https://github.com/leinss/TobiBoard). If privacy on your own devices is the theme, you might also like [TobiVoice](/projects/TobiVoice/) for on-device voice-to-text on the Mac.
