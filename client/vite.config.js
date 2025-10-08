import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Browser-compatible polyfills for Node modules
      stream: 'stream-browserify',
      crypto: 'crypto-browserify',
      events: 'events',
      buffer: 'buffer',
      process: 'process/browser',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis', // single global definition
      },
    },
  },
  // server: {
  //   port: 3000, // <-- change this to any port you like
  // },
});
