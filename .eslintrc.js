module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'],
  extends: ['eslint:recommended'],
  rules: {
    semi: [2, 'never'],
    'max-len': [
      'warn',
      {
        ignoreComments: true,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        code: 140,
        tabWidth: 2
      }
    ],
    'no-plusplus': 'off',
    'prefer-rest-params': 'off',
    // "quotes": ["warn", "single"],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
      },
    },
  ],
}
