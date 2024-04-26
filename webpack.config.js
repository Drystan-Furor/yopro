// webpack.config.js
const path = require('path');
const webpack = require('webpack');


module.exports = {
    mode: 'production', // Set to 'production' , 'development' or 'none' as needed.
    entry: {
        main: './build/js/main.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build/dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};