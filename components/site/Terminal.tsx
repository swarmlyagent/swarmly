import type { ReactNode } from "react";

/** Reusable terminal-style box, matching the hero / how-it-works aesthetic.
 *  Compose lines inside with these classes:
 *    .p   green prompt symbol      .ok  green (success / output)
 *    .dim muted (replies / notes)  .o   foreground (commands / text)
 */
export function Terminal({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="term term-doc">
      <div className="term-bar">
        <span className="d" style={{ background: "#ff5f56" }} />
        <span className="d" style={{ background: "#ffbd2e" }} />
        <span className="d" style={{ background: "#27c93f" }} />
        <span className="t">{title}</span>
      </div>
      <div className="term-b">{children}</div>
    </div>
  );
}
