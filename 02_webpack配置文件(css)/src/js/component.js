// import "css-loader!../css/index.css"
import "../css/index.css"

function component() {
    const element = document.createElement("div")

    element.innerHTML = ["hello", "Webpack"].join(" ")
    element.className = "content"

    return element
}

document.body.appendChild(component())