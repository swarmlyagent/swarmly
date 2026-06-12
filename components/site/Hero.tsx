import { Button } from "@/components/ui/Button";
import { HeroHeadline } from "@/components/site/HeroHeadline";
import { GlobeCanvas } from "@/components/visuals/GlobeCanvas";
import { WorldMapCanvas } from "@/components/visuals/WorldMapCanvas";

export function Hero() {
  return (
    <header className="hero">
      <WorldMapCanvas />
      <div className="hero-glow" />
      <GlobeCanvas />
      <div className="wrap hero-in">
        <div className="kick">
          <span className="rule" />
          <span>Managed AI agents for Telegram</span>
        </div>
        <HeroHeadline />
        <p className="lead">
          No keys, no servers, no setup. Paste the token from @BotFather, choose a
          template, write its personality, and your agent goes live, isolated and
          always on, with conversation memory behind it. We cover the
          infrastructure and model costs.
        </p>
        <div className="hero-cta">
          <Button variant="primary" size="lg" href="/deploy">
            Deploy your agent <span className="arr">→</span>
          </Button>
          <Button variant="ghost" size="lg" href="/#templates">
            Browse templates
          </Button>
        </div>
        <div className="hero-note">
          <b>free forever</b> · live in under a minute
        </div>
      </div>
    </header>
  );
}
