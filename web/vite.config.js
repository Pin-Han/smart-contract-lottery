import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/smart-contract-lottery/", // 替換成你的 repository 名稱
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
  },
});
