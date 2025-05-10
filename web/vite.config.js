import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/smart-contract-lottery/", // 替換成你的 repository 名稱
  build: {
    outDir: resolve(__dirname, "../dist"), // 輸出到根目錄的 dist 資料夾
    assetsDir: "assets",
    sourcemap: true,
  },
});
