import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        privacidad: resolve(import.meta.dirname, 'privacidad/index.html'),
        avisoLegal: resolve(import.meta.dirname, 'aviso-legal/index.html'),
      },
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
  server: {
    port: 5173,
    host: true,
    proxy: {
      '/api/contact': {
        target: 'https://n8n.guillers.es',
        changeOrigin: true,
        secure: true,
        rewrite: () => '/webhook/contacto-landing',
      },
    },
  },
});
