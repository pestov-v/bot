module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      alias: {
        map: [
          ['assets', './src/assets'],
          ['common', './src/common'],
          ['components', './src/components'],
          ['pages', './src/pages'],
          ['providers', './src/providers'],
          ['stores', './src/stores'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
  plugins: ['react', '@typescript-eslint', 'no-relative-import-paths'],
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'object-curly-newline': 0,
    'react/jsx-props-no-spreading': 0,
    'linebreak-style': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'react/require-default-props': 0,
    'import/no-useless-path-segments': 1,
    'import/prefer-default-export': 0,
    'import/extensions': [
      2,
      'never',
      {
        json: 'always',
      },
    ],
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/order': [
      1,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always-and-inside-groups',
        pathGroups: [
          {
            pattern: 'assets/**',
            group: 'parent',
          },
          {
            pattern: 'common/**',
            group: 'parent',
          },
          {
            pattern: 'components/**',
            group: 'parent',
          },
          {
            pattern: 'pages/**',
            group: 'parent',
          },
          {
            pattern: 'providers/**',
            group: 'parent',
          },
          {
            pattern: 'stores/**',
            group: 'parent',
          },
        ],
        pathGroupsExcludedImportTypes: ['parent'],
      },
    ],
    'class-methods-use-this': 0,
    'arrow-parens': 0,
    'function-paren-newline': 0,
    'implicit-arrow-linebreak': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 2,
    'react/jsx-no-constructed-context-values': 0,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/tabindex-no-positive': 0,
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      { allowSameFolder: true, rootDir: 'src' },
    ],
    'max-lines': ['warn', 400],
  },
};
