---
title: "kAIros — Privacy Policy"
slug: "/projects/kairos/privacy"
description: "Privacy Policy for the kAIros goal-coaching app (Android & Web)"
date: "07/07/2026"
---

_Last updated: 7 July 2026_

kAIros is an AI goal-coaching app for Android and the web. It helps you set goals, break them
into steps, and stay on track with reminders and an AI coach. This policy explains exactly
what data kAIros processes, where it goes, and the choices you have. It applies to the kAIros
mobile app and the kAIros web app.

## Controller

Tobias Leinss<br />
Blumenstr. 73<br />
73033 Göppingen<br />
Germany

Email: inquiry@leinss.xyz

## The short version

- kAIros is **self-hosted**. Your account and goal data live on a private server operated by
  the controller in **Germany (EU)** — not on a third-party cloud, and never sold to anyone.
- The **AI coach can run three ways, your choice**: fully **on-device** (nothing leaves your
  phone), on your **own LAN server**, or in the **cloud**. You pick this in Settings → AI Model.
- Analytics are **anonymous** and self-hosted; there are **no advertising trackers** and we do
  **not** sell your data.

## What data we process

**Account & authentication.** When you sign up we store your email address and an encrypted
authentication token so you can log in and sync across devices. Authentication runs on our
self-hosted [Supabase](https://supabase.com/) instance in Germany.

**Your goals and app content.** The goals, steps, reminders, categories, habits, check-ins and
notes you create are stored in that same self-hosted database so they sync between your devices.
A copy is cached **locally on your device** so the app works offline.

**AI coaching content.** To generate suggestions, step breakdowns and motivational messages, the
relevant text (e.g. a goal title and your progress) is sent to the AI backend **you have
selected**:

- **On-device** — the model runs locally on your phone via `llama.rn`. Your text is processed
  entirely on the device and **is not transmitted anywhere**.
- **LAN server** — your text is sent to a server **you** run on your own network (e.g. LM Studio
  or Ollama). It stays within your own infrastructure.
- **Cloud** — your text is sent to the cloud model provider you configured (by default
  [Anthropic](https://www.anthropic.com/legal/privacy)) to produce the response. Once your text
  reaches that provider, **their** privacy policy applies.

**Voice input (optional).** If you use voice features, the audio you record is transcribed by the
speech provider you selected — this can be **on-device/offline** or a cloud transcription service.
Cloud transcription sends that specific audio clip to the provider; the local recording is removed
after transcription.

**Usage analytics (anonymous).** kAIros uses a **self-hosted [Aptabase](https://aptabase.com/)**
instance to count anonymous, aggregate events (for example "app opened", "goal created"). These
events contain **no personal content** and are not linked to your identity or used to track you
across apps.

**Crash & error diagnostics.** To fix bugs, technical error reports (stack traces, device model,
OS version) may be sent via [Sentry](https://sentry.io/privacy/). These are used solely to
diagnose crashes and are not used for advertising.

**Purchases (if you subscribe).** Premium subscriptions are processed by the app store and by our
payment processors [RevenueCat](https://www.revenuecat.com/privacy/) and
[Stripe](https://stripe.com/privacy). They handle your purchase/receipt data; kAIros receives only
your subscription status, never your card details.

## What we do **not** do

- We do **not** sell or rent your personal data.
- We do **not** run advertising or third-party ad/tracking SDKs.
- We do **not** profile you across other apps or websites.

## Data location & retention

Account and goal data are stored on a private EU (Germany) server for as long as your account
exists. Locally cached data lives on your device until you clear it or uninstall. You can clear
local data any time from **Settings → Clear App Data**. Anonymous analytics are retained only in
aggregate.

## Your choices

- **Choose your AI backend** (including fully offline on-device) in **Settings → AI Model**.
- **Clear local data** in Settings.
- **Delete your account and associated data** by contacting **inquiry@leinss.xyz**.

## Children

kAIros is not directed at children and does not knowingly collect data from anyone under the age
required by your local law.

## Your rights (GDPR)

You have the right to access, rectify, erase, restrict and port your personal data, and to object
to processing (Arts. 15–21 GDPR). To exercise these rights, or to delete your account, contact
**inquiry@leinss.xyz**. The general [leinss.xyz privacy policy](/privacy) additionally describes
your GDPR rights and the supervisory authority you may contact.

## Changes

If this policy changes, the updated version will be published at this URL with a new date.

## Contact

Questions: **inquiry@leinss.xyz**
