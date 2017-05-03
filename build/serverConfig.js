const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./baseConfig')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(base, {
    target: 'node',
    entry: './entry-server.js',
    output: {
        libraryTarget: 'commonjs2'
    },
    externals: nodeExternals({
        whitelist: /\.css$/
    }),
    plugins: [
        new VueSSRServerPlugin({
            filename: "bwsServerBundle.json"
        })
    ]
});
