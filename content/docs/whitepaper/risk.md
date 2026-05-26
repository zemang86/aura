---
title: "Risk Matrix"
description: "Every material risk stated directly — technical, competitive, economic, regulatory."
order: 8
group: "Whitepaper"
group_order: 1
---

Every material risk is stated here directly. Investors who ask honest questions deserve honest answers. The goal is not to minimize risk but to distinguish the risks that are real and manageable from those that are real and existential.

## Technical risks

**Cryptographic novelty** — LUT-FHE over Multivariate Quadratic structure is a novel construction. While the underlying MQ hardness assumption is well-established (NP-hard, Garey & Johnson 1979), the specific construction used in AURA has not undergone the decades of cryptanalysis that ring-based schemes have.
*Mitigation:* 12 years of internal R&D, 9 patents filed, 9-month independent academic review in progress, conservative parameter selection. Pre-Series A close is conditional on independent cryptographic verification.

**LUT storage overhead** — For operations over large input domains (e.g., 64-bit multiplication), table sizes can reach gigabytes — prohibitive for on-chain storage.
*Mitigation:* tables are stored off-chain by coprocessor operators with on-chain commitments for verification, domain partitioning, hierarchical table structures, and progressive table loading.

**Solana dependency** — AURA is purpose-built for Solana. A critical vulnerability in Solana's runtime, validator set centralization, or a chain halt directly impacts AURA operations.
*Mitigation:* architecture designed for potential multi-chain deployment. Cross-chain expansion begins Q1 2027.

## Competitive risks

**Zama Solana port** — Zama's published 2026 litepaper confirms SVM integration targeted for H2 2026. If Zama's port ships faster than expected and captures the developer mindshare before AURA establishes category ownership, the competitive moat narrows.
*Mitigation:* AURA already has the SDK in production, AuraPoly live, and first-mover advantage in the 6-month window before Zama's arrival. Architecture speed advantage (bootstrap-free vs. 50ms bootstrapping) is structural.

## Economic risks

**Mining sustainability** — Genesis emissions are a startup subsidy. If fee-based revenue does not reach sufficient levels before emission reduction (Year 2 halving), miners may reduce capacity, degrading network quality.
*Mitigation:* emission schedule designed to ensure fee revenue exceeds subsidy loss before each halving. SDK adoption metrics are primary KPI for this transition.

## Regulatory risks

**Privacy technology regulation** — Regulators in some jurisdictions have targeted privacy-preserving technologies (Tornado Cash, Zcash delistings, MiCA considerations). AURA's architecture differs materially from mixers — computation is verifiable, transactions are logged on-chain, and the privacy is computational rather than obscuring.
*Mitigation:* Jurisdictional disclosure (US/China exclusion), engagement with legal counsel across Singapore, Cayman, and EU jurisdictions, compliance-friendly selective disclosure features.
