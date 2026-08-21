import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

// Next 16 removed `next lint`, so ESLint is invoked directly (see the lint
// script in package.json) and needs its own flat config.
export default defineConfig([
  globalIgnores([
    ".next/**",
    ".next.nosync/**",
    "out/**",
    "out.nosync/**",
    "node_modules.nosync/**",
    // iCloud conflict copies, e.g. "out 2/". Without this ESLint walks into build
    // output and reports warnings against generated chunks.
    "*[0-9]/**",
  ]),
  nextCoreWebVitals,
]);
