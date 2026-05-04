import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: "/MathIntellisense/",
  build: {
    rollupOptions: {
      input: {
        main:      resolve(__dirname, 'index.html'),
        simple:    resolve(__dirname, 'simple.html'),
        reference: resolve(__dirname, 'reference.html'),
      },
    },
  },
})
