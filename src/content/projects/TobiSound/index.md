---
title: "TobiSound"
slug: "TobiSound"
description: "A native Android music player for your own media servers and local files — gapless playback, offline downloads, Chromecast, Android Auto and TV, with no accounts and no telemetry."
date: "2026-07-16"
---

![TobiSound](/images/projects/TobiSound/feature.png)

**TobiSound** is a native Android music player for the libraries **you** already
own. Point it at your self-hosted **Subsonic/Navidrome** or **Jellyfin** server,
or play music straight from your device, and browse everything as one library.
There is **no account, no TobiSound server, no tracking, and no ads** — the app
only ever talks to the servers you configure.

## What it does

- **Multi-backend, one library** — connect Subsonic/Navidrome, Jellyfin, and
  local device files; browse a single merged catalog while playback always
  routes back to the server that owns each track.
- **Gapless playback** — seamless transitions for live albums and DJ mixes.
- **Offline downloads** — keep albums and playlists on-device for listening
  without a connection.
- **Chromecast** — stream to Cast devices on your local network.
- **Android Auto** — browse and control your library from the car.
- **Android TV** — a dedicated big-screen experience.
- **Scrobbling** — optional listening history to **ListenBrainz** and/or
  **Last.fm**, only when you enable it and add your own tokens.
- **Synced lyrics** — time-synced lyrics from **LRCLIB** and embedded tags.
- **Sleep timer** — fade out and stop after a set time.
- **Home-screen widget** — playback controls without opening the app.

Your server credentials stay **encrypted on your device**, the app collects
nothing, and every network connection is one you set up yourself.
→ [Privacy policy](/projects/tobisound/privacy)

## Built for your own music

TobiSound is Kotlin, Jetpack Compose and media3, with a provider layer that lets
one app speak to several backends behind a single, capability-aware library. It
is designed for people who self-host their music and want a fast, modern,
private player that never phones home.
