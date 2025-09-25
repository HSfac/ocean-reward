import Hero from "@/components/Hero"
import Problem from "@/components/Problem"
import Solution from "@/components/Solution"
import Features from "@/components/Features"
import TokenEconomy from "@/components/TokenEconomy"
import Roadmap from "@/components/Roadmap"
import Partners from "@/components/Partners"
import Stats from "@/components/Stats"
import CTA from "@/components/CTA"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <TokenEconomy />
      <Roadmap />
      <Partners />
      <Stats />
      <CTA />
    </main>
  );
}
