import { defineConfig, type UserConfig } from "vite";

export function defineLibraryConfig(options: {
  entry: Record<string, string>;
  plugins?: UserConfig["plugins"];
}): UserConfig {
  return defineConfig({
    plugins: options.plugins,
    build: {
      outDir: "dist",
      lib: { entry: options.entry, formats: ["es"] },
      cssCodeSplit: false,
      sourcemap: true,
      emptyOutDir: true,
      rollupOptions: {
        output: { entryFileNames: "[name].js" },
      },
    },
  });
}