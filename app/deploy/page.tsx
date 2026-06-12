import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { TEMPLATES } from "@/lib/templates";

export const metadata: Metadata = {
  title: "Deploy an agent · Swarmly",
};

export default function DeployPage() {
  return (
    <>
      <Nav />
      <main className="wrap dwrap">
        <div className="lab">
          <span className="rule" />
          <span>Step 1 of 2 · choose a template</span>
        </div>
        <h1 className="h2">Pick a base for your agent.</h1>
        <p className="sub">
          Each template comes with a focus and a starting personality. You can
          customize everything in the next step.
        </p>
        <div className="tpls" style={{ marginTop: 36 }}>
          {TEMPLATES.map((t) => (
            <Link className="tpl tpl-link" href={`/deploy/${t.slug}`} key={t.slug}>
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
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
