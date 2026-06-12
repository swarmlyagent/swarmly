"use client";

import { useState } from "react";

const QA: [string, string][] = [
  [
    "Is it genuinely free?",
    "Yes. We cover the AI provider costs in full. There is no credit card, no trial period, and no charges later.",
  ],
  [
    "Do I need to write any code?",
    "No. If you can copy a token from @BotFather and click Deploy, you have everything you need.",
  ],
  [
    "Where does my bot run?",
    "Entirely on our infrastructure. There are no servers to manage, keys to rotate, or services to host.",
  ],
  [
    "Can I edit my agent after deploying?",
    "You set the personality when you deploy, and it shapes everything the agent says. In-place editing and a dashboard to manage your agents are coming with accounts.",
  ],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq">
      <div className="wrap sec">
        <div className="lab reveal">
          <span className="rule" />
          <span>FAQ</span>
        </div>
        <h2 className="h2 reveal">Questions, answered.</h2>
        <div className="faq reveal">
          {QA.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div className={isOpen ? "qa open" : "qa"} key={q}>
                <button
                  type="button"
                  className="q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{q}</span>
                  <span className="pl">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <div className="a">{a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
