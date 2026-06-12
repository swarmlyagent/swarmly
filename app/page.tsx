import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Capabilities } from "@/components/site/Capabilities";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Templates } from "@/components/site/Templates";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { RevealObserver } from "@/components/visuals/RevealObserver";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Capabilities />
      <HowItWorks />
      <Templates />
      <Faq />
      <FinalCta />
      <Footer />
      <RevealObserver />
    </>
  );
}
