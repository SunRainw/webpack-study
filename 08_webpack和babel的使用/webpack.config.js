const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// webpack是使用CommonJS的方式导入的，所以此处需要使用CommonJS的方式导出
module.exports = {
    mode: "development",
    entry: "./src/index.ts", // 指定入口
    devtool: "nosources-source-map",
    output: { // output一般是对象
        filename: "bundle.js", // 打包后文件的名字
        path: path.resolve(__dirname, "./build"), // 指定输入的路径，只能使用绝对路径，dirname可以获取当前目录的绝对路径,resolve可以用于拼接路径
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除node_modules中的js，因为这个包里面一般会自己做处理，如果不排除里面的polyfill会跟本地设置的polyfill可能会冲突
                use: {
                    loader: "babel-loader",
                    // options: {
                    //     presets: [
                    //         ["@babel/preset-env"]
                    //     ]
                    // }
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/, // 排除node_modules中的js，因为这个包里面一般会自己做处理，如果不排除里面的polyfill会跟本地设置的polyfill可能会冲突
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ title: "SunRain Webpack" }), // 可以在里面传一个对象，title属性就是配置index.html的title
    ]
}