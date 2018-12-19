const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:5].js',
    },
    module: {
        rules: [{
                test: /\.css/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader?modules=false',
                        options: {
                            importLoaders: 1,
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.scss/,
                include: [
                    path.resolve(__dirname, 'src'),
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
            },
            {
                test: /\.(jpg|png|ico|jpeg|gif)$/,
                use: [{
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            publicPath: "images/",
                            outputPath: "images/"
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: { // 压缩 jpeg 的配置
                                progressive: true,
                                quality: 65
                            },
                            optipng: { // 使用 imagemin-optipng 压缩 png，enable: false 为关闭
                                enabled: false,
                            },
                            pngquant: { // 使用 imagemin-pngquant 压缩 png
                                quality: '50',
                                speed: 4
                            },
                            gifsicle: { // 压缩 gif 的配置
                                interlaced: false,
                            },
                            webp: { // 开启 webp，会把 jpg 和 png 图片压缩为 webp 格式
                                quality: 75
                            },
                        }
                    }

                ]
            },
            {
                test: /\.jsx?/, // 支持 js 和 jsx
                include: [
                    path.resolve(__dirname, 'src'), // src 目录下的才需要经过 babel-loader 处理
                ],
                loader: 'babel-loader',
            },
        ]
    },
    plugins: [
        //每次清除dist，避免多个生成的文件
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname)
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html', // 配置输出文件名和路径
            template: './src/index.html', // 配置文件模板
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash:5].css"
        })
    ],
}
