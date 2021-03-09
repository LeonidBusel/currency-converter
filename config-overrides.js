const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
    addWebpackAlias({
        ['@assets']: path.resolve(__dirname, './src/assets'),
        ['@components']: path.resolve(__dirname, './src/components'),
        ['@containers']: path.resolve(__dirname, './src/containers'),
        ['@actions']: path.resolve(__dirname, './src/actions'),
        ['@sagas']: path.resolve(__dirname, './src/sagas'),
        ['@reducers']: path.resolve(__dirname, './src/reducers'),
        ['@slice']: path.resolve(__dirname, './src/slice'),
        ['@store']: path.resolve(__dirname, './src/store'),
        ['@hooks']: path.resolve(__dirname, './src/hooks'),
        ['@utils']: path.resolve(__dirname, './src/utils')
    })
);