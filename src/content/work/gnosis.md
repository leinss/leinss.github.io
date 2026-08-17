---
company: "Gnosis"
role: "Senior Backend Engineer"
dateStart: "10/01/2025"
dateEnd: "Present"
---

Backend services and the full infrastructure behind the Circles protocol.

[gnosis.io](https://www.gnosis.io)

**services**

Four backend services written from the first commit, in TypeScript on
PostgreSQL: authentication for the whole ecosystem, covering Sign-In with
Ethereum and smart-wallet signatures; a referral service; a profile service that
indexes onchain profiles and pins their content to IPFS; and a scoring service
that keeps a sparse Merkle tree per group and serves the proofs the SDK presents
at mint time, with only the root published onchain.

**indexing**

The largest share of the work on the protocol's Nethermind plugin, which indexes
Circles events inside the execution client and serves them as a queryable API.
C# and .NET, alongside a marketplace API and event-driven trust-management
workers.

**infrastructure**

Multi-host platform driven by Ansible: blockchain nodes, PostgreSQL with
automated failover and streaming replication, connection pooling, reverse
proxy and TLS, firewalling, and rolling deploys across staging and production.

**observability**

Hub-satellite monitoring stack of Prometheus, Loki, Grafana, Tempo and
Alertmanager, with remote-write from the satellites, central log shipping,
and alerting on node, database and endpoint health.
