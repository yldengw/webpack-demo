const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    // 入口文件的配置项
    entry: {
        entry: './src/entry.js'
        // entry2: './src/entry2.js'
    },
    // 出口文件的配置项
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        progress: true
    }
}