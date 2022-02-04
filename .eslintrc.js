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
        'prettier',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'func-names': ['error', 'as-needed'],
        'react/forbid-prop-types': ['off'],
        'default-param-last': ['off'],
        'no-unused-expressions': ['error', { allowTernary: true }],
        'no-shadow': ['error', { allow: ['requestTrendingFeed', 'requestUsersInfo'] }],
        "import/extensions": [0]
    },
};
