import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "./index.js",
  output: {
    file: "test",
    format: "esm",
  },
  plugins: [
    resolve(), // tells Rollup how to find external modules
    commonjs(), // convert CJS to ES modules
  ],
};
