---
title: "EthRome Hackathon"
description: "eine Plattform für anonyme Umfragen per ZK-Proofs"
date: "Oct 2023"
demoURL: "https://taikai.network/ethrome/hackathons/ethrome-23/projects/clnfyh1ya00gmye01j19ob1rz/idea"
repoURL: ""
---

## Sharknado

![demo image](/images/projects/ethrome/sharknado.png)
![demo image](/images/projects/ethrome/sharknado_1.png)
![demo image](/images/projects/ethrome/sharknado_2.png)
![demo image](/images/projects/ethrome/sharknado_3.jpg)
![demo image](/images/projects/ethrome/sharknado_4.png)
![demo image](/images/projects/ethrome/sharknado_5.png)

Sharknado: eine Plattform, auf der Sie anonym an Umfragen teilnehmen, Ihren NFT-Besitz per ZK-Proofs nachweisen und in einem pseudonymisierten, zufallsbasierten Bounty-System Geldpreise gewinnen.

## REPOSITORY MIT DEM CODE DES PROJEKTS (sollte offen und öffentlich sein)

GitHub-Organisation: https://github.com/Squalome
Haupt-Repo: https://github.com/Squalome/sharknado
Semaphore-Repo: https://github.com/Squalome/Sharknado_Semaphore
Figma-Prototyp: https://www.figma.com/proto/Sharknado

Gegen Ende hatten wir ein Problem beim Mergen unserer Repos, zu denen unsere auf dem Gnosis Mainnet deployten Semaphore-SCs gehören. Deshalb reichen wir alle Repos ein. Sorry.

## VIDEO-DEMO (max. 3 Min.) - KEINE FOLIEN, NUR DEMO DES PROJEKTS

https://www.loom.com/share/0899f73bf30c4db38de115dd9dd457f8

## Contract-Adresse(n) oder Website-URLs Ihrer deployten Anwendung, entweder auf einem Testnet Ihrer Wahl oder im Mainnet einer Plattform Ihrer Wahl. (KEINE Pflicht)

Contract Sharknado.sol auf dem Gnosis Mainnet: 0xeFB23e1a4573eBA1385D2730A4ddB9aeeb6ea20F
Contract Semaphore.sol auf dem Gnosis Mainnet: 0xee5cF4Cc94bb97E2bA0d0a115b69c6075Ce42DD1
Contract Sharktoken.sol (Beispiel-Contract für NFT Gating) auf dem Gnosis Mainnet: 0xF649Cb1884dcf8bAc5ccFA669083c489288685bb

App: https://sharknado.vercel.app/

## Bounties (Beschreibung oder Erklärung, wie Sie die Technologie der Bounty-Sponsoren eingebunden haben)

PSE/Semaphore:

Wir haben Semaphore von PSE genutzt, um den NFT-Besitz per ZK-Proofs nachzuweisen und in Gruppen Signale zu senden, mit denen man an der Umfrage teilnimmt.

Außerdem haben wir die Challenge angenommen, Semaphore auf dem Gnosis Mainnet zu deployen: 0xee5cF4Cc94bb97E2bA0d0a115b69c6075Ce42DD1, und Subgraphs auf dem Gnosis Mainnet deployt: https://thegraph.com/studio/subgraph/sharknadosemaphoregraph

Probleme mit Informationslecks und mögliche Lösungen für die Zukunft:

- Das Abstimmungssignal enthält einen Boolean (die Stimme) und eine pseudonyme, frische Wallet-Adresse des Nutzers, an die die Bounty geht, wenn er in der Lotterie gewinnt. Bewegt ein Gewinner seine Mittel und hinterlässt on-chain Spuren, die seine Identität verraten (RIP, Freiheit von TornadoCash), wird seine Stimme öffentlich mit seiner Identität verknüpft.

  LÖSUNG: Ein in Reihe geschalteter Circuit (2. Gruppe). Beitreten kann nur, wer den Proof hat, um in der ersten Gruppe ein Signal zu senden, und dort sendet man seine frische Adresse als Signal getrennt von der Stimme. Einen solchen Circuit in Reihe zum ersten Template-Circuit von Semaphore hätten wir von Grund auf bauen müssen, und dafür reichte die Zeit im Hackathon nicht.

- Wer einer Gruppe beitritt, erzeugt eine On-Chain-Transaktion, die den Beitritt offenlegt. Man kann also sehen, wer in der Gruppe ist, aber nicht, wie jeder Einzelne abgestimmt hat.

Gnosis:

Wir wollten die Umfrage mit der Plattform Swansky umsetzen. Wir hatten aber keine Erfahrung mit Swansky, und es fehlte die Interoperabilität mit den anderen Bounties und Technologie-Stacks, die wir für diesen Hackathon gewählt hatten. Deshalb sind wir einen anderen Weg gegangen.

Wir haben es im Testnet versucht, dort ließen sich aber weder Subgraphs noch andere Tools deployen. Deshalb haben wir im Mainnet deployt. Subgraphs brauchten wir, weil das Semaphore-Paket im Client auf Subgraphs angewiesen ist.

Das Gute daran: Wir sind im Mainnet live :) Viel Spaß beim Spielen, oder bauen Sie einen Client, um Umfragen zu veröffentlichen.

The Graph:

Wir haben Subgraphs für zwei Contracts deployt:

1. Contract Semaphore.sol auf dem Gnosis Mainnet: https://thegraph.com/studio/subgraph/sharknadosemaphoregraph
   Build abgeschlossen: QmcxFkVPtMBtiH6a8yWFQk9nt8h5cr4Um4eGcWG46ds8QB
   Queries (HTTP): https://api.studio.thegraph.com/query/54895/sharknadosemaphoregraph/v0.0.1

2. Contract Sharknado.sol auf dem Gnosis Mainnet:
   https://api.studio.thegraph.com/query/54895/sharknadograph3/v0.0.5

3. Contract SharkToken.sol auf dem Gnosis Mainnet:
   https://api.studio.thegraph.com/query/54895/sharktokengraph/v0.0.1

BUIDLGUIDL:

Wir haben Scaffold-ETH2 als Boilerplate genutzt, um die fertigen Komponenten zu verwenden: Anbindung an Smart Contracts mit Hot Reload und Integration der Wallet-Anbieter.

Danke, das hat uns das Leben leichter gemacht: https://sharknado.vercel.app/

Interface:

Das gesamte Designkonzept von Sharknado ist von der Welt der Haie und Meereswellen inspiriert.

Markenkonzept:
In unserer Markenvision wollten wir mit lebendigen, elektrischen Farben eine zeitgemäße Energie vermitteln: „Navy Blue“ und „Aquagreen“. „Otto Attack Wide“ war die perfekte Schrift dazu. Die kontrastreiche Serifenschrift hat scharfe Winkel, die an Haizähne erinnern, und erzeugt so einen visuell fesselnden Effekt. Das ausgewogene Design wirkt selbstbewusst und dynamisch, ideal für solche Web3-Projekte.

UX-Mechanik:
Ein Onboarding dient der Erklärung, damit sich Nutzer leicht mit unserem Produkt vertraut machen. Die Gamification auf der Erfolgsseite soll die Metriken für Engagement und Beteiligung steigern und das Produkterlebnis lohnend machen. Für bessere Retention zeigen wir Empfehlungen, sobald Nutzer ihren Flow abgeschlossen haben.

Fortschrittsbalken setzen wir überall dort ein, wo sie nötig sind, damit Nutzer informiert bleiben und kein unnötiger Stress entsteht. Transaktionen bündeln wir in Schritte, damit Nutzer den Prozess durchlaufen, ohne sich überfordert oder erschöpft zu fühlen.

Pixelgenau konnten wir das Design im Frontend nicht fertigstellen, deshalb finden Sie den Design-Flow in der Figma unseres Teams.
Den klickbaren Prototyp in Figma finden Sie hier
Und das Design selbst in Figma hier

Geschäftlicher Nutzen von Interface für Sharknado:
Interface liefert einen On-Chain-Feed der Ereignisse, Sharknado liefert Off-Chain-Meinungen. Für uns ist das eine im Ozean geschlossene Ehe, denn KOMBINIERT sind solche Daten für die Web3-Marktforschung um ein Vielfaches wertvoller.

## Falls Ihr Projekt vor dem ETHRome-Hackathon begonnen wurde, verlinken Sie hier ein ÖFFENTLICHES Google Doc, das alle früheren Iterationen im Detail beschreibt (beachten Sie die Hackathon-Regeln zu bereits bestehenden Projekten)

https://docs.google.com/document/d/1P82PdIE8cJaCSv3T3fJlwNCxeJ-FBTuPOeYXBvmK1UU/edit?usp=sharing
