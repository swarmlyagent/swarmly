import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section>
      <div className="final">
        <div className="wrap">
          <h2 className="reveal">
            Your first agent is one
            <br />
            token away.
          </h2>
          <p className="reveal">
            Paste your token, choose a template, and go live in under a minute.{" "}
            <b style={{ color: "var(--fg)", fontWeight: 600 }}>
              It&apos;s free, with no time limit.
            </b>
          </p>
          <Button variant="primary" size="lg" href="/deploy" className="reveal">
            Deploy your agent <span className="arr">→</span>
          </Button>
          <div
            className="reveal"
            style={{
              marginTop: 18,
              fontFamily: "'Geist Mono', monospace",
              fontSize: "12.5px",
              color: "var(--muted2)",
            }}
          >
            We cover the AI costs · No credit card · No trial
          </div>
        </div>
      </div>
    </section>
  );
}
