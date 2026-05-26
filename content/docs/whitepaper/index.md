---
title: "Executive Summary"
description: "The protocol thesis in one page — what AURA FHE is, what's live, and why the window is now."
order: 1
group: "Whitepaper"
group_order: 1
---

> ⚠️ **IMPORTANT DISCLAIMER** — This project is **NOT** available to citizens or residents of the United States of America or the People's Republic of China. By participating in this project, you confirm that you are not a citizen or resident of these jurisdictions.

The challenge with existing Fully Homomorphic Encryption (FHE) is speed. Every production scheme today — Zama's TFHE, Fhenix, Inco — requires a time-consuming refresh process called bootstrapping that creates a structural bottleneck. When the target is Solana's 400ms block time, traditional FHE is too slow to compete. AURA FHE bridges this gap, bringing high-speed, confidential compute to the Solana Virtual Machine.

Our scheme abandons lattice-based FHE entirely. AURA FHE uses precomputed lookup tables (LUT-FHE) over a Multivariate Quadratic structure — proven NP-hard, post-quantum secure, and structurally bootstrap-free. The result is FHE that operates at chain speed, validated by 12 years of cryptographic R&D, protected by 9 patents, and shipping as production code today. Private by default. Verifiable by design.

AURA SDK v5 is live. AuraPoly — a sealed-bid prediction market on AURA's encrypted compute layer — is clearing real flow on Solana. FHE-based AI inference is operational for any privacy-critical workload where confidentiality outweighs latency.

## One protocol, five aligned components

AURA FHE is one protocol expressed across five components, each forcing demand into the next:

- **The SDK** — three-line integration that lets any developer add encryption to their app
- **The AURA Token** — the unit of account for every encrypted computation on the network
- **The Aura Wallet** — the consumer surface for encrypted balances, swaps, and transfers
- **The Coprocessor & Mining Protocol** — the distributed compute substrate executing the FHE work
- **The Global Ecosystem** — extension into real-world enterprise compute and confidential AI inference

## Why now

The window is now. Zama's Q1 2026 Shielded report (released April 30) and their public 2026 litepaper both confirm Solana integration is targeted for H2 2026 — compressed from earlier "2027" guidance. The race to define Solana's encryption layer is no longer abstract; it is happening over the next two quarters. AURA FHE has the SDK in production, AuraPoly clearing flow, and TGE coordinated with Q3 2026 — the exact window in which this category locks in.

**The raise:** $25M Pre-Series A (SAFE with token warrant, $1M minimum) to win the Solana encryption layer before the category locks in. First close $10M, target Q2 2026.
