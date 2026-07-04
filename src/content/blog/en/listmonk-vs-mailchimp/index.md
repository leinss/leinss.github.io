---
title: "Listmonk vs Mailchimp: the newsletter I self-host instead"
description: "How Listmonk, a self-hosted open-source newsletter tool, compares to Mailchimp on list ownership, per-contact pricing, deliverability, and control — from someone who runs it."
date: "Jul 4 2026"
tags: ["listmonk", "mailchimp", "self-hosting", "newsletter", "saas-alternatives", "own-your-stack"]
lang: "en"
---

> **Short answer:** Listmonk is a self-hosted newsletter manager; Mailchimp is a hosted platform that bills you per contact. With Listmonk the subscriber list lives in my own database, sending costs whatever raw email delivery costs, and the bill doesn't climb as the list grows. Mailchimp is faster to start and does the deliverability work for you. My newsletter runs on Listmonk, and here's the trade I made.

The signup form at the bottom of this page posts to Listmonk, running on infrastructure I own. I don't rent my mailing list. Here's how it compares to the default choice.

## Side by side

| Dimension | Listmonk (self-hosted) | Mailchimp |
| --- | --- | --- |
| Source | Open (AGPL-3.0) | Closed (Intuit) |
| Who owns the list | Me, in my own database | Mailchimp's platform |
| Pricing model | Flat — you pay for the server | Per contact, climbs with the list |
| Sending | Your own SMTP / SES provider | Bundled, handled for you |
| Deliverability work | Yours to set up (SPF, DKIM) | Done for you |
| Data location | My server, in the EU | Mailchimp's cloud (US) |
| Setup | One binary + Postgres | Sign up, done |
| Best for | Ownership, flat cost at scale | Fast start, hands-off delivery |

## What they share

Both send campaigns and transactional email, manage subscribers and segments, track opens and clicks, and handle double opt-in. For the actual job of "write an email, send it to a list, see who opened it," they're comparable.

## Where they differ

**Who owns the list.** In Mailchimp your subscribers live on their platform under their terms. In Listmonk the list is rows in a Postgres database I control, exportable any time because it never left. If a pricing change or policy call ever bothers me, I'm not hostage to it.

**The bill.** Mailchimp charges by contact count, so growing your list grows your bill whether or not you send more. Listmonk's cost is the server plus raw sending, both roughly flat. Ten thousand subscribers cost about the same to hold as one hundred.

**Deliverability.** This is Mailchimp's real value and the honest reason to use it: they run the sending reputation so your mail lands in inboxes. Self-hosting Listmonk means wiring up your own sending provider and setting SPF, DKIM, and DMARC correctly. Get that right and delivery is fine; get it wrong and you land in spam. It's work Mailchimp absorbs for you.

**Where the data sits.** Mailchimp is a US platform. Listmonk keeps subscriber data on infrastructure I control in the EU, which matters when the list is customer data under the GDPR.

## Which should you pick?

- **Stay on Mailchimp** if you want zero infrastructure, hands-off deliverability, and your list is small enough that per-contact pricing doesn't sting yet.
- **Switch to Listmonk** if the per-contact bill has become a tax on growth, or the subscriber list is data you need to own and keep in the EU.

The honest catch: owning delivery is the part that takes engineering. Listmonk itself is a single binary; making it send reliably is DNS, a sending provider, and monitoring. That gap is the theme of [the self-hosted stack I run instead of paying for SaaS](/blog/en/self-hosted-stack/).

If you want an owned newsletter set up properly, deliverability and all, and handed to your team, that's the kind of thing I do at [Leinss Consulting](https://leinss-consulting.de/en/).
