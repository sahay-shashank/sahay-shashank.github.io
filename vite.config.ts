import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => {
  return ({
    plugins: [
      react(),
      mdx(
        {
          providerImportSource: "@mdx-js/react"
        }
      ),
      tailwindcss()
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: mode === "production"
      ? "/"
      : "/",
    build: {
      outDir: './build'
    }
  })
});
