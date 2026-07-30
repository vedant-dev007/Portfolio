"use client";

const items = [
  "Web Development",
  "Mobile Apps",
  "AI Agents",
  "UI/UX Design",
  "SaaS Products",
  "Cloud Deploy",
  "API Engineering",
  "Automation",
  "Flutter",
  "React Native",
  "Next.js",
  "Firebase",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <section className="relative border-y border-white/8 py-6 overflow-hidden" aria-hidden>
      <div className="marquee-track gap-8 px-4">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-8 whitespace-nowrap font-display text-2xl font-semibold text-foreground/25 md:text-4xl"
          >
            {item}
            <span className="text-accent/50">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
