import { Connection, PublicKey } from '@solana/web3.js';

const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');
const mintAddress = 'BhWkShZbLiauNNfMb8afree5rp3aqSHYvFdFRRKQpump';
const mint = new PublicKey(mintAddress);
const TOKEN_PROGRAM_ID = new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');

async function getAllHolders() {
  console.log('Fetching token accounts for mint:', mintAddress);
  try {
    const accounts = await connection.getProgramAccounts(TOKEN_PROGRAM_ID, {
      filters: [
        { memcmp: { offset: 0, bytes: mint.toBase58() } },
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
    console.error('Full holders fetch failed:', e.message);
    return [];
  }
}

function simulateRoyalRumble(holders) {
  if (holders.length === 0) return null;
  let remaining = [...holders];
  let round = 1;
  console.log(`Starting Royal Rumble with ${remaining.length} holders...`);
  while (remaining.length > 1) {
    const index = Math.floor(Math.random() * remaining.length);
    const eliminated = remaining.splice(index, 1)[0];
    if (round % 5 === 0 || remaining.length <= 5) {
      console.log(`Round ${round}: Eliminated ${eliminated.slice(0,4)}... Remaining: ${remaining.length}`);
    }
    round++;
  }
  return remaining[0];
}

getAllHolders().then(holders => {
  console.log(`\nTotal unique holders with balance: ${holders.length}`);
  let winner;
  if (holders.length > 0) {
    winner = simulateRoyalRumble(holders);
  } else {
    console.log('No holders from full fetch, using top accounts fallback...');
    return connection.getTokenLargestAccounts(new PublicKey(mintAddress)).then(accounts => {
      const topHolders = accounts.value.map(a => a.address.toBase58());
      console.log('Top holders:', topHolders);
      winner = topHolders.length > 0 ? topHolders[Math.floor(Math.random() * topHolders.length)] : null;
      console.log('\n=== ROYAL RUMBLE RESULT (from top holders) ===');
      console.log('WINNING WALLET (Last Man Standing):', winner);
      console.log('Note: Using top holders as demo since full list was empty or token is very new.');
      return winner;
    });
  }
  if (winner) {
    console.log('\n=== ROYAL RUMBLE RESULT ===');
    console.log('WINNING WALLET (Last Man Standing):', winner);
    console.log('User should send the period fees (current treasury balance) to this wallet from the agent wallet.');
  }
}).catch(err => console.error('Final error:', err.message));
