---
title: "Uses"
slug: "/uses"
description: "The hardware, tools and services I use to build my apps."
date: "2026-06-12"
---

A snapshot of what I build with. Inspired by [uses.tech](https://uses.tech). Everything here leans toward working offline and keeping data local, the same principle behind [my apps](/projects).

## Hardware

- **Apple Silicon Mac**: main development machine, and where I test on-device LLMs locally.
- Android devices for testing [TobiBoard](/projects/TobiBoard) and [TobiReader](/projects/TobiReader).
<!-- TODO(Tobias): add exact Mac model + any other daily-driver gear (monitor, phone, keyboard) you want listed. -->

## Editor & terminal

<!-- TODO(Tobias): confirm your editor (VS Code / Neovim / Android Studio / …) so this isn't a guess. -->
- **zsh** as the shell.
- **fnm** for Node version management (a single `.node-version` keeps local and CI in sync).

## Web stack

This site, and most of my web work, runs on:

- **Astro** + **MDX** for content-driven sites
- **Tailwind CSS** for styling
- **TypeScript**, linted with **ESLint**
- **pnpm** for packages, **Node 24**
- Deployed to **GitHub Pages**

## On-device & AI tooling

- **Ollama** for running local LLMs on the desktop (e.g. the auto-tagging in [taggr](/projects/taggr)).
- **On-device speech**: local transcription and text-to-speech for the mobile apps, so audio never leaves the device.
- **Bring-your-own-key** cloud models for the optional AI features in my apps: the key stays on the user's device, and calls go to the provider *you* choose.
- **Claude Code** for day-to-day development.
<!-- TODO(Tobias): if the on-device Gemma 3 1B / MediaPipe work is real and current, add it back here and in /now. -->

## Self-hosted services

I prefer to host the supporting infrastructure myself rather than hand data to third parties:

- **umami** for privacy-friendly, cookie-free analytics
- **Listmonk** for the newsletter
- A self-hosted **F-Droid** repository for distributing Android builds
