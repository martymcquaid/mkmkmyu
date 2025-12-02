import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/ad73ec70-2bc5-4d1f-8e95-d7d1b5a2b755/preview',
  plugins: [react()],
  server: {
    port: 5214,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5214,
    },
  },
})
