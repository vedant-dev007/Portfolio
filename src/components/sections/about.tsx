"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Reveal } from "@/components/effects/reveal";
import { MotionInView } from "@/components/effects/motion-in-view";
import { certifications, timeline } from "@/data/process";
import { siteConfig } from "@/data/site";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 70, damping: 20 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { label: "Years Experience", value: siteConfig.yearsExperience, suffix: "+" },
  { label: "Projects Shipped", value: siteConfig.projectsDelivered, suffix: "+" },
  { label: "Happy Clients", value: siteConfig.clientsServed, suffix: "+" },
  { label: "Technologies", value: siteConfig.technologies, suffix: "+" },
];

export function About() {
  return (
    <section id="about" className="relative section-pad">
      <div className="container-premium">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            About Me
          </p>
          <h2 className="font-display max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            Engineering digital products with clarity, craft, and curiosity.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal delay={0.08}>
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                I&apos;m <span className="text-foreground">{siteConfig.name}</span>, a
                Computer Engineering graduate and full-stack freelancer based in{" "}
                {siteConfig.location}. I specialize in Flutter, React Native,
                Firebase, and modern web stacks — with a growing focus on AI-powered
                applications and automation.
              </p>
              <p>
                From Bluetooth healthcare companions to agriculture platforms and
                image-recognition chatbots, I build products that feel intentional:
                secure auth, clean interfaces, and systems that hold up in the real
                world.
              </p>
              <p>
                My philosophy is simple — understand the problem deeply, design with
                empathy, ship with discipline, and keep iterating until the experience
                feels premium.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-5 transition duration-300 hover:border-accent/30"
                >
                  <p className="font-display text-3xl font-bold text-foreground md:text-4xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <h3 className="mb-6 font-display text-xl font-semibold">Journey</h3>
            <div className="relative space-y-6 border-l border-white/10 pl-6">
              {timeline.map((item, i) => (
                <MotionInView
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative"
                >
                  <span className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_rgba(45,212,191,0.7)]" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {item.year}
                  </p>
                  <p className="mt-1 font-medium text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                </MotionInView>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="mb-6 font-display text-xl font-semibold">
              Achievements & Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="glass rounded-2xl px-5 py-4 text-sm text-muted transition hover:border-accent/30 hover:text-foreground"
                >
                  {cert}
                </div>
              ))}
              <div className="glass rounded-2xl px-5 py-4 text-sm text-muted">
                Cross-platform apps with image recognition, RBAC, and dynamic
                dashboards across Flutter, React Native, and Firebase.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
