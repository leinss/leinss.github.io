---
title: "EthBerlin"
description: "deadcaster A decentralized & secure Dead Human Switch for our secret's life insurance"
date: "May 2024"
demoURL: "https://bit.ly/ethberlin_deadcaster"
repoURL: "https://github.com/eth-berlin/DeadCaster"
---

## Deadcaster

[![deadcaster demo image](/images/projects/ethberlin/deadcaster.png)](https://bit.ly/ethberlin_deadcaster)

## The problem Deadcaster solves

### tl;dr: A decentralized & secure Dead Human Switch for our secret’s life insurance Experience it on Warpcast

Deadcaster addresses the critical need for secure, decentralized and incentivized information reveal when individuals become inactive or incapacitated. Imagine a journalist in a hostile environment ensuring their critical findings are revealed if they are silenced.

## Architecture

![architecture image](/images/projects/ethberlin/architecture.jpeg)

## Challenges you ran into

- Biggest implementation pain: Metamask browser experience on mobile.
- Warpcast does not support Oasis network, therefore users need to navigate to an external website to make TXs on Sapphire (Oasis). In the future, with Farcaster’s on-frame TXs, this experience can be integrated into a single farcaster client application.
- Relying solely on Sapphire poses a risk if TEE hardware experiences disruptions. Utilizing multiple privacy-preserving compute mechanisms, such as other TEE or FHE networks, can ensure the security of revealing secret, even if one solution fails. Additionally, incorporating hardware wallets as a deadhuman switch via ZK proofs can provide users with more options depending on the circumstances.
- Using Farcaster’s hubs to store encrypted deadcasts requires a hub rental contract and insurance to ensure the casts remain on the hubs as long as the user confirms their lively status.

## Technology used

- [frames.js](https://framesjs.org/) - Farcaster frames Framework
- [Oasis Sapphire](https://oasisprotocol.org/sapphire) - TEE EVM for Smart contracts handling secret keys
- [IPFS](https://ipfs.tech/) - The logic of the client to interact with our dApp.
- [Vercel](https://vercel.com/)
- [Metamask wallet](https://metamask.io/download/)

## Deployed here

- Frame cast: https://warpcast.com/dudeamir.eth/0xaf088d0a (Experience it on Warpcast)
- Onboarding/Reveal secret relayer: https://deadcaster-onboard.vercel.app | IPFS: QmZzvaHCB2TNVcYwzum6TMNcCTpcnVx5TpQyL3CxywrEzk
- Message Encrypter: https://deadcaster-encrypt.vercel.app/ | IPFS: QmWo4HeLRKzJ2ckTr4sAbe25FUxfkffF3vC2Gie9ifaqPv
- Reveal Messages: https://deadcaster-reveal.vercel.app/ | IPFS: QmXXU1Sa51K5UwfV34NBMxBE13Ze51fbnk9QEkjqcMEGND
- Farcaster Frame: https://deadcaster-frame.vercel.app/ | IPFS: QmNhDMtKj6BKTvg12sms6dE8aYQM4YLRWzfUZw3kgohQA4
