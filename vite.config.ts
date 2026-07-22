import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const entry = (path: string) => fileURLToPath(new URL(path, import.meta.url));

// Custom domain (trybranch.io) serves from the root, so base is "/".
// The legal pages are their own HTML entries so GitHub Pages can serve them at
// /privacy/ and /terms/ without any client-side routing.
export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: entry("./index.html"),
        privacy: entry("./privacy/index.html"),
        terms: entry("./terms/index.html"),
        sms: entry("./sms/index.html"),
      },
    },
  },
});
