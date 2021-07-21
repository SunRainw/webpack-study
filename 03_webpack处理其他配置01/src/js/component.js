// import "css-loader!../css/index.css"
import "../css/index.css"
import "../css/component.less"
import zznhImage from "../img/zznh.png"

function component() {
    const element = document.createElement("div")

    element.innerHTML = ["hello", "Webpack"].join(" ")
    element.className = "content"

    // 创建一个img元素，设置src属性
    const imgEl = new Image()
    // imgEl.src = require("../img/zznh.png").default; // file-loader 5.x以后返回的是一个对象，我们需要使用它的default属性
    imgEl.src = zznhImage
    element.appendChild(imgEl)

    // 创建一个div，设置背景图片
    const bgDivEl = document.createElement("div")
    bgDivEl.style.width = 200 + 'px'
    bgDivEl.style.height = 200 + 'px'
    bgDivEl.className = "bg-image"
    element.appendChild(bgDivEl)

    return element
}

document.body.appendChild(component())