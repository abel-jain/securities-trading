import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Pages from 'vite-plugin-pages'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
      }
    },
    define: {
      'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
    },
    plugins: [
      react(),
      Pages({
        extensions: ['tsx', 'ts', 'jsx', 'js'],
        dirs: ['src/pages'], // 需要生成路由的文件夹，默認就是識別src下面的文件夹
        exclude: ['**/components/**'], // 需要排除的文件夹
      }),
    ],
  }
})

