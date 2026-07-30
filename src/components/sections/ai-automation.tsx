"use client";

import { Brain, Cpu, Network, Workflow } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { MotionInView } from "@/components/effects/motion-in-view";
import { aiCapabilities } from "@/data/process";

const pillars = [
  {
    icon: Brain,
    title: "Intelligent Systems",
    text: "RAG pipelines, vector search, and grounded AI answers for real business data.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    text: "CRM, email, and WhatsApp automations that remove repetitive operational drag.",
  },
  {
    icon: Network,
    title: "Agent Orchestration",
    text: "Multi-step AI agents with tools, memory, and MCP-ready integrations.",
  },
  {
    icon: Cpu,
    title: "Model Flexibility",
    text: "OpenAI, Claude, LangChain, and custom tooling tailored to your stack.",
  },
];

export function AIAutomation() {
  return (
    <section id="ai" className="relative section-pad overflow-hidden">
      <div className="absolute inset-0">
        <div className="aurora opacity-50" />
        <div className="absolute inset-0 grid-overlay opacity-40" />
      </div>

      <div className="container-premium relative">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            AI Automation
          </p>
          <h2 className="font-display max-w-3xl text-3xl font-bold md:text-5xl">
            Futuristic automation that feels practical — and ships.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            From conversational interfaces to autonomous agents, I design AI systems
            that integrate cleanly into products and business workflows.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {pillars.map((item, i) => (
            <MotionInView
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass group rounded-2xl p-6 transition hover:border-accent/35"
            >
              <item.icon className="mb-4 h-6 w-6 text-accent" />
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </MotionInView>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-wrap gap-3">
            {aiCapabilities.map((cap, i) => (
              <MotionInView
                as="span"
                key={cap}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.04 }}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-muted transition hover:border-accent/40 hover:text-accent"
              >
                {cap}
              </MotionInView>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
