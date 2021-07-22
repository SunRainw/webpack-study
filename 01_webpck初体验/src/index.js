import { sum, mul } from './js/math.js'
const { dateFormat, priceFormat } = require("./js/formate.js")

console.info(sum(20, 30))
console.info(mul(20, 30))
console.info(dateFormat())
console.info(priceFormat())