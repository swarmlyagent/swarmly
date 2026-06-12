export function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="wrap sec">
        <div className="lab reveal">
          <span className="rule" />
          <span>Process</span>
        </div>
        <h2 className="h2 reveal">Three steps. Under a minute.</h2>
        <div className="steps">
          <div>
            <div className="step reveal">
              <div className="rn">01</div>
              <div>
                <h4>Get a token</h4>
                <p>Open @BotFather, run /newbot, and copy the token it provides.</p>
              </div>
            </div>
            <div className="step reveal">
              <div className="rn">02</div>
              <div>
                <h4>Configure</h4>
                <p>
                  Choose a template, name your agent, and write the personality that
                  shapes how it responds.
                </p>
              </div>
            </div>
            <div className="step reveal">
              <div className="rn">03</div>
              <div>
                <h4>Deploy</h4>
                <p>
                  Paste the token and deploy. Your agent runs on Telegram at no cost
                  to you.
                </p>
              </div>
            </div>
          </div>
          <div className="term reveal">
            <div className="term-bar">
              <span className="d" style={{ background: "#ff5f56" }} />
              <span className="d" style={{ background: "#ffbd2e" }} />
              <span className="d" style={{ background: "#27c93f" }} />
              <span className="t">swarmly deploy</span>
            </div>
            <div className="term-b">
              <div>
                <span className="p">$</span> <span className="o">swarmly deploy</span>
              </div>
              <div className="dim">{"  paste @BotFather token…"}</div>
              <div>
                <span className="ok">✓</span>{" "}
                <span className="o">token valid · @alpha_watcher_bot</span>
              </div>
              <div>
                <span className="ok">✓</span>{" "}
                <span className="o">template: researcher loaded</span>
              </div>
              <div>
                <span className="ok">✓</span>{" "}
                <span className="o">memory on · isolated runtime</span>
              </div>
              <div>
                <span className="ok">✓</span>{" "}
                <span className="o">sandboxed · live on Telegram</span>
              </div>
              <div style={{ marginTop: 6 }}>
                <span className="p">→</span>{" "}
                <span className="ok">live at t.me/alpha_watcher_bot</span>
                <span className="cur" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
