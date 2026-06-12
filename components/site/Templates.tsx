import Link from "next/link";
import { TEMPLATES } from "@/lib/templates";

export function Templates() {
  return (
    <section id="templates">
      <div className="wrap sec">
        <div className="lab reveal">
          <span className="rule" />
          <span>Templates</span>
        </div>
        <h2 className="h2 reveal">
          Choose a base. <span className="dim">Customize everything.</span>
        </h2>
        <p className="sub reveal">
          Six starting points, each tuned for a job with its own personality. Or build
          your own from scratch.
        </p>
        <div className="tpls reveal">
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
      </div>
    </section>
  );
}
