// https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts

/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: ["vitest"],
      dts: true, // generate TypeScript declaration
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    // you might want to disable the `css: true` line, since we don't have
    // tests that rely on CSS -- and parsing CSS is slow.
    // I'm leaving it in here becasue often people want to parse CSS in tests.
    css: true,
  },
});
