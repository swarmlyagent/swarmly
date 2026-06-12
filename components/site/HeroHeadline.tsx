import { Fragment } from "react";

const LINES: { text: string; it?: boolean }[] = [
  { text: "Deploy your" },
  { text: "free agent" },
  { text: "to Telegram.", it: true },
];

/** Headline with a per-word "word-in" reveal (blur + rise, kerning preserved).
 *  Delays accumulate across all lines, matching the prototype. */
export function HeroHeadline() {
  let delay = 0;
  return (
    <h1 className="hero-h">
      {LINES.map((line, li) => {
        const parts = line.text.split(/(\s+)/).filter((p) => p !== "");
        return (
          <Fragment key={li}>
            <span className={line.it ? "ci it" : "ci"}>
              {parts.map((part, i) => {
                if (/^\s+$/.test(part)) return <Fragment key={i}> </Fragment>;
                delay += 0.09;
                return (
                  <span
                    key={i}
                    className="w"
                    style={{ animationDelay: `${delay.toFixed(2)}s` }}
                  >
                    {part}
                  </span>
                );
              })}
            </span>
            {li < LINES.length - 1 ? <br /> : null}
          </Fragment>
        );
      })}
    </h1>
  );
}
