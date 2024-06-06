import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    build: {
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes('node_modules')) {
                        return 'vendor'
                    }
                }
            }
        }
    },
    plugins: [
        react(),
        svgr(),
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
