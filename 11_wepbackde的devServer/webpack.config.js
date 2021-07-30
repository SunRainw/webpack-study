const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const { resolve } = require("path")

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./build")
    },
    devServer: {
        hot: true
        hotOnly: true, // 代码编译失败时，是否不刷新整个页面
        port: 8000, // 端口
        host: "0.0.0.0", // 主机地址
        open: true, // 启动后是否打开浏览器
        compress: true // 是否使用gzip压缩
        proxy: {
            "/api": {
                target: "localhost:8888",
                pathRewrite: "/",
                secure: false,
                changeOrigin: true
            }
        }
        historyApiFallback: {
            rewrites: [
                { from: /abc/, to: "./index.html" }
            ]
        }
        resolve: {
            extensions: [".js", ".vue", ".json", ".jsx"],
            alias: {
                "@": path.resolve(__dirname, "./src")
            }
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
        new ReactRefreshWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}