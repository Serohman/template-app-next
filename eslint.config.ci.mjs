// @ts-check
import baseConfig from "./eslint.config.mjs";

const ciConfig = [
  ...baseConfig,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error", // Upgrade from warn to error
    },
  },
];

export default ciConfig;
