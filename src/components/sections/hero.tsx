"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowDownRight, Mail } from "lucide-react";
import { siteConfig, typingPhrases } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/effects/particles";
import { GithubIcon, LinkedinIcon } from "@/components/icons/social";
import { useHasMounted } from "@/hooks/use-has-mounted";

const HeroScene = dynamic(
  () =>
    import("@/components/three/hero-scene").then((m) => m.HeroScene),
  { ssr: false, loading: () => null }
);

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typingPhrases[index % typingPhrases.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            setTimeout(() => setDeleting(true), 1400);
          }
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (!next) {
            setDeleting(false);
            setIndex((i) => i + 1);
          }
        }
      },
      deleting ? 28 : 55
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span className="inline-flex min-h-[1.2em] items-center text-accent">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-accent" />
    </span>
  );
}

const heroItem = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const mounted = useHasMounted();
  const reduce = useReducedMotion();
  const animate = mounted && !reduce;
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden noise"
      onMouseMove={(e) => {
        const { innerWidth, innerHeight } = window;
        mx.set((e.clientX / innerWidth - 0.5) * 24);
        my.set((e.clientY / innerHeight - 0.5) * 18);
      }}
    >
      <div className="aurora" />
      <div className="absolute inset-0 grid-overlay opacity-60" />
      <Particles className="absolute inset-0 z-[1]" count={42} />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] hidden w-[55%] lg:block">
        <HeroScene />
      </div>

      {mounted && (
        <>
          <motion.div
            style={{ x: sx, y: sy }}
            className="pointer-events-none absolute left-[12%] top-[28%] z-[1] hidden h-40 w-40 rounded-full bg-accent/20 blur-3xl md:block"
          />
          <motion.div
            style={{ x: sx, y: sy }}
            className="pointer-events-none absolute bottom-[18%] right-[18%] z-[1] hidden h-52 w-52 rounded-full bg-accent-2/15 blur-3xl md:block"
          />
        </>
      )}

      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="container-premium w-full px-5 pb-24 pt-28 md:px-8 md:pt-32">
          <motion.div
            key={animate ? "animated" : "static"}
            className="max-w-2xl"
            initial={animate ? "hidden" : false}
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.08, delayChildren: 0.05 },
              },
            }}
          >
            <motion.p
              variants={heroItem}
              transition={{ duration: 0.7 }}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-accent"
            >
              Available for freelance
            </motion.p>

            <motion.h1
              variants={heroItem}
              transition={{ duration: 0.8 }}
              className="font-display text-[clamp(2.75rem,8vw,5.75rem)] font-bold leading-[0.95] tracking-tight"
            >
              {siteConfig.name}
            </motion.h1>

            <motion.p
              variants={heroItem}
              transition={{ duration: 0.8 }}
              className="mt-5 max-w-xl text-lg text-muted md:text-xl"
            >
              {siteConfig.title}
            </motion.p>

            <motion.div
              variants={heroItem}
              transition={{ duration: 0.8 }}
              className="mt-4 font-display text-xl font-semibold md:text-2xl"
            >
              <Typewriter />
            </motion.div>

            <motion.p
              variants={heroItem}
              transition={{ duration: 0.8 }}
              className="mt-5 max-w-lg text-sm leading-relaxed text-muted md:text-base"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div
              variants={heroItem}
              transition={{ duration: 0.8 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg">
                <a href="#contact">
                  Hire Me
                  <ArrowDownRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="#work">View Projects</a>
              </Button>
            </motion.div>

            <motion.div
              variants={heroItem}
              transition={{ duration: 0.6 }}
              className="mt-10 flex items-center gap-4"
            >
              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-full border border-white/10 p-2.5 text-muted transition hover:border-accent/40 hover:text-accent"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-2.5 text-muted transition hover:border-accent/40 hover:text-accent"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-2.5 text-muted transition hover:border-accent/40 hover:text-accent"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <span className="ml-2 text-xs text-muted">{siteConfig.location}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted">
          Scroll
          <span className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
        </div>
      </div>
    </section>
  );
}
