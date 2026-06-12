<div align="center">

# Swarmly

**Deploy your own AI agent to Telegram in under a minute.**

_Free. No API keys. No servers. No code._

`no credit card` · `tokens encrypted at rest` · `isolated per-agent runtime`

[**→ Launch Swarmly at swarmlyagent.com**](https://swarmlyagent.com)

</div>

---

```
        ┌──────────────────────────────────────────────┐
        │                                              │
        │   swarmly deploy                             │
        │                                              │
        │   > template ....... researcher              │
        │   > name ........... my-agent                │
        │   > personality .... set                     │
        │   > token .......... ••••••••••••  (encrypted)│
        │                                              │
        │   deploying ........ ████████████  live ✓    │
        │                                              │
        │   your agent is now answering on telegram.   │
        │                                              │
        └──────────────────────────────────────────────┘
```

---

## Table of contents

- [The problem](#the-problem)
- [What is Swarmly?](#what-is-swarmly)
- [Quickstart](#quickstart)
- [Templates](#templates)
- [Memory](#memory)
- [Security & isolation](#security--isolation)
- [Is it really free?](#is-it-really-free)
- [FAQ](#faq)
- [Roadmap](#roadmap)
- [Get started](#get-started)

---

## The problem

Standing up an AI agent on Telegram sounds simple. It usually isn't.

To do it yourself, you typically have to:

- Sign up with an AI provider and put a credit card on file.
- Generate and babysit API keys, then worry about where they're stored.
- Rent a server (or wire up a serverless stack) to keep the bot running around the clock.
- Glue the Telegram side to the model, handle the connection, and keep conversation context straight.
- Maintain all of it — the hosting, the secrets, the uptime — indefinitely.

That's a real project before you've even decided what your agent should *say*. Most people give up somewhere between "create an account" and "why is my bill not zero."

---

## What is Swarmly?

Swarmly is the fastest way to put your own AI agent on Telegram. You describe the agent you want, paste a bot token, and click **Deploy**. Moments later, a real, always-on AI agent is answering messages in your Telegram chats — with the personality you gave it.

You bring two things: a Telegram bot token and an idea for how your agent should behave. Swarmly provides everything else — the AI model **and** all of the hosting and infrastructure behind it. There's nothing to install, nothing to provision, no deployment pipeline to maintain, and no key management to get wrong.

And it's genuinely free — no credit card, no trial clock, no surprise bill later. We cover the underlying AI provider costs.

### Why people use it

- **It's fast.** A working agent on Telegram in under a minute, start to finish.
- **It's free, for real.** No card, no trial that expires, no charges later.
- **No infrastructure.** No servers to provision, nothing to configure, no deployment pipeline to babysit. Swarmly runs it all.
- **You shape the personality.** Plain-language instructions decide how your agent thinks, talks, and behaves.
- **It's yours and isolated.** Your agent runs on its own, with its own personality and its own conversations — never crossing into anyone else's.
- **It's safe by design.** Each agent is sandboxed down to safe, conversational use only (more in [Security & isolation](#security--isolation)).

---

## Quickstart

Three steps, start to finish. Everything happens in your browser at [swarmlyagent.com](https://swarmlyagent.com) — the only thing you bring is a free Telegram bot token.

### 1. Get a bot token from Telegram

Open Telegram and message [**@BotFather**](https://t.me/BotFather):

1. Send `/newbot`.
2. Follow the prompts to pick a name and username for your bot.
3. BotFather replies with a **token** — a long string like `123456789:ABCdef...`. Copy it.

That token is the only credential you need, and Swarmly is the only place you'll paste it.

### 2. Choose a template, name it, and write a personality

On [swarmlyagent.com](https://swarmlyagent.com):

- **Choose a template** — a starting point that sets your agent's focus and gives it an initial personality (see the [menu below](#templates)).
- **Name your agent** so you recognize it later.
- **Write a personality** — free text that shapes how your agent talks, what it focuses on, and the rules it follows. The template gives you a sensible starting personality; you can keep it, tweak it, or rewrite it entirely.

This is the part that makes the agent *yours*. The personality is plain English — describe the tone, the expertise, the do's and don'ts, and the agent follows it. Want a blunt market analyst? A patient coding mentor? A warm community helper? Just describe it.

### 3. Paste the token and deploy

Drop in the token from step 1 and click **Deploy**. Your agent goes live on Telegram, usually in well under a minute. Open the chat and say hi.

```
BotFather token  ──►  pick template + write personality  ──►  Deploy  ──►  ● live on Telegram
```

That's the whole process. No build step, no config files, no waiting on a deploy queue. No servers were provisioned, no keys were exposed, and no credit card was asked for.

---

## Templates

Templates are starting points. Each one sets a focus and ships with an initial personality you can keep, tweak, or completely rewrite.

| Template | What it's tuned for |
| --- | --- |
| **Researcher** | Investigates topics, summarizes findings, and cites its sources. |
| **Trader** | Market and crypto analysis framing — data-driven, and explicitly *not* financial advice. |
| **Coder** | Writes and explains code; technical help and walkthroughs. |
| **Community** | A warm, helpful tone for community management and member questions. |
| **Writer** | Drafts content — threads, posts, and more — in your voice. |
| **Custom** | A blank slate. Bring your own personality and rules. |

> A template decides where your agent *starts*. The personality you write decides where it ends up — you can take any template in a completely different direction. Templates shape **tone and focus**, not a fixed toolset.

---

## Memory

Your agent follows the recent flow of a conversation, so replies stay on-topic and in context instead of starting from scratch on every message. That context is kept and managed for you — there's nothing to configure — and it's isolated per agent, so one agent's conversation never bleeds into another's.

---

## Security & isolation

Security isn't a feature bolted on the side here; it's how each agent is built and run.

- **Every agent is fully isolated.** Each one runs as its own always-on process. One agent never sees another agent's chats — there's a hard wall between them. Your conversations stay yours.
- **Your token is encrypted at rest.** The Telegram bot token you paste is encrypted with **AES-256-GCM** and is never exposed back to anyone, including in the interface.
- **Agents are sandboxed by design.** An agent **cannot** run shell commands, execute arbitrary code, or touch a filesystem. Privileged and admin-style commands are locked off. Each agent is limited to safe, conversational use — and nothing more.

The short version: your credentials are protected, your agents are walled off from each other, and there's no surface for an agent to do something it shouldn't.

---

## Is it really free?

Yes. Here's the honest version.

- **No credit card.** You're never asked for payment details to deploy.
- **No trial clock.** It isn't free for a few days and then billed. There's no countdown.
- **No surprise charges later.** We're not warehousing your card to charge it down the line.

Swarmly covers the AI provider costs behind your agents. You bring a Telegram token and an idea; we handle the model and the infrastructure that runs it.

---

## FAQ

**Is it really free?**
Yes. No credit card, no trial that runs out, no charge later. Swarmly covers the underlying AI provider costs.

**Do I need to know how to code?**
No. You write your agent's personality in plain language. There's no code to write, and nothing to install or run.

**Do I need my own server or API key?**
No to both. Swarmly provides the AI model and all the hosting. The only credential you supply is a free Telegram bot token from [@BotFather](https://t.me/BotFather).

**Do I have to host or maintain anything?**
No. There are no servers to provision and no deployment pipeline to keep alive. You describe the agent; Swarmly hosts and runs it.

**What happens to my bot token?**
It's encrypted at rest with AES-256-GCM and never exposed. It's used solely to run your agent on Telegram.

**Can my agent run code, browse my files, or execute commands?**
No. Agents are sandboxed and limited to conversation. They cannot run shell commands, execute arbitrary code, or access a filesystem, and privileged commands are locked off.

**Does my agent remember the conversation?**
It follows the recent flow of each conversation, kept and managed for you and isolated per agent.

**How long does deployment take?**
Usually well under a minute from clicking **Deploy** to a live agent on Telegram.

**Can I edit my agent after deploying it?**
In-place editing of a deployed agent — along with a dashboard to manage all your agents — is **coming** with user accounts. For now, the personality is set when you deploy, and deployment is a fast, self-contained step.

**What can I build with it?**
A research assistant, a market-analysis sidekick, a coding helper, a community manager, a ghostwriter in your voice, or something entirely your own. Start from a template or go fully custom.

---

## Roadmap

A few things we're actively working toward:

- **User accounts** — a home for everything you deploy.
- **In-place editing** — update a live agent's personality after it's deployed.
- **An agent dashboard** — manage all your agents from one place.

These are coming, not here yet. Everything else described in this README works today.

---

## Get started

You're about a minute away from a live agent.

1. Grab a token from [@BotFather](https://t.me/BotFather).
2. Head to [**swarmlyagent.com**](https://swarmlyagent.com).
3. Pick a template, write a personality, paste your token, and deploy.

<div align="center">

**[→ Deploy your agent at swarmlyagent.com](https://swarmlyagent.com)**

_Free. Under a minute. No API keys, no servers, no code._

</div>
