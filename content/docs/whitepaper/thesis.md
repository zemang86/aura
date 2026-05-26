---
title: "The Thesis"
description: "Two chains, two architectures, one window — why AURA targets Solana while Zama owns Ethereum."
order: 3
group: "Whitepaper"
group_order: 1
---

Privacy infrastructure operates as a winner-take-most market where network effects consolidate around single dominant providers. Zama has emerged as Ethereum's encryption layer, while AURA FHE is positioned for Solana.

## Zama's market validation

Zama's Q1 2026 Shielded institutional report demonstrates FHE's production viability:

- **$130M+ raised** across Series A and Series B rounds at $1B+ valuation
- **$121M shielded** in three days during January 2026 confidential Dutch auction with 218% oversubscription
- **Most-used Ethereum application** on January 24, 2026 — surpassing USDT, USDC, and Uniswap
- **ERC-7984 ratified** with OpenZeppelin as the EVM confidential token standard
- **96+ employees**, ~40% PhDs — world's largest dedicated FHE research organization

## Architectural differences

The critical distinction lies in performance optimization:

**Zama's approach** — CPU-based execution achieving 20+ TPS, targeting "hundreds of TPS per chain" via GPU acceleration by Q3 2026. This aligns with Ethereum's 12-second block time but creates bottlenecks for Solana's 400ms native throughput.

**AURA FHE's approach** — LUT-FHE primitive designed for Solana-speed finance. Bootstrap-free architecture with integer addition completing in approximately 0.04 microseconds and 3.7MB WASM runtime — fundamentally different mathematics for different chain requirements.

## Strategic positioning

AURA FHE targets Solana's 12-month window before category lock-in, aiming to establish SDK production, live integrations, and developer mindshare before Zama's H2 2026 Solana integration arrives. The coprocessor model remains chain-agnostic, enabling cross-chain expansion beginning Q1 2027.
