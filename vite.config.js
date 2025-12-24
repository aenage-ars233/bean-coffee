import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginSvgr from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    vitePluginSvgr(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "public/icons/coffee_beans.png"
      ],
      manifest: {
        name: "Bean Coffee",
        short_name: "BeanCoffee",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#603809",
        icons: [
          {
            src: "/public/icons/bean_coffee.png",
            sizes: "192x192",
            type: "image/png",
          }
        ],
      }
    })
  ]
});