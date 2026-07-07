---
title: "TobiBoard — Privacy Policy"
slug: "/projects/tobiboard/privacy"
description: "Privacy Policy for the TobiBoard Android keyboard"
date: "06/10/2026"
---

_Last updated: 10 June 2026_

TobiBoard is a privacy-first Android keyboard, forked from
[HeliBoard](https://github.com/Helium314/HeliBoard) (AOSP / OpenBoard lineage). This policy
explains exactly what the keyboard does and does not do with your data, and applies to the
TobiBoard Android app.

## Controller

Tobias Leinss<br />
Blumenstr. 73<br />
73033 Göppingen<br />
Germany

Email: inquiry@leinss.xyz

## The short version

- **Your typing never leaves your device.** TobiBoard does **not** collect, log, transmit, or
  sell what you type. There is no account, no telemetry, and no backend.
- Core typing — suggestions, glide typing, autocorrect, spell check, dictionaries — runs
  **entirely on-device and offline**, exactly like HeliBoard.
- Two **optional** AI features (Voice-to-Text, Text Fix) reach the internet **only when you
  turn them on and supply your own API key**, and only for the specific audio/text you submit.

## What stays on your device

- Everything you type, your learned words, personal dictionary, clipboard history, and
  settings. None of it is sent to us — we have no server to send it to.
- Your AI provider API key, if you add one, is **encrypted with the Android Keystore**,
  excluded from cloud backups, and never written to logs.

## Optional AI features (opt-in, your own key)

TobiBoard has **no on-device speech or language model**; the two AI helpers are cloud-based and
only run on an explicit action with a key **you** provide (e.g.
[OpenRouter](https://openrouter.ai/) or [PayPerQ](https://ppq.ai/)):

- **Voice-to-Text** — when you tap the mic, the audio you record is sent to the provider you
  chose to transcribe it. The local recording is deleted the moment it is sent.
- **Text Fix** — when you invoke it, the text you selected is sent to your chosen provider to be
  rewritten, and the result is returned for you to review.

By default TobiBoard requests **zero-data-retention** endpoints, so when the model offers a ZDR
route your audio and text are not logged, stored, or used for training. Once your data reaches
OpenRouter, PayPerQ, or the underlying model provider, **their** privacy policy applies — see
[OpenRouter's policy](https://openrouter.ai/privacy) and
[PayPerQ's terms](https://ppq.ai/terms) before using these features with sensitive content.

## Permissions

- **Microphone (RECORD_AUDIO)** — only used while you are actively using AI Voice-to-Text. The
  keyboard never records in the background.
- **Internet / Network state** — only used by the optional AI features to reach the provider you
  configured.
- **Contacts (READ_CONTACTS)** — optional; if you allow it, contact names are offered as typing
  suggestions. This is processed **on-device only** and never transmitted.
- **Personal dictionary (READ/WRITE_USER_DICTIONARY)** — to store and use the words you add for
  suggestions. Stays on-device.
- **Notifications, Vibrate, Foreground service, Boot-completed** — used for haptic feedback,
  in-app status notifications, and to keep optional features working reliably. None involve
  collecting your data.

## Data sharing & sale

We do not collect your typing or personal data, so there is nothing for us to share or sell.
The only data transmission that ever occurs is the audio or text **you** explicitly submit to
the AI provider **you** configured.

## Children

TobiBoard is not directed at children and does not knowingly collect data from anyone.

## Your rights (GDPR)

TobiBoard stores your data only on your own device and we hold none of it, so you remain in full
control: uninstalling the app, or clearing its storage, removes the data. For questions about
this policy contact inquiry@leinss.xyz. The general
[leinss.xyz privacy policy](/privacy) additionally describes your GDPR rights and the
supervisory authority you may contact.

## Source code

TobiBoard is open source (GPL-3.0): [github.com/leinss/TobiBoard](https://github.com/leinss/TobiBoard).

## Changes

If this policy changes, the updated version will be published at this URL with a new date.

## Contact

Questions: **inquiry@leinss.xyz**
