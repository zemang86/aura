---
title: "Tokenomics"
description: "Supply, allocation, demand flows, and the emission schedule designed to transition from subsidy to fee revenue."
order: 7
group: "Whitepaper"
group_order: 1
---

The token economic design serves four constraints simultaneously: it must compensate the mining network sustainably, align long-term holders with protocol growth, provide credible runway for the ecosystem and team, and maintain regulatory defensibility across the jurisdictions where AURA operates.

## Supply and allocation

**Total supply:** 1,000,000,000 AURA — fixed at genesis, no protocol-level inflation beyond the published mining emission schedule.

| Bucket | % | Tokens | Vesting |
|---|---|---|---|
| Mining / PoEW Rewards | 27% | 270,000,000 | 8-year emission curve, halving every 24 months |
| Team & Advisors | 24% | 240,000,000 | 4-year linear vest, 12-month cliff (founders weighted) |
| Ecosystem & Grants | 17% | 170,000,000 | Released against milestones over 5 years |
| Investors (Pre-Series A + Series A reserve) | 15% | 150,000,000 | 24-month linear vest, 6-month cliff |
| Foundation / Treasury | 10% | 100,000,000 | 12-month lock, 5-year linear thereafter |
| Community / Airdrop / Early Integrators | 7% | 70,000,000 | 25% at TGE, 75% over 18 months |

## Demand sources

Token demand is structurally diversified across four flows so that no single demand source determines token value:

- **Per-transaction compute fees** — every SDK call triggers an FHE compute fee denominated in AURA. As SDK adoption grows, fee volume scales linearly with on-chain encrypted computation. This is the dominant long-term demand flow.
- **Validator and miner staking** — operators of the coprocessor network must stake AURA to participate.
- **Wallet demand** — every AURA Wallet user holds a small AURA balance to pay for encrypted operations.
- **Protocol governance** — long-term holders stake to participate in governance and earn staking yield.

## Supply mechanics

The mining emission schedule is designed to mirror Bitcoin's halving model but calibrated for the FHE compute market. Emissions begin at TGE, peak during the genesis phase when miners are being bootstrapped, and decline as fee revenue grows to replace subsidy income. By Year 4, fee revenue from SDK usage is projected to exceed miner subsidy, completing the transition from emission-funded to fee-funded security.
