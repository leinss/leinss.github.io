---
title: "EthGlobal Paris Hackathon"
description: "zkPaymaster erweitert den Paymaster der Account Abstraction um Zero-Knowledge, damit sich Transaktionsgebühren in jeder Form sponsern lassen und die Privatsphäre gewahrt bleibt. Ethereum Foundation - Best ERC-4337, Sismo - Top 5, Biconomy - Best Use, MakerDAO - 2nd Best use of sDAI."
date: "Jul 2023"
demoURL: "https://ethglobal.com/showcase/zkpaymaster-dbooj"
repoURL: "https://github.com/floberlin/pmiyc"
---

## zkPaymaster

<video controls>
  <source src="https://stream.mux.com/RluD7xdbrYJv9OA9mjHRDTh2HrwtIIQYqp3yzP5MfdE/high.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

zkPaymaster erweitert den Paymaster der Account Abstraction um Zero-Knowledge, damit sich Transaktionsgebühren in jeder Form sponsern lassen und die Privatsphäre gewahrt bleibt. Ethereum Foundation - Best ERC-4337, Sismo - Top 5, Biconomy - Best Use, MakerDAO - 2nd Best use of sDAI.

## Projektbeschreibung

Bei ETHGlobal Paris haben wir zkPaymaster gebaut. Es ändert, wie eine Cross-Chain-Transaktion ihre Gebühr bezahlt. Unsere Plattform nutzt das Potenzial von Account Abstraction und Zero-Knowledge-Proofs für neuartige Paymaster, die jeweils einem eigenen Zweck dienen.

Im Zentrum unseres MVP steht ein Zero-Knowledge-Proof-System, das den Besitz von MakerDAO-Tokens in jeder Wallet auf jeder Blockchain nachweist. Liegt dieser Proof vor, übernimmt unser eigens entwickelter Paymaster alle Transaktionsgebühren beim Swappen oder Handeln von Savings DAI (sDAI). Der Nutzer hat mit Gebühren weder Aufwand noch Kosten: Ein Trade kostet ihn keine Gebühren, und MakerDAO-Holder werden belohnt!

Unser Account-Abstraction-System baut auf Biconomy auf. Die Zero-Knowledge-Proofs erzeugen wir mit Sismo.

Derzeit ist zkPaymaster auf das sDAI-Ökosystem zugeschnitten, um MakerDAO-Holder zu belohnen. Das Framework ist aber vielseitig und erweiterbar. Es lässt sich an jede DAO oder andere beweisbare Konstrukte anpassen und legt so die Grundlage für ein stärker vernetztes dezentrales Ökosystem.

Wir glauben, dass zkPaymaster Blockchain-Transaktionen grundlegend verändern wird: Es senkt Hürden, erhöht den Nutzen und demokratisiert den Zugang zu dezentralen Finanzdiensten. Unser Projekt ist ein großer Schritt nach vorn in der Blockchain-Welt. Es verspricht Nutzern eine effiziente und günstige Lösung und fördert eine inklusivere, stärker vernetzte DeFi-Landschaft.

## Umsetzung

Die UI basiert auf Next.js und den Account-Abstraction-Paketen von Biconomy. Wir haben alle Biconomy-Pakete genutzt außer dem Paymaster, denn den haben wir selbst gebaut. Für die ZK-Proofs nutzen wir die Vaults von Sismo. Der Paymaster ist 4337-konform und prüft die Daten, die von Sismo kommen. Die Contracts entstanden mit Foundry und sind auf Goerli deployt.
