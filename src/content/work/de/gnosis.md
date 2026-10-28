---
company: "Gnosis"
role: "Senior Backend Engineer"
dateStart: "10/01/2025"
dateEnd: "heute"
---

Backend-Dienste und die gesamte Infrastruktur des Circles-Protokolls.

[gnosis.io](https://www.gnosis.io)

**dienste**

Vier Backend-Dienste vom ersten Commit an entwickelt, in TypeScript auf
PostgreSQL: die Authentifizierung für das ganze Ökosystem, mit Sign-In with
Ethereum und Signaturen von Smart Wallets; ein Empfehlungsdienst; ein
Profildienst, der Onchain-Profile indiziert und ihre Inhalte auf IPFS pinnt;
und ein Scoring-Dienst, der je Gruppe einen Sparse-Merkle-Baum führt und die
Beweise liefert, die das SDK beim Minten vorlegt. Onchain veröffentlicht wird
nur die Wurzel.

**indizierung**

Der größte Anteil am Nethermind-Plugin des Protokolls, das Circles-Events im
Execution-Client indiziert und als abfragbare API bereitstellt. C# und .NET,
daneben eine Marktplatz-API und ereignisgesteuerte Worker für das
Trust-Management.

**infrastruktur**

Multi-Host-Plattform, gesteuert über Ansible: Blockchain-Nodes, PostgreSQL mit
automatischem Failover und Streaming-Replikation, Connection-Pooling,
Reverse-Proxy und TLS, Firewall und Rolling Deployments auf Staging- und
Produktivumgebung.

**überwachung**

Monitoring-Stack nach dem Hub-Satellite-Prinzip aus Prometheus, Loki, Grafana,
Tempo und Alertmanager, mit Remote-Write von den Satelliten, zentralem
Log-Versand und Alarmen zum Zustand von Nodes, Datenbanken und Endpunkten.
