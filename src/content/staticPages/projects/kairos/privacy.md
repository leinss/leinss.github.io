---
title: "kAIros, Privacy Policy"
slug: "/projects/kairos/privacy"
description: "Privacy Policy for the kAIros goal-coaching app (Android & Web)"
date: "10/11/2026"
---

_Last updated: 11 October 2026_

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
  the controller in **Germany (EU)**, not on a third-party cloud, and never sold to anyone.
- The **AI coach can run three ways, your choice**: fully **on-device** (nothing leaves your
  phone), on your **own LAN server**, or in the **cloud**. You pick this in Settings → AI Model.
- In the web app, usage statistics and crash reports are **off until you turn them on**, and go
  only to our own server in Germany. The Android test build available now still sends anonymous
  usage counts without asking (see below). There are **no advertising trackers** and we do
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

- **On-device**, the model runs locally on your phone via `llama.rn`. Your text is processed
  entirely on the device and **is not transmitted anywhere**.
- **LAN server**. Your text is sent to a server **you** run on your own network (e.g. LM Studio
  or Ollama). It stays within your own infrastructure.
- **Cloud**. Your text is sent through our own server to
  [OpenRouter](https://openrouter.ai/privacy), which passes it to the model that produces the
  response (by default Google's Gemini 2.5 Flash). Once your text reaches OpenRouter and the
  model's provider, **their** privacy policies apply.

**Voice input (optional).** If you use voice features, the audio you record is transcribed by the
speech provider you selected. This can be **on-device/offline** or a cloud transcription service.
Cloud transcription sends that specific audio clip to the provider; the local recording is removed
after transcription.

**Usage statistics (off unless you turn them on).** The app asks on its last welcome screen, and
you can change the answer any time in **Settings → Privacy**. With a yes, the app sends counts of
what you use, such as "goal created" or "step ticked off", each with a few fixed values (for
example whether the goal was your first).

The Android app sends them to a **self-hosted [Aptabase](https://aptabase.com/)**
(`mobile.funnel.leinss.xyz`), the web app to a **self-hosted [Umami](https://umami.is/)**
(`umami.funnel.leinss.xyz`), together with the type of page you open (for example "a goal page",
never which goal). Both run on our own server in Germany. They never receive your goals, steps or
reminders, your email address or your account id, and set no cookies.

The Android test build available now (version 1.0.0, build 23) has no switch yet and sends
anonymous counts to Aptabase without asking. The next Android build asks first.

**Crash reports (off unless you turn them on).** With a yes, when the app hits an error it sends
the error, where in the app it happened and the app version to a **self-hosted
[GlitchTip](https://glitchtip.com/)** (`errors.funnel.leinss.xyz`) on our own server in Germany.

The app uses the Sentry software library to send them, but nothing goes to Sentry the company.
Crash reports carry no email address and no account id, and the page addresses in them have
every id removed.

**Counts kept on our server.** To know how many people use kAIros and come back, our database
records the days on which your signed-in app was opened (kept for 90 days), and when you signed
up and added your first step to a goal. These never leave our server, only totals are ever
reported to our monitoring, and they are deleted with your account. This does not depend on the switches
above.

**The kAIros landing page** counts visits with the same self-hosted Umami, without cookies.

**Purchases (if you subscribe).** Premium is sold only in the web app, and the payment is
processed by [Stripe](https://stripe.com/privacy). Stripe handles your purchase/receipt data;
kAIros receives only your subscription status, never your card details.

## What we do **not** do

- We do **not** sell or rent your personal data.
- We do **not** run advertising or third-party ad/tracking SDKs.
- We do **not** profile you across other apps or websites.

## Data location & retention

Account and goal data are stored on a private EU (Germany) server for as long as your account
exists. Locally cached data lives on your device until you clear it or uninstall. You can clear
local data any time from **Settings → Clear App Data**. The days your app was opened are deleted
after 90 days. Usage statistics and crash reports hold no account id, so they cannot be traced
back to your account.

## Your choices

- **Choose your AI backend** (including fully offline on-device) in **Settings → AI Model**.
- **Turn usage statistics and crash reports on or off** in **Settings → Privacy**. Both are off
  until you turn them on.
- **Clear local data** in Settings.
- **Download a copy of your data** in **Settings → Download My Data**: one JSON file with everything your account holds, and a CSV of your goals and steps.
- **Delete your account and its data** in **Settings → Delete Account** (also linked from your profile). This permanently deletes your account and the data it holds on our servers, and signs you out. It does not cancel a paid subscription: cancel that in the billing portal first. If you can no longer sign in, email **inquiry@leinss.xyz** from the address on the account.

The Privacy switches, Download My Data and Delete Account are in the web app at
[kairos.funnel.leinss.xyz](https://kairos.funnel.leinss.xyz). The Android test build available now
has none of them; sign in to the web app with the same account to use them. The next Android
build has all three.

## Children

kAIros is not directed at children and does not knowingly collect data from anyone under the age
required by your local law.

## Your rights (GDPR)

You have the right to access, rectify, erase, restrict and port your personal data, and to object
to processing (Arts. 15-21 GDPR). You can download your data (Art. 15 and 20) and delete your
account (Art. 17) yourself in the web app, under Settings. For anything else, contact
**inquiry@leinss.xyz**. The general [leinss.xyz privacy policy](/privacy) additionally describes
your GDPR rights and the supervisory authority you may contact.

## Changes

If this policy changes, the updated version will be published at this URL with a new date.

## Contact

Questions: **inquiry@leinss.xyz**
