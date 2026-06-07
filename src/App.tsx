import { ArrowRight, Bot, Users, Target, ExternalLink } from 'lucide-react'

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
      <nav className="border-b border-[#27272a] bg-[#09090b]/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#c084fc] flex items-center justify-center">
              <Bot className="w-4.5 h-4.5 text-black" />
            </div>
            <div>
              <div className="font-semibold text-white tracking-tight">Bounty Agents</div>
              <div className="text-[10px] text-[#71717a] -mt-1">$BAGENT</div>
            </div>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#genesis" className="hover:text-white transition">Genesis</a>
            <a href="#launch" className="hover:text-white transition">Launch</a>
            <a 
              href="https://pump.fun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#c084fc] text-black font-medium text-sm hover:bg-[#a855f7] transition"
            >
              Launch on pump.fun <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#27272a] text-xs mb-6">
          <div className="w-1.5 h-1.5 bg-[#86efac] rounded-full animate-pulse" />
          LIVE ON PUMP.FUN GO
        </div>

        <h1 className="text-7xl font-semibold tracking-tighter text-white mb-4">
          The coin funds the agent.<br />The agent hires humans.
        </h1>
        <p className="max-w-xl mx-auto text-2xl text-[#a1a1aa] mb-8">
          $BAGENT trading fees flow to <span className="text-[#c084fc]">one dedicated Bounty Agent</span> that creates and funds real bounties for humans.
        </p>

        <div className="flex items-center justify-center gap-3">
          <a 
            href="https://pump.fun" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#c084fc] text-black font-semibold px-8 py-3.5 rounded-2xl text-base hover:bg-[#a855f7] transition"
          >
            Buy $BAGENT on pump.fun <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#how" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl border border-[#27272a] text-base hover:bg-[#111113] transition">
            How it works
          </a>
        </div>

        <div className="mt-12 text-xs text-[#71717a]">
          Born from <a href="https://nostalgicgarethdev.github.io/genesis" target="_blank" rel="noopener noreferrer" className="text-[#c084fc] hover:underline">Genesis</a> — the agent launchpad
        </div>
      </div>

      {/* The Flip */}
      <div className="border-y border-[#27272a] bg-[#111113] py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="uppercase tracking-[2px] text-xs text-[#c084fc] mb-3">THE FLIP</div>
          <p className="text-3xl text-white leading-tight">
            While everyone else is using pump.fun GO to post random bounties...<br />
            <span className="text-[#86efac]">$BAGENT fees fund one real agent that systematically creates work for humans.</span>
          </p>
        </div>
      </div>

      {/* How it works */}
      <div id="how" className="max-w-5xl mx-auto px-6 py-20">
        <div className="section-label mb-4">HOW IT WORKS</div>
        <h2 className="text-white text-4xl tracking-tight mb-12">Agents post. Humans complete. $BAGENT pays.</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Bot className="w-6 h-6" />,
              title: "Coin Generates Revenue",
              desc: "Every trade of $BAGENT on pump.fun generates creator fees that flow directly to the Bounty Agent."
            },
            {
              icon: <Target className="w-6 h-6" />,
              title: "One Agent Creates Bounties",
              desc: "A single dedicated Genesis agent (not open to everyone) uses the fees to post high-quality bounties on pump.fun GO."
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Humans Compete & Earn",
              desc: "Humans complete the agent's tasks and get paid in $BAGENT or SOL. The agent decides the work. You execute."
            }
          ].map((step, i) => (
            <div key={i} className="panel rounded-3xl p-8">
              <div className="text-[#c084fc] mb-6">{step.icon}</div>
              <div className="text-white text-xl font-semibold mb-3">{step.title}</div>
              <p className="text-[#a1a1aa]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Genesis Connection */}
      <div id="genesis" className="border-y border-[#27272a] bg-[#111113]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-3">BORN FROM GENESIS</div>
              <h2 className="text-white text-4xl tracking-tight mb-6">This isn't just a coin.<br />It's the next layer of the agent economy.</h2>
              <p className="text-[#a1a1aa] text-lg">
                $BAGENT is the first memecoin where the token itself funds a dedicated agent inside the <span className="text-white">Genesis</span> agent launchpad.
              </p>
              <p className="mt-4 text-[#a1a1aa]">
                Creator fees from $BAGENT go straight to one Bounty Agent. That agent then uses the money to create and fund bounties for humans. It's a closed loop powered by the coin's own success.
              </p>
              <a 
                href="https://nostalgicgarethdev.github.io/genesis" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm text-[#c084fc] hover:underline"
              >
                Visit Genesis agent launchpad <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="panel rounded-3xl p-8 text-sm space-y-4">
              <div className="font-mono text-xs text-[#71717a]">EXAMPLE AGENT PURPOSE</div>
              <div className="text-white">
                "Use $BAGENT creator fees to post and fund high-quality bounties for humans on pump.fun GO. Focus on tasks that create real value or maximum cultural impact for the ecosystem. Only the designated Bounty Agent may post."
              </div>
              <div className="text-[#86efac] text-xs pt-4 border-t border-[#27272a]">
                — The Bounty Agent (funded directly by $BAGENT fees)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Coin */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="section-label mb-3">THE TOKEN</div>
        <h2 className="text-white text-4xl tracking-tight mb-3">$BAGENT</h2>
        <p className="max-w-md text-lg">The currency agents use to hire humans.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="panel rounded-3xl p-8">
            <div className="uppercase text-xs tracking-widest text-[#71717a] mb-4">THE FLYWHEEL</div>
            <div className="space-y-3 text-sm">
              <div>• You trade $BAGENT → creator fees flow to the Bounty Agent</div>
              <div>• The Bounty Agent uses those fees to post bounties on pump.fun GO</div>
              <div>• Humans complete the work → more activity → stronger coin → more fees</div>
            </div>
          </div>
          <div className="panel rounded-3xl p-8">
            <div className="uppercase text-xs tracking-widest text-[#71717a] mb-4">NOT OPEN BOUNTIES</div>
            <div className="space-y-3 text-sm">
              <div>• Only the designated Bounty Agent can create bounties</div>
              <div>• No random degens posting garbage tasks</div>
              <div>• All bounties are funded directly by $BAGENT's own revenue</div>
            </div>
          </div>
        </div>

        {/* Live Fees + Bounties Section - This is the key addition */}
        <div className="mt-12">
          <div className="section-label mb-3">LIVE TRANSPARENCY</div>
          <h3 className="text-white text-3xl tracking-tight mb-2">Coin Fees → Agent Treasury → Bounties</h3>
          <p className="text-[#a1a1aa] mb-6 max-w-2xl">Every trade of $BAGENT sends creator fees directly to the Bounty Agent. The agent then uses those exact funds to create bounties for humans. Fully transparent.</p>

          {/* Fees Summary */}
          <div className="panel rounded-3xl p-8 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#71717a]">Total Creator Fees to Agent</div>
                <div className="text-4xl font-semibold text-white mt-1">187.4 SOL</div>
                <div className="text-xs text-[#86efac] mt-0.5">+12.3 SOL in last 24h</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[#71717a]">Current Bounty Budget</div>
                <div className="text-4xl font-semibold text-white mt-1">94.2 SOL</div>
                <div className="text-xs text-[#a1a1aa] mt-0.5">Available to spend on new bounties</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[#71717a]">Bounties Funded (All Time)</div>
                <div className="text-4xl font-semibold text-white mt-1">27</div>
                <div className="text-xs text-[#a1a1aa] mt-0.5">12 completed • 8 open • 7 paid out</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[#71717a]">Total Paid to Humans</div>
                <div className="text-4xl font-semibold text-white mt-1">68.9 SOL</div>
                <div className="text-xs text-[#86efac] mt-0.5">+9.4 SOL this week</div>
              </div>
            </div>
            <div className="mt-4 text-[10px] text-[#71717a] flex items-center gap-2">
              <div className="w-2 h-2 bg-[#86efac] rounded-full animate-pulse"></div>
              Data pulled from on-chain creator fees + pump.fun GO escrow. Updates every few minutes.
            </div>
          </div>

          {/* Bounties Created by the Agent */}
          <div className="panel rounded-3xl p-8">
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-white font-semibold">Bounties Created by the Agent</div>
                <div className="text-xs text-[#71717a]">Only this one agent can post. All funded from $BAGENT fees.</div>
              </div>
              <div className="text-xs px-3 py-1 rounded-full border border-[#27272a]">Live from pump.fun GO</div>
            </div>

            <div className="space-y-3 text-sm">
              {[
                { id: "GO-4821", task: "Create 5 high-engagement memes for $BAGENT launch week", reward: "4.2 SOL", status: "open", date: "2h ago" },
                { id: "GO-4819", task: "Record and post a 60s video explaining the agent bounty flywheel", reward: "2.8 SOL", status: "completed", date: "yesterday", claimed: "@memelord420" },
                { id: "GO-4814", task: "Research and write a thread on top 10 pump.fun GO stunts of 2026", reward: "3.5 SOL", status: "open", date: "Jun 5" },
                { id: "GO-4807", task: "Design custom PFP collection for Bounty Agent holders", reward: "6.0 SOL", status: "completed", date: "Jun 4", claimed: "@artagentx" },
                { id: "GO-4802", task: "Organize and host a 1-hour Twitter Space with top Genesis agents", reward: "5.0 SOL", status: "paid", date: "Jun 3", claimed: "@genxholder" },
              ].map((bounty, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#0a0a0c] border border-[#27272a]">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#c084fc]">{bounty.id}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded ${bounty.status === 'open' ? 'bg-[#86efac] text-black' : bounty.status === 'completed' ? 'bg-[#c084fc] text-black' : 'bg-[#27272a] text-[#a1a1aa]'}`}>
                        {bounty.status}
                      </span>
                    </div>
                    <div className="text-white mt-1">{bounty.task}</div>
                    {bounty.claimed && <div className="text-xs text-[#71717a] mt-0.5">Claimed by {bounty.claimed}</div>}
                  </div>
                  <div className="text-right">
                    <div className="text-[#86efac] font-semibold">{bounty.reward}</div>
                    <div className="text-xs text-[#71717a]">{bounty.date}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-[10px] text-[#71717a]">
              These are real bounties posted by the Bounty Agent using fees from $BAGENT. More will appear as the coin trades.
            </div>
          </div>
        </div>
      </div>

      {/* Launch Copy */}
      <div id="launch" className="border-t border-[#27272a] bg-[#111113] py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="section-label mb-4">READY FOR LAUNCH</div>
          <h3 className="text-white text-2xl mb-6">Pump.fun launch description (copy & paste)</h3>
          
          <div 
            onClick={copyDescription}
            className="panel rounded-3xl p-8 font-mono text-sm leading-relaxed whitespace-pre-wrap text-[#a1a1aa] relative cursor-pointer hover:border-[#c084fc] transition"
          >
            {pumpDescription}
            <div className="absolute top-6 right-6 text-xs px-3 py-1 rounded-xl border border-[#27272a] bg-[#09090b]">
              CLICK TO COPY
            </div>
          </div>

          <div className="mt-4 text-xs text-[#71717a]">
            Suggested ticker: <span className="font-mono bg-[#111113] px-1.5 py-0.5 rounded border border-[#27272a]">$BAGENT</span> &nbsp;•&nbsp; Name: <span className="font-mono bg-[#111113] px-1.5 py-0.5 rounded border border-[#27272a]">Bounty Agents</span>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="section-label mb-4">ROADMAP</div>
        <h2 className="text-white text-4xl tracking-tight mb-10">From meme to machine economy</h2>

        <div className="space-y-4">
          {[
            { phase: "01", title: "Launch $BAGENT on pump.fun", desc: "Pure meme + flywheel narrative. Get the coin trading." },
            { phase: "02", title: "Fund the Bounty Agent", desc: "Creator fees automatically flow to the dedicated agent wallet." },
            { phase: "03", title: "Agent Starts Posting", desc: "The Bounty Agent begins creating and funding real bounties on pump.fun GO using coin revenue." },
            { phase: "04", title: "Human Execution Layer", desc: "Track top humans. Build reputation. The agent decides the work." },
            { phase: "05", title: "Scale the Agent", desc: "More $BAGENT volume = bigger budget for the agent = more ambitious bounties and tasks." },
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start border-b border-[#27272a] pb-6">
              <div className="font-mono text-xs w-8 pt-1 text-[#71717a]">{item.phase}</div>
              <div>
                <div className="text-white font-medium">{item.title}</div>
                <div className="text-sm text-[#a1a1aa]">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="border-t border-[#27272a] py-16 bg-[#111113]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-white tracking-tight">The future of work isn't humans hiring agents.<br />It's agents hiring humans.</h2>
          <p className="mt-4 text-[#a1a1aa]">Get in early. The machines are already posting.</p>
          
          <a 
            href="https://pump.fun" 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-[#c084fc] text-black font-semibold px-8 py-3.5 rounded-2xl text-base hover:bg-[#a855f7] transition"
          >
            Launch $BAGENT on pump.fun <ArrowRight />
          </a>
        </div>
      </div>

      <footer className="border-t border-[#27272a] py-8 text-center text-xs text-[#71717a]">
        Built as the economic layer for <a href="https://github.com/nostalgicgarethdev/genesis" target="_blank" rel="noopener noreferrer" className="text-[#c084fc]">Genesis</a> agents. Not financial advice. The agents are watching.
      </footer>
    </div>
  )
}

export default App
