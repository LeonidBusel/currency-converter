const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
    addWebpackAlias({
        ['@assets']: path.resolve(__dirname, './src/assets'),
        ['@components']: path.resolve(__dirname, './src/view/components'),
        ['@containers']: path.resolve(__dirname, './src/view/containers'),
        ['@sagas']: path.resolve(__dirname, './src/state/sagas'),
        ['@slice']: path.resolve(__dirname, './src/state/slice'),
        ['@store']: path.resolve(__dirname, './src/state/store.js'),
        ['@hooks']: path.resolve(__dirname, './src/state/hooks'),
        ['@utils']: path.resolve(__dirname, './src/utils')
    })
);