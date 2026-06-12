const ITEMS: [string, string][] = [
  ["$0", "free forever"],
  ["0", "API keys"],
  ["<60s", "to deploy"],
  ["auto", "always-on runtime"],
  ["AES-256", "token encryption"],
  ["100%", "managed for you"],
];

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="marq">
      <div className="marq-track">
        {doubled.map(([n, l], i) => (
          <div className="mq-item" key={i}>
            <span className="n">{n}</span>
            <span className="l">{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
