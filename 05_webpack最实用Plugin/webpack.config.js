const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")

// webpack是使用CommonJS的方式导入的，所以此处需要使用CommonJS的方式导出
module.exports = {
    entry: "./src/main.js", // 指定入口
    output: { // output一般是对象
        filename: "bundle.js", // 打包后文件的名字
        path: path.resolve(__dirname, "./build"), // 指定输入的路径，只能使用绝对路径，dirname可以获取当前目录的绝对路径,resolve可以用于拼接路径
    },
    module: {
        rules: [
            {
                test: /\.css$/, // 用于匹配资源，使用正则表达式匹配
                use: [
                    // { loader: "css-loader" }
                    "style-loader", // 添加style-loader，注意loader的编译是从后往前
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    "postcss-loader"
                ],
                // loader: "css-loader"
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2
                        }

                    },
                    "postcss-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|svg)$/,
                type: "asset",
                generator: {
                    filename: "img/[name].[hash:6][ext]"
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 100 * 1024
                    }
                }
            },
            {
                test: /\.(ttf|eot|woff2?)$/i,
                type: "asset/resource",
                generator: {
                    filename: "font/[name].[hash:6][ext]"
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ title: "SunRain Webpack", template: "./public/index.html" }), // 可以在里面传一个对象，title属性就是配置index.html的title
        new DefinePlugin({
            BASE_URL: '"./"', // 如果不加''就类似 const BASE_URL = ./
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "public",
                    globOptions: {
                        ignore: [
                            "**/.DS_Store",
                            "**/index.html",
                        ]
                    }
                }
            ]
        })
    ]
}