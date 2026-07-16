---
title: "TobiSound — Privacy Policy"
slug: "/projects/tobisound/privacy"
description: "Privacy Policy for the TobiSound Android music player"
date: "07/16/2026"
---

_Last updated: 16 July 2026_

TobiSound is a native Android music player for the media servers and local files
**you** own. This policy explains exactly what the app does and does not do with
your data, and applies to the TobiSound Android app.

## Controller

Tobias Leinss<br />
Blumenstr. 73<br />
73033 Göppingen<br />
Germany

Email: inquiry@leinss.xyz

## The short version

- **We collect nothing.** TobiSound has **no account, no analytics, no
  telemetry, no ads, and no backend of ours**. We operate no servers and receive
  no data about you or your listening.
- **Everything lives on your device.** Your server connections, credentials,
  library cache, artwork, downloads, and settings are stored locally on your
  phone.
- **Every network connection is one you configure.** TobiSound only ever talks
  to the servers you set up yourself, plus the optional services you explicitly
  enable.

## What stays on your device

- **Media-server credentials.** The username, password, or token for each
  Subsonic/Navidrome or Jellyfin server you add is stored **encrypted on your
  device** (Android Keystore / Tink). It is never transmitted to us and is sent
  **only** to the server it belongs to, to authenticate your own requests.
- **Your library and playback data.** Browsing cache, playlists, play state,
  downloaded tracks, cached artwork, and app settings are all kept locally. None
  of it is sent to us — we have no server to send it to.

## Network connections (all under your control)

TobiSound connects to the internet or your local network **only** for things you
set up:

- **Your media servers.** The Subsonic/Navidrome and Jellyfin servers you add,
  to browse and stream **your** music. TobiSound talks only to the addresses you
  enter.
- **Local files.** Music stored on your device is read directly and involves no
  network connection at all.
- **Scrobbling (optional, opt-in).** If you enable it and supply your own
  tokens, TobiSound reports what you play to **ListenBrainz** and/or
  **Last.fm**. This is off unless you turn it on; without your tokens no
  listening data leaves the app.
- **Synced lyrics (optional).** If enabled, TobiSound fetches time-synced lyrics
  from **[LRCLIB](https://lrclib.net/)** for the track you are playing;
  lyrics embedded in your files are read locally with no network request.
- **Chromecast (local network).** When you cast, a **temporary,
  token-protected HTTP server runs on your own device** for the duration of the
  cast session so the Cast device on your local network can fetch the audio. It
  is reachable only on your network and only while you are actively casting, and
  it shuts down when the session ends.

Once your data reaches a service **you** chose — your own server, ListenBrainz,
Last.fm, LRCLIB, or Google's Cast platform — **their** privacy policy applies to
what they do with it.

## Permissions

- **Internet / network state** — to reach the servers and optional services you
  configured, and to cast on your local network.
- **Foreground service & notifications** — to keep music playing in the
  background and show the playback controls you interact with. This does not
  involve collecting your data.
- **Media / audio access** — only to find and play the music files on your own
  device, when you choose local playback.

TobiSound requests no permissions beyond what the features you use require, and
uses none of them to collect information about you.

## Data sharing & sale

We do not collect your data, so there is nothing for us to share or sell. The
only data that ever leaves your device goes to the servers and optional services
**you** configured, for the sole purpose of playing your music, and only when
you use those features.

## Children

TobiSound is not directed at children and does not knowingly collect data from
anyone.

## Deleting your data

All TobiSound data is stored on your own device, so you stay in full control:

- **Remove a server** in the app to delete its stored connection and credentials.
- **Clear the app's storage** (Android Settings → Apps → TobiSound → Storage) to
  wipe the library cache, downloads, and settings.
- **Uninstall** the app to remove everything at once.

Because we hold none of your data, there is nothing for us to delete on our side.
The general [leinss.xyz privacy policy](/privacy) additionally describes your
GDPR rights and the supervisory authority you may contact.

## Changes

If this policy changes, the updated version will be published at this URL with a
new date.

## Contact

Questions: **inquiry@leinss.xyz**
