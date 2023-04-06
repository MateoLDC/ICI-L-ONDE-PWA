import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ICI-L-ONDE-PWA/",
  server: {
    host: true,
    port: 5174,
  },
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      manifest: {
        name: "Ici L'Onde",
        short_name: "Ici L'Onde",
        description: "Ici L'Onde la webradio du Haut Limousin",
        start_url: "/",
        id: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-1242x2688.png",
            sizes: "1242x2688",
            type: "image/png",
          },
        ],
      },
    }),
    react(),
  ],
});
