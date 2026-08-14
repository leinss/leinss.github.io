---
title: "EthPrague Hackathon"
description: "Turtleshell brings Smart Contract security data on-chain, providing transparency, composability, and programmable on-chai data."
date: "Jun 2023"
demoURL: "https://devfolio.co/projects/turtleshell-efef"
repoURL: ""
---

## Turtleshell

![slide](https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Febe01ded8e8a4424a195c0ea4654550c%2Fprojects%2F1519c6abe0fb4250986cda7b897271e9%2F337a2714-d0e9-4af5-b3a8-afe5ff314e6c.png&w=1440&q=75)
![slide](https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Febe01ded8e8a4424a195c0ea4654550c%2Fprojects%2F041715b745c64184b3f033a4c13fd4da%2F9937300f-539e-4fa2-ad78-f349a9d34648.png&w=1440&q=75)
![slide](https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Febe01ded8e8a4424a195c0ea4654550c%2Fprojects%2F041715b745c64184b3f033a4c13fd4da%2Ff293e03c-e4b8-4817-9180-c2f797e177f9.png&w=1440&q=75)
![slide](https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Febe01ded8e8a4424a195c0ea4654550c%2Fprojects%2F041715b745c64184b3f033a4c13fd4da%2F9aafe5ff-f6ba-4766-8aec-cb3a83ae13ad.png&w=1440&q=75)

Turtleshell brings Smart Contract security data on-chain, providing transparency, composability, and programmable on-chai data.

## The problem 🐢 TurtleShell solves

$500M have been lost so far by audited DeFi Protocols - (Source: rekt.news)

Smart Contract Security is a highly relevant concern for the entire ecosystem. The lack of proper on-chain security is throwing back the entire ecosystem in terms of mass-adoption and trust.

Web3 today lacks programable and composable Smart Contract security data. The only source of Smart Contract security data are audits, that are stored off-chain as PDF documents. This means, that, web3 protocols are unable to identify if malicious smart contracts interact with them and therefore face the risks of being exploited at all times.

We are on a mission to change that, by building an ecosystem for bringing audits and general smart contract security information on-chain. This will enable Smart Contracts to query security parameters of other contracts directly on-chain at incoming interactions (transactions).

With TurtleShell, Smart Contracts can immediately block any kind of malicious hacking contracts from interacting with their protocol. This is especially useful for risk-sensitive applications, like DeFi protocols.

## Challenges we ran into

The main challenge we faced was how to structure the system for verifiable on-chain security data. We came up with a solution, which utilizes SBT's for minting NFT's for Audits / Security data directly on-top of Smart Contracts. That way, the security data is easily accessible and queryable from other smart contracts on-chain.

The other main issue we faced was how to structure a permissionless, decentralized security data publishing protocol. It is crucial to keep centralization at a minimum. On the other hand, allowing anyone to publish data creates the problem of consensus, when it comes to the "right" security data of a given smart contract. We solved this issue by leveraging an on-chain reputation score, which gets automatically updated on mints. The audit / security data with the highest score will be the source of "truth" for a given contract when being queryied. The "right" audit data can change dynamically, if somebody discovers security vulnerabilites at a smart contract in the future, that was unknown beforehand.

all deployment addresses for bounties:

https://explorer.testnet.mantle.xyz/address/0x98cEc326D379850E61Cb2bCeb3Df470c874dd13d
https://blockscout.scroll.io/address/0x98cEc326D379850E61Cb2bCeb3Df470c874dd13d
https://sepolia.etherscan.io/address/0x98cec326d379850e61cb2bceb3df470c874dd13d
https://explorer.test.taiko.xyz/address/0x98cEc326D379850E61Cb2bCeb3Df470c874dd13d
https://blockscout.com/gnosis/chiado/address/0x98cEc326D379850E61Cb2bCeb3Df470c874dd13d
https://goerli-optimism.etherscan.io/address/0x98cEc326D379850E61Cb2bCeb3Df470c874dd13d
