import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}, // Ensures process.env is defined in the client-side environment
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Prevents 'lucide-react' from being pre-bundled
  },
});
