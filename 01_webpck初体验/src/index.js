import { sum, mul } from './js/math.js'
const { dateFormate, priceFormate } = require("./js/formate.js")

console.info(sum(20, 30))
console.info(mul(20, 30))
console.info(dateFormate())
console.info(priceFormate())