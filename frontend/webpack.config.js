const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port:8080,
        contentBase: "./public",
    },
    resolve: {
        extrensions: ['','.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modues'
        }
    },
    plugin: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loader:[{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modues/,
            query: {
                presets: ['es2015', 'react'],
                plugin: ['transform-Object-rest-spread']
            }
        }, {
            test:/\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }
    ]
    }
}