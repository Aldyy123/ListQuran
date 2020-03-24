const path = require('path');
const plugin = require('html-webpack-plugin')

module.exports = {
    entry : "./src/index.js",
    output : {
        path : path.resolve(__dirname, "dist"),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader : "css-loader"
                    }
                ]
            }
        ]
    },
    plugins : [
        new plugin({
            template : "./src/index.html",
            filename : "index.html"
        })
    ]
}