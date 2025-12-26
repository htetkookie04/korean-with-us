import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "src/pages/**",
      "src/_old_pages/**",
      "src/App.tsx",
      "src/_old_App.tsx",
      "src/main.tsx",
      "src/_old_main.tsx",
      "src/index.css",
      "src/_old_index.css",
      "src/components/auth/**",
      "src/components/ScrollToTop.tsx",
      "src/utils/**",
      "src/data/**",
    ],
  },
];

export default eslintConfig;
