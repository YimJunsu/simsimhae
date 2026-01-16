import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    {
      name: "custom-server-start-log",
      apply: "serve",
      configureServer(server) {
        server.httpServer?.once("listening", () => {
          const now = new Date()

          // 원하는 포맷
          const time = now.toLocaleString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })

          console.log(`
          ==============================
          🚀 웹서버가 시작되었습니다
          ⏰ 시작 시간: ${time}
          🌐 주소: http://localhost:5173
          ==============================
          `)
        })
      },
    },
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  json: {
    stringify: true,
  },
})
