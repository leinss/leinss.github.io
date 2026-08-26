---
title: "Uses"
slug: "/uses"
description: "The hardware, tools and services I use to build my apps and run my infrastructure."
date: "2026-08-26"
---

A snapshot of what I build with. Inspired by [uses.tech](https://uses.tech). The bias throughout is toward things that work offline, keep data local, and can be rebuilt from a file in a repository rather than a click in a dashboard.

The list is deliberately broad. I would rather know four languages and the infrastructure under them than one language very well, and the same goes for tools: I keep several in rotation instead of settling on one, because a stack you cannot leave is a stack that eventually picks your problems for you.

## Hardware

- **Apple Silicon Mac**: main development machine, and where I run local LLMs.
- **Android devices** for testing [TobiBoard](/projects/TobiBoard) and [TobiReader](/projects/TobiReader), driven over `adb` when a test needs to be repeatable.
- **A small homelab**: a NAS, a mini PC and a Raspberry Pi, which between them run everything in the self-hosted section below. All of it is configured by Ansible, none of it by hand.

## Terminal

I live in the terminal, and most of the tooling is a replacement for something older that I got tired of.

- **zsh**, with `eza` for `ls`, `bat` for `cat`, `fd` for `find`, `ripgrep` for `grep`, `delta` for `diff`, `dust` for `du`, `duf` for `df` and `btop` for `htop`.
- **`jq` and `yq`** for anything shaped like JSON or YAML, **httpie** for HTTP by hand.
- **direnv** for per-project environment, with secrets resolved from the macOS Keychain rather than sitting in a `.envrc`.
- **chezmoi** for dotfiles, with **age** encrypting the parts that need it.
- **fnm** for Node versions, a single `.node-version` keeping local and CI in sync.
- **AI coding harnesses**, more than one on purpose: **Claude Code** day to day, alongside **OpenCode**, **Codex** and whatever else is worth a look. They have genuinely different strengths, the field moves fast enough that committing to one is a bad bet, and running several is the only way to tell which is actually better at a given job rather than which one you are used to.

## Web stack

This site, and most of my web work:

- **Astro** and **MDX** for content-driven sites
- **Tailwind CSS** for styling
- **TypeScript**, linted with **ESLint**
- **pnpm** for packages, **Node 24**
- Deployed to **GitHub Pages**

## Mobile and desktop

- **Kotlin** for Android, **Swift** for macOS, **TypeScript** where a thing should run everywhere.
- **A self-hosted F-Droid repository** plus GitHub Releases for distributing Android builds, so an install does not require a store account.

## On-device and AI tooling

- **Ollama** for local models on the desktop, including the auto-tagging in [taggr](/projects/taggr).
- **On-device speech**: transcription and text-to-speech that run on the phone, so audio never leaves it. TobiBoard dictates with Parakeet TDT 0.6B through sherpa-onnx.
- **On-device LLMs**: Qwen 2.5 through MediaPipe drives TobiBoard's text fix, so the default path needs neither a key nor a network.
- **Bring-your-own-key** cloud models as the opt-in alternative in my apps. The key stays on the user's device and calls go to the provider *you* choose.

## Infrastructure and self-hosting

The professional half of this list, and the part I would defend hardest in an interview.

- **Ansible** for everything. If a box needs a change, it happens in a role and gets applied, not typed into a shell.
- **Docker** and **Traefik** for services and routing.
- **Prometheus, Grafana, Loki and Alertmanager** for metrics, logs and paging, with **Blackbox** for external probes and **cAdvisor** for container-level detail. An alert that cannot fire is worse than no alert, so the rules have their own unit tests that run in CI.
- **Tailscale** so nothing that does not need a public port has one.
- **Borg** for backups, on a tiered schedule, with restores actually exercised.
- **PostgreSQL** with replication, failover and pooling.
- **Gitea**, **FreshRSS**, **SearXNG**, **Navidrome**, **ArchiveBox** and **ntfy**, all self-hosted, because I would rather run a thing than be a product inside it.
- **Frigate** for camera detection and **ioBroker** for home automation, wired together so a detection reaches my phone.
- **umami** for privacy-friendly, cookie-free analytics, and **Listmonk** for the newsletter.

Deliberately not listed: the identity, DNS-filtering and intrusion-detection pieces. They are the parts of a homelab where naming the software is a small favour to somebody scanning, and no favour at all to a reader.
