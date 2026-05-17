import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      assets: path.resolve(__dirname, './src/assets'),
    }
  },

  server: {
    port: 3000,
    open: true
  },

  build: {
    outDir: 'dist'
  }
})