// @ts-check
import baseConfig from "./eslint.config.mjs";

const ciConfig = [
  ...baseConfig,
  {
    files: ["**/*.{js|jsx}"],
    rules: {
      "no-unused-vars": "error",
    },
  },
  {
    files: ["**/*.{ts|tsx}"],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
  },
];

export default ciConfig;
