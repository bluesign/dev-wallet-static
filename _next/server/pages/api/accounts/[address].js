"use strict";
(() => {
var exports = {};
exports.id = 235;
exports.ids = [235,463];
exports.modules = {

/***/ 138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ API_accounts_address)
/* harmony export */ });
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _onflow_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2543);
/* harmony import */ var _onflow_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_onflow_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cadence_scripts_getAccount_cdc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5424);
/* harmony import */ var src_fclConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8923);




async function API_accounts_address(address) {
  (0,src_fclConfig__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)("http://localhost:8080", "0xf8d6e0586b0a20c7");

  try {
    const account = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.send([_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.script(cadence_scripts_getAccount_cdc__WEBPACK_IMPORTED_MODULE_2__), _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.args([_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.arg(address, _onflow_types__WEBPACK_IMPORTED_MODULE_1__.Address)])]).then(_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.decode);
    return account;
  } catch (_error) {
    return {};
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

/***/ 5424:
/***/ ((module) => {

module.exports = "pub fun main(address: Address): PublicAccount {\n  return getAccount(address)\n}\n";

/***/ }),

/***/ 6786:
/***/ ((module) => {

module.exports = require("@onflow/fcl");

/***/ }),

/***/ 2543:
/***/ ((module) => {

module.exports = require("@onflow/types");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(138));
module.exports = __webpack_exports__;

})();