---
title: "TobiTerm"
slug: "TobiTerm"
description: "An Android terminal for driving coding agents on remote machines: a mosh session that survives the walk to the train, with the phone parts a laptop workflow assumes you have."
date: "2026-08-02"
---

**TobiTerm** is a terminal for the half of the work that happens away from the
desk. You start a coding agent on a machine at home or in the cloud, put the
laptop away, and keep working from a phone: approving what it asks, reading
what it changed, and sending it the screenshot that explains the bug.

It is a fork of [Termux](https://github.com/termux/termux-app), so the whole
Linux userland comes with it: a package manager, `ssh`, `git`, `tmux`, and
anything else that installs. What the fork adds is everything a phone needs
that a laptop already had.

## Sessions that survive the journey

Connections drop on a train. **mosh** carries a session across a change of
network, a lost signal and a sleeping phone, and picks it up where it was, no
reconnect, no lost scrollback. Saved hosts open one in a tap, in the userland
you chose for it, and a session that dies says why rather than closing silently.

## Answering an agent without opening the session

An agent that stops to ask permission is a program waiting on its input. A
notification carries the question to the lock screen and its buttons type the
answer straight back into that session: no daemon on the host, no second
connection, and it works through mosh. On a locked phone Android's own
authentication stands in front of the button.

## Reading what it did

- **Diff viewer**: unified diffs with per-line colour, collapsible hunks and
  word-level highlighting, sourced from a selection or from a command run in the
  session. Colours are mixed from the terminal's own palette and kept apart by
  brightness, so the `+`/`−` column and the lightness carry the meaning before
  hue does.
- **Dev-server preview**: spot the address a dev server printed, open it on the
  phone, and open the forward first when the server is on the other machine.
- **Agent usage board**: what the agents on that host have spent, read from
  their own records. Numbers are aggregated on the far side; no message text
  leaves the machine.
- **Multiplexer-aware drawer**, the tmux windows and panes of the session in
  front, switchable on tap.

## Built for one hand

- **Split view**: two sessions side by side, collapsing to one when the screen
  is too narrow to hold both.
- **Dictation**: on-device speech where the platform has it, with a setting
  that refuses the network path outright rather than quietly using it.
- **Attach an image**: pick a screenshot and it arrives in the session, copied
  across to the remote machine when that is where the agent is reading.
- **Snippets and profiles**: the commands you retype, and the userland each
  should run in.
- **A health screen**: Android kills background processes on a budget, and this
  says when it has, with the fix you can copy.

## On the device, not on a server

There is no TobiTerm service. Keys, hosts and snippets are files in your own
userland, hand-editable, and the app talks to nothing but the machines you point
it at. An optional lock puts a biometric in front of the app, and an SSH key
passphrase can live in the Android Keystore so the key on disk need not sit
there unencrypted.

Currently in internal testing.
