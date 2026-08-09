import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    conditions: ['source', 'import', 'module', 'browser', 'default'],
  },
  server: {
    port: 3000,
  },
});
