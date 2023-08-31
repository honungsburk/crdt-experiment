import { defineConfig, UserConfigExport } from "vitest/config";
import { loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as path from "node:path";
import * as fs from "node:fs";

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const baseConfig: UserConfigExport = {
    resolve: {
      alias: {
        src: path.resolve("src/"),
      },
    },

    server: {
      https: true,
      host: "0.0.0.0",
    },
    define: {
      __APP_VERSION__: JSON.stringify(pkg.version),
    },
    plugins: [
      react(),
      // VitePWA({
      //   registerType: "autoUpdate",
      //   devOptions: {
      //     enabled: false,
      //   },
      //   includeAssets: ["robots.txt"],
      //   manifest: {
      //     name: "Weight",
      //     short_name: "Weight",
      //     description: "To keep track of things",
      //     theme_color: "#ffffff",
      //     background_color: "#ffffff",
      //     icons: [
      //       // {
      //       //   src: "/android-chrome-192x192.png",
      //       //   sizes: "192x192",
      //       //   type: "image/png",
      //       // },
      //       {
      //         src: "/android-chrome-512x512.png",
      //         sizes: "512x512",
      //         type: "image/png",
      //       },
      //     ],
      //   },
      // }),
    ],
  };

  if (mode === "debug") {
    baseConfig.build = {
      sourcemap: true,
      minify: false,
    };
  }

  return baseConfig;
});
