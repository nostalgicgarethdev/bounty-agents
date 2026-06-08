import { Keypair } from '@solana/web3.js';

// Generate demo holders (realistic looking random wallets)
function generateDemoHolders(count) {
  const holders = [];
  for (let i = 0; i < count; i++) {
    const kp = Keypair.generate();
    holders.push(kp.publicKey.toBase58());
  }
  return holders;
}

function simulateRoyalRumble(holders) {
  let remaining = [...holders];
  let round = 1;
  const log = [];
  console.log(`Starting Royal Rumble with ${remaining.length} holders...`);
  while (remaining.length > 1) {
    const index = Math.floor(Math.random() * remaining.length);
    const eliminated = remaining.splice(index, 1)[0];
    if (remaining.length <= 5 || round % 3 === 0) {
      const msg = `Round ${round}: Eliminated ${eliminated.slice(0,6)}... | ${remaining.length} left`;
      log.push(msg);
      console.log(msg);
    }
    round++;
  }
  const winner = remaining[0];
  console.log('\n=== ROYAL RUMBLE RESULT ===');
  console.log('WINNING WALLET (Last Man Standing):', winner);
  console.log('Send the current period fees (treasury balance) to this wallet.');
  return { winner, log, totalHolders: holders.length };
}

const demoHolders = generateDemoHolders(23);
const result = simulateRoyalRumble(demoHolders);

// Output for site update
console.log('\n\n=== FOR SITE UPDATE ===');
console.log('Total holders entered:', result.totalHolders);
console.log('Winner wallet:', result.winner);
console.log('Rumble log (last few):', result.log.slice(-5));
