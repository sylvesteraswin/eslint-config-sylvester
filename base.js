module.exports = {
    extends: [
        'airbnb',
    ],
    parser: 'babel-eslint',
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    globals: {
        clearTimeout: false,
        document: false,
        localStorage: false,
        setTimeout: false,
        window: false,
    },
    parseOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            impliedStrict: true,
            experimentalObjectRestSpread: true,
            classes: true,
            modules: true,
        },
    },
    plugins: [
        'react',
        'import',
    ],
    rules: {
        indent: [2, 4],
        'max-len': [1, 180, 4],
        'react/require-extensions': 0,
        'react/no-multi-comp': 0,
        'no-unused-expressions': [2, {
            allowTernary: true,
            allowShortCircuit: true,
        }],
        'react/prop-types': [2, {
            ignore: [
                'children',
                'className',
                'style',
            ],
        }],
    },
};
