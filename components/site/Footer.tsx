import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <div className="logo">
              <Image src="/swarmly.png" alt="Swarmly" width={24} height={24} className="logo-img" /> swarmly
            </div>
            <div className="blurb">
              Deploy and run AI agents on Telegram. We manage the AI infrastructure; you
              bring the token.
            </div>
          </div>
          <div className="fcol">
            <h6>Product</h6>
            <Link href="/#templates">Templates</Link>
            <Link href="/#how">How it works</Link>
            <Link href="/docs">Docs</Link>
          </div>
          <div className="fcol">
            <h6>Company</h6>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
          <div className="fcol">
            <h6>Connect</h6>
            <a href="https://x.com/swarmlyagent" target="_blank" rel="noreferrer">
              Twitter / X
            </a>
            <a href="https://github.com/swarmlyagent" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2026 Swarmly · free forever</span>
          <span>swarmlyagent.com</span>
        </div>
      </div>
    </footer>
  );
}
