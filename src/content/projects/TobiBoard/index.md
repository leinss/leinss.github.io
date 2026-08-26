---
title: "TobiBoard"
slug: "TobiBoard"
description: "A privacy-first Android keyboard whose AI voice-to-text and text fix run on the device itself, with no account and no API key."
date: "Jun 2026"
demoURL: "https://github.com/leinss/TobiBoard/releases/latest"
repoURL: "https://github.com/leinss/TobiBoard"
---

![TobiBoard](/images/projects/TobiBoard/feature.png)

**TobiBoard** is a fast, private Android keyboard that runs **entirely on your device**: a fork of [HeliBoard](https://github.com/Helium314/HeliBoard) with all of its offline typing, glide, autocorrect, suggestions and dictionaries. On top of that it adds **two AI helpers that also run on your device**, plus a clipboard manager.

## Two AI features, on-device by default

- **Voice-to-Text**: long-press Return, tap the mic, speak; your words land as text. Transcription runs locally on [Parakeet TDT 0.6B](https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3) via [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx), and auto-detects English, German, Spanish and French.
- **Text Fix**: select rough text, hit Fix; get back a clean, well-formatted message in the same language. Runs locally on Qwen 2.5 through [MediaPipe](https://ai.google.dev/edge/mediapipe/solutions/genai/llm_inference); Gemma is available too.

Both default to the on-device engine. That means **no account, no API key, no subscription, no telemetry and no backend**, and dictation works in aeroplane mode. The trade-off is honest: each model is a one-time download of a few hundred megabytes, and the phone does the work, so it is slower than a datacentre.

If you would rather use a cloud model, that stays an opt-in: add your own [OpenRouter](https://openrouter.ai/) or [PayPerQ](https://ppq.ai/) key and the AI features route there instead. OpenRouter routes default to **zero data retention**. Nothing goes to a server of mine either way; there isn't one.

Your typing never leaves the device, any API key you do add is encrypted with the Android Keystore, and the microphone is only used while you're actively dictating. → [Privacy policy](/projects/tobiboard/privacy)

## Get it

- **APK**, download from [GitHub Releases](https://github.com/leinss/TobiBoard/releases/latest).
- **Automatic updates**: install [Obtainium](https://github.com/ImranR98/Obtainium) and point it at this GitHub repo; it tracks new releases for you, no store needed.
- **F-Droid (self-hosted)**, add the repo at [leinss.xyz/TobiBoard/repo](https://leinss.xyz/TobiBoard/repo) for signed updates through your F-Droid client.

TobiBoard installs side-by-side with HeliBoard, so you can keep both.

![Screenshot](/images/projects/TobiBoard/screenshot.png)

## Open source

GPL-3.0, forked from HeliBoard (AOSP / OpenBoard lineage). Typing and both AI features run on-device; the only thing that can reach the cloud is a provider you opt into with your own key. The bundled speech and LLM runtimes are prebuilt binaries, which is why the app ships here rather than through F-Droid's main repository. Source and build instructions: [github.com/leinss/TobiBoard](https://github.com/leinss/TobiBoard).
