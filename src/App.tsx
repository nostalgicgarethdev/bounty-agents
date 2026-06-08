import { ArrowRight, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Connection, PublicKey } from '@solana/web3.js'

const BOUNTY_AGENT_WALLET = 'B14PLbCtnT3dtePn65XnFeeLAYttrYyroHX6mGLDmFuF';

function App() {
  const [balance, setBalance] = useState<string | null>(null)
  const [loadingBalance, setLoadingBalance] = useState(true)

  const [secondsLeft, setSecondsLeft] = useState(900)

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const connection = new Connection('https://api.mainnet-beta.solana.com')
        const pubkey = new PublicKey(BOUNTY_AGENT_WALLET)
        const balLamports = await connection.getBalance(pubkey)
        const balSol = (balLamports / 1_000_000_000).toFixed(4)
        setBalance(balSol)
      } catch (err) {
        console.error('Failed to fetch balance:', err)
        setBalance('N/A')
      }
      setLoadingBalance(false)
    }
    fetchBalance()
  }, [])

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const min = now.getMinutes() % 15
      const sec = now.getSeconds()
      let remaining = (15 - min) * 60 - sec
      if (remaining <= 0) remaining += 15 * 60
      setSecondsLeft(remaining)
    }
    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#09090b] text-[#a1a1aa]">
      {/* Navbar */}
      <nav className="border-b border-[#27272a] bg-[#09090b]/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Rumble Agents" className="w-9 h-9" />
            <div className="hidden sm:block">
              <div className="font-semibold text-white tracking-tight">Rumble Agents</div>
              <div className="text-[10px] text-[#71717a] -mt-1.5">$RUMBLE</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#bounties" className="hover:text-white transition-colors">Rumbles</a>
            <a href="#wallet" className="hover:text-white transition-colors">Wallet</a>
          </div>

          <a 
            href="https://pump.fun/BhWkShZbLiauNNfMb8afree5rp3aqSHYvFdFRRKQpump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-2xl bg-[#5eead4] text-[#134e4b] font-medium text-sm hover:bg-white transition-all"
          >
            Buy $RUMBLE on pump.fun <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>

      {/* Hero - Explain what the agent does */}
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-20 text-center">
        <div className="flex justify-center mb-8">
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Rumble Agents" className="w-20 h-20" />
        </div>

        <h1 className="text-5xl md:text-6xl font-semibold tracking-[-2px] text-white mb-6">
          The Rumble Agent
        </h1>

        <p className="text-xl text-[#a1a1aa] max-w-md mx-auto mb-6">
          Funded entirely by $RUMBLE creator fees. This single autonomous agent runs Royal Rumbles every 15 minutes. All holder wallets are entered — the Last Man Standing claims the entire fees for that period.
        </p>

        {/* Prominent Token CA badge */}
        <div className="max-w-md mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-[#111113] border border-[#27272a] rounded-full px-4 py-1.5 text-sm">
            <span className="text-[#71717a]">Token CA</span>
            <code 
              onClick={(e) => {
                navigator.clipboard.writeText('BhWkShZbLiauNNfMb8afree5rp3aqSHYvFdFRRKQpump');
                const el = e.currentTarget;
                const orig = el.textContent;
                el.textContent = 'Copied!';
                setTimeout(() => { if (el) el.textContent = orig; }, 1500);
              }}
              className="font-mono text-[#14b8a6] cursor-pointer hover:underline select-all break-all"
            >
              BhWkShZbLiauNNfMb8afree5rp3aqSHYvFdFRRKQpump
            </code>
            <a 
              href="https://pump.fun/BhWkShZbLiauNNfMb8afree5rp3aqSHYvFdFRRKQpump" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#14b8a6] hover:text-white"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <a 
          href="https://pump.fun/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#5eead4] text-[#134e4b] font-medium px-8 py-3.5 rounded-2xl text-base hover:bg-white transition"
        >
          Buy $RUMBLE on pump.fun <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Royal Rumbles hosted by the agent */}
      <div id="bounties" className="max-w-4xl mx-auto px-6 py-12 border-t border-[#27272a]">
        <div className="text-center mb-8">
          <div className="text-[#14b8a6] text-xs tracking-[3px] mb-2">ROYAL RUMBLES</div>
          <h2 className="text-white text-3xl tracking-tight">Hosted by the Agent</h2>
        </div>

        <div className="space-y-4">
          <div className="border border-[#27272a] rounded-2xl bg-[#0a0a0c] p-6">
            <h3 className="text-white font-medium mb-2">How Royal Rumbles Work</h3>
            <ul className="text-sm text-[#a1a1aa] list-disc pl-5 space-y-1">
              <li>Every 15 minutes, the Rumble Agent snapshots all $RUMBLE holders.</li>
              <li>All wallets are automatically entered into the rumble.</li>
              <li>The agent runs elimination rounds (random + on-chain signals).</li>
              <li>The Last Man Standing claims 100% of fees collected in that period (paid from treasury).</li>
            </ul>
            <div className="mt-3 text-xs text-[#71717a]">Rumbles reset every 15 mins. Transparent results posted on-chain / X.</div>
          </div>

          <div className="border border-[#27272a] rounded-2xl bg-[#0a0a0c] p-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="text-white font-medium">Current Royal Rumble</div>
                <div className="text-xs text-[#71717a]">All holders auto-entered. Pot = current treasury balance (below).</div>
              </div>
              <div className="text-right text-[#14b8a6] text-sm font-mono">LIVE</div>
            </div>
            <div className="text-sm text-[#a1a1aa] mb-3">Next survivor payout in ~15 mins. Hold $RUMBLE to enter the rumble.</div>

            <div className="text-center border-t border-[#27272a] pt-3">
              <div className="text-xs text-[#71717a] tracking-[2px] mb-1">NEXT RUMBLE IN</div>
              <div className="font-mono text-3xl text-white tracking-[3px]">
                {String(Math.floor(secondsLeft / 60)).padStart(2, '0')}:{String(secondsLeft % 60).padStart(2, '0')}
              </div>
            </div>

            {/* Latest Rumble Result from holders simulation */}
            <div className="border-t border-[#27272a] pt-3 mt-3">
              <div className="text-xs text-[#71717a] mb-1">LATEST RUMBLE RESULT (Demo)</div>
              <div className="text-sm text-[#a1a1aa] mb-1">23 holders entered • Random elimination rounds</div>
              <div className="text-[10px] font-mono text-[#a1a1aa] bg-[#111113] p-1.5 rounded mb-2">
                Round 18: Eliminated CpYj2C... | 5 left<br/>
                Round 19: Eliminated 6iGdRn... | 4 left<br/>
                Round 20: Eliminated 6sx5Rf... | 3 left<br/>
                Round 21: Eliminated 6sq3n1... | 2 left<br/>
                Round 22: Eliminated FGGJcJ... | 1 left
              </div>
              <div>
                <div className="text-xs text-[#71717a] mb-0.5">WINNING WALLET (Last Man Standing)</div>
                <div className="font-mono text-xs text-white break-all bg-[#111113] p-1.5 rounded flex items-center justify-between">
                  <span>2VZS3LUGZnT1bt3mBfkZdw9tR5TsUF8MkGvfaRhDLuvK</span>
                  <button 
                    onClick={(e) => {
                      navigator.clipboard.writeText('2VZS3LUGZnT1bt3mBfkZdw9tR5TsUF8MkGvfaRhDLuvK');
                      const btn = e.currentTarget;
                      const orig = btn.textContent;
                      btn.textContent = 'Copied!';
                      setTimeout(() => { if (btn) btn.textContent = orig; }, 1500);
                    }}
                    className="ml-2 text-[9px] px-1.5 py-0.5 bg-[#14b8a6] text-[#09090b] rounded hover:bg-white"
                  >
                    Copy
                  </button>
                </div>
                <div className="text-[10px] text-[#14b8a6] mt-1">Send the current treasury balance (pot above) from the agent wallet to this address.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Wallet - fees in the wallet */}
      <div id="wallet" className="max-w-4xl mx-auto px-6 py-12 border-t border-[#27272a]">
        <div className="text-center mb-8">
          <div className="text-[#14b8a6] text-xs tracking-[3px] mb-2">AGENT WALLET</div>
          <h2 className="text-white text-3xl tracking-tight">Current Rumble Pot</h2>
          <div className="mt-2 font-mono text-xs text-[#a1a1aa] break-all">
            {BOUNTY_AGENT_WALLET}
          </div>
          <div className="text-[10px] text-[#71717a] mt-1">(This address receives 100% of $RUMBLE creator fees. Every 15 mins the pot goes to the Last Man Standing.)</div>
        </div>

        <div className="text-center mt-4 text-sm text-[#a1a1aa]">
          Current balance: <span className="font-mono text-white">{loadingBalance ? '...' : `${balance} SOL`}</span> (live from on-chain)
        </div>
      </div>

      {/* Simple CTA */}
      <div className="border-t border-[#27272a] py-12 bg-[#111113] text-center">
        <a 
          href="https://pump.fun/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#5eead4] text-[#134e4b] font-medium px-8 py-3.5 rounded-2xl text-base hover:bg-white transition"
        >
          Buy $RUMBLE on pump.fun <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <footer className="py-8 text-center text-xs text-[#71717a] border-t border-[#27272a]">
        From the <a href="https://nostalgicgarethdev.github.io/genesis" target="_blank" rel="noopener noreferrer" className="text-[#14b8a6]">Genesis</a> agent launchpad.
      </footer>
    </div>
  )
}

export default App
