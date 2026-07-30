"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { useHasMounted } from "@/hooks/use-has-mounted";

type MotionTag = "div" | "article" | "span";

type MotionInViewProps = HTMLMotionProps<"div"> & {
  children?: ReactNode;
  as?: MotionTag;
};

/** Client-only motion wrapper so SSR HTML matches the first client render. */
export function MotionInView({
  children,
  className,
  as = "div",
  ...props
}: MotionInViewProps) {
  const mounted = useHasMounted();
  const reduce = useReducedMotion();

  if (!mounted || reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as];
  return (
    <MotionTag className={className} {...props}>
      {children}
    </MotionTag>
  );
}
