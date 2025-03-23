// shell-app/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell_app',
      remotes: {
        microAuth: {
          external: 'http://localhost:3001/assets/remoteEntry.js'
        }
      },
      shared: ['react', 'react-dom']
    })
  ],
  optimizeDeps: {
    exclude: ['@originjs/vite-plugin-federation']
  },
  build: {
    target: 'esnext'
  },
  server: {
    port: 3000
  }
});
