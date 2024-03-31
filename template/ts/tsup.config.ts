import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm"],
  entry: ["./bin/index.ts"],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  sourcemap: true,
  minify: true,
  target: "esnext",
  outDir: "dist",
});
