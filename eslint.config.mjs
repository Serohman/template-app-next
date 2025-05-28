// @ts-check
import {FlatCompat} from "@eslint/eslintrc";
import eslint from "@eslint/js";
import {dirname} from "path";
import tseslint from "typescript-eslint";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...tseslint.config(eslint.configs.recommended),
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...tseslint.config(tseslint.configs.strict),
  {
    files: ["**/*.test.js", "**/*.test.ts"],
    env: {jest: true},
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    rules: {
      "no-unused-vars": "warn",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;
