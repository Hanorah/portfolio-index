import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensures Vercel knows where to find the build output
    assetsDir: 'assets', // Organizes assets properly
  },
  base: './', // Ensures assets are correctly referenced in deployment
});
