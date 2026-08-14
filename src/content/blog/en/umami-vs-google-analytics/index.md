---
title: "Umami vs Google Analytics: the analytics I self-host instead"
description: "How Umami, a self-hosted privacy-first analytics tool, compares to Google Analytics on data ownership, GDPR, cookies, and sampling, from someone who runs it in production."
date: "Jul 4 2026"
tags: ["umami", "google-analytics", "self-hosting", "privacy", "saas-alternatives", "own-your-stack"]
lang: "en"
---

> **Short answer:** Umami is open-source analytics you host yourself; Google Analytics is free because you pay with your visitors' data. Umami keeps every hit on my own server in the EU, needs no cookie banner, and never samples the numbers. GA4 does more and costs more to learn, and it ships your traffic to Google. This site runs on Umami, and here's the reasoning.

The analytics counting your visit right now is Umami, running on infrastructure I own. I moved off Google Analytics on purpose. This is the comparison I'd give anyone deciding between the two.

## Side by side

| Dimension | Umami (self-hosted) | Google Analytics 4 |
| --- | --- | --- |
| Source | Open (MIT) | Closed (Google) |
| Where the data lives | My server, in the EU | Google's cloud |
| Cookie / consent banner | Not needed | Required in the EU |
| Sampling | None, every hit counts | Sampled above thresholds |
| Price | The box it runs on | Free (you pay in data) |
| Setup | Docker + Postgres, you run it | Paste a tag, done |
| Learning curve | One dashboard | GA4 is its own skill |
| Best for | Ownership and a clean read | Ad attribution, deep funnels |

## What they share

Both answer the everyday questions: how many people came, from where, to which pages. For a blog or a small business site, the day-to-day numbers you actually look at are the same in either tool. If all you need is a traffic count, both do it.

## Where they differ

**Where the data goes.** GA4 sends every visit to Google, which is the whole business model: your traffic becomes their data. Umami writes to a Postgres database on a server I control. Nobody else gets a copy.

**The cookie banner.** Because GA4 profiles visitors, using it in the EU means a consent banner and a legal basis under the GDPR. Umami counts visits without cookies and without personal identifiers, so there's nothing to consent to. The banner disappears.

**Sampling.** Above certain volumes GA reports estimate from a sample rather than count every event. Umami counts every hit, so the number on the dashboard is the actual number.

**Complexity.** GA4 is powerful and genuinely hard: events, conversions, a reporting model you have to learn. Umami is one page. If you're running paid ads and need multi-touch attribution, that power is the point. If you just want the truth about your traffic, it's overhead.

## Which should you pick?

- **Stay on Google Analytics** if you run paid acquisition and need its attribution and audience tooling, and you're fine sending traffic data to Google.
- **Switch to Umami** if you want visitor data to stay yours, a site with no cookie banner, and a number you can trust without a sampling asterisk.

The catch worth naming: self-hosting Umami *well* is Docker, a database, a reverse proxy, backups, and updates. Done right it's private and it just runs. That gap is engineering, and it's the theme of [the self-hosted stack I run instead of paying for SaaS](/blog/en/self-hosted-stack/).

If you'd rather have owned, private analytics set up and handed to your team rather than run it yourself, that's the kind of thing I do at [Leinss Consulting](https://leinss-consulting.de/en/).
