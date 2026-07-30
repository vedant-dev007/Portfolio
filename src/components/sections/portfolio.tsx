"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/effects/reveal";
import { GithubIcon } from "@/components/icons/social";
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { cn } from "@/lib/utils";
import { useHasMounted } from "@/hooks/use-has-mounted";

function ProjectCardBody({ project }: { project: Project }) {
  return (
    <>
      <div
        className={cn(
          "relative h-52 bg-gradient-to-br p-6 md:h-60",
          project.gradient
        )}
      >
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.18)_1px,transparent_0)] [background-size:22px_22px]" />
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-foreground/80 backdrop-blur">
              {project.category}
            </span>
            <span className="text-xs text-muted">{project.year}</span>
          </div>
          <p className="font-display text-3xl font-bold text-white/90">
            {project.title}
          </p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm text-accent">{project.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition hover:text-accent"
          >
            Case study
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Code
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export function Portfolio() {
  const mounted = useHasMounted();
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="work" className="relative section-pad">
      <div className="container-premium">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Portfolio
          </p>
          <h2 className="font-display max-w-2xl text-3xl font-bold md:text-5xl">
            Selected work that ships real outcomes.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-8 flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition",
                filter === cat
                  ? "border-accent/50 bg-accent/15 text-accent"
                  : "border-white/10 text-muted hover:border-white/25 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {!mounted
            ? filtered.map((project) => (
                <article
                  key={project.slug}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#080c14]"
                >
                  <ProjectCardBody project={project} />
                </article>
              ))
            : (
                <AnimatePresence mode="popLayout">
                  {filtered.map((project, i) => (
                    <motion.article
                      key={project.slug}
                      layout
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ delay: i * 0.05, duration: 0.45 }}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#080c14]"
                    >
                      <ProjectCardBody project={project} />
                    </motion.article>
                  ))}
                </AnimatePresence>
              )}
        </div>
      </div>
    </section>
  );
}
