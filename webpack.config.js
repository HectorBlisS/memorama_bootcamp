let path = require('path')

module.exports = {
    entry: "./main.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                use: 'babel-loader',
                exclude: "/node_modules/"
            }
        ]
    }
}