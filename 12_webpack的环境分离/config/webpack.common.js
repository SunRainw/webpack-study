
const HtmlWebpackPlugin = require("html-webpack-plugin")

const VueLoaderPlugin = require("vue-loader/lib/plugin")

const resolveApp = require("./paths")
const { merge } = require("webpack-merge")
const prodConfig = require("./webpack.prod")
const devConfig = require("./webpack.dev")

const commonConfig = {
    // 绝对路径
    // context: path.resolve(__dirname, "../"), // 默认是项目根目录
    // entry写上相对路径时，并不是相对于文件所在的路径，而是相对于context配置的路径
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: resolveApp("./build")
    },
    resolve: {
        extensions: [".js", ".vue", ".json", ".jsx"],
        alias: {
            "@": resolveApp("./src")
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new VueLoaderPlugin()
    ]
}

module.exports = function (env) {
    const isProduction = env.production
    process.env.NODE_ENV = isProduction ? "production" : "development"
    // ? process.env这个对象的属性被赋值以后会变成字符串
    const config = isProduction ? prodConfig : devConfig
    return merge(commonConfig, config)
}