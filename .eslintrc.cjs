module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/prop-types': 'off',
    'no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
    // Intentional: eyebrow labels use "// like a code comment" as design copy, not actual JSX comments
    'react/jsx-no-comment-textnodes': 'off',
    // Intentional: apostrophes/quotes in copy are fine without HTML entities
    'react/no-unescaped-entities': 'off',
  },
};
