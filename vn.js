module.exports =     {
  "env": {
      "es2021": true,
      "node": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "plugins": [
      "@typescript-eslint"
  ],
  "rules": {
      "prettier/prettier": [
          "error",
          {
            printWidth: 80,
            tabWidth: 2,
            trailingComma: "all",
            arrowParens: "always",
            semi: true,
          },
        ],
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
}
