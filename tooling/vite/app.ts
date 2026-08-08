import { defineConfig, type UserConfig } from "vite";

export function defineAppConfig(options: {
  input: Record<string, string>;
  plugins?: UserConfig["plugins"];
}): UserConfig {
  return defineConfig({
    plugins: options.plugins,
    build: { rollupOptions: { input: options.input } },
  });
}