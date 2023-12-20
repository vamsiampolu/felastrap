import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true, include: ['src/'] }),
  ],
  build: {
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
        globals: {
          react: "React",
          "react-dom": "ReactDOm",
        },
      },
    },
  },
});
