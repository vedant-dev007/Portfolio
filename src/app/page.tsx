import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/testimonials";
import { Process } from "@/components/sections/process";
import { AIAutomation } from "@/components/sections/ai-automation";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <AIAutomation />
      <Contact />
    </>
  );
}
