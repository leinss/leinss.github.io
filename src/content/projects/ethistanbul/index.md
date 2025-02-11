---
title: "EthIstanbul"
description: "a solo staking protocol with sybil resistance and MEV smoothing"
date: "Nov 2023"
demoURL: "https://bit.ly/ethistanbul_grayskull_guardians"
repoURL: "bit.ly/ethistanbul_grayskull_guardians"
---

## Grayskull Guardians

<video controls>
  <source src="https://stream.mux.com/Q5SKFJUL00iG01x1ijwlqYVzRlF01ctno9QcqenV2S026EM/high.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Grayskull Guardians is a solo staking protocol with sybil resistance via World Coin, anti-cheat contracts powered by EAS for secure, equitable solo staking and MEV smoothing on Arbitrum.

## Project Description

Grayskull Guardians is a groundbreaking project in the Ethereum staking landscape, focusing on enhancing the solo staking experience with three core features and strengthening decentralization through it. Firstly, the MEV Smoothie Pool, an innovative approach, allows for optimized and incentivized staking. This pool not only increases rewards for stakers on average but also introduces a novel mechanism for maximizing staking efficiency. Secondly, the project emphasizes incentivized rewards through public good funding, where contributions boost the overall reward pool, benefiting all participants. Lastly, it features a unique system of compounded rewards through auto-swapping into rETH, significantly optimizing fees for solo stakers. This is achieved by batching transactions to Layer 2 networks, ensuring efficient and cost-effective distribution of rewards, a crucial aspect for individual stakers seeking to maximize their returns in the Ethereum ecosystem.

## How it's Made

Sybil-Resistant, Incentivized MEV Pool for Solo Stakers: The core of Grayskull Guardians is a unique MEV (Maximal Extractable Value) pool designed specifically for solo stakers. This pool is Sybil-resistant, meaning it's designed to prevent malicious actors from creating multiple identities to exploit the system. To ensure each staker is unique and legitimate, the project utilizes Worldcoin's proof of personhood technology. This allows for the on-chain validation of individual stakers, who can then establish unique withdrawal addresses for their Ethereum validators. This approach is vital for maintaining the integrity of the staking process and the anti-cheat system. (Note: We found out that verification through Goerli has a bug & is not functional and communicated with team through Discord, therefore we implemented a test case on OP Georli where the solution is running successful)

Effective Anti-Cheat Mechanism: When stakers withdraw their accumulated rewards, they create an attestation via an Ethereum Attestation Service (EAS), which other stakers can challenge. If a staker is found to be cheating, such as by altering fee recipients for large MEV rewards, their 32 ETH stake is burned. This severe penalty acts as a strong deterrent against rule violations. Optimized Transaction Efficiency: Recognizing the gas fee challenges for solo stakers, the project batches MEV and priority fees at Layer 1 and then transfers them in a single transaction to Arbitrum's Layer 2. This significantly reduces gas fees, making it more cost-effective for stakers to withdraw rewards.

Public Good Incentivization for 'Smoothie Pool': The 'Smoothie Pool' is an innovative contract that encourages donations from individuals and organizations. These donations increase the Annual Percentage Rate (APR) for solo stakers, with donations made effectively on Layer 2 to allow for even small contributions.

User-Friendly Interface: The project prioritizes an engaging user experience. It integrates Wallet Connect v3 for wallet connections and uses MEV-Boost of Cowswap as the standard RPC. A gamified interface makes the staking process more engaging and interactive for users.

Future Enhancement with Auto-Swapping Feature: Looking forward, Grayskull Guardians plans to introduce an auto-swapping feature. This will automatically convert earned MEV and priority fees into a liquid staked asset on Arbitrum, allowing stakers' rewards to generate additional APR, thereby amplifying overall returns.

L1 Factory: https://goerli.etherscan.io/address/0x1230efc35e5f2e7eaa4f6385159393fa1675547c

L2 Factory: https://goerli.arbiscan.io/address/0x3c3720bf2d8cdd74df999d80af9f479b4f138044

SmPool L1: https://goerli.etherscan.io/address/0x5eb090778c245594fc4d5cfbf92d2b1a26910048

SmPool L2: https://goerli.arbiscan.io/address/0x0b852c2129cc8ef9e4581bcda1a8f2166cdb3bae

EAS: https://goerli.arbiscan.io/address/0x63b9f0dfa2a6a3604fb301b376dc3a5b133edd3a

Bridge transaction: L1 – 0xFCa2906C37141f8cD1CB5a01E3a3FC07cC4B1025 https://goerli.etherscan.io/address/0xFCa2906C37141f8cD1CB5a01E3a3FC07cC4B1025 L2 – 0x3449e3bEEdCB9991b13f16dBf34D6691475c8f9D https://goerli.arbiscan.io/address/0x3449e3beedcb9991b13f16dbf34d6691475c8f9d

L1 tx 0x376a9fda70e638a40ec04dce6bc1f3c27ee97671f4480bbfaf26dbc7631666af https://goerli.etherscan.io/tx/0x376a9fda70e638a40ec04dce6bc1f3c27ee97671f4480bbfaf26dbc7631666af L2 tx 0x29f20a9f8a73a39257ce80d1effc95d8c3010ce5b2714c4cb6468aaba0c83a92 https://goerli.arbiscan.io/tx/0x29f20a9f8a73a39257ce80d1effc95d8c3010ce5b2714c4cb6468aaba0c83a92

![demo image](https://ethglobal.b-cdn.net/projects/ikgth/screenshots/n4z5q/default.jpg)
