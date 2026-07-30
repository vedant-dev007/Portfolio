import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons/social";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="relative section-pad pt-28 md:pt-36">
      <div className="absolute inset-0 aurora opacity-40" />
      <div className="container-premium relative">
        <Link
          href="/#work"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to work
        </Link>

        <div
          className={`relative mb-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br p-8 md:p-12 ${project.gradient}`}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-accent">
            {project.category} · {project.year}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-foreground/80">
            {project.subtitle}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <section>
              <h2 className="font-display text-2xl font-semibold">Overview</h2>
              <p className="mt-3 leading-relaxed text-muted">
                {project.longDescription}
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-semibold">Highlights</h2>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="glass rounded-xl px-4 py-3 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-4">
            <div className="glass rounded-2xl p-5">
              <p className="text-xs uppercase tracking-wider text-muted">Role</p>
              <p className="mt-1 font-medium">{project.role}</p>
            </div>
            <div className="glass rounded-2xl p-5">
              <p className="text-xs uppercase tracking-wider text-muted">Stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live preview
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="secondary">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <GithubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              )}
              <Button asChild variant="outline">
                <Link href="/#contact">Discuss a similar project</Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
