"use client";

import { ArrowUp, Mail, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "@/components/icons/social";

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-[#02040a]">
      <div className="container-premium section-pad !py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <a href="#home" className="font-display text-2xl font-bold">
              <span className="text-gradient">{siteConfig.name}</span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Full-stack freelancer crafting premium web, mobile, and AI
              automation products from Nadiad, Gujarat.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Navigate
            </p>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted transition hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Connect
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 hover:text-accent"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <div className="flex gap-3 pt-1">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-full border border-white/10 p-2 hover:border-accent/40 hover:text-accent"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full border border-white/10 p-2 hover:border-accent/40 hover:text-accent"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-muted transition hover:border-accent/40 hover:text-accent"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
