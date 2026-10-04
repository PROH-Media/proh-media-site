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
    // Páginas independentes: o site atual (raiz), a v2 (/v2/) e a v2.1 (/v2.1/).
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        v2: resolve(__dirname, 'v2/index.html'),
        v21: resolve(__dirname, 'v2.1/index.html'),
      },
    },
  },
  server: {
    port: 5173,
    open: false,
  },
});
