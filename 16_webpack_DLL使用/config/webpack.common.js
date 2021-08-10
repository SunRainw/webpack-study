
const HtmlWebpackPlugin = require("html-webpack-plugin")

const VueLoaderPlugin = require("vue-loader/lib/plugin")
const webpack = require("webpack")
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin")

const resolveApp = require("./paths")
const { merge } = require("webpack-merge")
const prodConfig = require("./webpack.prod")
const devConfig = require("./webpack.dev")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const commonConfig = function (isProduction) {
    return {
        // 绝对路径
        // context: path.resolve(__dirname, "../"), // 默认是项目根目录
        // entry写上相对路径时，并不是相对于文件所在的路径，而是相对于context配置的路径
        entry: {
            main: "./src/main.js",
            index: "./src/index.js"
        },
        output: {
            filename: "[name].bundle.js",
            path: resolveApp("./build"),
            chunkFilename: "chunk_[id]_[name].js"
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
                        isProduction ? MiniCssExtractPlugin.loader : "",
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
        optimization: {
            // true/multiple: 针对每个入口打包一个runtime文件
            // single：打包一个runtime文件
            // 对象：name属性决定runtimeChunk的名称， 名称的值也可以是一个function：接收一个参数（入口对象），它的 name 就是前面入口配置的属性
            runtimeChunk: {
                name: function (entryPoint) {
                    return `rain-${entryPoint.name}`
                }
            },
            splitChunks: {
                chunks: "all",
                // 拆分包的大小，至少为minSize
                minSize: 20000,
                // 将大于maxSize的包，拆分成不小于minSize的包
                maxSize: 20000,
                // 至少包被引入的次数
                minChunks: 1,
                // 最大的异步请求数量
                maxAsyncRequests: 30,
                cacheGroups: {
                    venders: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10, // 优先级
                        // name: "vender.js", // 固定的名字
                        filename: "[id]_[hash:6]_vendor.js" // 根据id变化的
                    },
                    foo: {
                        test: /foo/,
                        priority: -20,
                        filename: "foo_[id]_[name].js"
                    },
                    default: {
                        minChunks: 2,
                        priority: -30,
                        filename: "common_[id]_[name].js"
                    }
                }
            },
            chunkIds: "deterministic"
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./index.html"
            }),
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css",
            }),
            new webpack.DllReferencePlugin({
                context: resolveApp("./"), // 告知在哪里查找dll
                manifest: resolveApp("./dll/react.manifest.json"), // 告知manifest的位置
            }),
            new AddAssetHtmlWebpackPlugin({ // 该插件自动在html中注入dll_react引用，并在build中添加dll_react.js文件
                outputPath: "./auto",
                filepath: resolveApp("./dll/dll_react.js")
            })
        ]
    }
}

module.exports = function (env) {
    const isProduction = env.production
    process.env.NODE_ENV = isProduction ? "production" : "development"
    // ? process.env这个对象的属性被赋值以后会变成字符串
    const config = isProduction ? prodConfig : devConfig
    return merge(commonConfig(isProduction), config)
}