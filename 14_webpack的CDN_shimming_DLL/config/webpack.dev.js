const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    devServer: {
        hot: true,
        hotOnly: true, // 代码编译失败时，是否不刷新整个页面
        port: 8000, // 端口
        host: "0.0.0.0", // 主机地址
        open: true, // 启动后是否打开浏览器
        compress: true, // 是否使用gzip压缩
        proxy: {
            "/api": {
                target: "localhost:8888",
                pathRewrite: {
                    "/api": "/"
                },
                secure: false,
                changeOrigin: true
            }
        },
        historyApiFallback: {
            rewrites: [
                { from: /abc/, to: "./index.html" }
            ]
        }

    },
    plugins: [
        // new ReactRefreshWebpackPlugin(),
    ]
}