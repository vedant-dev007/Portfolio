import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { publish } from "gh-pages";

const outDir = join(process.cwd(), "out");

// Required so GitHub Pages doesn't ignore paths starting with _
writeFileSync(join(outDir, ".nojekyll"), "");

publish(
  outDir,
  {
    branch: "gh-pages",
    dotfiles: true,
    message: "Deploy Next.js static export to GitHub Pages",
  },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log("Published to gh-pages branch.");
    console.log("Site: https://vedant-dev007.github.io/Portfolio/");
  }
);
