var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        script: './src/index.js',
        //style: './src/components/App/app.styl'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [

        ],
        loaders: [
            {
                test: /\.stly$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules')
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.styl']
    },
    plugins: [
        new ExtractTextPlugin('./css/style.css', {allChunks: true})
    ]
};