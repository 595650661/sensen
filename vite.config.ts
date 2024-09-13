import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue'



// https://vitejs.dev/config/
export default defineConfig({
  base: '/sensen/',
  build: {
    outDir: 'docs',
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      // 加载全局 scss
      scss: {
        additionalData: `@import "./src/styles/glob.scss";`
      }
    }
  }
})
