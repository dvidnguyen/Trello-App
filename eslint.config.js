import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist'] }, // Giữ nguyên từ file cũ
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, node: true, es2020: true }, // Tích hợp env từ file mới
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      react, // Thêm plugin react từ file mớicsc
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      react: {
        version: 'detect', // Cập nhật từ '18.2' để khớp React 19.1.0
        runtime: 'automatic', // Bật JSX runtime tự động
      },
    },
    rules: {
      ...js.configs.recommended.rules, // Từ file cũ
      ...react.configs.recommended.rules, // Tích hợp 'plugin:react/recommended'
      ...reactHooks.configs.recommended.rules, // Từ file cũ + file mới
      'react/react-in-jsx-scope': 'off', // Tắt để tránh lỗi với React 19.1.0
      'react/prop-types': 0, // Từ file mới
      'react/display-name': 0, // Từ file mới
      'react-refresh/only-export-components':
        'warn', // Từ file cũ + file mới
      "no-restricted-imports": 
      [
      "error", 
      {
        "patterns": [{ "regex": "^@mui/[^/]+$" }]
      }
      ],
      'react-hooks/rules-of-hooks': 'error', // Từ file mới
      'react-hooks/exhaustive-deps': 'warn', // Từ file mới
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }], // Kết hợp file cũ và file mới
      'no-console': 1, // Từ file mới
      'no-lonely-if': 1, // Từ file mới
      'no-trailing-spaces': 1, // Từ file mới
      'no-multi-spaces': 1, // Từ file mới
      'no-multiple-empty-lines': 1, // Từ file mới
      'space-before-blocks': ['error', 'always'], // Từ file mới
      'object-curly-spacing': [1, 'always'], // Từ file mới
      'indent': ['warn', 2], // Từ file mới
      'semi': [1, 'never'], // Từ file mới
      'quotes': ['error', 'single'], // Từ file mới
      'array-bracket-spacing': 1, // Từ file mới
      'linebreak-style': 0, // Từ file mới
      'no-unexpected-multiline': 'warn', // Từ filce mới
      'keyword-spacing': 1, // Từ file mới
      'comma-dangle': 'off', // Tắt để tránh lỗi 'Unexpected trailing comma'
      'comma-spacing': 1, // Từ file mới
      'arrow-spacing': 1, // Từ file mới
    },
  },
];