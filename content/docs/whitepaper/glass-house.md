---
title: "The Glass House Era"
description: "Why transparent blockchains have a structural ceiling on institutional capital."
order: 2
group: "Whitepaper"
group_order: 1
---

Every wallet is a glass house. Solana processes more than 65 million transactions daily — sender, receiver, amount, calldata, smart contract interaction. Every position is visible. Every move is watched. This transparency was once celebrated as the foundation of trustless verification. It has become the single largest structural barrier to the next order of magnitude of on-chain capital.

We call this the Invisible Tax. Maximal Extractable Value (MEV) on Solana has cost users billions in cumulative losses — over $3.6B in tips have flowed through Jito alone. Every retail swap is visible to bots that front-run, sandwich, and copy-trade in microseconds. Every whale wallet is tracked by thousands of automated systems. Execution quality degrades not by accident but by design — the design of a public mempool. Your alpha is their profit.

## Existing mitigations are routing solutions, not encryption solutions

Jito's block engine routes transactions through a private auction and redistributes a portion of extracted value. Their own documentation is explicit that the feature "may help reduce sandwich attacks but is not guaranteed to do so." Jupiter's Limit Order V2 introduced privacy for resting limit orders, with Jupiter publicly acknowledging that the feature "does not eliminate the MEV problem completely."

These are real improvements for retail-scale swap users. They are not solutions to the broader problem — and they cannot be, because the underlying chain remains transparent. Routing efficiency manages MEV; only encryption eliminates it.

## MEV is one symptom of a deeper disease

For an institutional trading desk, protecting a single transaction does not solve the problem if the overall position and strategy are leaked to the public. Sandwich protection on a single trade does not give a $50M desk the ability to execute without leaking position. Limit order privacy does not give an asset manager a confidential balance sheet.

Wallet history, portfolio composition, counterparty patterns, and protocol-level state all remain fully visible to anyone running a node — and no amount of transaction-layer routing closes that gap. The institutional capital that cannot deploy on transparent rails is not blocked by sandwich risk; it is blocked by the visibility of state itself.

## The structural ceiling on on-chain capital

Pension funds, sovereign wealth funds, regulated asset managers, and corporate treasuries collectively control more than $100 trillion globally. A growing fraction of this capital seeks digital asset exposure. None of it can deploy on a chain where its trading strategies, portfolio positions, and counterparty relationships are visible to every participant. This is not preference. It is fiduciary obligation, regulatory constraint, and competitive necessity simultaneously.

The result is a structural ceiling on on-chain TVL. DeFi sits at roughly $200B. The capital seeking digital exposure exceeds that by two orders of magnitude. The gap is not a marketing problem and it is not a routing problem. It is a privacy problem.

## The composability–privacy paradox

Existing privacy solutions force a binary choice. Mixers and shielded pools provide privacy at the cost of composability — assets become inert. Zero-knowledge rollups provide selective privacy but require trusted setups, restrict computation patterns, or sacrifice the programmability that makes DeFi valuable in the first place. There is no production-grade solution that delivers encrypted computation while preserving the open composability that makes Solana worth building on.

AURA FHE closes this gap. Computation occurs directly on encrypted data. Validators verify correctness without ever decrypting. Composability is preserved because every encrypted output is itself a valid input to the next computation. Privacy and composability stop being a tradeoff. Your financial privacy is protected by mathematics, not policy.

**The Glass House Era is over. AURA FHE is the cure for transparency.**
