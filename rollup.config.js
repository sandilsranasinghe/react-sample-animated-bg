import pkg from "./package.json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { babel } from "@rollup/plugin-babel";
import url from "@rollup/plugin-url";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    peerDepsExternal(),
    url(),
    nodeResolve({
      extensions: [".js", ".jsx"]
    }),
    commonjs({ include: /node_modules/ }),
    babel({
      babelHelpers: "runtime",
      exclude: "**/node_modules/**",
      extensions: [".js", ".jsx"],
    }),
  ],
  external: ["react", "react-dom", "styled-components", "react-is"],
};
