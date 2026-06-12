import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Terminal } from "@/components/site/Terminal";
import { TEMPLATES } from "@/lib/templates";

export const metadata: Metadata = { title: "Docs · Swarmly" };

const SECTIONS: [string, string][] = [
  ["quickstart", "Quickstart"],
  ["commands", "Bot commands"],
  ["templates", "Templates"],
  ["personality", "Personality"],
  ["skills", "Skills"],
  ["memory", "Memory"],
  ["reliability", "AI & reliability"],
  ["limits", "Limits"],
  ["security", "Security"],
  ["pricing", "Pricing"],
  ["troubleshooting", "Troubleshooting"],
];

// On the roadmap, not live today. Shown clearly as "soon" in the Skills section.
const ROADMAP: [string, string][] = [
  ["Research & web", "Search the web, read and summarize pages and documents, monitor topics."],
  ["Memory that learns", "Save and recall facts about people and projects across conversations."],
  ["Voice & vision", "Transcribe voice notes, interpret images, and reply with audio."],
  ["Code tools", "Run and review code, and work with repositories."],
  ["Scheduling", "Run tasks on a schedule, such as a daily 9 a.m. briefing."],
  ["Integrations", "Connect to external services and post to channels and groups."],
];

const LIMITS: [string, string][] = [
  ["Context window", "Your agent uses the recent messages of a chat for context."],
  ["Reply length", "Very long answers are split across multiple Telegram messages."],
  ["Text only, today", "The agent reads and writes text. Voice, images, and files are on the roadmap."],
  ["Response time", "Most replies arrive in a few seconds. There is no SLA yet."],
];

function SectionHead({ n, title }: { n: string; title: string }) {
  return (
    <div className="dsec-top">
      <span className="dn">{n}</span>
      <h2>{title}</h2>
      <span className="dline" />
    </div>
  );
}

export default function DocsPage() {
  return (
    <>
      <Nav />
      <main className="wrap dwrap">
        <div className="docs-hero">
          <div className="lab">
            <span className="rule" />
            <span>Documentation</span>
          </div>
          <h1 className="h2">Everything you need to ship an agent.</h1>
          <p className="sub">
            Swarmly deploys AI agents to Telegram. No API keys, no servers. This page is
            an honest tour of what your agent does today, how to deploy and use it, and
            what is coming next.
          </p>
        </div>

        <div className="docs-shell">
          <aside className="toc">
            <h6>On this page</h6>
            {SECTIONS.map(([id, label], i) => (
              <a key={id} href={`#${id}`}>
                <span className="tn">{String(i + 1).padStart(2, "0")}</span>
                {label}
              </a>
            ))}
          </aside>

          <div className="docs-content">
            {/* 01 Quickstart */}
            <section id="quickstart" className="dsec">
              <SectionHead n="01" title="Quickstart" />
              <p className="lead">
                Four steps to a live agent, under a minute. You bring a Telegram token;
                we run the agent on our infrastructure and cover the AI costs.
              </p>
              <ol className="docsteps">
                <li>
                  <b>Create a bot.</b> Message{" "}
                  <a href="https://t.me/BotFather" target="_blank" rel="noreferrer">
                    @BotFather
                  </a>
                  , run <code>/newbot</code>, and copy the token it gives you.
                </li>
                <li>
                  <b>Choose a template.</b> Open <a href="/deploy">Deploy</a> and pick a
                  starting point, or begin from a blank Custom agent.
                </li>
                <li>
                  <b>Customize and deploy.</b> Name it, write its personality, paste the
                  token, and deploy.
                </li>
                <li>
                  <b>Open and test.</b> You get a link to your agent on Telegram. Save it,
                  because there is no dashboard yet, so that link is how you find your bot.
                  Open it, press Start, and say hi.
                </li>
              </ol>
              <Terminal title="@BotFather">
                <div>
                  <span className="p">you ›</span> <span className="o">/newbot</span>
                </div>
                <div className="dim">BotFather: Alright. What name should your bot have?</div>
                <div>
                  <span className="p">you ›</span> <span className="o">Alpha Watcher</span>
                </div>
                <div className="dim">BotFather: Good. Now choose a username ending in "bot".</div>
                <div>
                  <span className="p">you ›</span>{" "}
                  <span className="o">alpha_watcher_bot</span>
                </div>
                <div style={{ marginTop: 6 }}>
                  <span className="ok">✓</span>{" "}
                  <span className="o">Done! Use this token to access the HTTP API:</span>
                </div>
                <div className="dim">8123456789:AAH-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
              </Terminal>
            </section>

            {/* 02 Bot commands */}
            <section id="commands" className="dsec">
              <SectionHead n="02" title="Bot commands" />
              <p className="lead">
                Every Swarmly bot understands a few built-in commands. Anything else you
                send is answered by the agent.
              </p>
              <div className="cmds">
                <div className="cmd">
                  <span className="ck">
                    <span className="arr">›</span>
                    <code>/start</code>
                  </span>
                  <p>
                    Introduces the bot and confirms it is an AI agent. Sent the first time
                    someone opens the chat.
                  </p>
                </div>
                <div className="cmd">
                  <span className="ck">
                    <span className="arr">›</span>
                    <code>/help</code>
                  </span>
                  <p>Lists the available commands and what the bot can do.</p>
                </div>
                <div className="cmd">
                  <span className="ck">
                    <span className="arr">›</span>
                    <code>/reset</code>
                  </span>
                  <p>Clears the recent conversation so the agent starts fresh.</p>
                </div>
              </div>
              <Terminal title="alpha_watcher_bot · telegram">
                <div>
                  <span className="ok">✓</span>{" "}
                  <span className="o">@alpha_watcher_bot is live</span>
                </div>
                <div style={{ marginTop: 6 }}>
                  <span className="p">›</span> <span className="o">/start</span>
                </div>
                <div className="dim">
                  Hi, I&apos;m Alpha Watcher, an AI agent running on Swarmly. Send me a
                  message and I&apos;ll do my best to help. Use /help to see what I can do.
                </div>
                <div style={{ marginTop: 6 }}>
                  <span className="p">›</span>{" "}
                  <span className="o">explain transformers in two sentences</span>
                </div>
                <div className="dim">A transformer is a neural network that…</div>
                <div style={{ marginTop: 6 }}>
                  <span className="p">›</span> <span className="o">/reset</span>
                </div>
                <div className="dim">Done, I&apos;ve cleared our recent conversation.</div>
              </Terminal>
            </section>

            {/* 03 Templates */}
            <section id="templates" className="dsec">
              <SectionHead n="03" title="Templates" />
              <p className="lead">
                A template is a starting point: a personality tuned for a job. Today the
                templates differ by their personality and focus; the tools they will use
                (web search, code, and more) are on the roadmap. Pick the closest one and
                adjust, or start from Custom.
              </p>
              <div className="tpls" style={{ marginTop: 28 }}>
                {TEMPLATES.map((t) => (
                  <div className="tpl" key={t.slug}>
                    <div className="th">
                      <div className="ic">{t.icon ?? "◇"}</div>
                      <h4>{t.name}</h4>
                    </div>
                    <p>{t.description}</p>
                    <div className="tags">
                      {t.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 04 Personality */}
            <section id="personality" className="dsec">
              <SectionHead n="04" title="Personality" />
              <p className="lead">
                The personality is a prompt that shapes how your agent thinks and writes.
                It is the single biggest lever on how the bot feels, and today it is the
                main thing that makes one agent different from another. Be specific about
                its role, its tone, and what it should refuse. You set it when you deploy;
                in-place editing arrives with accounts.
              </p>
              <Terminal title="personality">
                <div className="o">You are a market analysis agent for crypto and traditional</div>
                <div className="o">markets. Track price action, identify trends, and monitor</div>
                <div className="o">on-chain signals. Be data-driven, never speculative. State</div>
                <div className="o">your confidence level. This is not financial advice.</div>
              </Terminal>
            </section>

            {/* 05 Skills */}
            <section id="skills" className="dsec">
              <SectionHead n="05" title="Skills" />
              <p className="lead">
                Today your agent answers using its personality and the recent
                conversation. A library of skills that let agents act, not just chat,
                is what we are building next.
              </p>
              <div className="lab" style={{ marginTop: 26, marginBottom: 16 }}>
                <span className="rule" />
                <span>On the roadmap</span>
              </div>
              <div className="fgrid">
                {ROADMAP.map(([title, body]) => (
                  <div className="fc" key={title}>
                    <div className="fi">◇</div>
                    <h4>
                      {title} <span className="soon">soon</span>
                    </h4>
                    <p>{body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 06 Memory */}
            <section id="memory" className="dsec">
              <SectionHead n="06" title="Memory" />
              <p className="lead">
                Your agent follows the recent flow of a conversation so it can answer in
                context. Use <code>/reset</code> to clear that recent context and start
                fresh.
              </p>
              <div className="callout">
                <p>
                  Memory is fully isolated per bot, so one agent never reads another
                  agent&apos;s data. The agent does not yet learn or save new facts on its
                  own; memory that learns is on the roadmap.
                </p>
              </div>
            </section>

            {/* 07 AI & reliability */}
            <section id="reliability" className="dsec">
              <SectionHead n="07" title="AI & reliability" />
              <p className="lead">
                Your agent runs on a managed AI model on our infrastructure, so you never
                manage a key or a bill. Each agent runs isolated and always on, and
                restarts on its own if it ever stops.
              </p>
              <div className="statline">
                <div className="s">
                  <div className="sn">always on</div>
                  <div className="sl">auto-restart</div>
                </div>
                <div className="s">
                  <div className="sn">isolated</div>
                  <div className="sl">per agent</div>
                </div>
                <div className="s">
                  <div className="sn">$0</div>
                  <div className="sl">your cost</div>
                </div>
              </div>
            </section>

            {/* 08 Limits */}
            <section id="limits" className="dsec">
              <SectionHead n="08" title="Limits" />
              <p className="lead">A few honest things to know about how your agent behaves today.</p>
              <div className="fgrid">
                {LIMITS.map(([title, body]) => (
                  <div className="fc" key={title}>
                    <div className="fi">◇</div>
                    <h4>{title}</h4>
                    <p>{body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 09 Security */}
            <section id="security" className="dsec">
              <SectionHead n="09" title="Security" />
              <p className="lead">Your token and your data are handled carefully.</p>
              <div className="fgrid">
                <div className="fc">
                  <div className="fi">◇</div>
                  <h4>Encrypted tokens</h4>
                  <p>
                    Your bot token is encrypted with AES-256-GCM before it is stored and is
                    never shown again.
                  </p>
                </div>
                <div className="fc">
                  <div className="fi">◇</div>
                  <h4>Sandboxed agents</h4>
                  <p>Each agent is locked to safe, conversational use: no shell, no code execution, no filesystem.</p>
                </div>
                <div className="fc">
                  <div className="fi">◇</div>
                  <h4>Per-bot isolation</h4>
                  <p>One agent can never read another agent&apos;s conversations or data.</p>
                </div>
                <div className="fc">
                  <div className="fi">◇</div>
                  <h4>Where your data goes</h4>
                  <p>
                    To generate replies, message content is sent to a third-party AI
                    provider. See the <a href="/privacy">Privacy</a> page.
                  </p>
                </div>
              </div>
            </section>

            {/* 10 Pricing */}
            <section id="pricing" className="dsec">
              <SectionHead n="10" title="Pricing" />
              <div className="callout">
                <p>
                  Free forever. We cover the AI provider costs in full. There is no credit
                  card, no trial period, and no charges later. Deploy as many agents as you
                  need.
                </p>
              </div>
            </section>

            {/* 11 Troubleshooting */}
            <section id="troubleshooting" className="dsec">
              <SectionHead n="11" title="Troubleshooting" />
              <div className="qa-doc">
                <div className="qd">
                  <b>I deployed but the bot does nothing.</b>
                  <p>
                    Give it a moment to activate, then message it again and press Start. If
                    it still does not respond, recheck the token.
                  </p>
                </div>
                <div className="qd">
                  <b>My bot stopped replying.</b>
                  <p>
                    A token is revoked if you regenerate it in @BotFather. Make sure the
                    token is still valid, and remember you must message the bot first,
                    because bots cannot start a conversation with you.
                  </p>
                </div>
                <div className="qd">
                  <b>The token was rejected on deploy.</b>
                  <p>
                    Copy the token again from @BotFather exactly, with no extra spaces. It
                    looks like <code>8123456789:AAH…</code>.
                  </p>
                </div>
                <div className="qd">
                  <b>Can I edit my agent after deploying?</b>
                  <p>
                    Not in place yet. You set the personality when you deploy; editing and
                    a dashboard arrive with accounts.
                  </p>
                </div>
                <div className="qd">
                  <b>How do I stop a bot?</b>
                  <p>
                    Regenerate or revoke its token in @BotFather and it stops replying.
                    Pause and delete from the app arrive with accounts; to remove a bot and
                    its data now, email us.
                  </p>
                </div>
                <div className="qd">
                  <b>Can I run more than one agent?</b>
                  <p>
                    Yes. Create another bot in @BotFather and deploy again with its token.
                    Each agent is isolated.
                  </p>
                </div>
                <div className="qd">
                  <b>Still stuck?</b>
                  <p>
                    Email{" "}
                    <a href="mailto:hello@swarmlyagent.com">hello@swarmlyagent.com</a> and
                    we will help.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
