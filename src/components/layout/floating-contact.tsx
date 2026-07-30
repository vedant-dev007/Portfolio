"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useHasMounted } from "@/hooks/use-has-mounted";

export function FloatingContact() {
  const mounted = useHasMounted();

  if (!mounted) {
    return (
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-[#041016] shadow-[0_0_30px_rgba(45,212,191,0.45)] transition hover:scale-105 md:bottom-8 md:right-8"
        aria-label="Contact me"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    );
  }

  return (
    <motion.a
      href="#contact"
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4, type: "spring", stiffness: 220, damping: 18 }}
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-[#041016] shadow-[0_0_30px_rgba(45,212,191,0.45)] transition hover:scale-105 md:bottom-8 md:right-8"
      aria-label="Contact me"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}
