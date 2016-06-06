const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/app.js',
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'public'),
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: 'json',
        }, {
            test: /\.html$/,
            loader: 'lodash-template-webpack?engine=lodash',
        }, {
            test: /\.s?css$/,
            loader: 'style?sourceMap!css?sourceMap&-url!sass?sourceMap',
        }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                cacheDirectory: '/tmp/babel-cache',
                sourceMaps: true,
            },
        }],
    },
};
