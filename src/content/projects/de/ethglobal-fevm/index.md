---
title: "EthGlobal FEVM Hackathon"
description: "SPN steht für Spending. Unser Team hat eine Data DAO gebaut, mit der Verbraucher ihre Daten, insbesondere ihre Kreditkartentransaktionen, in Assets verwandeln, die ihnen wirklich gehören"
date: "Nov 2022"
demoURL: "https://ethglobal.com/showcase/spn-dao-zwbar"
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

## Projektbeschreibung

Unsere Kreditkartentransaktionen verraten viel über unser Verhalten. Zusammengeführt erzählen sie noch mehr über die Wirtschaft. Schnellen die Netflix-Abos nach oben? Geben die Leute weniger in Baumärkten aus? Kreditkartendaten sind die umsatzstärkste Datenquelle im Markt für „alternative Daten“.

Die Marktgröße in unserem Pitch stammt von [Grand View Research](https://www.grandviewresearch.com/industry-analysis/alternative-data-market) aus dem Jahr 2022: 143,31 Milliarden USD bis 2030, bei 54,4 % Wachstum pro Jahr, und Nordamerika hielt mehr als 67 % des Umsatzes von 2021. Die Zahl ist als Stand von 2022 zu lesen, denn dieselbe Firma hat die Prognose seitdem überarbeitet.

Verbraucher haben jedoch wenig Kontrolle darüber, wie und wann ihre persönlichen Daten genutzt werden, auch ihre Kreditkartendaten. Diese Daten treiben eine Industrie mit Milliardenumsätzen an, und die Verbraucher bekommen dafür fast nichts. In der Praxis sind die Daten einer einzelnen Person wenig wert. Und es gibt keinen Marktplatz, auf dem Verbraucher sich abstimmen und ihre Daten bündeln könnten.

Mit Web3.0-Technologien macht SPN DAO das möglich! Unser erstes Release ist eine dApp auf der FEVM-Chain, mit der sich eine Data DAO gründen und betreiben lässt.

Das sind die Kernfunktionen des POC.

### Für Verbraucher und Endnutzer

- Wer Mitglied der DAO werden und zur Datenwirtschaft beitragen will, kann anonymisierte Kreditkartentransaktionen als .csv-Datei hochladen. Die Datei wird sofort verschlüsselt, und die verschlüsselten Daten landen auf dem dezentralen Speicher von IPFS.
- Danach mintet der Nutzer einen Soul-Bound Token (SBT). Der Token ist nicht übertragbar und steht für eine nachweisbare Mitgliedschaft in der DAO. Wichtiger noch: Der IPFS-Link ist an die Metadaten des SBT gebunden.

- Nur eine Wallet, die das „Admin NFT“ hält, kann die Daten entschlüsseln. Jedes DAO-Mitglied kann seinen SBT burnen, wenn es die DAO verlassen und keine Daten mehr teilen will.

Für den Admin der DAO:

- Das „Admin NFT“ liegt in einer Multi-Sig-Wallet. Diese Multi-Sig verwalten der Admin und von den DAO-Mitgliedern gewählte Signer gemeinsam.
- Verbindet sich der Admin mit der dApp und weist den Besitz des „Admin NFT“ nach, kann er das Admin-Portal freischalten. Dort sieht er alle Wallet-Adressen, die den SPN DAO SBT besitzen, und kann die Entschlüsselung der Kreditkartendaten anstoßen, die an einen bestimmten SBT gebunden sind.
- Jede Entschlüsselung löst eine Zahlung aus, die dem Inhaber des jeweiligen SBT Rewards in FIL schickt.

## Umsetzung

Die dApp nutzt zwei Contracts auf Wallaby. Der erste ist ein SBT, der aus den Daten der DAO-Mitglieder erzeugt wird. Der zweite ist ein Admin NFT, mit dem sich die SBTs der DAO-Mitglieder entschlüsseln lassen.

Lädt ein Nutzer anonymisierte Kreditkartentransaktionen hoch, werden die Daten mit Lit Protocol verschlüsselt (auf Wallaby derzeit nicht unterstützt) und auf IPFS gespeichert. Als Workaround haben wir vorerst ein Pinata-Submarine-Gateway eingerichtet. Darüber lädt der Nutzer Dateien in einen privaten IPFS-Link hoch, mit den API-Keys, die in der dApp hinterlegt sind.

Nur der DAO-Admin kann die hochgeladenen Daten entschlüsseln. Mit der Antwort von IPFS erzeugt der Nutzer seine SBTs über den Contract SpendSBT.sol, der auf Filecoin Wallaby deployt ist.

Das Admin-Portal ist per Token Gating geschützt: Es prüft, ob eine Wallet das „Admin NFT“ aus dem Contract SpendAdmin.sol hält. Admins können die vom Nutzer geminteten SBTs entschlüsseln und auf die Daten in Submarine zugreifen. Jede Entschlüsselung durch einen Admin schickt Rewards an den Nutzer, der die Daten geteilt hat. Die Rewards laufen in tFIL.
