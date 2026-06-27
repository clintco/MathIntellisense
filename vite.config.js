import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: "/MathIntellisense/",
  build: {
    rollupOptions: {
      input: {
        main:         resolve(__dirname, 'index.html'),
        symbols:      resolve(__dirname, 'symbols.html'),
        equations:    resolve(__dirname, 'equations.html'),
        equations_es: resolve(__dirname, 'equations.es.html'),
        equations_de: resolve(__dirname, 'equations.de.html'),
        equations_fr: resolve(__dirname, 'equations.fr.html'),
      },
    },
  },
})
