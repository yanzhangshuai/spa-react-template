module.exports = {
  env: {
    browser: true,
    es6: true
  },

  extends: ['@antfu/eslint-config-react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true
    },
    extraFileExtensions: ['.tsx']
  },

  rules: {
    'comma-dangle': ['error', 'never'],
    'import/order': ['error',
      {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type', 'unknown'],
        'pathGroups': [
          { pattern: 'vue*', group: 'builtin', position: 'before' },
          { pattern: '@/**', group: 'external', position: 'after' }
        ],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'alphabetize': { order: 'ignore', caseInsensitive: true },
        'newlines-between': 'always'
      }
    ],
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    'no-alert': process.env.NODE_ENV !== 'production' ? 0 : 2,
    'no-console': process.env.NODE_ENV !== 'production' ? 0 : [1, { allow: ['warn', 'error'] }],
    'quotes': [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'eqeqeq': [2, 'always', { null: 'ignore' }],
    'semi': [2, 'never'],
    '@typescript-eslint/semi': [2, 'never'],
    '@typescript-eslint/no-explicit-any': 2
  }
};
