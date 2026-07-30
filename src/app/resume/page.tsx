import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { PrintResumeButton } from "@/components/ui/print-resume-button";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${siteConfig.name}`,
};

export default function ResumePage() {
  return (
    <div className="section-pad pt-28 md:pt-32">
      <div className="container-premium max-w-3xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
          <h1 className="font-display text-3xl font-bold">Resume</h1>
          <PrintResumeButton />
        </div>

        <article className="glass rounded-3xl p-8 md:p-10">
          <h2 className="font-display text-3xl font-bold">{siteConfig.name}</h2>
          <p className="mt-2 text-muted">{siteConfig.title}</p>
          <p className="mt-3 text-sm text-muted">
            {siteConfig.location} · {siteConfig.phone} · {siteConfig.email}
          </p>

          <section className="mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Summary
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Computer Engineering graduate with hands-on experience in Flutter,
              React Native, Firebase, and Android development. Built cross-platform
              apps with image recognition, role-based authentication, and dynamic
              dashboards. Skilled in C++, Dart, UI/UX design, and AI-powered
              applications.
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Experience
            </h3>
            <div className="mt-4 space-y-5 text-sm">
              <div>
                <p className="font-medium text-foreground">
                  Full Stack Developer Intern · Seaneb Technologies
                </p>
                <p className="text-xs text-muted">
                  Dec 2025 – June 2026 · Anand, Gujarat
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
                  <li>
                    Built a cross-platform APMC-style marketplace with Flutter for
                    web and Android.
                  </li>
                  <li>
                    Implemented splash flows, RBAC auth, and admin tools for
                    orders, products, sales, and shops.
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Flutter Developer Intern · Alembic CSR Foundation
                </p>
                <p className="text-xs text-muted">
                  May 2025 – Nov 2025 · Vadodara, Gujarat
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
                  <li>
                    Developed agriculture assistance platform with Firebase RBAC
                    and admin commerce tooling.
                  </li>
                  <li>
                    Built farmer information system with ration card-based
                    retrieval.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Selected Projects
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {projects.slice(0, 4).map((p) => (
                <li key={p.slug}>
                  <span className="font-medium text-foreground">{p.title}</span> —{" "}
                  {p.description}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Education
            </h3>
            <div className="mt-4 space-y-3 text-sm text-muted">
              <p>
                <span className="text-foreground">B.Tech CSE</span> — CHARUSAT
                (CSPIT) · CGPA 7.79 · 2026
              </p>
              <p>
                <span className="text-foreground">Diploma Computer Engineering</span>{" "}
                — GTU (Ipcowala Institute) · CGPA 9.27 · 2023
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
