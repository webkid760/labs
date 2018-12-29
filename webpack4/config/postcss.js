const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [{
            test: /\.css/,
            include: [
                path.resolve(__dirname, '../src'),
            ],
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader?modules=false',
                    options: {
                        importLoaders: 1,
                        minimize: true
                    }
                }, {
                    loader: 'postcss-loader',
                    // options: {
                    //     plugins: [
                    //         require('autoprefixer')({
                    //             browsers: ['last 4 versions']
                    //         }),
                    //         require('postcss-preset-env')()
                    //
                    //     ]
                    // }
                }
            ]
        }]
    }
}
