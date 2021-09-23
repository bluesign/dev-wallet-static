"use strict";
(() => {
var exports = {};
exports.id = 421;
exports.ids = [421,463];
exports.modules = {

/***/ 976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ API_is_init)
/* harmony export */ });
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_fclConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8923);


async function API_is_init() {
  (0,src_fclConfig__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)("http://localhost:8080", "0xf8d6e0586b0a20c7");
  console.log("is_init");

  try {
    const account = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.send([_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.getAccount("0xf8d6e0586b0a20c7")]).then(_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.decode);

    if (account["contracts"]["FCL"]) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

/***/ }),

/***/ 8923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ fclConfig)
/* harmony export */ });
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__);

function fclConfig(flowAccessNode, flowAccountAddress) {
  (0,_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.config)().put("accessNode.api", flowAccessNode).put("0xSERVICE", flowAccountAddress);
}

/***/ }),

/***/ 6786:
/***/ ((module) => {

module.exports = require("@onflow/fcl");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(976));
module.exports = __webpack_exports__;

})();