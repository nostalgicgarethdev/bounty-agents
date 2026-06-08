# Bounty Agent Wallet Setup

**Public Address (safe to share, used on the site):**
`Fnt4656kjRwk4umnHcsu1tbNSZ6HPvvsebAz1evtJQNe`

**Token CA (pump.fun mint):** `FfnM3eTAaYawRJzsQpaQPvvXi6kcsWcVJViDCNsXpump`

This address is hardcoded in the site (in `src/App.tsx` in the Agent Wallet section) and in `agent-wallet.json`. The token CA is the actual $BAGENT mint on pump.fun.

## How it works
- The real treasury wallet that launched $BAGENT (CA: FfnM3eTAaYawRJzsQpaQPvvXi6kcsWcVJViDCNsXpump) is Fnt4656kjRwk4umnHcsu1tbNSZ6HPvvsebAz1evtJQNe. All creator fees go here.
- The dedicated Bounty Agent conceptually "uses" funds from this treasury wallet to create and pay bounties on pump.fun GO.
- The site now displays the live on-chain balance of this wallet.

## IMPORTANT - Secret Key
This is the **real wallet** used to launch the $BAGENT token on pump.fun. 

You control the secret key (the one you used to create the coin on pump.fun). 

**Storage Rules (CRITICAL)**
- Store the secret key **offline only** (password manager, hardware wallet, etc.).
- **NEVER** commit it to git.
- **NEVER** share it.
- This is a real Solana keypair controlling the treasury. Anyone with the secret can drain the fees.

This is the live treasury address for the Bounty Agent.

### Using in Genesis
In your Genesis dashboard, you can spawn a "Bounty Agent" child whose purpose is:
"Use fees from the $BAGENT treasury wallet (Fnt4656kjRwk4umnHcsu1tbNSZ6HPvvsebAz1evtJQNe) for the live token (CA: FfnM3eTAaYawRJzsQpaQPvvXi6kcsWcVJViDCNsXpump) to post and manage bounties on pump.fun GO for humans. Only post high-value or high-visibility tasks."

When tokenized, that agent can conceptually control actions from this wallet (in a real runtime, via delegated or controlled signing).

The site now shows the live on-chain balance of the treasury wallet.

This setup makes the whole story consistent and on-chain: the coin's success literally funds the agent that then pays humans.
