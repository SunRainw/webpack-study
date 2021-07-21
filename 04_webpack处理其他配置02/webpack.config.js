const path = require("path")

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
            }
        ]
    }
}