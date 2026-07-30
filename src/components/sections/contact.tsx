"use client";

import { FormEvent, useState } from "react";
import {
  Calendar,
  Download,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons/social";
import { siteConfig } from "@/data/site";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    setSent(true);
    form.reset();
  };

  return (
    <section id="contact" className="relative section-pad">
      <div className="container-premium">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Contact
          </p>
          <h2 className="font-display max-w-2xl text-3xl font-bold md:text-5xl">
            Let&apos;s build something exceptional.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: siteConfig.email,
                  href: `mailto:${siteConfig.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: siteConfig.phone,
                  href: siteConfig.phoneHref,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: siteConfig.location,
                  href: "https://maps.google.com/?q=Nadiad,Gujarat",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel="noreferrer"
                  className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:border-accent/35"
                >
                  <span className="rounded-xl border border-white/10 bg-white/5 p-3 text-accent">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted">
                      {item.label}
                    </span>
                    <span className="text-sm text-foreground">{item.value}</span>
                  </span>
                </a>
              ))}

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild variant="secondary" size="sm">
                  <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                    <LinkedinIcon className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="secondary" size="sm">
                  <a href={siteConfig.github} target="_blank" rel="noreferrer">
                    <GithubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="secondary" size="sm">
                  <a href={siteConfig.calendly} target="_blank" rel="noreferrer">
                    <Calendar className="h-4 w-4" />
                    Calendly
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href={siteConfig.resumeUrl}>
                    <Download className="h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </div>

              <div className="glass mt-4 overflow-hidden rounded-2xl">
                <iframe
                  title="Nadiad location map"
                  src="https://maps.google.com/maps?q=Nadiad%2C%20Gujarat&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  className="h-52 w-full border-0 grayscale invert-[0.9] contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="glass rounded-3xl p-6 md:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-2 block text-muted">Name</span>
                  <input
                    name="name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-accent/50"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-2 block text-muted">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-accent/50"
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label className="mt-4 block text-sm">
                <span className="mb-2 block text-muted">Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-accent/50"
                  placeholder="Tell me about your project..."
                />
              </label>
              <Button type="submit" size="lg" className="mt-5 w-full sm:w-auto" disabled={loading}>
                {loading ? "Opening mail..." : sent ? "Message ready" : "Send Message"}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
