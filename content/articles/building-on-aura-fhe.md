---
title: "A Developer's Introduction to Building on Aura FHE"
date: "2026-04-25T00:00:00.000Z"
image: null
---

<p dir="ltr">This post is for developers who want to build applications where computation is private by default.</p><h3 dir="auto">The paradigm shift</h3><p dir="ltr">Building on a public blockchain, you accept that all computation is transparent. Your contract state is readable by anyone. Your function calls are logged forever.</p><p dir="ltr">Building on Aura changes this default. Your contract can process encrypted inputs and produce encrypted outputs. The computation is verified on-chain, but the data is not.</p><h3 dir="auto">What you can build</h3><p dir="ltr"><strong>Private orderbooks:</strong> Limit orders where price and size are hidden until execution. No front-running possible because there's nothing to front-run.</p><p dir="ltr"><strong>Confidential lending:</strong> Borrow against collateral where your position size is private. Liquidation logic runs on encrypted values.</p><p dir="ltr"><strong>Sealed-bid auctions:</strong> Submit bids that are revealed only after the auction closes. No bid manipulation, no sniping.</p><p dir="ltr"><strong>Private governance:</strong> Vote on proposals without revealing your voting weight or preference to other participants until vote closes.</p><p dir="ltr"><strong>Encrypted gaming:</strong> Game state (hand cards, positions, resources) that is private to each player but verifiable by all players.</p><h3 dir="auto">The SDK</h3><p dir="ltr">Aura's developer SDK exposes:</p><pre><code>// Encrypt a value for use in a computation
const encrypted = await aura.encrypt(amount, publicKey);

// Submit an encrypted swap
const tx = await shieldSwap.swap({
  inputToken: "USDC",
  outputToken: "SOL",
  encryptedAmount: encrypted,
  maxSlippage: 0.5
});

// Decrypt result (only you can do this)
const result = await aura.decrypt(tx.encryptedOutput, privateKey);</code></pre><p dir="ltr">The API is designed to be familiar to any Solana developer. You're not learning FHE math — you're using encrypted values like regular values with a different type signature.</p><h3 dir="auto">Get early access</h3><p dir="ltr">We're running a limited developer beta. If you want early access:</p><ul dir="auto"><li><p>Join our Discord: <a href="https://discord.gg/aurafhe" target="_blank"><strong>discord.gg/aurafhe</strong></a></p></li><li><p>Ask in #builders about SDK access</p></li><li><p>Or email directly: dev@afhe.io</p></li></ul><p dir="ltr">We prioritize developers with:</p><ul dir="auto"><li><p>A concrete use case in mind</p></li><li><p>Solana development experience</p></li><li><p>Interest in collaborating on the SDK design</p></li></ul><h3 dir="auto">The bigger picture</h3><p dir="ltr">FHE-based computing represents a new programming paradigm, not just a crypto feature. The same technology that makes shield.afhe.io private enables private machine learning, confidential multi-party computation, and encrypted cloud computing.</p><p dir="ltr">Building on Aura now puts you at the frontier of what's possible. The applications that will define this space haven't been built yet.</p><p dir="ltr"><strong>SDK:</strong> <a href="https://afhe.io/sdk" target="_blank"><strong>afhe.io/sdk</strong></a> | <strong>Discord:</strong> <a href="https://discord.gg/aurafhe" target="_blank"><strong>discord.gg/aurafhe</strong></a> | <strong>Docs:</strong> <a href="https://docs.afhe.io/whitepaper" target="_blank"><strong>docs.afhe.io/whitepaper</strong></a></p>
