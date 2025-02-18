---
title: "EthGlobal FEVM Hackathon"
description: "SPN stands for spending. Our team has created a data DAO that empowers consumers to turn their data, in particular, their credit card transaction data, into assets and have true ownership over"
date: "Nov 2022"
demoURL: "https://bit.ly/spn_dao"
repoURL: ""
---

## SPN DAO

<video controls>
  <source src="https://stream.mux.com/wDWFSgqLeL1WYkDbXw46d9TuQ55Y1xG5ijqYGhaL7Mo/high.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

![slice](https://ethglobal.b-cdn.net/projects/zwbar/screenshots/9amig/default.jpg)
![slice](https://ethglobal.b-cdn.net/projects/zwbar/screenshots/9nery/default.jpg)
![slice](https://ethglobal.b-cdn.net/projects/zwbar/screenshots/c33w6/default.jpg)
![slice](https://ethglobal.b-cdn.net/projects/zwbar/screenshots/z90ni/default.jpg)
![slice](https://ethglobal.b-cdn.net/projects/zwbar/screenshots/daynf/default.jpg)

## Project Description

Our credit card transaction data reveal a lot about our behaviors. Aggregated together, they tell even more powerful stories about the economy. Is there a spike in Netflix subscriptions? Is there a dip in spending at hardware stores? Credit card transaction data is the highest-grossing data source in the “alternative data” market. The global alternative data market is anticipated to reach 143.31 billion USD by 2030 and is expected to grow at a 54.4% CAGR. North America alone accounted for a revenue share of more than 67.0% in 2021.

However, consumers have little control over how and when their personal data, including credit card transaction data, is used. Consumers’ personal data fuels a multi-billion dollar industry while they receive almost no financial rewards. In practice, data from a single person is of little value. And there is no marketplace where consumers could coordinate and pool their data together.

Leveraging web3.0 technologies, SPN DAO makes it possible! Our first product release is a dApp on the FEVM chain that facilitates the creation and operation of a data DAO.

These are the core functionalities of the POC.

### For consumers/end-users

- If someone opts in to become a DAO member and to contribute to the data economy, they will be able to upload anonymized credit card transaction data as a .csv file, have it encrypted immediately and store the encrypted data on decentralized storage provided by IPFS.
- The user will proceed to mint a soul-bound token (SBT). The token is non-transferable and represents provable membership of the DAO. More importantly, the IPFS link is tied to the metadata of the SBT.

- Only a wallet containing the “admin NFT” can decrypt the data. Any existing DAO members have the option to burn their SBTs if they wish to exit the DAO and stop sharing their data.

For the admin of the DAO:

- The “admin NFT” will be held in a multi-sig wallet. The multi-sig will be jointly managed by the admin and signers elected by DAO members.
- When the admin connects to the dApp and authenticates ownership of the “admin NFT”, they could unlock the admin portal. The admin is able to view all the wallet addresses that own the SPN DAO SBT, and initiate decryption of the credit card transaction data tied to a given SBT.
- Whenever a decryption is initiated, a payment will be triggered to send rewards in FIL to the holder of a given SBT.

## How it's Made

The dApp utilizes two contracts on Wallaby. The first is an SBT generated from the data that DAO members provide. The second is an admin NFT which allows the decryption of DAO members' SBTs.

When a user uploads anonymized credit card transactions, the information will be encrypted using Lit Protocol (currently support unavailable on Wallaby) and stored on IPFS. As a workaround, we have currently set up a Pinata Submarine gateway that provides the user access to upload files into a private IPFS link using the API keys that are configured inside the dApp. Only the DAO admin has access to decrypting the info uploaded by the user. The user can generate SBTs with the response information from IPFS using the SpendSBT.sol contract deployed on Filecoin Wallaby.

We have token-gated the admin portal by validating the wallets that contain the "admin NFT" minted from SpendAdmin.sol contract. Admin users have access to decrypt the SBTs minted by the user and access the information from Submarine. Every decrypt action by admin users dispatches rewards to the corresponding user that shared the data. Rewards will be based on tFIL.
