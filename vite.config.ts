import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/

export default defineConfig({
  base: "./src",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "/index.html",
    },
  },
  server: {
    mimeTypes: {
      "application/javascript": ["js"],
      "text/javascript": ["js"],
    },
  },
});
