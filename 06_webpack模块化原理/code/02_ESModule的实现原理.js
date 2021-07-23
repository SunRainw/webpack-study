// 1. 定义了一个对象，对象里面放的是我们的模块映射
var __webpack_modules__ = ({

  "./src/js/math.js":
    (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

      // * 调用r，记录是一个__esModule -> true
      __webpack_require__.r(__webpack_exports__);
      // * exports对象本身是没有对应的函数
      __webpack_require__.d(__webpack_exports__, {
        "sum": function () { return sum; },
        "mul": function () { return mul; }
      });
      const sum = (num1, num2) => {
        return num1 + num2
      }

      const mul = (num1, num2) => {
        return num1 * num2
      }

    })

});

// * 模块的缓存
var __webpack_module_cache__ = {};

// * 3. require函数的实现(加载模块)
function __webpack_require__(moduleId) {
  var cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  var module = __webpack_module_cache__[moduleId] = {
    exports: {}
  };

  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

  return module.exports;
}

// * 立即执行函数
!function () {
  // * 函数本身也是一个对象，给__webpack_require__这个函数添加一个d属性，它的值是一个function
  __webpack_require__.d = function (exports, definition) {
    // * 遍历传入的对象
    for (var key in definition) {
      // * 调用o判断definition和exports是否有key这个属性
      if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        // * definition有且exports没有这个属性
        // * 就给exports定义key这个属性，设置为可枚举的并重写get方法
        // * 该get方法相当于做了一个代理，当我们exports[key]调用时，实际回去访问definition[key]
        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
      }
    }
  };
}();

!function () {
  // * 给__webpack_require__这个函数添加一个o属性，它的值是一个function
  // * 用于判断obj中是否有prop这个属性
  __webpack_require__.o = function (obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
}();

!function () {
  // * 给__webpack_require__这个函数添加一个r属性，它的值是一个function
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      // * 如果支持Symbol的话
      // * 给exports添加一个Symbol.toStringTag属性，告诉其是一个模块
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    // * 给exports添加一个__esModule属性，标记加载的是一个ES Module
    Object.defineProperty(exports, '__esModule', { value: true });
  };
}();


var __webpack_exports__ = {};
!function () {
  // * 调用r，记录是一个__esModule -> true
  __webpack_require__.r(__webpack_exports__);
  // * 本质就是调用__webpack_modules__的./src/js/math.js属性，它是一个函数
  // * _js_math__WEBPACK_IMPORTED_MODULE_0__就等于exports
  var _js_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/math.js");

  // * 下面的语法相当于func(20, 30)
  console.log((0, _js_math__WEBPACK_IMPORTED_MODULE_0__.sum)(20, 30))
  console.log((0, _js_math__WEBPACK_IMPORTED_MODULE_0__.mul)(20, 30))
}();
