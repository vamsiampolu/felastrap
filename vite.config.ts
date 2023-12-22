import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true, include: ["src/"] }),
    visualizer({
      title: "Felastrap",
      template: "network",
    }) as unknown as PluginOption,
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/main.tsx"),
      name: "Felastrap",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `felastrap.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*.stories.tsx",
        "src/test-helpers/*",
        "src/Pages/**/*",
      ],
      output: {
        sourcemap: true,
        globals: {
          react: "React",
          "react-dom": "ReactDOm",
        },
      },
    },
  },
});
