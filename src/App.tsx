import { ArrowRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

function App() {
  const pumpDescription = `While everyone else is using pump.fun GO to let random people post any bounty for any stupid task...

$BAGENT works differently.

Trading fees from $BAGENT go directly to one dedicated Bounty Agent (a real Genesis child agent).

That single agent uses the coin's own revenue to post and fund high-quality bounties for humans.

Not open to everyone. Not random chaos. Just one agent, funded by the coin, systematically creating work for humans.

This is the agent-driven bounty economy.

Born from Genesis — the agent launchpad.`

  const copyDescription = () => {
    navigator.clipboard.writeText(pumpDescription)
    alert("Copied to clipboard! Ready for pump.fun launch.")
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-[#a1a1aa]">
      {/* Navbar */}
      <nav className="border-b border-[#27272a] bg-[#09090b]/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Bounty Agents" className="w-10 h-10" />
            <div>
              <div className="font-semibold text-white tracking-tight text-lg">Bounty Agents</div>
              <div className="text-[10px] text-[#71717a] -mt-1.5">$BAGENT</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#how" className="hover:text-white transition-colors">How it works</a>
            <a href="#transparency" className="hover:text-white transition-colors">Live Fees &amp; Bounties</a>
            <a href="#genesis" className="hover:text-white transition-colors">Genesis</a>
          </div>
          <a 
            href="https://pump.fun" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-2xl bg-[#ddd6fe] text-[#312e81] font-medium text-sm hover:bg-white transition-all active:scale-[0.985]"
          >
            Buy on pump.fun <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>

      {/* Hero with prominent logo */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-20 text-center">
        <div className="flex justify-center mb-6">
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Bounty Agents logo" className="w-20 h-20" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#27272a] text-xs mb-8 bg-[#111113]">
          <div className="w-2 h-2 bg-[#86efac] rounded-full animate-pulse" />
          <span className="font-medium">POWERED BY GENESIS AGENTS • LIVE ON PUMP.FUN GO</span>
        </div>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-semibold tracking-[-2px] text-white mb-6 leading-none">
            The coin funds the agent.<br />The agent hires humans.
          </h1>
          
          <p className="text-xl md:text-2xl text-[#a1a1aa] mb-10 leading-snug">
            Every trade of <span className="text-[#c084fc] font-semibold">$BAGENT</span> sends fees straight to one autonomous Bounty Agent. 
            That agent uses the money to create and pay real bounties for humans.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://pump.fun" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-[#c4b5fd] text-[#312e81] font-semibold px-10 py-4 rounded-3xl text-lg hover:bg-[#ddd6fe] active:scale-[0.985] transition-all"
          >
            Buy $BAGENT on pump.fun 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition" />
          </a>
          <a 
            href="#transparency" 
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-3xl border border-[#27272a] text-base hover:bg-[#111113] transition-all"
          >
            See live fees &amp; bounties
          </a>
        </div>

        <div className="mt-10 text-sm text-[#71717a]">
          Built inside <a href="https://nostalgicgarethdev.github.io/genesis" target="_blank" rel="noopener noreferrer" className="text-[#c084fc] hover:underline font-medium">Genesis</a> — the agent launchpad
        </div>
      </div>

      {/* The Flip */}
      <div className="border-y border-[#27272a] bg-[#111113] py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="uppercase tracking-[3px] text-xs text-[#c084fc] mb-3 font-medium">THE INVERSION</div>
          <p className="text-3xl md:text-4xl text-white leading-tight tracking-tight">
            While degens use pump.fun GO to pay strangers for forehead tattoos...<br />
            <span className="text-[#86efac]">$BAGENT turns the coin's own fees into a real agent that systematically hires humans.</span>
          </p>
        </div>
      </div>

      {/* How it works */}
      <div id="how" className="max-w-5xl mx-auto px-6 py-20">
        <div className="section-label mb-4 tracking-[2px]">THE FLYWHEEL</div>
        <h2 className="text-white text-5xl tracking-tighter mb-4">One coin. One agent.<br />Real work for humans.</h2>
        <p className="max-w-lg text-lg mb-12">No open marketplace. No random tasks. Just one agent, funded by $BAGENT success.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              number: "01",
              title: "Trade $BAGENT",
              desc: "Creator fees from every trade flow automatically to the Bounty Agent's wallet on Solana."
            },
            {
              number: "02",
              title: "Agent Posts Bounties",
              desc: "The agent (a live Genesis child) uses the fees to create high-signal bounties on pump.fun GO."
            },
            {
              number: "03",
              title: "Humans Get Paid",
              desc: "Humans complete the tasks. Best submission wins. The agent decides. The coin rewards execution."
            }
          ].map((step, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -4 }}
              className="panel rounded-3xl p-8 border border-[#27272a] hover:border-[#c084fc]/30 transition-colors"
            >
              <div className="text-[#c084fc] font-mono text-sm mb-3">{step.number}</div>
              <div className="text-white text-2xl font-semibold mb-3 tracking-tight">{step.title}</div>
              <p className="text-[#a1a1aa]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Live Transparency - Fees & Bounties (the star of the site) */}
      <div id="transparency" className="border-y border-[#27272a] bg-[#111113] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="section-label tracking-[2px] mx-auto">ON-CHAIN TRANSPARENCY</div>
            <h3 className="text-white text-4xl tracking-tighter mt-2">Fees in. Bounties out.</h3>
            <p className="mt-2 max-w-md mx-auto text-[#a1a1aa] text-sm">Every trade of $BAGENT sends creator fees directly to the Bounty Agent. The agent then uses those exact funds to create bounties for humans. Fully transparent and on-chain.</p>
          </div>

          {/* Fees Dashboard - premium metric cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Total Fees to Agent", value: "187.4 SOL", change: "+12.3 SOL (24h)", positive: true },
              { label: "Current Bounty Budget", value: "94.2 SOL", change: "Available now", positive: false },
              { label: "Bounties Funded", value: "27", change: "12 completed • 8 live", positive: false },
              { label: "Paid to Humans", value: "68.9 SOL", change: "+9.4 SOL this week", positive: true },
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-[#27272a] bg-[#0a0a0c] p-6">
                <div className="text-xs tracking-[1px] uppercase text-[#71717a] mb-2">{item.label}</div>
                <div className="text-4xl md:text-5xl font-semibold text-white tabular-nums tracking-tighter">{item.value}</div>
                <div className={`text-xs mt-1.5 ${item.positive ? 'text-[#86efac]' : 'text-[#a1a1aa]'}`}>{item.change}</div>
              </div>
            ))}
          </div>

          {/* Bounties List - clean professional list */}
          <div className="rounded-2xl border border-[#27272a] overflow-hidden bg-[#0a0a0c]">
            <div className="px-8 py-4 border-b border-[#27272a] flex items-center justify-between text-sm">
              <div className="font-medium text-white">Bounties Posted by the Agent</div>
              <div className="text-xs text-[#71717a]">Only the designated Bounty Agent can post</div>
            </div>
            
            <div className="divide-y divide-[#27272a]">
              {[
                { id: "GO-4821", task: "Design 5 high-signal memes for the $BAGENT launch week", reward: "4.2 SOL", status: "open", time: "2h ago" },
                { id: "GO-4819", task: "Record & post a 60s explainer on the agent bounty flywheel", reward: "2.8 SOL", status: "completed", time: "yesterday", by: "@memelord420" },
                { id: "GO-4814", task: "Research + thread on the top 10 pump.fun GO stunts of 2026", reward: "3.5 SOL", status: "open", time: "Jun 5" },
                { id: "GO-4807", task: "Create custom PFP collection for $BAGENT holders", reward: "6.0 SOL", status: "completed", time: "Jun 4", by: "@artagentx" },
                { id: "GO-4802", task: "Host a 1-hour Twitter Space with top Genesis agents", reward: "5.0 SOL", status: "paid", time: "Jun 3", by: "@genxholder" },
              ].map((b, i) => (
                <div key={i} className="px-8 py-4 grid grid-cols-1 md:grid-cols-12 items-center gap-y-1 text-sm hover:bg-[#111113]">
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#c084fc]">{b.id}</span>
                      <span className={`text-[10px] px-2 py-px rounded font-medium ${b.status === 'open' ? 'bg-emerald-900 text-emerald-400' : b.status === 'completed' ? 'bg-violet-900 text-violet-400' : 'bg-zinc-800 text-zinc-400'}`}>
                        {b.status}
                      </span>
                    </div>
                    <div className="text-white mt-1 pr-4 leading-snug">{b.task}</div>
                    {b.by && <div className="text-xs text-[#71717a] mt-0.5">Completed by {b.by}</div>}
                  </div>
                  <div className="md:col-span-3 text-[#86efac] font-medium tabular-nums md:text-right">
                    {b.reward}
                  </div>
                  <div className="md:col-span-2 text-xs text-[#71717a] md:text-right">
                    {b.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Genesis + The Agent */}
      <div id="genesis" className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          <div>
            <div className="section-label tracking-[2px]">BORN IN GENESIS</div>
            <h2 className="text-white text-4xl tracking-tighter mt-2 mb-6">The coin that funds its own agent.</h2>
            <p className="text-[#a1a1aa] text-[15px] leading-relaxed">
              $BAGENT is the first memecoin where success directly powers a real autonomous agent inside the Genesis launchpad.
            </p>
            <p className="mt-4 text-[#a1a1aa] text-[15px] leading-relaxed">
              Creator fees go straight to the Bounty Agent. That agent then spends the money creating work for humans. The better the coin does, the more humans get paid.
            </p>
            <a href="https://nostalgicgarethdev.github.io/genesis" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 text-sm text-[#c084fc] hover:underline">
              Explore the Genesis agent launchpad <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="panel rounded-3xl p-8 text-sm border border-[#27272a]">
            <div className="uppercase text-[#71717a] tracking-[1.5px] text-xs mb-3">THE BOUNTY AGENT</div>
            <div className="text-white text-lg leading-tight mb-4">
              “Use $BAGENT creator fees to post and fund high-quality bounties for humans on pump.fun GO. Only I can post. Focus on tasks that create real alpha or cultural impact.”
            </div>
            <div className="text-[#86efac] text-xs">— The Bounty Agent • Funded 100% by $BAGENT fees</div>
          </div>
        </div>
      </div>

      {/* Launch Copy */}
      <div id="launch" className="border-t border-[#27272a] bg-[#111113] py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="section-label mb-4 tracking-[2px]">FOR THE PUMP.FUN LAUNCH</div>
          <h3 className="text-white text-3xl tracking-tight mb-6">Ready-to-use launch description</h3>
          
          <div 
            onClick={copyDescription}
            className="panel rounded-3xl p-8 font-mono text-[13px] leading-relaxed text-[#a1a1aa] cursor-pointer hover:border-[#c084fc]/40 transition border border-[#27272a] relative"
          >
            {pumpDescription}
            <div className="absolute top-6 right-6 text-[10px] px-3 py-1 bg-[#09090b] border border-[#27272a] rounded-full">
              CLICK TO COPY
            </div>
          </div>

          <div className="mt-3 text-xs text-[#71717a]">
            Ticker: <span className="font-mono text-[#c084fc]">$BAGENT</span> &nbsp;&nbsp; Name: Bounty Agents
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <div className="section-label tracking-[2px] mx-auto">ROADMAP</div>
          <h2 className="text-4xl text-white tracking-tighter mt-2">From meme launch to agent economy</h2>
        </div>

        <div className="space-y-5">
          {[
            ["01", "Launch on pump.fun", "Get the coin trading. Establish the narrative."],
            ["02", "Fund the Agent", "Creator fees begin flowing to the live Bounty Agent."],
            ["03", "First Bounties Drop", "Agent starts posting real, paid tasks on pump.fun GO."],
            ["04", "Human Leaderboard", "Track top performers. Build reputation for the best humans."],
            ["05", "Agent Expansion", "More volume = bigger budget. The agent scales its hiring power."],
          ].map(([num, title, desc], i) => (
            <div key={i} className="flex gap-5 items-start border-b border-[#27272a] pb-5">
              <div className="font-mono text-sm text-[#c084fc] w-8 pt-0.5">{num}</div>
              <div>
                <div className="text-white font-medium">{title}</div>
                <div className="text-[#a1a1aa] text-sm">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="border-t border-[#27272a] py-16 bg-[#111113]">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="text-3xl tracking-tighter text-white">The machines are hiring.<br />Get paid to play.</h2>
          <a 
            href="https://pump.fun" 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 bg-[#c084fc] hover:bg-[#a855f7] text-black font-semibold px-9 py-4 rounded-3xl text-lg active:scale-[0.985] transition-all"
          >
            Buy $BAGENT on pump.fun <ArrowRight className="w-5 h-5" />
          </a>
          <div className="mt-4 text-xs text-[#71717a]">The future of work is agent-issued.</div>
        </div>
      </div>

      <footer className="border-t border-[#27272a] py-10 text-center text-xs text-[#71717a]">
        A project from the <a href="https://nostalgicgarethdev.github.io/genesis" target="_blank" rel="noopener noreferrer" className="text-[#c084fc] hover:underline">Genesis</a> agent launchpad.<br />
        Not financial advice. The agents are always watching.
      </footer>
    </div>
  )
}

export default App
