---
title: "LUT-FHE & Coprocessor"
description: "Bootstrap-free FHE over Multivariate Quadratic structure, and the coprocessor architecture that runs it."
order: 4
group: "Whitepaper"
group_order: 1
---

## Why existing FHE cannot run on Solana

Lattice-based FHE schemes — the entire current generation, including Zama's TFHE, Fhenix's Bonsai, Inco's evm-tfhe — share a common architectural constraint: every encrypted operation introduces noise into the ciphertext. After a small number of operations, the noise reaches a threshold beyond which decryption fails. To continue computing, the ciphertext must be bootstrapped — homomorphically decrypted and re-encrypted, refreshing the noise. Bootstrapping is computationally expensive. The fastest production implementations measure bootstrapping in tens of milliseconds per gate, with realistic dApp workloads requiring hundreds of bootstraps per transaction.

A 400ms Solana block cannot accommodate this. The math forces compromise: either the chain slows to FHE's pace, or the FHE workload is offloaded entirely off-chain with trust assumptions that defeat the purpose.

## LUT-FHE: bootstrap-free encrypted compute

AURA's scheme replaces ring-based ciphertext arithmetic with precomputed lookup tables defined over the multivariate quadratic structure. Rather than refreshing noise after each operation, the scheme is structurally noise-free — the algebraic structure does not accumulate error. This eliminates bootstrapping entirely.

The result, on standardized benchmarks, is approximately 1000x speedup over TFHE-based alternatives across typical arithmetic workloads. Specific operations show greater asymptotic speedups; integer addition, for example, executes at roughly 0.04 microseconds versus Zama's ~50ms gate evaluation. Independent benchmark verification is in progress and will be published before the Series A close.

Security reduces to the Multivariate Quadratic (MQ) problem, proven NP-hard by Garey and Johnson (1979). Unlike lattice-based schemes whose hardness rests on conjectured assumptions about Learning With Errors (LWE), MQ-hardness has a stronger theoretical foundation and no known efficient quantum attack. AURA is post-quantum secure not as a future upgrade path but as a structural property.

## The coprocessor architecture

AURA's runtime executes off the host chain. A Solana program built with the AURA SDK does not perform FHE computation directly — it submits an encrypted compute request to the AURA coprocessor network, receives a verifiable ciphertext result, and proceeds with on-chain settlement. This separation is deliberate and load-bearing for the entire design.

**It preserves chain throughput.** Solana validators do not spend block time on FHE computation. They process transactions at native speed and verify ciphertext outputs as they would verify any other input.

**It makes the architecture chain-agnostic.** The coprocessor network is a separate compute substrate. Any chain can integrate the AURA SDK and route encrypted compute requests to the coprocessor.

**It creates the economic substrate for the mining protocol.** The coprocessor network is operated by independent miners running FHE compute against encrypted requests. Miners earn AURA tokens in proportion to verified work delivered.

**It enables verifiability without trust.** Each coprocessor result is accompanied by a cryptographic correctness proof. Validators on the host chain verify the proof, not the computation. Trust is replaced by mathematics.
