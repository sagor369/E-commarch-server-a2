import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from "globals";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
        globals: {
            ...globals.node 
        }
    }
},
{
    rules: {
        eqeqeq: "off",
        "no-unused-vars": "error",
        "prefer-const": ["error", { "ignoreReadBeforeAssign": true }]
    }
},
{
    ignores: ["**/node_modules/","**/dis/"]
}
);