---
title: "Now"
slug: "/now"
description: "What I'm working on right now."
date: "2026-08-26"
---

Two things have my attention: the infrastructure under a blockchain protocol, and a set of privacy-first apps that run on your own device.

## The day job

I'm a senior backend engineer at [Gnosis](https://www.gnosis.io), working on [Circles](https://aboutcircles.com). I own the backend services and the whole platform under them, from service code through deployment to monitoring: six hosts serving over 1.5 million requests a day, seven public services sitting at 99.99% uptime.

Most of what I've built there falls into three buckets. Four backend services written from the first commit, in TypeScript on PostgreSQL. Most of the protocol indexer, a C# plugin inside the execution client, whose query layer I rebuilt: p95 response times came down by between 5x and 141x depending on the call. And the platform itself, which moved off managed cloud onto bare metal, replacing Terraform and Kubernetes with thirty-eight Ansible roles that deploy blockchain nodes and PostgreSQL with automated failover, replication and pooling, host by host without downtime. Monthly cost fell by two thirds, and a merged change now reaches production in 10 to 20 minutes.

I care about the observability more than is probably normal. Two-tier health checks pull an unhealthy node out of DNS within 90 seconds, and a year of metrics means a regression is a question with an answer rather than an argument.

## The apps

Alongside that I build **privacy-first apps**: tools that run on your own device, work without accounts or a backend, and only reach the cloud when *you* bring your own AI key. No telemetry, no data collection, no lock-in.

Most of that time goes into [TobiBoard](/projects/TobiBoard), an on-device Android keyboard with optional bring-your-own-key AI voice-to-text and text fixing, and [TobiReader](/projects/TobiReader), a local-first RSS reader with on-device read-aloud and optional AI summaries. TobiBoard ships from my own [F-Droid repository](https://leinss.xyz/TobiBoard/repo). Around those sits a small portfolio: a cross-platform screen recorder, macOS voice-to-text and menu-bar utilities, and a few AI-assisted side projects. The full list is on the [projects page](/projects).

The thread through all of it is seeing how far useful, AI-flavoured software can go while keeping user data on the user's own hardware. In practice that's two patterns: run models locally where it's feasible, and bring-your-own-key for the rest, so anything cloud-bound uses *your* API key and endpoint, never mine.

## And some consulting

I also take on work through [Leinss Consulting](https://consulting.leinss.xyz), helping service companies put generative AI to work. Currently an e-commerce storefront with a back-office product management app, and dispatch and route planning for a fuel delivery business.

Based in Germany, relocating to Asia. This is a [now page](https://nownownow.com/about); last updated August 2026.
