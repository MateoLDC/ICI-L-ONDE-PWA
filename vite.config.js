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
      registerType: "autoupdate",
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
        start_url: "/ICI-L-ONDE-PWA/",
        id: "/ICI-L-ONDE-PWA/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: "./public/icons/bouton-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "./public/icons/bouton-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "./public/icons/bouton-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "./public/icons/bouton-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "./public/icons/bouton-180x180.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "./public/icons/bouton-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./public/icons/bouton-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
          // {
          //   src: "./public/icons/bouton-1242x2688.png",
          //   sizes: "1242x2688",
          //   type: "image/png",
          // },
        ],
      },
    }),
    react(),
  ],
});
