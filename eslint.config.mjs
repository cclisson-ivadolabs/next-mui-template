// @ts-check

import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
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
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    rules: {
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "ignore" },
      ],

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "unused-imports/no-unused-imports": "error",
    },
  },
];

export default eslintConfig;
