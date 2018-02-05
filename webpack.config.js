const path = require('path');
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
    module: {},
    plugins: [],
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        progress: true
    }
}