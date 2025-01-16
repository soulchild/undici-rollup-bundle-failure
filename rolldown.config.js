import { defineConfig } from "rolldown";

export default defineConfig([
  {
    platform: "node",
    input: "./index.js",
    output: {
      minify: true,
      file: "build/index-rolldown",
      format: "esm",
    },
  },
  {
    platform: "node",
    input: "./index-no-undici.js",
    output: {
      minify: true,
      file: "build/index-no-undici-rolldown",
      format: "esm",
    },
  },
]);
