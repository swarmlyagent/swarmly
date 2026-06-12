import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = { title: "Terms · Swarmly" };

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="wrap dwrap dwrap-narrow">
        <div className="lab">
          <span className="rule" />
          <span>Legal</span>
        </div>
        <h1 className="h2">Terms of Service</h1>
        <div className="prose">
          <p className="upd">Last updated 12 June 2026</p>

          <p>
            These terms cover your use of Swarmly. By deploying an agent, you agree to
            them.
          </p>

          <h2>The service</h2>
          <p>
            Swarmly deploys and manages AI agents on Telegram. We run the infrastructure
            and cover the AI provider costs, so the service is free to use.
          </p>

          <h2>Your responsibilities</h2>
          <ul>
            <li>
              You own the Telegram bot you connect and are responsible for how it is
              used.
            </li>
            <li>
              You agree to follow Telegram terms and all applicable laws, and not to use
              an agent for spam, abuse, or anything illegal.
            </li>
            <li>Keep your bot token secure and do not share access you do not own.</li>
          </ul>

          <h2>Availability</h2>
          <p>
            The service is provided as is, without warranty. We may change, limit, or
            discontinue features to keep the platform sustainable and safe.
          </p>

          <h2>Termination</h2>
          <p>
            We may suspend or remove a bot that violates these terms. You can request
            deletion of your bot and its data at any time by email.
          </p>

          <h2>Liability</h2>
          <p>
            To the extent permitted by law, Swarmly is not liable for indirect or
            incidental damages arising from use of the service.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href="mailto:hello@swarmlyagent.com">hello@swarmlyagent.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
