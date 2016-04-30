module.exports = {
    entry: [
        "./src/index.js"
    ],
    output: {
        path: './public/js/',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ["es2015", "react", "stage-1"]
            }
        }],
        resolve: {
            extensions: ["", ".js", ".jsx"]
        },
        devServer: {
            historyApiFallback: true,
            contentBase: "./public/",
            hot: true,
            progress: true
        }
    },
    devtool: 'source-map'
}