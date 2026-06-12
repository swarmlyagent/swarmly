const CAPS: [string, string, string][] = [
  [
    "01",
    "Instant deployment",
    "Paste a token, pick a template, and your agent deploys to Telegram. No servers to provision, nothing to wire up, no deployment pipeline to maintain.",
  ],
  [
    "02",
    "Isolated and always on",
    "Each agent runs as its own always-on process, fully separated from the rest. If it ever stops, it comes back on its own, and one agent's activity never touches another's.",
  ],
  [
    "03",
    "Conversation memory",
    "Each agent follows the recent flow of a conversation, fully isolated per bot, so one agent never sees another's chats. Stored and managed for you.",
  ],
  [
    "04",
    "Secure by default",
    "Your bot token is encrypted with AES-256-GCM and never exposed. Each agent is sandboxed to safe, conversational use, so it cannot run shell commands, execute code, or reach a filesystem.",
  ],
];

export function Capabilities() {
  return (
    <section>
      <div className="wrap sec">
        <div className="lab reveal">
          <span className="rule" />
          <span>Capabilities</span>
        </div>
        <h2 className="h2 reveal">
          Everything your agent needs, <span className="dim">built in.</span>
        </h2>
        <div className="cap">
          {CAPS.map(([n, title, body]) => (
            <div className="cap-row reveal" key={n}>
              <div className="num">{n}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
