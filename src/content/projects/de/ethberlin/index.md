---
title: "EthBerlin Hackathon"
description: "deadcaster: ein dezentraler und sicherer Dead Human Switch als Lebensversicherung für unsere Geheimnisse"
date: "May 2024"
demoURL: "https://projects.ethberlin.org/submissions/302"
repoURL: "https://github.com/eth-berlin/DeadCaster"
---

## Deadcaster

[![demo image](/images/projects/ethberlin/deadcaster.png)](https://projects.ethberlin.org/submissions/302)

## Welches Problem Deadcaster löst

### tl;dr: Ein dezentraler und sicherer Dead Human Switch als Lebensversicherung für unsere Geheimnisse. Ausprobieren auf Warpcast

Deadcaster deckt einen kritischen Bedarf: Informationen sollen sicher, dezentral und mit Anreizen offengelegt werden, wenn jemand inaktiv oder handlungsunfähig wird. Stellen Sie sich einen Journalisten in einem feindseligen Umfeld vor, der dafür sorgt, dass seine wichtigsten Rechercheergebnisse veröffentlicht werden, falls man ihn zum Schweigen bringt.

## Architektur

![architecture image](/images/projects/ethberlin/architecture.jpeg)

## Herausforderungen

- Den meisten Ärger bei der Umsetzung machte Metamask im Browser auf dem Smartphone.
- Warpcast unterstützt das Oasis-Netzwerk nicht. Nutzer müssen deshalb auf eine externe Website wechseln, um TXs auf Sapphire (Oasis) auszuführen. Mit den On-Frame-TXs von Farcaster lässt sich das künftig in einer einzigen Farcaster-Client-App zusammenführen.
- Wer sich allein auf Sapphire verlässt, trägt ein Risiko, falls die TEE-Hardware gestört ist. Mehrere datenschutzfreundliche Rechenverfahren, etwa weitere TEE- oder FHE-Netzwerke, können die Offenlegung des Geheimnisses absichern, auch wenn eine Lösung ausfällt. Hardware-Wallets als Dead Human Switch über ZK-Proofs würden Nutzern zudem je nach Lage mehr Optionen geben.
- Um verschlüsselte Deadcasts auf den Hubs von Farcaster zu speichern, braucht es einen Contract für die Hub-Miete und eine Absicherung, damit die Casts auf den Hubs bleiben, solange der Nutzer bestätigt, dass er noch lebt.

## Eingesetzte Technik

- [frames.js](https://framesjs.org/) - Framework für Farcaster Frames
- [Oasis Sapphire](https://oasisprotocol.org/sapphire) - TEE-EVM für Smart Contracts, die geheime Schlüssel verwalten
- [IPFS](https://ipfs.tech/) - Die Logik des Clients, der mit unserer dApp interagiert.
- [Vercel](https://vercel.com/)
- [Metamask wallet](https://metamask.io/download/)

## Deployments

- Frame-Cast: https://warpcast.com/dudeamir.eth/0xaf088d0a (auf Warpcast ausprobieren)
- Relayer für Onboarding und Offenlegung des Geheimnisses: https://deadcaster-onboard.vercel.app | IPFS: QmZzvaHCB2TNVcYwzum6TMNcCTpcnVx5TpQyL3CxywrEzk
- Nachrichten verschlüsseln: https://deadcaster-encrypt.vercel.app/ | IPFS: QmWo4HeLRKzJ2ckTr4sAbe25FUxfkffF3vC2Gie9ifaqPv
- Nachrichten offenlegen: https://deadcaster-reveal.vercel.app/ | IPFS: QmXXU1Sa51K5UwfV34NBMxBE13Ze51fbnk9QEkjqcMEGND
- Farcaster Frame: https://deadcaster-frame.vercel.app/ | IPFS: QmNhDMtKj6BKTvg12sms6dE8aYQM4YLRWzfUZw3kgohQA4
