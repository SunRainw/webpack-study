// 定义了一个对象
// 模块的路径(key): 函数(value)
var __webpack_modules__ = {

    "./src/js/format.js":
      (function (module) {
  
        const dateFormat = data => {
          return "2021-07-04"
        }
  
        const priceFormat = price => {
          return "100.00"
        }
  
        // * 将我们要导出的变量，放入到module对象中的exports对象中，同时也放入了__webpack_module_cache__缓存中
        module.exports = { dateFormat, priceFormat }
  
      })
  
  };
  
  // 定义一个对象，作为加载模块的缓存
  var __webpack_module_cache__ = {};
  
  // 是一个函数当我们加载一个模块时，都会通过这个函数来加载
  function __webpack_require__(moduleId) {
    // * 1. 获取参数对应的缓存值，判断缓存中是否已经加载过
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      // * 如果缓存过就直接从缓存取
      return cachedModule.exports;
    }
  
    // * 2. 给module遍历和__webpack_module_cache__[moduleId]赋值了同一个对象，以后就会共享变化(因为地址一样)
    var module = __webpack_module_cache__[moduleId] = { exports: {} };
  
    // * 加载执行模块
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    
    // * 4. 导出module.exports {dateFormat, priceFormat }
    return module.exports;
  }
  
  var __webpack_exports__ = {};
  
  // * 加!立即执行函数的一种写法，1. (function () {})()  2. (function () {}()) 3. !function() {}()
  // * 默认情况下定的的function无法直接运行，采用取反将其变成表达式后，就可以使用立即执行
  // todo 此处开始执行，前面在定义
  !function () {
    // * 加载./src/js/format
    // todo 从__webpack_require__获取到返回值（{dateFormat, priceFormat }）然后将其解构
    const { dateFormat, priceFormat } = __webpack_require__("./src/js/format.js")
  
    // todo 然后调用上面解构的函数
    console.log(dateFormat("abc"))
    console.log(priceFormat("abc"))
  }();
  