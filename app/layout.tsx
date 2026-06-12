import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://swarmlyagent.com"),
  title: "Swarmly: deploy AI agents to Telegram",
  description:
    "Deploy an AI agent to Telegram in under a minute. No keys, no servers. We cover the AI costs.",
  openGraph: {
    title: "Swarmly: deploy AI agents to Telegram",
    description:
      "Deploy your free agent to Telegram. No keys, no servers. We cover the AI costs.",
    url: "https://swarmlyagent.com",
    siteName: "Swarmly",
    type: "website",
    images: [{ url: "/swarmly-banner.png", width: 1500, height: 500, alt: "Swarmly" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swarmly: deploy AI agents to Telegram",
    description: "Deploy your free agent to Telegram.",
    images: ["/swarmly-banner.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  );
}
