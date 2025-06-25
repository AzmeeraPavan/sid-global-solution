import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './', // 👈 Important for correct asset paths on Netlify
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
