---
title: "EthRome"
description: "a platform to take surveys anonymously via zk proofs"
date: "Oct 2023"
demoURL: "https://bit.ly/ethrome_sharknado"
repoURL: ""
---

## Sharknado

![demo image](/public/images/projects/ethrome/sharknado.png)
![demo image](/public/images/projects/ethrome/sharknado_1.png)
![demo image](/public/images/projects/ethrome/sharknado_2.png)
![demo image](/public/images/projects/ethrome/sharknado_3.png)
![demo image](/public/images/projects/ethrome/sharknado_4.png)
![demo image](/public/images/projects/ethrome/sharknado_5.png)

Sharknado A platform where you can take surveys anonymously, authenticate your NFT ownership with zk proofs, and win cash prizes in a pseudo-annonomized & randomized bounty system.

## REPOSITORY WITH PROJECT'S CODE (should be open and public)

GitHub Organization: https://github.com/Squalome
Main repo: https://github.com/Squalome/sharknado
Semaphore repo: https://github.com/Squalome/Sharknado_Semaphore
Figma prototype: https://www.figma.com/proto/Sharknado

We faced an issue merging our repos toward the end where our deployed semaphore SCs on gnosis mainnet, therefore we are submitting all repos. Sorry.

## VIDEO DEMO (3 min max) - NO SLIDES ONLY PROJECT DEMO SHOWCASE

https://www.loom.com/share/0899f73bf30c4db38de115dd9dd457f8

## The contract address(es) or website URLs of your deployed application, either on a testnet of your choice or mainnet of a platform of choice. 📂📂 (NOT mandatory)

Sharknado.sol contract on gnosis mainnet: 0xeFB23e1a4573eBA1385D2730A4ddB9aeeb6ea20F
Semaphore.sol contract on gnosis mainnet: 0xee5cF4Cc94bb97E2bA0d0a115b69c6075Ce42DD1
Sharktoken.sol contract (sample NFT gating contract) on gnosis mainnet: 0xF649Cb1884dcf8bAc5ccFA669083c489288685bb

App: https://sharknado.vercel.app/

## Bounties (provide a description or explanation on how you integrated any bounty sponsors technology)

PSE/Semaphore:

Utilized Semaphore from PSE to authenticate NFT ownership through ZK proofs and signaling in groups to participate in the survey.

We also take on the challenge to deploy semaphore on Gnosis mainnet: 0xee5cF4Cc94bb97E2bA0d0a115b69c6075Ce42DD1 and deployed subgraphs on gnosis mainnet: https://thegraph.com/studio/subgraph/sharknadosemaphoregraph

Information leaks challenges & possible solutions going forward:

- The voting signal includes a boolean (vote) + a sudo-annonymous fresh wallet address of the user to recieve bounty when won in the lottery. When a winner moves their funds and makes onchain traces to reveal their identity (RIP TornadoCash's freedom), their vote will be public linked to their identity. SOLUTION: Creating a series circuit (2nd group) which only those who got the proof to send a signal in the first group can join and send their fresh new address as signal seperatly from their vote. Creating a series circuit to the first template circuit by Semaphore requires us to implement it from scratch with was out of the scope of time in this hackathon.

- The process of joining a group creates an onchain transaction which reveals who joined a group. Therefore one can know who is in the group, but can not know what each individual vote.

Gnosis:

We intended to implement Survey with Swansky platform, however given we didn't have any experience with Swansky, and lack of interoprobablity with other bounties & technology stacks that we decided for this hackathon, we went with a different approach.

We tried on testnet, however subgraphs could not be deployed there, as well as other toolings, therefore we went and deployed on the mainnet. The reason we needed to implement subgraphs, was that for using Semaphore package, there was a dependency of using subgraphs in client.

On the positive side, we are live on mainnet :) Enjoy playing, or implement client to publish surveys.

The Graph:

We deployed subgraphs for two contracts:

1. Semaphore.sol contract on gnosis mainnet: https://thegraph.com/studio/subgraph/sharknadosemaphoregraph
   Build completed: QmcxFkVPtMBtiH6a8yWFQk9nt8h5cr4Um4eGcWG46ds8QB
   Queries (HTTP): https://api.studio.thegraph.com/query/54895/sharknadosemaphoregraph/v0.0.1

2. Sharknado.sol contract on gnosis mainnet:
   https://api.studio.thegraph.com/query/54895/sharknadograph3/v0.0.5

3. SharkToken.sol contract on gnosis mainnet:
   https://api.studio.thegraph.com/query/54895/sharktokengraph/v0.0.1

BUIDLGUIDL:

We used Scaffold-ETH2 it as a boiler plate to leverage the prebuilt components integrating with smart contracts via Hot Reload & integration with wallet providers.

Thanks for making our life easier: https://sharknado.vercel.app/

Interface:

The entire design concept of Sharknado draws inspiration from the world of sharks and ocean waves.

Brand Concept:
In our brand vision, we have strived to infuse a contemporary energy with vibrant electric colors: "Navy Blue" and "Aquagreen". "Otto Attack Wide" was the perfect matching font, because it is contrasting serif typeface featuring sharp angles reminiscent of shark teeth to create a visually captivating effect. This balanced design exudes an assertive and dynamic vibe, ideal for a such web3 projects.

UX Mechanics:
We have implemented an onboarding process to facilitate educational purposes, ensuring users can easily get acquainted with our product. Our gamification strategy on the success page aims to boost users' engagement and involvement metrics, making the product experience a rewarding one. To enhance user Retention, we provide recommendations after users complete their flow. Progress bars are judiciously utilized whenever necessary to keep users informed and prevent any undue stress. We streamline and bundle transactions into cohesive steps to ensure users navigate the process without feeling overwhelmed or fatigued.

We are not able to complete pixelperfect design with out Frontend part, so you can check the design flow in our team Figma
You can check the clickable prototype Figma here
And the Design itself in Figma here

Business value of Interface for Sharknado:
Interface provides onchain feed of happenings and Sharknado provides offchain opinions. We see this a match made in the ocean, given the value of such data COMBINED for web3 market research is many folds higher.

## If your project was started before the ETHRome hackathon, please link here a PUBLIC Google Doc describing all the previous iterations in details (make sure to check the hackathon rules around pre-existing projects)

https://docs.google.com/document/d/1P82PdIE8cJaCSv3T3fJlwNCxeJ-FBTuPOeYXBvmK1UU/edit?usp=sharing
