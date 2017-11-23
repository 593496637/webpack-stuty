var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    // 入口
    entry: __dirname + "/src/scripts/app.js",
    // 出口
    output: {
        path: __dirname + "/build",
        filename: "/scripts/[name]-[hash].js"
    },
    // 插件
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: __dirname + '/src/index.html'
    })],
    // 用来省略require时的后缀名
    resolve: {
        extensions: ['', '.js', '.css']
    },
    module: {
        //加载器配置
        loaders: [{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
}