// @ts-check

import { FlatCompat } from "@eslint/eslintrc";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import storybook from "eslint-plugin-storybook";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier/recommended";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  ...storybook.configs["flat/recommended"],
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.config({
    extends: ["next"],
    settings: {
      next: {
        rootDir: "./",
      },
    },
  }),
  ...compat.config({
    ...reactHooksPlugin.configs.recommended,
  }),
  prettierPlugin,
  {
    rules: {
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "ignore" },
      ],
    },
  },
];

export default eslintConfig;
