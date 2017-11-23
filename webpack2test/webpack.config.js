const path =require("path");
const ExtractTextPlugin =require("extract-text-webpack-plugin");
module.exports={
    entry:{
        'index':'./assets/scripts/index.es'
    },
    output:{
        path:path.join(__dirname,'./assets'),
        publicPath:'./',
        filename:'scripts/[name].bundle.js'
    },
    module:{
        rules:[{
            test : /\.es/,
            use:[{
                loader:'babel-loader',
                options:{
                    "presets":["es2015","stage-0"]
                }
            },{
                test:/\.less$/i,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader"
                    },{
                        loader:"less-loader"
                    }]
                })
            }]
        }]
    }
}