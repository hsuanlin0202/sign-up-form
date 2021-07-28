import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base:'/sign-up-form/',
  plugins: [reactRefresh(), svgr()],
})
