import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html';
import { wrapperEnv } from './src/utils/getEnv';


// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  const viteEnv = wrapperEnv(env);
  console.log('====viteEnv:', viteEnv);
  return {
    base: '/sensen/',
    build: {
      outDir: 'docs',
    },
    plugins: [
      vue(),
      createHtmlPlugin({
        // 在html中输出环境变量
        inject: {
          data: {
            title: viteEnv.VITE_GLOB_APP_TITLE
          }
        }
      })
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
    },
    server: {
      // 输出 network地址。也可以在package.json中设置vite --open --host
      host: '0.0.0.0', 
      port: viteEnv.VITE_PORT, // 端口
      open: viteEnv.VITE_OPEN, // 自动打开浏览器
    }
  };
})
