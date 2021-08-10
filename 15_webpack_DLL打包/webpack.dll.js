const path = require("path")
const webpack = require("webpack")

module.exports = {
    entry: {
        react: ["react", "react-dom"]
    },
    output: {
        path: path.resolve(__dirname, "./dll"),
        filename: "dll_[name].js",
        library : "dll_[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            name: "dll_[name]",
            path: path.resolve(__dirname, "./dll/[name].manifest.json") // 需要生成一个manifest文件，用来对应查找dll
        })
    ]
}