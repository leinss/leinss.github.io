---
title: "How I turn meeting audio into minutes with Whisper, Claude, and n8n"
description: "A technical teardown of the meeting-minutes workflow: Whisper transcription, Claude tool-use for structured extraction of decisions and action items, and an emailed markdown summary."
date: "Jul 4 2026"
tags: ["n8n", "claude", "whisper", "ai", "teardown", "own-your-stack"]
lang: "en"
---

> **Short answer:** The meeting bot takes an audio file, transcribes it with Whisper, then has a model extract structured minutes (decisions, action items, owners) against a fixed schema rather than as free text. A code node formats that into markdown and n8n emails it. Forcing the schema is what makes the summary reliable instead of a wall of prose. This is the teardown of the [meeting-minutes workflow](https://leinss-consulting.de/en/blog/meeting-minutes-automation/).

"Summarise this meeting" gives you a paragraph nobody reads. What people actually want is a list of decisions and who owns which action. The [meeting-minutes workflow on my consulting site](https://leinss-consulting.de/en/blog/meeting-minutes-automation/) produces exactly that, and here's how. The [workflow JSON is downloadable](https://leinss-consulting.de/workflows/meeting-protokoll.json).

**One thing to say up front, because you can check it:** the widget on the demo page is not currently transcribing. It needs a Whisper service, that service is not deployed on the box the demos run on, and rather than error the widget returns a sample summary. Standing one up is infrastructure I have not spent on a demo. So read this as a teardown of the workflow, which is real and downloadable, not as proof that the button works end to end.

## The pipeline

| Stage | Node(s) | What happens |
| --- | --- | --- |
| Intake | Webhook → validate → if | Take the audio file and meeting metadata |
| Transcribe | HTTP → Whisper | Audio to plain-text transcript |
| Structure | HTTP → model | Extract decisions, action items, owners into a fixed schema |
| Format | Code → markdown | Render the structured data as readable minutes |
| Deliver | Email → respond | Send the minutes, confirm to the caller |

## Forcing the schema is why the output is reliable

The interesting node is the extraction call, and the trick is that it doesn't ask for a summary in prose. It declares the shape it wants up front: a list of decisions, a list of action items each with an owner, key discussion points. The transcript goes in as free text; structured minutes come out.

There are two ways to force that shape, and my two copies of this workflow use one each, which makes the comparison concrete:

- **Tool-use**, in the downloadable JSON. It defines a tool called `extract_meeting_data` with a JSON schema for those fields and tells Claude to call it. The reply arrives as arguments matching the schema, checked by the API before you ever see it.
- **JSON mode**, on my own instance. It asks Kimi for a JSON object with the same fields, using the API's JSON response format. You get valid JSON, but the *fields* are a promise made in the prompt, not a contract enforced by the API.

Tool-use is the stronger guarantee and the one to reach for when something downstream parses the result. JSON mode is what I run for the demo because it is one Kimi call instead of a second provider, and the parse node handles the shape either way. Knowing which of the two you have is the point: one is enforced, the other is asked for nicely.

## Where n8n stops and code starts

n8n moves the audio, calls Whisper, calls the model, and sends the email. The code nodes do the shaping:

- **Validate** pulls the title, attendees, and the audio binary out of the incoming form and rejects the request if the audio is missing.
- **Extract transcript** handles Whisper returning plain text rather than JSON.
- **Format markdown** reads the structured result out of the response and renders the decisions and action items into clean markdown: headings, checklists, owners in bold.

That last node is the "where code starts" moment: turning a structured API result into a document a human wants to read is logic, not a setting. It's the same boundary I describe in [my n8n automation stack](/blog/en/n8n-automation-stack/).

## Why I run it myself

Meeting audio is about as sensitive as company data gets. Running transcription and summarisation through a workflow on infrastructure I control keeps the recording off third-party SaaS except for the model calls I choose. That's the case behind [the self-hosted stack I run instead of paying for SaaS](/blog/en/self-hosted-stack/). Want this for your team's meetings, built and handed over? That's what I do at [Leinss Consulting](https://leinss-consulting.de/en/).
