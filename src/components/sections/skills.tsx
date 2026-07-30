"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/effects/reveal";
import { MotionInView } from "@/components/effects/motion-in-view";
import { skillCategories, skills, type SkillCategory } from "@/data/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  const [active, setActive] = useState<SkillCategory>("Frontend");
  const filtered = useMemo(
    () => skills.filter((s) => s.category === active),
    [active]
  );

  return (
    <section id="skills" className="relative section-pad">
      <div className="absolute inset-0 aurora opacity-40" />
      <div className="container-premium relative">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Skills
          </p>
          <h2 className="font-display max-w-2xl text-3xl font-bold md:text-5xl">
            A toolkit built for modern product delivery.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-8 flex flex-wrap gap-2">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition",
                active === cat
                  ? "border-accent/50 bg-accent/15 text-accent"
                  : "border-white/10 text-muted hover:border-white/25 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((skill, i) => (
            <MotionInView
              key={skill.name}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="glass group rounded-2xl p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-medium text-foreground">{skill.name}</h3>
                <span className="text-xs text-accent">{skill.level}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
                <MotionInView
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.03 }}
                />
              </div>
            </MotionInView>
          ))}
        </div>
      </div>
    </section>
  );
}
