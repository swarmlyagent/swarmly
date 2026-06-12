import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = { title: "Privacy · Swarmly" };

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="wrap dwrap dwrap-narrow">
        <div className="lab">
          <span className="rule" />
          <span>Legal</span>
        </div>
        <h1 className="h2">Privacy</h1>
        <div className="prose">
          <p className="upd">Last updated 12 June 2026</p>

          <p>
            Swarmly lets you deploy and run AI agents on Telegram. This page explains
            what we collect, why, and how we keep it safe. We keep it short and plain.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>
              Your Telegram bot token, which you paste from @BotFather. It is encrypted
              before it is stored and is never shown again.
            </li>
            <li>Your agent configuration: its name and personality prompt.</li>
            <li>
              The messages your bot receives and the replies it generates, so it can
              follow the recent conversation.
            </li>
            <li>Basic, anonymous usage data to keep the service running.</li>
          </ul>

          <h2>How we use it</h2>
          <p>
            We use this data only to run your agent: to receive Telegram messages, route
            them to an AI provider for a response, and keep the recent conversation
            context. To generate replies, message content is sent to a third-party AI
            provider. We do not sell your data or use it for advertising.
          </p>

          <h2>Storage and security</h2>
          <p>
            Bot tokens are encrypted at rest with AES-256-GCM. Each bot is isolated, so
            one bot can never read another bot's data.
          </p>

          <h2>Your choices</h2>
          <p>
            To delete a bot and all of its stored data, email{" "}
            <a href="mailto:hello@swarmlyagent.com">hello@swarmlyagent.com</a> and we
            will remove it. Self-serve deletion arrives with accounts.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
