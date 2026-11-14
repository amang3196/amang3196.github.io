// @ts-check
import { defineConfig } from "astro/config";

// This repo is a GitHub *user* site (amang3196.github.io), so it is served from
// the domain root and needs no `base` path.
export default defineConfig({
  site: "https://amang3196.github.io",
});
