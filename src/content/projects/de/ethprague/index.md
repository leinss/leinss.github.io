---
title: "EthPrague Hackathon"
description: "Turtleshell bringt Sicherheitsdaten zu Smart Contracts on-chain und sorgt für Transparenz, Composability und programmierbare On-Chain-Daten."
date: "Jun 2023"
demoURL: "https://devfolio.co/projects/turtleshell-efef"
repoURL: ""
---

## Turtleshell

![slide](https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Febe01ded8e8a4424a195c0ea4654550c%2Fprojects%2F1519c6abe0fb4250986cda7b897271e9%2F337a2714-d0e9-4af5-b3a8-afe5ff314e6c.png&w=1440&q=75)
![slide](https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Febe01ded8e8a4424a195c0ea4654550c%2Fprojects%2F041715b745c64184b3f033a4c13fd4da%2F9937300f-539e-4fa2-ad78-f349a9d34648.png&w=1440&q=75)
![slide](https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Febe01ded8e8a4424a195c0ea4654550c%2Fprojects%2F041715b745c64184b3f033a4c13fd4da%2Ff293e03c-e4b8-4817-9180-c2f797e177f9.png&w=1440&q=75)
![slide](https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Febe01ded8e8a4424a195c0ea4654550c%2Fprojects%2F041715b745c64184b3f033a4c13fd4da%2F9aafe5ff-f6ba-4766-8aec-cb3a83ae13ad.png&w=1440&q=75)

Turtleshell bringt Sicherheitsdaten zu Smart Contracts on-chain und sorgt für Transparenz, Composability und programmierbare On-Chain-Daten.

## Welches Problem TurtleShell löst

Auditierte DeFi-Protokolle haben bisher 500 Millionen Dollar verloren - (Quelle: rekt.news)

Smart-Contract-Sicherheit ist ein hochrelevantes Thema für das gesamte Ökosystem. Weil es on-chain an echter Sicherheit fehlt, fällt das ganze Ökosystem bei Massenadoption und Vertrauen zurück.

Web3 fehlen heute programmierbare und kombinierbare Sicherheitsdaten zu Smart Contracts. Die einzige Quelle dafür sind Audits, und die liegen off-chain als PDF-Dokumente. Web3-Protokolle können deshalb nicht erkennen, ob bösartige Smart Contracts mit ihnen interagieren, und laufen jederzeit Gefahr, ausgenutzt zu werden.

Wir haben es uns zur Aufgabe gemacht, das zu ändern. Dafür bauen wir ein Ökosystem, das Audits und allgemeine Sicherheitsinformationen zu Smart Contracts on-chain bringt. Smart Contracts können dann bei eingehenden Interaktionen (Transaktionen) die Sicherheitsparameter anderer Contracts direkt on-chain abfragen.

Mit TurtleShell können Smart Contracts bösartige Hacking-Contracts jeder Art sofort daran hindern, mit ihrem Protokoll zu interagieren. Das hilft vor allem risikosensiblen Anwendungen wie DeFi-Protokollen.

## Herausforderungen

Die größte Herausforderung war, das System für überprüfbare On-Chain-Sicherheitsdaten zu strukturieren. Unsere Lösung nutzt SBTs, um NFTs für Audits und Sicherheitsdaten direkt auf Smart Contracts zu minten. So sind die Sicherheitsdaten für andere Smart Contracts on-chain leicht zugänglich und abfragbar.

Das zweite große Problem war die Struktur eines permissionless, dezentralen Protokolls zur Veröffentlichung von Sicherheitsdaten. Die Zentralisierung muss minimal bleiben. Darf aber jeder Daten veröffentlichen, entsteht ein Konsensproblem: Welche Sicherheitsdaten zu einem bestimmten Smart Contract sind die „richtigen“?

Wir haben das mit einem On-Chain-Reputationsscore gelöst, der sich bei jedem Mint automatisch aktualisiert. Bei einer Abfrage gelten die Audit- und Sicherheitsdaten mit dem höchsten Score als „Wahrheit“ für den jeweiligen Contract. Die „richtigen“ Audit-Daten können sich dynamisch ändern, wenn jemand später eine bisher unbekannte Schwachstelle in einem Smart Contract findet.

alle Deployment-Adressen für die Bounties:

https://explorer.testnet.mantle.xyz/address/0x98cEc326D379850E61Cb2bCeb3Df470c874dd13d
https://blockscout.scroll.io/address/0x98cEc326D379850E61Cb2bCeb3Df470c874dd13d
https://sepolia.etherscan.io/address/0x98cec326d379850e61cb2bceb3df470c874dd13d
https://explorer.test.taiko.xyz/address/0x98cEc326D379850E61Cb2bCeb3Df470c874dd13d
https://blockscout.com/gnosis/chiado/address/0x98cEc326D379850E61Cb2bCeb3Df470c874dd13d
https://goerli-optimism.etherscan.io/address/0x98cEc326D379850E61Cb2bCeb3Df470c874dd13d
