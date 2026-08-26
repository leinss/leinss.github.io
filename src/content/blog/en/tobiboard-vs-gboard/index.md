---
title: "TobiBoard vs Gboard: A Privacy-First Keyboard Comparison"
description: "How TobiBoard, an open-source Android keyboard whose AI runs on-device, compares to Gboard on privacy, data collection, AI features, and control."
date: "Jul 4 2026"
tags: ["tobiboard", "gboard", "android", "privacy", "keyboard"]
lang: "en"
---

> **Short answer:** Gboard is polished and deeply tied into Google's ecosystem; TobiBoard is open-source, keeps your typing on-device, and sends no telemetry to anyone. Both type offline. The real difference is control: Gboard is closed-source software from an advertising company, while TobiBoard has no account, no backend, and runs even its voice-to-text and text fix on your phone. I built TobiBoard for people who want the second thing.

I fork and maintain [TobiBoard](/projects/TobiBoard/), so I'm not neutral here, but I'll keep the comparison fair. Gboard is a genuinely good keyboard. The question is what you trade for it.

## Side by side

| Dimension | TobiBoard | Gboard |
|-----------|-----------|--------|
| Source | Open (GPL-3.0, HeliBoard fork) | Closed (Google) |
| Telemetry | None, no backend | Sends usage data to Google |
| Account | None | Google ecosystem |
| Everyday typing | On-device, offline | On-device + Google services |
| AI features | On-device by default, cloud optional with your own key | Google's, in Google's cloud |
| Cost | Free | Free |
| Where to get it | GitHub, Obtainium, self-hosted F-Droid | Play Store / pre-installed |
| Best for | Control and privacy | Convenience, Google integration |

## What they share

Both keyboards do the everyday work (typing, glide, autocorrect, suggestions, multilingual dictionaries) **on your device, offline**. If all you want is a keyboard that works without a connection, either one does that.

TobiBoard inherits this from [HeliBoard](https://github.com/Helium314/HeliBoard) (AOSP/OpenBoard lineage), which it's forked from. That's the foundation; the differences are what sits on top.

## Where they differ

**Source and telemetry.** Gboard is closed-source and made by Google. It sends usage data back to improve its models and services. TobiBoard is GPL-3.0, has no backend at all, and collects nothing, there's no server for your data to go to.

**AI, and where it runs.** Gboard's smart features run through Google. TobiBoard ships **two AI helpers that run on the phone itself**:

- **Voice-to-Text**: long-press Return, tap the mic, speak; your words come back as text. Transcription happens locally on Parakeet TDT 0.6B via [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx), and auto-detects English, German, Spanish and French.
- **Text Fix**: select rough text, hit Fix, get a clean version in the same language. Runs locally on Qwen 2.5 through MediaPipe.

No account, no API key, and dictation works in aeroplane mode. The cost is real and worth stating: each model is a one-time download of a few hundred megabytes, and a phone is slower than a datacentre.

If you would rather use a cloud model, that is the opt-in: add your own [OpenRouter](https://openrouter.ai/) or [PayPerQ](https://ppq.ai/) key and the AI features route there instead, with OpenRouter defaulting to zero data retention. Either way it goes to a provider *you* chose, not to me and not to Google.

**How you install it.** Gboard comes from the Play Store or pre-installed. TobiBoard ships outside the store: grab the [APK from GitHub Releases](https://github.com/leinss/TobiBoard/releases/latest), point [Obtainium](https://github.com/ImranR98/Obtainium) at the repo for automatic updates, or add the self-hosted F-Droid repo at [leinss.xyz/TobiBoard/repo](https://leinss.xyz/TobiBoard/repo).

## Which should you pick?

- **Stay on Gboard** if you're happy in Google's ecosystem and want the most polished, feature-complete keyboard with zero setup.
- **Switch to TobiBoard** if you want your typing to stay yours: open-source, no telemetry, no account, and AI that runs on your own phone rather than someone's servers.

TobiBoard is open source: read the code, build it yourself, or file an issue: [github.com/leinss/TobiBoard](https://github.com/leinss/TobiBoard). If privacy on your own devices is the theme, you might also like [TobiVoice](/projects/TobiVoice/) for on-device voice-to-text on the Mac.
