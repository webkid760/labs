const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [{
            test: /\.scss/,
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
                },
                "sass-loader"
            ]
        }]
    }
}
