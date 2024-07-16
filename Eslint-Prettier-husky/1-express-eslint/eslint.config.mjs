import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];


//.vscode/settings.json
// {
//   "editor.codeActionsOnSave": {
//       "source.fixAll.eslint": "explicit"
//   },
//   "eslint.validate": ["javascript", "typescript"]
// }