import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
  ViteImageOptimizer({
  jpg: { quality: 75 },
  jpeg: { quality: 75 },
  png: { quality: 75 },
  webp: { quality: 75 },
  test: /\.(jpe?g|png|webp)$/i,
  includePublic: true,
  logStats: true,
  ansiColors: true,
  svg: {},
  png: {},
  jpg: { quality: 75 },
  jpeg: { quality: 75 },
}),
  ],
})