import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  base: '/main/',
  build: {
    outDir: '../dist/main',
    emptyOutDir: true,
    lib: {
      entry: ['main.ts', 'preload.ts'],
      formats: ['cjs'],
      fileName: () => '[name].cjs',
    },
    rollupOptions: {
      external: ['electron', 'path'],
    }
  }
})
