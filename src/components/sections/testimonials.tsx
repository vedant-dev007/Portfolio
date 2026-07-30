"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { testimonials } from "@/data/testimonials";
import { useHasMounted } from "@/hooks/use-has-mounted";

function TestimonialCard({
  item,
}: {
  item: (typeof testimonials)[number];
}) {
  return (
    <>
      <div className="mb-5 flex gap-1">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
        “{item.feedback}”
      </p>
      <div className="mt-8 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 font-display text-sm font-bold text-accent">
          {item.initials}
        </div>
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-muted">
            {item.role} · {item.company}
          </p>
        </div>
      </div>
    </>
  );
}

export function Testimonials() {
  const mounted = useHasMounted();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5200);
    return () => clearInterval(id);
  }, []);

  const item = testimonials[index];

  return (
    <section id="testimonials" className="relative section-pad">
      <div className="container-premium">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Testimonials
          </p>
          <h2 className="font-display max-w-2xl text-3xl font-bold md:text-5xl">
            Trusted by teams who care about craft.
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-12 max-w-3xl">
          {!mounted ? (
            <blockquote className="glass rounded-3xl p-8 md:p-10">
              <TestimonialCard item={item} />
            </blockquote>
          ) : (
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={item.name}
                initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                transition={{ duration: 0.45 }}
                className="glass rounded-3xl p-8 md:p-10"
              >
                <TestimonialCard item={item} />
              </motion.blockquote>
            </AnimatePresence>
          )}

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-accent" : "w-3 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() =>
                  setIndex(
                    (i) => (i - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="rounded-full border border-white/10 p-2 text-muted hover:border-accent/40 hover:text-accent"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                className="rounded-full border border-white/10 p-2 text-muted hover:border-accent/40 hover:text-accent"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
