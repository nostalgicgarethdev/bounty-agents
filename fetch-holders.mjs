import { Connection, PublicKey } from '@solana/web3.js';

const RPC_ENDPOINTS = [
  'https://api.mainnet-beta.solana.com',
  'https://solana-api.projectserum.com',
];

let currentEndpointIndex = 0;

function getConnection() {
  return new Connection(RPC_ENDPOINTS[currentEndpointIndex], 'confirmed');
}

const mintAddress = 'BhWkShZbLiauNNfMb8afree5rp3aqSHYvFdFRRKQpump';
const mint = new PublicKey(mintAddress);
const TOKEN_PROGRAM_ID = new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getAllHoldersWithRetry(maxRetries = 5) {
  let attempt = 0;
  while (attempt < maxRetries) {
    try {
      const connection = getConnection();
      console.log(`Attempt ${attempt + 1} using ${RPC_ENDPOINTS[currentEndpointIndex]}`);
      
      const accounts = await connection.getProgramAccounts(TOKEN_PROGRAM_ID, {
        filters: [
          { memcmp: { offset: 0, bytes: mint.toBase58() } },
          { dataSize: 165 },
        ],
        commitment: 'confirmed',
      });

      const holders = new Set();
      let positiveBalance = 0;
      for (const { account } of accounts) {
        const data = account.data;
        const owner = new PublicKey(data.slice(32, 64)).toBase58();
        const amount = data.readBigUInt64LE(64);
        if (amount > 0n) {
          holders.add(owner);
          positiveBalance++;
        }
      }
      console.log(`Fetched ${accounts.length} token accounts, ${positiveBalance} with positive balance.`);
      return Array.from(holders);
    } catch (err) {
      console.error(`Attempt ${attempt + 1} failed:`, err.message);
      if (err.message.includes('429') || err.message.includes('Too many requests')) {
        currentEndpointIndex = (currentEndpointIndex + 1) % RPC_ENDPOINTS.length;
        await sleep(2000 * (attempt + 1)); // exponential backoff
      } else {
        await sleep(1000);
      }
      attempt++;
    }
  }
  throw new Error('Failed to fetch holders after retries');
}

function simulateRoyalRumble(holders) {
  if (holders.length === 0) return null;
  let remaining = [...holders];
  const eliminationLog = [];
  let round = 1;
  console.log(`\nStarting Royal Rumble with ${remaining.length} holders...`);
  
  while (remaining.length > 1) {
    const index = Math.floor(Math.random() * remaining.length);
    const eliminated = remaining.splice(index, 1)[0];
    if (round % 5 === 0 || remaining.length <= 5) {
      const logEntry = `Round ${round}: Eliminated ${eliminated.substring(0, 6)}... | ${remaining.length} remaining`;
      eliminationLog.push(logEntry);
      console.log(logEntry);
    }
    round++;
  }
  
  const winner = remaining[0];
  console.log(`\n=== ROYAL RUMBLE COMPLETE ===`);
  console.log(`WINNER (Last Man Standing): ${winner}`);
  return { winner, log: eliminationLog, total: holders.length };
}

getAllHoldersWithRetry()
  .then(holders => {
    console.log(`\nTotal unique holders with positive balance: ${holders.length}`);
    if (holders.length === 0) {
      console.log('No holders found. Using demo data.');
      // Fallback demo
      const demo = Array.from({length: 25}, (_, i) => `DemoHolder${i}...${Math.random().toString(36).substring(2,8)}`);
      const result = simulateRoyalRumble(demo);
      console.log('\n--- FOR SITE ---');
      console.log('Holders count:', result.total);
      console.log('Winner:', result.winner);
      console.log('Log:', result.log);
    } else {
      const result = simulateRoyalRumble(holders);
      console.log('\n--- FOR SITE UPDATE ---');
      console.log('Holders count:', result.total);
      console.log('Winner wallet:', result.winner);
      console.log('Elimination log (last 5):', result.log.slice(-5));
      console.log('\nCopy this winner to the site:');
      console.log(result.winner);
    }
  })
  .catch(err => {
    console.error('Failed to get real holders:', err.message);
    console.log('Falling back to demo simulation.');
    const demo = Array.from({length: 42}, (_, i) => `Demo${String(i).padStart(3,'0')}...${Math.random().toString(36).substring(2,10)}`);
    const result = simulateRoyalRumble(demo);
    console.log('\n--- FOR SITE (DEMO) ---');
    console.log('Winner:', result.winner);
  });
