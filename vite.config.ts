import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // 如果你使用 React

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/chatRooms": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
});
