import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = { title: "Sign in · Swarmly" };

export default function SignInPage() {
  return (
    <>
      <Nav />
      <main className="wrap dwrap" style={{ minHeight: "58vh" }}>
        <div className="lab">
          <span className="rule" />
          <span>Accounts</span>
        </div>
        <h1 className="h2">Sign in is coming soon.</h1>
        <p className="sub">
          Accounts (saved bots, a dashboard, and usage analytics) arrive in the next
          release. For now, you can deploy an agent without an account.
        </p>
        <a className="btn btn-primary btn-lg" href="/deploy" style={{ marginTop: 26 }}>
          Deploy without an account <span className="arr">→</span>
        </a>
      </main>
      <Footer />
    </>
  );
}
