import { fileURLToPath, URL } from "node:url";
import path from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Component from "unplugin-vue-components/vite";
import RadixVueResolver from "radix-vue/resolver";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Component({ dts: true, resolvers: [RadixVueResolver()] }),
  ],
  resolve: {
    alias: {
      "@common": fileURLToPath(new URL("./common", import.meta.url)),
      "@": fileURLToPath(new URL(".", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./components/real", import.meta.url)
      ),
    },
  },
  build: {
    rollupOptions: {
      input: {
        app_store: path.resolve(__dirname, "./app_store/index.html"),
        home: path.resolve(__dirname, "./home/index.html"),
      },
    },
  },
});
