module.exports = {
    entry: './src/index.js',
    output: {
        path: '.',
        filename: 'infinite_list.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}