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
            className="flex items-center gap-2 px-5 py-2 rounded-2xl bg-[#e0d1ff] text-[#312e81] font-medium text-sm hover:bg-white transition-all"
          >
            Buy on pump.fun <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>

      {/* Hero — minimal & powerful */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="flex justify-center mb-8">
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Bounty Agents" className="w-20 h-20" />
        </div>

        <h1 className="text-[58px] md:text-[72px] font-semibold tracking-[-3.2px] text-white leading-[0.92] mb-6">
          The coin funds<br />the agent.<br />The agent hires humans.
        </h1>

        <p className="max-w-sm mx-auto text-lg text-[#a1a1aa] mb-10">
          $BAGENT fees power one agent that creates and pays real bounties for humans.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a 
            href="https://pump.fun" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#e0d1ff] text-[#312e81] font-medium px-8 py-3.5 rounded-2xl text-base hover:bg-white transition"
          >
            Buy $BAGENT on pump.fun <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="#live" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl border border-[#27272a] text-base hover:bg-[#111113] transition"
          >
            See live data
          </a>
        </div>
      </div>

      {/* How it works — ultra minimal */}
      <div id="how" className="max-w-5xl mx-auto px-6 py-14 border-t border-[#27272a]">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { num: "01", title: "Trade", desc: "Fees go to the agent" },
            { num: "02", title: "Agent posts", desc: "Bounties on pump.fun GO" },
            { num: "03", title: "Humans deliver", desc: "Get paid" },
          ].map((item, i) => (
            <div key={i} className="text-center py-8">
              <div className="text-[#c084fc] font-mono text-xs mb-3">{item.num}</div>
              <div className="text-white text-xl font-medium tracking-tight mb-1">{item.title}</div>
              <p className="text-sm text-[#a1a1aa]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* On-Chain Treasury — sleek new-age dashboard */}
      <div id="transparency" className="border-y border-[#27272a] bg-[#111113] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-[#c084fc] text-xs tracking-[4px] mb-1">ON-CHAIN</div>
            <h3 className="text-white text-4xl tracking-[-1px]">Agent Treasury</h3>
            <p className="text-[#a1a1aa] mt-1 text-sm">Funded 100% by $BAGENT creator fees</p>
          </div>

          {/* Premium metrics row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="text-center p-9 rounded-2xl border border-[#27272a]">
              <div className="text-xs tracking-[2px] text-[#71717a]">TOTAL FEES RECEIVED</div>
              <div className="text-[46px] font-semibold text-white tracking-[-1.5px] mt-2 tabular-nums">187.4 SOL</div>
            </div>
            <div className="text-center p-9 rounded-2xl border border-[#27272a]">
              <div className="text-xs tracking-[2px] text-[#71717a]">CURRENT BALANCE</div>
              <div className="text-[46px] font-semibold text-white tracking-[-1.5px] mt-2 tabular-nums">94.2 SOL</div>
            </div>
            <div className="text-center p-9 rounded-2xl border border-[#27272a]">
              <div className="text-xs tracking-[2px] text-[#71717a]">TOTAL DISTRIBUTED</div>
              <div className="text-[46px] font-semibold text-white tracking-[-1.5px] mt-2 tabular-nums">68.9 SOL</div>
            </div>
          </div>

          {/* Bounties — elegant minimal feed */}
          <div className="max-w-3xl mx-auto">
            <div className="text-xs tracking-[2px] text-[#c084fc] mb-4 text-center">BOUNTIES CREATED BY THE AGENT</div>

            <div className="space-y-1 text-sm">
              {[
                { id: "4821", desc: "Design 5 launch memes", reward: "4.2 SOL", status: "Open" },
                { id: "4819", desc: "60s flywheel explainer video", reward: "2.8 SOL", status: "Completed" },
                { id: "4814", desc: "Top 10 GO stunts research", reward: "3.5 SOL", status: "Open" },
                { id: "4807", desc: "Custom PFP collection for holders", reward: "6.0 SOL", status: "Completed" },
              ].map((b, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-3.5 bg-[#0a0a0c] border border-[#27272a] hover:border-[#3f3f46] rounded-none first:rounded-t-2xl last:rounded-b-2xl">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#c084fc]">#{b.id}</span>
                    <span className="text-white">{b.desc}</span>
                  </div>
                  <div className="flex items-center gap-5 text-[#86efac]">
                    <span className="tabular-nums">{b.reward}</span>
                    <span className={`text-xs px-3 py-px rounded-full ${b.status === 'Open' ? 'bg-[#86efac] text-black' : 'bg-[#27272a] text-[#a1a1aa]'}`}>
                      {b.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 text-[10px] tracking-[2px] text-[#71717a]">
            POWERED BY $BAGENT FEES • LIVE AFTER LAUNCH
          </div>
        </div>
      </div>

      {/* Genesis — minimal */}
      <div id="genesis" className="max-w-3xl mx-auto px-6 py-16 text-center border-t border-[#27272a]">
        <div className="text-[#c084fc] text-xs tracking-[3px] mb-2">BUILT WITH GENESIS</div>
        <p className="text-white text-2xl tracking-tight">The coin that funds its own agent.</p>
        <a href="https://nostalgicgarethdev.github.io/genesis" target="_blank" rel="noopener noreferrer" className="text-sm text-[#c084fc] hover:underline mt-3 inline-block">Explore the agent launchpad →</a>
      </div>

      {/* Final CTA */}
      <div className="border-t border-[#27272a] py-14 bg-[#111113] text-center">
        <div className="max-w-sm mx-auto px-6">
          <h2 className="text-3xl tracking-tighter text-white mb-6">The machines are hiring.</h2>
          <a 
            href="https://pump.fun" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#e0d1ff] text-[#312e81] font-medium px-8 py-3 rounded-2xl hover:bg-white transition"
          >
            Buy $BAGENT on pump.fun <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <footer className="py-8 text-center text-xs text-[#71717a] border-t border-[#27272a]">
        From the <a href="https://nostalgicgarethdev.github.io/genesis" target="_blank" rel="noopener noreferrer" className="text-[#c084fc]">Genesis</a> agent launchpad.
      </footer>
    </div>
  )
}

export default App
