---
title: "Build on Encrypted State: The Aura SDK Developer Guide"
date: "2026-05-05T00:00:00.000Z"
image: null
---

<p dir="ltr">You write Solana programs every day. You know Anchor, you know SPL tokens, you know how to serialize account data into 10-kilobyte blobs and pray the rent math works out.</p><p dir="ltr">But every piece of state in your program is readable by anyone. Every balance, every order, every vote. The blockchain is a glass house.</p><p dir="ltr">The Aura SDK changes the default. This guide walks you through building your first application where program state is encrypted end-to-end, processed without decryption, and revealed only to the parties who should see it.</p><h3 dir="auto">Prerequisites</h3><ul dir="auto"><li><p>Node.js 20+ or Bun 1.1+</p></li><li><p>Solana CLI tools installed</p></li><li><p>A Solana devnet wallet with some SOL (use <code>solana airdrop 2</code>)</p></li><li><p>Basic familiarity with TypeScript and Solana transactions</p></li></ul><h3 dir="auto">Step 1: Install the SDK</h3><pre><code>pnpm add @aura-fhe/sdk @solana/web3.js</code></pre><p dir="ltr">Or if you prefer Rust:</p><pre><code>cargo add aura-fhe-sdk</code></pre><p dir="ltr">The TypeScript SDK wraps the core Rust FHE library via WASM, so encryption and decryption run client-side in the browser or Node.js. No plaintext ever leaves your machine.</p><h3 dir="auto">Step 2: Initialize the Aura Client</h3><pre><code>import { AuraClient } from '@aura-fhe/sdk';
import { Connection, Keypair } from '@solana/web3.js';

const connection = new Connection('https://api.devnet.solana.com');
const wallet = Keypair.fromSecretKey(/* your devnet key */);

const aura = new AuraClient({
  network: 'devnet',
  connection,
  wallet,
});

// Generate your FHE keypair (public key for encryption, secret key for decryption)
const fheKeys = await aura.generateKeys();
// Typical timing: &lt; 100ms for key generation</code></pre><p dir="ltr">The <code>generateKeys()</code> call creates a TFHE keypair locally. The public key is used to encrypt values that the Aura coprocessor can compute on. The secret key stays on your machine and is the only way to decrypt results.</p><h3 dir="auto">Step 3: Encrypt a Value</h3><pre><code>// Encrypt a token amount
const encryptedAmount = await aura.encrypt(1000_000_000n, fheKeys.publicKey);
// encryptedAmount is a serialized FHE ciphertext (~4KB)

// You can also encrypt multiple values in a batch
const [encPrice, encQuantity] = await aura.encryptBatch(
  [50_00n, 20n],
  fheKeys.publicKey
);</code></pre><p dir="ltr">The encrypted value is a TFHE ciphertext. It looks like random bytes. The Aura coprocessor can perform addition, multiplication, and comparison on it — but cannot read the underlying number.</p><h3 dir="auto">Step 4: Submit an Encrypted Transaction</h3><pre><code>// Build a private swap instruction
const swapIx = await aura.buildSwapInstruction({
  inputMint: USDC_MINT,
  outputMint: SOL_MINT,
  encryptedAmount: encryptedAmount,
  maxSlippageBps: 50,
  fhePublicKey: fheKeys.publicKey,
});

// Sign and send — the transaction payload is encrypted
const signature = await aura.sendTransaction(swapIx);

// Wait for confirmation + threshold decryption of the result
const result = await aura.awaitResult(signature);</code></pre><p dir="ltr">Behind the scenes, the swap instruction is sent to the Aura coprocessor, which executes the AMM calculation homomorphically — on the encrypted input — and produces an encrypted output. The threshold decryption network (3-of-5 validators) then collaborates to produce a decryption share, which only your secret key can finalize.</p><h3 dir="auto">Step 5: Decrypt the Result</h3><pre><code>// Only you can decrypt — requires your local FHE secret key
const outputAmount = await aura.decrypt(result.encryptedOutput, fheKeys.secretKey);
console.log(`Received: ${outputAmount} lamports of SOL`);</code></pre><p dir="ltr">Total wall-clock time from encryption to decrypted result: under 3 seconds on devnet.</p><h3 dir="auto">What Just Happened</h3><ol dir="auto"><li><p>You encrypted a number locally. Nobody else can read it.</p></li><li><p>You submitted it to the Solana network as encrypted bytes.</p></li><li><p>The Aura coprocessor performed the swap calculation on the encrypted value — without decrypting it.</p></li><li><p>A threshold network of validators produced partial decryption shares.</p></li><li><p>Your local key combined those shares to reveal the output.</p></li></ol><p dir="ltr">At no point did any validator, MEV bot, or RPC provider see your trade amount, price, or direction.</p><h3 dir="auto">Beyond Swaps: Encrypted Program State</h3><pre><code>// Homomorphic operations on encrypted values
const encA = await aura.encrypt(100n, fheKeys.publicKey);
const encB = await aura.encrypt(200n, fheKeys.publicKey);

const encSum = await aura.add(encA, encB);         // encrypted 300
const encProduct = await aura.multiply(encA, encB); // encrypted 20000
const encIsLess = await aura.lessThan(encA, encB); // encrypted boolean
const encMin = await aura.select(encIsLess, encA, encB); // encrypted min</code></pre><h3 dir="auto">Performance Benchmarks (Devnet, April 2026)</h3><table><thead><tr><th>Operation</th><th>Latency</th></tr></thead><tbody><tr><td>FHE key generation</td><td>&lt; 100ms</td></tr><tr><td>Encrypt (single uint64)</td><td>&lt; 5ms</td></tr><tr><td>Homomorphic addition</td><td>&lt; 1ms</td></tr><tr><td>Homomorphic multiplication</td><td>&lt; 10ms</td></tr><tr><td>Encrypted comparison</td><td>&lt; 5ms</td></tr><tr><td>Full encrypted swap (end-to-end)</td><td>&lt; 3 seconds</td></tr><tr><td>Threshold decryption (3-of-5)</td><td>&lt; 500ms</td></tr></tbody></table><h3 dir="auto">Next Steps</h3><ul dir="auto"><li><p><strong>Read the full API reference:</strong> <a href="https://docs.afhe.io/sdk" target="_blank"><strong>docs.afhe.io/sdk</strong></a></p></li><li><p><strong>Clone the examples repo:</strong> <a href="https://github.com/aura-fhe/aura-examples" target="_blank"><strong>github.com/aura-fhe/aura-examples</strong></a></p></li><li><p><strong>Join the Alpha (10 builder spots, April 24):</strong> Apply at <a href="https://afhe.io/builders" target="_blank"><strong>afhe.io/builders</strong></a></p></li><li><p><strong>Ask questions in Discord:</strong> <a href="https://discord.gg/aurafhe" target="_blank"><strong>discord.gg/aurafhe</strong></a> — #builders-guild channel</p></li></ul><p dir="ltr"><strong>April 7:</strong> SDK announcement + litepaper release</p><p dir="ltr"><strong>April 24:</strong> Alpha access for 10 selected builders</p><p dir="ltr"><strong>May 6-7:</strong> Public beta</p>
