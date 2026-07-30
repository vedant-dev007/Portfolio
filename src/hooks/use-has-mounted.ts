"use client";

import { useEffect, useState } from "react";

/** True only after client mount — keeps SSR and first paint identical. */
export function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
