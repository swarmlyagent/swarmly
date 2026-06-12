import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Nav() {
  return (
    <nav className="nav">
      <div className="nav-in">
        <Link className="logo" href="/">
          <Image
            src="/swarmly.png"
            alt="Swarmly"
            width={28}
            height={28}
            priority
            className="logo-img"
          />
          swarmly
        </Link>
        <div className="nav-links">
          <Link href="/#templates">Templates</Link>
          <Link href="/#how">How it works</Link>
          <Link href="/docs">Docs</Link>
        </div>
        <div className="nav-right">
          <Button variant="primary" size="sm" href="/deploy">
            Deploy <span className="arr">→</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
