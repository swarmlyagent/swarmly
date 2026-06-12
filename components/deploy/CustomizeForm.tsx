"use client";

import { useState } from "react";
import type { Template } from "@/lib/templates";

type ValidState = { username: string } | null;
type DeployResult =
  | { ok: true; url: string }
  | { ok: false; error: string }
  | null;

export function CustomizeForm({ template }: { template: Template }) {
  const [name, setName] = useState("");
  const [personality, setPersonality] = useState(template.personality);
  const [token, setToken] = useState("");
  const [validating, setValidating] = useState(false);
  const [valid, setValid] = useState<ValidState>(null);
  const [validError, setValidError] = useState<string | null>(null);
  const [deploying, setDeploying] = useState(false);
  const [result, setResult] = useState<DeployResult>(null);

  async function validate() {
    setValidating(true);
    setValid(null);
    setValidError(null);
    try {
      const res = await fetch("/api/telegram/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      if (data.ok) setValid({ username: data.bot.username });
      else setValidError(data.error || "Invalid token");
    } catch {
      setValidError("Could not reach Telegram");
    } finally {
      setValidating(false);
    }
  }

  async function deploy(e: React.FormEvent) {
    e.preventDefault();
    setDeploying(true);
    setResult(null);
    try {
      const res = await fetch("/api/deploy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          templateSlug: template.slug,
          name,
          personality,
          skills: template.tags,
          token,
        }),
      });
      const data = await res.json();
      setResult(
        data.ok
          ? { ok: true, url: data.bot.url }
          : { ok: false, error: data.error },
      );
    } catch {
      setResult({ ok: false, error: "Could not reach our servers" });
    } finally {
      setDeploying(false);
    }
  }

  return (
    <form className="dform" onSubmit={deploy}>
      <label className="field">
        <span className="flabel">Bot name</span>
        <input
          className="finput"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. AlphaWatcher"
          maxLength={80}
          required
        />
      </label>

      <label className="field">
        <span className="flabel">Personality</span>
        <textarea
          className="finput ftext"
          value={personality}
          onChange={(e) => setPersonality(e.target.value)}
          rows={5}
          placeholder="How should your agent behave?"
          required
        />
      </label>

      <div className="field">
        <span className="flabel">
          Focus <span className="fhint">tuned by the template</span>
        </span>
        <div className="tags">
          {template.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <label className="field">
        <span className="flabel">
          Telegram bot token <span className="fhint">from @BotFather</span>
        </span>
        <div className="trow">
          <input
            className="finput"
            value={token}
            onChange={(e) => {
              setToken(e.target.value);
              setValid(null);
              setValidError(null);
            }}
            placeholder="1234567890:AA..."
            type="password"
            required
          />
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={validate}
            disabled={validating || !token}
          >
            {validating ? "Checking…" : "Validate"}
          </button>
        </div>
        {valid && <div className="fok">✓ valid · @{valid.username}</div>}
        {validError && <div className="ferr">✗ {validError}</div>}
      </label>

      <button
        type="submit"
        className="btn btn-primary btn-lg"
        disabled={deploying || !name || !token}
      >
        {deploying ? "Deploying…" : "Deploy your agent"} <span className="arr">→</span>
      </button>

      {result && result.ok && (
        <div className="dresult ok">
          {"Your agent is live. "}
          <a href={result.url} target="_blank" rel="noreferrer">
            {result.url}
          </a>
        </div>
      )}
      {result && !result.ok && <div className="dresult err">{result.error}</div>}
    </form>
  );
}
