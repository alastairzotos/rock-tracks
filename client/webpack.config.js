const path = require('path');


module.exports = {
    mode: "development",

    entry: {
        index: path.resolve(__dirname, 'src/index.tsx'),
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            experimentalWatchApi: true,
                        },
                    }
                ],

            }
        ],
    },

    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        minimize: false,
        splitChunks: false
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            core: './core'
        }
    },

    output: {
        filename: 'index.js',
        pathinfo: false,
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
};
