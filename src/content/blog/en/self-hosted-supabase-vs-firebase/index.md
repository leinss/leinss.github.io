---
title: "Self-hosted Supabase vs Firebase: the backend I own"
description: "How self-hosted Supabase compares to Firebase on data ownership, Postgres vs proprietary NoSQL, pricing, and lock-in, from someone who runs Supabase on their own infrastructure."
date: "Jul 4 2026"
tags: ["supabase", "firebase", "self-hosting", "postgres", "saas-alternatives", "own-your-stack"]
lang: "en"
---

> **Short answer:** Firebase is Google's proprietary backend-as-a-service; Supabase is an open-source alternative built on plain Postgres that you can self-host. Firebase is the fastest way to ship an app and the hardest to leave: your data lives in a datastore only Google runs. Self-hosted Supabase gives you the same building blocks (auth, database, storage, realtime) on a Postgres instance you own. I run Supabase on my own infrastructure, and here's the trade.

Firebase gets you to a working app fastest. That speed is real, and so is the bill and the lock-in that come with it. Here's how the owned alternative compares.

## Side by side

| Dimension | Self-hosted Supabase | Firebase |
| --- | --- | --- |
| Source | Open (Apache-2.0) | Closed (Google) |
| Database | Standard Postgres (SQL) | Firestore (proprietary NoSQL) |
| Where the data lives | My server, in the EU | Google's cloud |
| Pricing model | Flat, the server it runs on | Pay-as-you-go per read/write/storage |
| Portability | It's just Postgres, dump and move | Export is a project in itself |
| Lock-in | Low (open stack, standard SQL) | High (proprietary APIs) |
| Setup | Docker stack, real ops work | Console, minutes |
| Best for | Ownership, SQL, no lock-in | Shipping an MVP fast |

## What they share

Both give an app the same core services out of the box: a database, authentication, file storage, realtime updates, and auto-generated APIs so the client can talk to data without you hand-writing a backend. For getting an app off the ground, they cover the same ground.

## Where they differ

**Postgres vs a proprietary datastore.** This is the one that matters long-term. Supabase is Postgres, the most standard relational database there is: SQL, foreign keys, transactions, and a decades-deep tooling ecosystem. Firestore is Google's own NoSQL model with its own query rules and its own limits. Your data model and half your app get shaped around whichever you pick.

**Getting your data out.** Because Supabase is Postgres, moving off it is a database dump. Leaving Firestore means re-modelling data out of a proprietary NoSQL store and rewriting the queries against it. The exit cost is the real measure of lock-in, and it's lopsided.

**The bill.** Firebase's Blaze plan is pay-as-you-go: you're billed per read, write, stored byte, and gigabyte out. It's cheap at zero and unpredictable at scale, and a bad query can spike a bill. Self-hosted Supabase costs the server it runs on, flat, whether the app does a thousand reads or a million.

**Where the data sits.** Firebase runs on Google's cloud. Self-hosted Supabase keeps user data on infrastructure I control in the EU, which matters the moment that data is personal under the GDPR.

**The honest cost.** Firebase wins on speed to first working app, decisively. Self-hosting Supabase is the heaviest lift on my stack: it's several services (database, auth, storage, an API gateway) run together, plus backups and updates. That's real operations work, not a weekend tutorial.

## Which should you pick?

- **Use Firebase** to ship an MVP fast, when you don't want to run infrastructure and you're willing to accept the lock-in and pay-as-you-go bill that come with it.
- **Self-host Supabase** when you want your data in standard Postgres you own, a flat and predictable cost, no proprietary lock-in, and user data kept in the EU, and you can carry the operations weight.

A middle path I'd actually recommend: start on Supabase's hosted tier (same open stack, no ops) and move to self-hosted when owning it pays off. Either way you're on Postgres, so the move is a database migration, not a rewrite. That "own the load-bearing pieces as they matter" sequence is the whole idea behind [the self-hosted stack I run instead of paying for SaaS](/blog/en/self-hosted-stack/).

If you want an owned backend built, run, and handed to your team, that's the kind of thing I do at [Leinss Consulting](https://consulting.leinss.xyz/en/).
