---
title: "EthGlobal Paris Hackathon"
description: "zkPaymaster Enhancing account abstraction paymaster with zero-knowledge to enable any form of sponsorship of transaction fees in a private preserving way. Ethereum Foundation - Best ERC-4337, Sismo - Top 5, Biconomy - Best Use, MakerDAO - 2nd Best use of sDAI."
date: "Jul 2023"
demoURL: "https://ethglobal.com/showcase/zkpaymaster-dbooj"
repoURL: "https://github.com/floberlin/pmiyc"
---

## zkPaymaster

<video controls>
  <source src="https://stream.mux.com/RluD7xdbrYJv9OA9mjHRDTh2HrwtIIQYqp3yzP5MfdE/high.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

zkPaymaster Enhancing account abstraction paymaster with zero-knowledge to enable any form of sponsorship of transaction fees in a private preserving way. Ethereum Foundation - Best ERC-4337, Sismo - Top 5, Biconomy - Best Use, MakerDAO - 2nd Best use of sDAI.

## Project Description

In the realm of the ETHGlobal Paris Hackathon, we've developed zkPaymaster, an innovative solution that redefines the mechanics of cross-chain transactions. Leveraging the potential of account abstraction and zero-knowledge proofs, our platform introduces novel paymasters designed to serve unique purposes.

At the heart of our MVP is a zero-knowledge proof system that verifies the ownership of MakerDAO tokens across any wallet on any blockchain. Once this proof is established, our specially-designed paymaster covers all the transaction fees when swapping or trading Savings DAI (sDAI). This system eliminates the hassle and expense of fees for the user, providing a seamless and cost-effective trading experience and rewarding MakerDAO holders!

The foundation of our account abstraction system is built on Biconomy. The zero-knowledge proofs are generated using Sismo.

While zkPaymaster is currently tailored to support the sDAI ecosystem as a way to reward MakerDAO holders, its framework is versatile and extendable. It can be adapted to any DAO or other provable constructs, thus laying the groundwork for a more interconnected and seamless decentralized ecosystem.

We believe zkPaymaster will reshape the landscape of blockchain transactions, lowering barriers, enhancing utility, and democratizing access to decentralized financial services. Our project marks a significant step forward in the blockchain sphere, promising an efficient and cost-effective solution for users while fostering a more inclusive and interconnected DeFi landscape.

## How it's Made

The UI is built using Next.js and the Biconomy account abstraction packages. We used all of the Biconomy packages expect the paymaster because we built that one ourself. For the zk proof generation we a using Sismos' Vaults. The Paymaster is a 4337-complaint paymaster, which verifies the data given from Sismo. Contracts were built in foundry and deployed to goerli.
