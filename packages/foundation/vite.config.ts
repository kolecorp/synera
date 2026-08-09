import { defineLibraryConfig } from "@synera/vite-config/library";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineLibraryConfig({
  plugins: [tailwindcss()],
  entry: {
    foundation: path.resolve(root, "src/index.ts"),
    "adapters/svelte": path.resolve(root, "src/adapters/svelte/index.ts"),
    icons: path.resolve(root, "src/icons/index.ts"),
  },
});