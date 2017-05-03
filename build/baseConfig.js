const path = require('path');
const vueConfig = require('./vueLoaderConfig');

module.exports = {
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueConfig
            },
            {
                test: /\.js$/,
                loader: 'buble-loader',
                exclude: /node_modules/,
                options: {
                    objectAssign: 'Object.assign'
                }
            }
        ]
    }
};
