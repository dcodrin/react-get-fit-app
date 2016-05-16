module.exports = {
    entry: [
        "./src/index.js"
    ],
    output: {
        path: __dirname,
        filename: "./public/js/bundle.js"
    },
    resolve: {
        root: __dirname,
        alias: {
            ClientInfo: './src/components/client_info.js',
            History: './src/components/history.js',
            MovementLoss: './src/components/client_info.js',
            Neurological: './src/components/neurological.js',
            Posture: './src/components/posture.js',
            PrincipleOfMovement: './src/components/principle_of_movement.js',
            ProvisionalClass: './src/components/provisional_class.js',
            SideNav: './src/components/side_nav.js',
            SpecificQuestions: './src/components/specific_questions.js',
            StaticOtherTests: './src/components/static_other_tests.js',
            TestMovements: './src/components/test_movements.js'
        },
        extensions:['', '.js', '.jsx']
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
        devServer: {
            historyApiFallback: true,
            contentBase: "./public/",
            progress: true
        }
    },
    devtool: 'source-map'
};