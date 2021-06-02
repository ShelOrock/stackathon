const { resolve } = require('path');

module.exports = {
    entry: './app/main.tsx',
    output: {
        path: resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.jsx' ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /jsx?$/,
                include: resolve(__dirname, './app'),
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
};
