/** Prefix internal paths for GitHub Pages basePath. */
export function withBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) return path;
  if (path.startsWith(base + "/") || path === base) return path;
  return `${base}${path}`;
}
