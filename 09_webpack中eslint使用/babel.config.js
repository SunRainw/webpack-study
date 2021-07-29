module.exports = {
    presets: [
        [
            "@babel/preset-env", {
                /**
                 * useBuiltIns的值
                 * false：不用任何的polyfill相关的代码
                 * usage：代码中需要哪些polyfill，就自动帮你引入相关的api
                 * entry：默认情况下不会生效，需要在入口文件中引入core-js/stable和regenerator-runtime/runtime，它不是引用全部的api，而是引用当前了设置的兼容浏览器需要用到的
                 * 如果设置为usage或者entry，最好在babel-loader处添加exclude排除node_modules文件夹，避免冲突
                 */
                useBuiltIns: "usage",
                corejs: 3 // 如果core-js安装的是3.x的版本需要指定，因为这里的默认值是2
            }
        ],
        ["@babel/preset-typescript"]
    ]
}