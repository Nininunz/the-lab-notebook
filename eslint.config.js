import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginPrettier from 'eslint-plugin-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('prettier'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
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
  {
    ignores: [
      '.next/**/*',
      'node_modules/**/*',
      'out/**/*',
      'public/**/*',
      '*.config.js',
    ],
  },
]

export default eslintConfig
