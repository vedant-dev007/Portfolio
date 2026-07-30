"use client";

import {
  Bot,
  Cloud,
  Globe,
  Layers,
  LayoutDashboard,
  MessageSquare,
  Palette,
  Plug,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { MotionInView } from "@/components/effects/motion-in-view";
import { services } from "@/data/services";

const icons: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Palette,
  Server,
  Bot,
  MessageSquare,
  Sparkles,
  Layers,
  LayoutDashboard,
  Rocket,
  Plug,
  Cloud,
};

export function Services() {
  return (
    <section id="services" className="relative section-pad">
      <div className="container-premium">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Services
          </p>
          <h2 className="font-display max-w-2xl text-3xl font-bold md:text-5xl">
            End-to-end capabilities for ambitious builds.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Sparkles;
            return (
              <MotionInView
                as="article"
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-accent/35"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-accent-2/0 opacity-0 transition duration-500 group-hover:from-accent/10 group-hover:to-accent-2/10 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-accent transition group-hover:border-accent/40 group-hover:shadow-[0_0_24px_rgba(45,212,191,0.25)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </MotionInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
