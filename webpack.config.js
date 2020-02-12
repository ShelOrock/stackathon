const { resolve } = require('path');

module.exports = {
    entry: ['babel-polyfill', './app/main'],
    output: {
        path: __dirname,
        filename: './public/bundle.js',
    },
    mode: 'development',
    context: __dirname,
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /js?$/,
                exclude: /(node_modules|bower_components)/,
                include: resolve(__dirname, './app'),
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
};