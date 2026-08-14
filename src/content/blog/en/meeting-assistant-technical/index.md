---
title: "How I turn meeting audio into minutes with Whisper, Claude, and n8n"
description: "A technical teardown of the meeting-minutes workflow: Whisper transcription, Claude tool-use for structured extraction of decisions and action items, and an emailed markdown summary."
date: "Jul 4 2026"
tags: ["n8n", "claude", "whisper", "ai", "teardown", "own-your-stack"]
lang: "en"
---

> **Short answer:** The meeting bot takes an audio file, transcribes it with Whisper, then has Claude Sonnet 4.6 extract structured minutes (decisions, action items, owners) using tool-use so the output is a fixed schema, not free text. A code node formats that into markdown and n8n emails it. The tool-use step is what makes the summary reliable instead of a wall of prose. This is the teardown of the [live meeting demo](https://leinss-consulting.de/en/blog/meeting-minutes-automation/).

"Summarise this meeting" gives you a paragraph nobody reads. What people actually want is a list of decisions and who owns which action. The [meeting-minutes workflow on my consulting site](https://leinss-consulting.de/en/blog/meeting-minutes-automation/) produces exactly that, and here's how. The [workflow JSON is downloadable](https://leinss-consulting.de/workflows/meeting-protokoll.json).

## The pipeline

| Stage | Node(s) | What happens |
| --- | --- | --- |
| Intake | Webhook → validate → if | Take the audio file and meeting metadata |
| Transcribe | HTTP → Whisper | Audio to plain-text transcript |
| Structure | HTTP → Claude (tool-use) | Extract decisions, action items, owners into a fixed schema |
| Format | Code → markdown | Render the structured data as readable minutes |
| Deliver | Email → respond | Send the minutes, confirm to the caller |

## Tool-use is why the output is reliable

The interesting node is the Claude call, and the trick is that it doesn't ask for a summary in prose. It defines a tool, `extract_meeting_data`, with a schema for the fields I want: a list of decisions, a list of action items each with an owner, key discussion points. Claude is told to call that tool, so the response comes back as structured arguments matching the schema, every time.

This is the difference between "please format your answer as JSON" (which usually works) and tool-use (which enforces the shape). For anything downstream that has to parse the result, that guarantee is worth a lot. The transcript goes in as free text; structured minutes come out.

## Where n8n stops and code starts

n8n moves the audio, calls Whisper, calls Claude, and sends the email. The code nodes do the shaping:

- **Validate** pulls the title, attendees, and the audio binary out of the incoming form and rejects the request if the audio is missing.
- **Extract transcript** handles Whisper returning plain text rather than JSON.
- **Format markdown** reads Claude's `tool_use` block out of the response and renders the decisions and action items into clean markdown: headings, checklists, owners in bold.

That last node is the "where code starts" moment: turning a structured API result into a document a human wants to read is logic, not a setting. It's the same boundary I describe in [my n8n automation stack](/blog/en/n8n-automation-stack/).

## Why I run it myself

Meeting audio is about as sensitive as company data gets. Running transcription and summarisation through a workflow on infrastructure I control keeps the recording off third-party SaaS except for the model calls I choose. That's the case behind [the self-hosted stack I run instead of paying for SaaS](/blog/en/self-hosted-stack/). Want this for your team's meetings, built and handed over? That's what I do at [Leinss Consulting](https://leinss-consulting.de/en/).
