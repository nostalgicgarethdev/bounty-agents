# Bounty Agent Wallet Setup

**Public Address (safe to share, used on the site):**
`CTisDrrjf9wtXWJ6tKjQs94Bo5HPmPYGYpFXPoV3X8UU`

**Token CA (pump.fun mint):** `A1omcMzYHeWg3kbyHUayq7x47ZB3Pm6cM6d8J9wcpump`

This address is hardcoded in the site (in `src/App.tsx` in the Agent Wallet section) and in `agent-wallet.json`. The token CA is the actual $BAGENT mint on pump.fun.

## How it works
- When launching/using $BAGENT (CA: A1omcMzYHeWg3kbyHUayq7x47ZB3Pm6cM6d8J9wcpump) on pump.fun, ensure fees route to this treasury wallet.
- The dedicated Bounty Agent "owns" this wallet conceptually.
- The agent (in the Genesis system) will use funds from this wallet to pay out bounties it creates on pump.fun GO.
- The site displays live (mock for now) balances from this wallet.

## IMPORTANT - Secret Key
During generation (via terminal in the dev session), the secret key (base58) was printed:

```
3u7PNpRhZmoMewqPBdETygDRxAKtcNUn8DoJp6nhx99n27dqcRzwNEUkuNpUce4m7WEF741AFG24UgcWKQ4P6RNU
```

**You must have copied this during generation.** If you didn't, regenerate a new one now (see below) and update the site + agent-wallet.json.

### Storage Rules (CRITICAL)
- Store the secret key **offline only** (password manager with 2FA, hardware wallet, paper in safe, etc.).
- **NEVER** commit it to git.
- **NEVER** put it in .env files that get committed.
- **NEVER** share it.
- This is a real Solana keypair. If you fund it with real money later, anyone with the secret can drain it.

### Regenerating (if needed)
If you need a fresh one:

```bash
cd bounty-agents
node -e '
const { Keypair } = require("@solana/web3.js");
const bs58 = require("bs58").default || require("bs58");
const kp = Keypair.generate();
console.log("Public Address:", kp.publicKey.toBase58());
console.log("Secret (base58):", bs58.encode(kp.secretKey));
'
```

Then:
1. Update the public address in:
   - `src/App.tsx` (in the wallet section)
   - `agent-wallet.json`
   - `README.md`
   - This file

2. Update the secret storage (offline).

3. Rebuild + push.

### Using in Genesis
In your Genesis dashboard, you can spawn a "Bounty Agent" child whose purpose is:
"Use fees from the $BAGENT treasury wallet (CTisDrrjf9wtXWJ6tKjQs94Bo5HPmPYGYpFXPoV3X8UU) for the live token (CA: A1omcMzYHeWg3kbyHUayq7x47ZB3Pm6cM6d8J9wcpump) to post and manage bounties on pump.fun GO for humans. Only post high-value or high-visibility tasks."

When tokenized, that agent can conceptually control actions from this wallet (in a real runtime, via delegated or controlled signing).

### Current Mock Data on Site
The "Agent Wallet" section on the site now references the live token (CA: A1omcMzYHeWg3kbyHUayq7x47ZB3Pm6cM6d8J9wcpump). Update the placeholder text or add real on-chain data fetching as needed.

This setup makes the whole story consistent and on-chain: the coin's success literally funds the agent that then pays humans.
