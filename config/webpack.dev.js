const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        hot: true,
        port: 3000,
        inline: true,
        historyApiFallback:true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});