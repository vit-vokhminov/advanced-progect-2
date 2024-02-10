// eslint-disable-next-line fsd-vit-plugin/layer-imports-vit
/* eslint-disable fsd-vit-plugin/layer-imports-vit */
module.exports = {
    env: {
        // где будет исполняться наш код
        browser: true,
        es2021: true,
        jest: true,
    },
    /* Пресет с настройками. prettier должен быть последним. 
    Он удаляет некоторые правила eslint из-за которых могут возникать конфликты. */
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:storybook/recommended',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'unused-imports',
        'fsd-vit-plugin',
    ],
    rules: {
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        ],
        'quote-props': 'off',
        quotes: ['warn', 'single'],
        indent: 'off',
        'jsx-quotes': ['warn', 'prefer-single'],
        'comma-dangle': 'off',
        'prefer-arrow-callback': 'off',
        'no-trailing-spaces': 'off',
        'eol-last': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'import/no-unresolved': 'off',
        'import/no-import-module-exports': 'off',
        // использовать именованый экспорт
        'import/prefer-default-export': 'off',
        // не используемые импорты, плагин eslint-plugin-unused-imports [unused-imports]
        'unused-imports/no-unused-imports': 'warn',
        // переменная ни где не используется - ворнинг
        'no-unused-vars': 'off',
        'no-tabs': 'off',
        'implicit-arrow-linebreak': 'off',
        // нет дефолтного значения
        'react/require-default-props': 'off',
        //
        'react/forbid-prop-types': 'off',
        //
        'prefer-destructuring': 'off',
        'react/no-find-dom-node': 'off',
        // Я этого не знаю
        'react/no-did-mount-set-state': 'off',
        'react/no-unused-prop-types': 'off',
        // Это всё ещё работает нестабильно
        'react/jsx-one-expression-per-line': 'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to'],
            },
        ],
        'jsx-a11y/label-has-for': [
            2,
            {
                required: {
                    every: ['id'],
                },
            },
        ],
        // для ошибки вложенных свойств htmlFor элементов label
        // использовали jsx не импортировав react
        'react/react-in-jsx-scope': 'off',
        // пропс передаётся спред оператором
        'react/jsx-props-no-spreading': 'off',
        // описывать компоненты как function а не ()=>
        'react/function-component-definition': 'off',
        // хз, eslint залупился на ts
        'no-shadow': 'off',
        // при импорте указывать расшырение файлов
        'import/extensions': 'off',
        // ругается на импорт дев зависимости, на webpack, но он и так нужен для сборки
        'import/no-extraneous-dependencies': 'off',
        // запретить нижние подчёркивания
        'no-underscore-dangle': 'off',
        'react/jsx-wrap-multilines': 'off',
        'max-len': [
            'error',
            {
                ignoreComments: true,
                code: 140,
            },
        ],
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
        'object-shorthand': 'off',
        'no-console': 'off',
        'no-alert': 'off',
        // i18 будет ругаться только на отсутствие переводов внутри jsx
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'as',
                    'role',
                    'data-testid',
                    'to',
                    'target',
                    'justify',
                    'align',
                    'border',
                    'direction',
                    'gap',
                    'feature',
                    'color',
                    'variant',
                ],
            },
        ],
        'import/order': 'off',
        'object-curly-newline': 'off',
        'arrow-body-style': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'consistent-return': 'off',
        'lines-between-class-members': 'off',
        'storybook/prefer-pascal-case': 'off',
        'function-paren-newline': 'off',
        'operator-linebreak': 'off',
        'arrow-parens': 'off',
        'prefer-const': 'off',
        'no-restricted-syntax': 'off',
        'no-sequences': 'off',
        'spaced-comment': 'off',
        'import/newline-after-import': 'off',
        'func-names': 'off',
        'linebreak-style': 'off',
        'no-lone-blocks': 'off',
        'no-unused-expressions': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        // eslint-plugin-react-hooks плагин контролирует неоюъодимость обёртки в useCallback (plugins: react-hooks)
        'react-hooks/rules-of-hooks': 'error', // Проверяет правила использования Hooks (plugins: react-hooks)
        'react-hooks/exhaustive-deps': 'error', // Проверяет массив зависимостей эффектов (plugins: react-hooks)
        // это свойство противоречит redux tolkit, где стейт можно менять
        'no-param-reassign': 'off',
        // запретить использование var переменных, у меня их нет, но есть типы global.d.ts, а он на них ругается
        'no-undef': 'off',
        'react/no-array-index-key': 'off',
        'fsd-vit-plugin/path-checker': ['error', { alias: '@' }],
        'fsd-vit-plugin/layer-imports-vit': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'fsd-vit-plugin/public-api-imports-vit': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/*.story.*',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'react/no-unstable-nested-components': 'warn'
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    // переопределение правил для определенных файлов
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
