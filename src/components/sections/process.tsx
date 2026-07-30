"use client";

import { Reveal } from "@/components/effects/reveal";
import { processSteps } from "@/data/process";
import { useGsapFadeUp } from "@/hooks/use-gsap-fade-up";

export function Process() {
  const timelineRef = useGsapFadeUp<HTMLDivElement>();

  return (
    <section id="process" className="relative section-pad overflow-hidden">
      <div className="container-premium">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Work Process
          </p>
          <h2 className="font-display max-w-2xl text-3xl font-bold md:text-5xl">
            A cinematic path from idea to launch.
          </h2>
        </Reveal>

        <div className="relative mt-14" ref={timelineRef}>
          <div className="absolute left-[1.15rem] top-0 hidden h-full w-px bg-gradient-to-b from-accent/60 via-accent-2/30 to-transparent md:block" />
          <div className="space-y-6 md:space-y-8">
            {processSteps.map((step) => (
              <div
                key={step.title}
                data-gsap-item
                className="relative grid gap-4 md:grid-cols-[5.5rem_1fr] md:items-start"
              >
                <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-[#030508] text-xs font-bold text-accent shadow-[0_0_18px_rgba(45,212,191,0.35)] md:ml-2">
                  {step.step}
                </div>
                <div className="glass rounded-2xl p-5 md:p-6">
                  <h3 className="font-display text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
