import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
import nextPlugin from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'

const eslintConfig = [
  {
    ignores: [
      '.next/**/*',
      'node_modules/**/*',
      'out/**/*',
      'public/**/*',
      '*.config.js',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      import: importPlugin,
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          paths: ['.'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      ...eslintConfigPrettier.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,

      // Prettier integration
      'prettier/prettier': 'warn',

      // React/JSX specific rules
      'react/no-unused-prop-types': 'warn',
      'react/no-array-index-key': 'warn',
      'react/jsx-no-bind': 'warn',
      'react/jsx-pascal-case': 'error',
      'react/self-closing-comp': 'warn',
      'react/jsx-boolean-value': ['warn', 'never'],

      // General code quality
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': 'warn',
      'prefer-const': 'warn',
      'no-var': 'error',

      // Import/export rules
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'never',
        },
      ],

      // Accessibility
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/no-redundant-roles': 'warn',

      // Performance
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]

export default eslintConfig
