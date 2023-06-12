module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [],
  plugins: ['react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/prefer-default-export': 'off',
    'newline-before-return': 'error',
    'no-console': 'warn',
    'no-var': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
    'import/prefer-default-export': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'no-param-reassign': 'warn',
    'react/prop-types': 'off',
    'max-lines': ['warn', { max: 900, skipBlankLines: true, skipComments: true }],
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['/lib/**/*', '**/*.js'],
  extends: ['react-app', 'react-app/jest', 'airbnb', 'airbnb-typescript', 'prettier'],
};
