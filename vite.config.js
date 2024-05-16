import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [
        react(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, './src')
        }
    },
    server: {
        host: "0.0.0.0",
    },
    css: {
        preprocessorOptions: {
            // 全局样式引入
            scss: {
                // 文件路径，注意最后需要添加 ';'
                additionalData: '@import "@/styles/variable.scss";'
            }
        }
    }
});
