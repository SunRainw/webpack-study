module.exports = {
    presets: [
        ["@babel/preset-env"],
        ["@babel/preset-react"]
    ],
    plugins: [
        ["react-refresh/babel"] // react要实现HMR需要该plugin
    ]
}