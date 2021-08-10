const express = require("express")
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpack = require("webpack")

const app = express()

// 加载配置信息
const config = require("./webpack.config")

// 将配置信息传递给webpack进行编译
const compiler = webpack(config)

// 将编译后的结果传递给webpackDevMiddleware，之后的请求webpackDevMiddleware()返回的中间件处理
app.use(webpackDevMiddleware(compiler))

app.listen(8888, () => {
    console.log("服务运行在8888端口~")
})