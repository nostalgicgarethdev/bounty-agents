import { ArrowRight, ExternalLink } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#a1a1aa]">
      {/* Navbar */}
      <nav className="border-b border-[#27272a] bg-[#09090b]/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Bounty Agents" className="w-9 h-9" />
            <div className="hidden sm:block">
              <div className="font-semibold text-white tracking-tight">Bounty Agents</div>
              <div className="text-[10px] text-[#71717a] -mt-1.5">$BAGENT</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#how" className="hover:text-white transition-colors">How it works</a>
            <a href="#live" className="hover:text-white transition-colors">Live</a>
            <a href="#genesis" className="hover:text-white transition-colors">Genesis</a>
          </div>

          <a 
            href="https://pump.fun" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-2xl bg-[#5eead4] text-[#134e4b] font-medium text-sm hover:bg-white transition-all"
          >
            Buy on pump.fun <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>

      {/* Hero - Explain what the agent does */}
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-20 text-center">
        <div className="flex justify-center mb-8">
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Bounty Agents" className="w-20 h-20" />
        </div>

        <h1 className="text-5xl md:text-6xl font-semibold tracking-[-2px] text-white mb-6">
          The Bounty Agent
        </h1>

        <p className="text-xl text-[#a1a1aa] max-w-md mx-auto mb-10">
          Funded entirely by $BAGENT creator fees. This single autonomous agent creates and posts real bounties for humans on pump.fun GO.
        </p>

        <a 
          href="https://pump.fun" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#5eead4] text-[#134e4b] font-medium px-8 py-3.5 rounded-2xl text-base hover:bg-white transition"
        >
          Buy $BAGENT on pump.fun <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Bounties created by the agent */}
      <div id="bounties" className="max-w-4xl mx-auto px-6 py-12 border-t border-[#27272a]">
        <div className="text-center mb-8">
          <div className="text-[#14b8a6] text-xs tracking-[3px] mb-2">BOUNTIES</div>
          <h2 className="text-white text-3xl tracking-tight">Created by the Agent</h2>
        </div>

        <div className="space-y-2 text-sm">
          {[
            { id: "4821", desc: "Design 5 launch memes", reward: "4.2 SOL", status: "Open" },
            { id: "4819", desc: "60s flywheel explainer video", reward: "2.8 SOL", status: "Completed" },
            { id: "4814", desc: "Top 10 GO stunts research", reward: "3.5 SOL", status: "Open" },
            { id: "4807", desc: "Custom PFP collection for holders", reward: "6.0 SOL", status: "Completed" },
          ].map((b, i) => (
            <div key={i} className="flex items-center justify-between px-6 py-4 bg-[#0a0a0c] border border-[#27272a] rounded-2xl">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-[#14b8a6]">#{b.id}</span>
                <span className="text-white">{b.desc}</span>
              </div>
              <div className="flex items-center gap-4 text-[#34d399]">
                <span className="tabular-nums">{b.reward}</span>
                <span className={`text-xs px-3 py-px rounded-full ${b.status === 'Open' ? 'bg-[#34d399] text-black' : 'bg-[#27272a] text-[#a1a1aa]'}`}>
                  {b.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Agent Wallet - fees in the wallet */}
      <div id="wallet" className="max-w-4xl mx-auto px-6 py-12 border-t border-[#27272a]">
        <div className="text-center mb-8">
          <div className="text-[#14b8a6] text-xs tracking-[3px] mb-2">AGENT WALLET</div>
          <h2 className="text-white text-3xl tracking-tight">Fees in the Treasury</h2>
          <div className="mt-2 font-mono text-xs text-[#a1a1aa] break-all">
            CTisDrrjf9wtXWJ6tKjQs94Bo5HPmPYGYpFXPoV3X8UU
          </div>
          <div className="text-[10px] text-[#71717a] mt-1">(This address receives 100% of $BAGENT creator fees)</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-8 rounded-2xl border border-[#27272a] bg-[#0a0a0c]">
            <div className="text-xs tracking-[2px] text-[#71717a]">TOTAL FEES RECEIVED</div>
            <div className="text-5xl font-semibold text-white tracking-tighter mt-2">187.4 SOL</div>
          </div>
          <div className="text-center p-8 rounded-2xl border border-[#27272a] bg-[#0a0a0c]">
            <div className="text-xs tracking-[2px] text-[#71717a]">CURRENT BALANCE</div>
            <div className="text-5xl font-semibold text-white tracking-tighter mt-2">94.2 SOL</div>
          </div>
          <div className="text-center p-8 rounded-2xl border border-[#27272a] bg-[#0a0a0c]">
            <div className="text-xs tracking-[2px] text-[#71717a]">TOTAL PAID TO HUMANS</div>
            <div className="text-5xl font-semibold text-white tracking-tighter mt-2">68.9 SOL</div>
          </div>
        </div>

        <div className="text-center mt-6 text-[10px] text-[#71717a]">
          Funded 100% by $BAGENT creator fees • Live after launch
        </div>
      </div>

      {/* Simple CTA */}
      <div className="border-t border-[#27272a] py-12 bg-[#111113] text-center">
        <a 
          href="https://pump.fun" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#5eead4] text-[#134e4b] font-medium px-8 py-3.5 rounded-2xl text-base hover:bg-white transition"
        >
          Buy $BAGENT on pump.fun <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <footer className="py-8 text-center text-xs text-[#71717a] border-t border-[#27272a]">
        From the <a href="https://nostalgicgarethdev.github.io/genesis" target="_blank" rel="noopener noreferrer" className="text-[#14b8a6]">Genesis</a> agent launchpad.
      </footer>
    </div>
  )
}

export default App
