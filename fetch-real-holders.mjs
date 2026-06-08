import { Connection, PublicKey } from '@solana/web3.js';

const MINT = 'BhWkShZbLiauNNfMb8afree5rp3aqSHYvFdFRRKQpump';
const TOKEN_PROGRAM = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';

const RPCS = [
  'https://api.mainnet-beta.solana.com',
  'https://solana.public-rpc.com',
  'https://rpc.ankr.com/solana',
  'https://solana-rpc.publicnode.com',
];

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function getHolders() {
  for (const rpc of RPCS) {
    try {
      console.log(`Trying RPC: ${rpc}`);
      const conn = new Connection(rpc, { commitment: 'confirmed', confirmTransactionInitialTimeout: 60000 });
      const mintPk = new PublicKey(MINT);
      const programPk = new PublicKey(TOKEN_PROGRAM);

      const accounts = await conn.getProgramAccounts(programPk, {
        filters: [
          { memcmp: { offset: 0, bytes: mintPk.toBase58() } },
          { dataSize: 165 },
        ],
      });

      const holders = new Set();
      for (const { account } of accounts) {
        const data = account.data;
        const owner = new PublicKey(data.slice(32, 64)).toBase58();
        const amount = data.readBigUInt64LE(64);
        if (amount > 0n) holders.add(owner);
      }
      return Array.from(holders);
    } catch (e) {
      console.log(`RPC ${rpc} failed: ${e.message}`);
      await sleep(2000);
    }
  }
  throw new Error('All RPCs failed or rate limited. Token may be very new or have 0 holders visible publicly right now.');
}

function runRumble(holders) {
  if (!holders || holders.length === 0) {
    console.log('No real holders fetched. Using placeholder for demo.');
    return { winner: 'DEMO_WINNER_WALLET_HERE', total: 0, log: [] };
  }
  console.log(`Fetched ${holders.length} real holders. Running Royal Rumble...`);
  let remaining = [...holders];
  const log = [];
  let round = 1;
  while (remaining.length > 1) {
    const idx = Math.floor(Math.random() * remaining.length);
    const eliminated = remaining.splice(idx, 1)[0];
    if (round % 5 === 0 || remaining.length < 10) {
      log.push(`Round ${round}: Eliminated ${eliminated.slice(0,6)}... (${remaining.length} left)`);
    }
    round++;
  }
  const winner = remaining[0];
  console.log('RUMBLE COMPLETE. Winner:', winner);
  return { winner, total: holders.length, log: log.slice(-8) };
}

getHolders().then(holders => {
  const result = runRumble(holders);
  console.log('\n=== FOR SITE ===');
  console.log('Holder count:', result.total);
  console.log('Winning wallet:', result.winner);
  console.log('Rumble log (recent):', result.log);
  // You can copy the winner here for the site.
}).catch(e => console.error('Error:', e.message));
