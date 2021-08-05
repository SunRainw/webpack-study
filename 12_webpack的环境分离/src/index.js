/**
 * 存在的问题：
 * 问题一：每次修改源代码之后，我们都需要重新执行yarn build
 *  * 通过watch监听源代码的变化
 * 目前的开发模式：
 *  1. watch方案来监听文件的变化
 *  2. 通过live-server插件提供本地服务（当文件变化时，自动刷新页面）
 * 效率并不是特别高：
 *  1. 对所有的源代码都重新进行编译
 *  2. 编译成功后，都会生成新的文件（文件操作 file system）
 *  3. live-server属于VSCode插件（vim/webstorm） -> 不属于webpack给我们的解决方案
 *  4. live-serve每次都会重新刷新整个页面
 */

 console.info(1231)
 import Vue from "vue"
 import VueApp from "./App.vue"
 import React from "react"
 import ReactDom from "react-dom"
 import ReactApp from "./App.jsx"
 
 ReactDom.render(<ReactApp/>, document.getElementById("root"));
 
 new Vue({
   render: h => h(VueApp) 
 }).$mount("#app")