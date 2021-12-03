const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode: 'production',
    entry: './build/app.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'measure-execution-time.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser'
        })
    ]
};