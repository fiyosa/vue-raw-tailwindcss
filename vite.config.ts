import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],

  server: {
    port: 3000,
    host: 'localhost',
  },

  build: {
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') return 'main.css'
          return 'assets/[hash].[ext]'
        },
      },
    },
  },

  preview: {
    port: 8080,
    host: 'localhost',
  },
})
