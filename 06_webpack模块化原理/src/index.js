// es module导出内容，commonJs导入内容
const math = require("./js/math")

// CommonJS导出内容，es module导入内容
import format from "./js/format"

console.log(math.sum(20, 30))
console.log(math.mul(20, 30))

console.log(format.dateFormat("aaa"))
console.log(format.priceFormat("bbb"))