import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        presentation: 'presentation.html',
        presentation_light: 'presentation_light.html',
      },
    },
  },
});
