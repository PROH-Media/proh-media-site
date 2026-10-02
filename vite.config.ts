import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  // Caminhos relativos nos assets: o build funciona tanto na raiz do domínio
  // (proh.media) quanto dentro de uma subpasta na Hostinger.
  base: './',
  plugins: [react()],
  build: {
    // Duas páginas independentes: o site atual (raiz) e a v2 (/v2/).
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        v2: resolve(__dirname, 'v2/index.html'),
      },
    },
  },
  server: {
    port: 5173,
    open: false,
  },
});
