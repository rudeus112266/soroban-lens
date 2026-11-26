import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** Stable port for `vite preview` — imported by the E2E suite (see #201) so the port is never hardcoded in two places. */
export const PREVIEW_PORT = 5173;

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow external connections
    port: PREVIEW_PORT,
  },
  preview: {
    host: '0.0.0.0',
    port: PREVIEW_PORT,
    // The container is reached as "localhost" from the host and as "web" from
    // sibling compose services; both have to be allowed or Vite 7 refuses.
    allowedHosts: true,
  },
  build: { outDir: 'dist', sourcemap: true },
});
