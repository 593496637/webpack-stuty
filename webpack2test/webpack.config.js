const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        'index': './assets/scripts/index.es'
    },
    output: {
        path: path.join(__dirname, './assets'),
        publicPath: './',
        filename: 'scripts/[name].bundle.js'
    },
    module: {
        rules: [{
                test: /\.es$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        "presets": ["es2015", "stage-0"]
                    }
                }]
            },
            {
                test: /\.less$/i,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'less-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style/[name].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            // ( 公共chunk(commnons chunk) 的名称)
          
            filename: "scripts/[name].js",
            // ( 公共chunk 的文件名)
          
            minChunks: 2
            // (模块必须被3个 入口chunk 共享)
          
            // chunks: ["pageA", "pageB"],
            // (只使用这些 入口chunk)
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/assets/index.html"//new 一个这个插件的实例，并传入相关的参数
        })
    ]
}