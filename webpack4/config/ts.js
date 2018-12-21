const path = require("path");

module.exports = {
    module: {
        rules: [{
            test: /\.tsx?/, // 支持 ts 和 tsx
            include: [
                path.resolve(__dirname, '../src'), // src 目录下的才需要处理
            ],
            loader: 'ts-loader',
        }]
    }
}
