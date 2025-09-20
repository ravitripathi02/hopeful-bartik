import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["nj9j7d-5173.csb.app"],
    host: true,
    port: 5173,
  },
});
