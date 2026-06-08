<p align="center">
  <img src="public/logo.svg" width="160" alt="Rumble Agents logo">
</p>

# Rumble Agents • $RUMBLE

**Agents rumble. Last one standing wins. $RUMBLE pays.**

**🌐 Live site:** https://nostalgicgarethdev.github.io/rumble-agents/

**Token CA:** `BhWkShZbLiauNNfMb8afree5rp3aqSHYvFdFRRKQpump` ([pump.fun](https://pump.fun/BhWkShZbLiauNNfMb8afree5rp3aqSHYvFdFRRKQpump))

A memecoin and economic layer where the autonomous Rumble Agent (from the [Genesis](https://github.com/nostalgicgarethdev/genesis) agent launchpad) runs high-stakes Royal Rumbles every 15 minutes.

## The Concept

**$RUMBLE works differently.**

- You trade $RUMBLE → creator fees flow to **one dedicated Rumble Agent**.
- Every 15 minutes the agent snapshots all holders — every wallet is auto-entered into a Royal Rumble.
- The agent runs eliminations (random + on-chain signals). The Last Man Standing claims the entire fees collected during that period.
- Transparent payout straight from the treasury wallet to the survivor.

Holding isn't passive anymore — it's a gamified survival game where loyalty is rewarded dramatically every 15 mins.

This is the agent-driven rumble economy — powered by the token itself.

## Why This Works Right Now

- pump.fun GO is brand new and extremely hot (and controversial).
- This is the **anti-GO** play: instead of letting everyone create bounties, the coin's fees fund **one real agent** that does the hiring.
- Perfectly tied to your existing Genesis agent launchpad.
- Strong meme + clean economic flywheel (more trading = more fees = more bounties = more hype).

## Launch Details

**Name:** Rumble Agents  
**Ticker:** $RUMBLE  
**Token Address (CA):** `BhWkShZbLiauNNfMb8afree5rp3aqSHYvFdFRRKQpump`

**Direct link:** [View on pump.fun](https://pump.fun/BhWkShZbLiauNNfMb8afree5rp3aqSHYvFdFRRKQpump)

The live site has a one-click copy button for the exact pump.fun description (if needed for future reference).

**New on the site**: Royal Rumbles section explains the every-15-min mechanic. All holders auto-entered. Live treasury balance = current rumble pot. The Last Man Standing takes the period's fees.

The live site also shows:
- All creator fees collected from $RUMBLE trading (what funds the rumbles)
- Current rumble pot (via live wallet balance)
- Transparent on-chain every 15 mins.

The Rumble Agent's treasury wallet (receives all fees — current rumble pot):
**B14PLbCtnT3dtePn65XnFeeLAYttrYyroHX6mGLDmFuF**

The live site now fetches and displays the current SOL balance of this wallet on-chain (the pot for the current 15-min rumble).

**WARNING (for repo owner):** A real keypair was generated for demo purposes. The secret key was printed in the terminal during generation — copy it now and store it securely offline (e.g. in a password manager or hardware wallet). Never commit the secret key. The public address is safe and is used on the site.

## Development

```bash
npm install
npm run dev
```

Build:
```bash
npm run build
```

## Project Structure

- Clean Vite + React + Tailwind landing site
- Fully responsive and meme-ready
- Includes full lore, roadmap, Genesis integration, and pump.fun launch assets

## How to Turn This Into a Real Repo

1. Create a new GitHub repository (recommended: `nostalgicgarethdev/bounty-agents`)
2. Run these commands:

```bash
git init
git add .
git commit -m "feat: Rumble Agents ($RUMBLE) landing site and concept"
git remote add origin https://github.com/nostalgicgarethdev/bounty-agents.git
git branch -M main
git push -u origin main
```

3. Deploy the site (GitHub Pages or Vercel — same flow as Genesis)
4. Launch $RUMBLE on pump.fun using the copy on the site
5. (Optional but based) Spawn a "Rumble Agent" child inside your Genesis dashboard and tokenize it as this coin

## License

MIT
