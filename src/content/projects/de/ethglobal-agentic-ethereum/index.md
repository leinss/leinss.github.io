---
title: "EthGlobal Agentic Ethereum Hackathon"
description: "etherguild.xyz, eine Community zur Finanzierung von Projekten auf Ethereum-Basis."
date: "Feb 2025"
demoURL: "https://ethglobal.com/showcase/ether-guild-e8nzs"
repoURL: "https://github.com/its-everdred/etherguild  "
---

## EtherGuild.xyz

<video controls>
  <source src="https://stream.mux.com/ARsV0001eQ64IzVySBjvHhtTDKTqpQhkrdVeX02MJ02LJIE/high.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

![demo image](/images/projects/ethglobal-agentic-ethereum/etherguild.png)
![demo image](/images/projects/ethglobal-agentic-ethereum/etherguild_1.png)
![demo image](/images/projects/ethglobal-agentic-ethereum/etherguild_2.png)
![demo image](/images/projects/ethglobal-agentic-ethereum/etherguild_3.png)
![demo image](/images/projects/ethglobal-agentic-ethereum/etherguild_4.png)

## Beschreibung

etherguild.xyz ist eine Web-App, die Anreize schafft, ETH zu unterstützen, und zwar so, dass es Spaß macht und sich auszahlt. Die Website führt Guild Quests ein. Die Community kann damit zeigen, welche Initiativen sie unterstützt, und sie direkt und fein abgestuft finanzieren, während sie gemeinsame Ziele erreicht. Quest-Contracts erlauben eine eigene Finanzierung je Initiative, die Berechtigungen liegen bei einer Multisig der Guild Officers der Community.

Unser KI-Agent Ethan hat Lese- und Schreibzugriff auf die Chain und die Web-API. Damit leitet er Quest-Ideen und Updates aus dem Discord ins Dashboard.

## Umsetzung

Für ETH Global haben wir einen Prototyp der Quest-Plattform mit drei Hauptkomponenten gebaut:

- etherguild.xyz - Eine Next.js-App, die Quests darstellt, Daten speichert und den Fortschritt verfolgt. Für den Funding-Flow haben wir onchainkit.xyz genutzt
- @ETHan - Ein Agent auf Discord und onchain, der aus Diskussionen und Ideen der Gildenmitglieder Quests anlegen und ändern kann.
- etherguild-protocol - Eine Reihe von Contracts, die anonyme Spenden ermöglichen und dabei die rechtlichen Vorgaben für Non-Profits erfüllen.

## Repos

https://github.com/its-everdred/etherguild  
https://github.com/its-everdred/etherguild-protocol  
https://github.com/its-everdred/etherguild-agent
