module.exports = {
    root: true,
    extends: ['airbnb-base', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
    env: {
        browser: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        parser: '@babel/eslint-parser',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'import', 'simple-import-sort'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts'],
            },
        },
    },
    ignorePatterns: ['dist', 'lib', 'node_modules'],
    rules: {
        curly: ['error', 'all'],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                ts: 'never',
            },
        ],
        'import/no-default-export': ['error'],
        'import/order': 'off',
        'import/prefer-default-export': 'off',
        'max-params': ['error', 4],
        'no-console': 'off',
        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': ['error', { includeExports: true }],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-underscore-dangle': ['error', { allow: ['_id', '_SELF', '_BLANK'] }],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
        'simple-import-sort/exports': ['error'],
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    [
                        // Side effect imports.
                        '^\\u0000',
                        '^@?\\w',
                        // Internal packages.
                        '^(components|modules|utils)(/.*|$)',
                        // Parent imports. Put `..` last.
                        '^\\.\\.(?!/?$)',
                        '^\\.\\./?$',
                        // Other relative imports. Put same-folder imports and `.` last.
                        '^\\./(?=.*/)(?!/?$)',
                        '^\\.(?!/?$)',
                        '^\\./?$',
                        // Style imports.
                        '^.+\\.s?css$',
                    ],
                ],
            },
        ],
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    },
};
