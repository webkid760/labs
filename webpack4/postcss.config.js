module.exports = {
    //parser: 'sugarss',
    // plugins: {
    //     'autoprefixer': {},
    //     'postcss-preset-env': {},
    // }
    plugins: [
        require('autoprefixer')({
            browsers: ['last 4 versions']
        }),
        require('postcss-preset-env')(),
        require('precss')()
    ]

}
