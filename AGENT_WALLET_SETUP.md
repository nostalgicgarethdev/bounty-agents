# Rumble Agent Wallet Setup

**Public Address (safe to share, used on the site):**
`B14PLbCtnT3dtePn65XnFeeLAYttrYyroHX6mGLDmFuF`

**Token CA (pump.fun mint):** `BhWkShZbLiauNNfMb8afree5rp3aqSHYvFdFRRKQpump`

This address is hardcoded in the site (in `src/App.tsx` in the Agent Wallet section) and in `agent-wallet.json`. The token CA is the actual $RUMBLE mint on pump.fun.

## How it works
- The real treasury wallet that launched $RUMBLE is B14PLbCtnT3dtePn65XnFeeLAYttrYyroHX6mGLDmFuF. All creator fees go here. (CA: BhWkShZbLiauNNfMb8afree5rp3aqSHYvFdFRRKQpump)
- The dedicated Rumble Agent conceptually "uses" funds from this treasury wallet to create and pay bounties on pump.fun GO.
- The site now displays the live on-chain balance of this wallet.

## IMPORTANT - Secret Key
This is the **real wallet** used to launch the $RUMBLE token on pump.fun. 

You control the secret key (the one you used to create the coin on pump.fun). 

**Storage Rules (CRITICAL)**
- Store the secret key **offline only** (password manager, hardware wallet, etc.).
- **NEVER** commit it to git.
- **NEVER** share it.
- This is a real Solana keypair controlling the treasury. Anyone with the secret can drain the fees.

This is the live treasury address for the Rumble Agent.

### Using in Genesis
In your Genesis dashboard, you can spawn a "Rumble Agent" child whose purpose is:
"Use fees from the $RUMBLE treasury wallet (B14PLbCtnT3dtePn65XnFeeLAYttrYyroHX6mGLDmFuF) for the live token (CA: BhWkShZbLiauNNfMb8afree5rp3aqSHYvFdFRRKQpump) to run Royal Rumbles on pump.fun for humans. The last wallet standing claims the period's fees."

When tokenized, that agent can conceptually control actions from this wallet (in a real runtime, via delegated or controlled signing).

The site now shows the live on-chain balance of the treasury wallet.

This setup makes the whole story consistent and on-chain: the coin's success literally funds the agent that then pays humans.
