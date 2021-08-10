const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    mode: "production",
    externals: {
        lodash: "_", // 此处的值是node_modules中包导出的，lodash导出的就是 "_"
        dayjs: "dayjs", // dayjs导出的就是dayjs， 其他的可以去查询
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
}