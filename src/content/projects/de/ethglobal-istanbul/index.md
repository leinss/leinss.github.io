---
title: "EthGlobal Istanbul Hackathon"
description: "ein Solo-Staking-Protokoll mit Sybil-Resistenz und MEV Smoothing"
date: "Nov 2023"
demoURL: "https://ethglobal.com/showcase/grayskull-guardians-ikgth"
repoURL: "https://ethglobal.com/showcase/grayskull-guardians-ikgth"
---

## Grayskull Guardians

<video controls>
  <source src="https://stream.mux.com/Q5SKFJUL00iG01x1ijwlqYVzRlF01ctno9QcqenV2S026EM/high.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Grayskull Guardians ist ein Solo-Staking-Protokoll mit Sybil-Resistenz über World Coin und Anti-Cheat-Contracts auf Basis von EAS, für sicheres und faires Solo Staking und MEV Smoothing auf Arbitrum.

## Projektbeschreibung

Grayskull Guardians betritt im Ethereum-Staking Neuland. Das Projekt verbessert Solo Staking mit drei Kernfunktionen und stärkt damit die Dezentralisierung. Erstens ermöglicht der MEV Smoothie Pool optimiertes Staking mit Anreizen. Der Pool erhöht im Schnitt die Rewards der Staker und bringt zudem einen neuen Mechanismus, der das Staking so effizient wie möglich macht.

Zweitens setzt das Projekt auf Rewards aus Public-Good-Funding: Beiträge vergrößern den gesamten Reward-Pool, und davon profitieren alle Teilnehmer. Drittens gibt es ein einzigartiges System für Zinseszins-Rewards durch automatisches Swappen in rETH, das die Gebühren für Solo-Staker optimiert.

Möglich wird das, weil Transaktionen gebündelt an Layer-2-Netzwerke gehen. So werden die Rewards effizient und günstig verteilt, und das zählt für einzelne Staker, die im Ethereum-Ökosystem das Maximum aus ihrer Rendite holen wollen.

## Umsetzung

Sybil-resistenter MEV-Pool mit Anreizen für Solo-Staker: Im Kern von Grayskull Guardians steht ein einzigartiger MEV-Pool (Maximal Extractable Value), der speziell für Solo-Staker gebaut ist. Der Pool ist Sybil-resistent. Er soll also verhindern, dass böswillige Akteure mehrere Identitäten anlegen, um das System auszunutzen.

Damit jeder Staker eindeutig und legitim ist, nutzt das Projekt die Proof-of-Personhood-Technologie von Worldcoin. So lassen sich einzelne Staker on-chain validieren, und sie können danach eindeutige Withdrawal-Adressen für ihre Ethereum-Validatoren festlegen. Das wahrt die Integrität des Staking-Prozesses und des Anti-Cheat-Systems.

(Hinweis: Wir haben festgestellt, dass die Verifizierung über Goerli einen Bug hat und nicht funktioniert, und das dem Team über Discord gemeldet. Deshalb haben wir einen Testfall auf OP Goerli umgesetzt, wo die Lösung erfolgreich läuft.)

Wirksamer Anti-Cheat-Mechanismus: Wenn Staker ihre angesammelten Rewards abheben, erstellen sie eine Attestation über einen Ethereum Attestation Service (EAS), die andere Staker anfechten können. Wird ein Staker beim Betrug erwischt, etwa weil er bei großen MEV-Rewards den Fee Recipient ändert, wird sein Stake von 32 ETH geburnt. Diese harte Strafe schreckt wirksam vor Regelverstößen ab.

Optimierte Transaktionseffizienz: Gasgebühren sind für Solo-Staker ein Problem. Das Projekt bündelt deshalb MEV- und Priority Fees auf Layer 1 und überträgt sie in einer einzigen Transaktion auf Layer 2 von Arbitrum. Eine Transaktion trägt das ganze Bündel statt einer Transaktion pro Staker, und so zahlt jeder Staker nur einen Bruchteil des Gas, um seine Rewards abzuheben.

Public-Good-Anreize für den „Smoothie Pool“: Der „Smoothie Pool“ ist ein neuartiger Contract, der Spenden von Einzelpersonen und Organisationen fördert. Die Spenden erhöhen die Jahresrendite (APR) für Solo-Staker. Gespendet wird effizient auf Layer 2, damit auch kleine Beiträge möglich sind.

Benutzerfreundliche Oberfläche: Das Projekt legt Wert auf eine ansprechende User Experience. Für Wallet-Verbindungen bindet es Wallet Connect v3 ein, als Standard-RPC dient MEV-Boost von Cowswap. Eine spielerische Oberfläche macht das Staking für Nutzer ansprechender und interaktiver.

Geplante Erweiterung mit Auto-Swapping: Grayskull Guardians will künftig eine Auto-Swapping-Funktion einführen. Sie tauscht verdiente MEV- und Priority Fees automatisch in ein Liquid-Staking-Asset auf Arbitrum. Die Rewards der Staker erwirtschaften so zusätzliche APR, und die Gesamtrendite steigt.

L1 Factory: https://goerli.etherscan.io/address/0x1230efc35e5f2e7eaa4f6385159393fa1675547c

L2 Factory: https://goerli.arbiscan.io/address/0x3c3720bf2d8cdd74df999d80af9f479b4f138044

SmPool L1: https://goerli.etherscan.io/address/0x5eb090778c245594fc4d5cfbf92d2b1a26910048

SmPool L2: https://goerli.arbiscan.io/address/0x0b852c2129cc8ef9e4581bcda1a8f2166cdb3bae

EAS: https://goerli.arbiscan.io/address/0x63b9f0dfa2a6a3604fb301b376dc3a5b133edd3a

Bridge-Transaktion: L1-0xFCa2906C37141f8cD1CB5a01E3a3FC07cC4B1025 https://goerli.etherscan.io/address/0xFCa2906C37141f8cD1CB5a01E3a3FC07cC4B1025 L2-0x3449e3bEEdCB9991b13f16dBf34D6691475c8f9D https://goerli.arbiscan.io/address/0x3449e3beedcb9991b13f16dbf34d6691475c8f9d

L1 tx 0x376a9fda70e638a40ec04dce6bc1f3c27ee97671f4480bbfaf26dbc7631666af https://goerli.etherscan.io/tx/0x376a9fda70e638a40ec04dce6bc1f3c27ee97671f4480bbfaf26dbc7631666af L2 tx 0x29f20a9f8a73a39257ce80d1effc95d8c3010ce5b2714c4cb6468aaba0c83a92 https://goerli.arbiscan.io/tx/0x29f20a9f8a73a39257ce80d1effc95d8c3010ce5b2714c4cb6468aaba0c83a92

![demo image](https://ethglobal.b-cdn.net/projects/ikgth/screenshots/n4z5q/default.jpg)
