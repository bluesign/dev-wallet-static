"use strict";
exports.id = 38;
exports.ids = [38];
exports.modules = {

/***/ 1038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_Accounts": () => (/* binding */ API_Accounts)
/* harmony export */ });
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cadence_scripts_getAccounts_cdc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1663);
/* harmony import */ var src_fclConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8923);



async function API_Accounts() {
  (0,src_fclConfig__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)("http://localhost:8080", "0xf8d6e0586b0a20c7");

  try {
    const accounts = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.send([_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.script(cadence_scripts_getAccounts_cdc__WEBPACK_IMPORTED_MODULE_1__)]).then(_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.decode);
    const serviceAccount = accounts.find(acct => acct.address === "0xf8d6e0586b0a20c7");
    const userAccounts = accounts.filter(acct => acct.address !== "0xf8d6e0586b0a20c7").reverse();
    return [serviceAccount, ...userAccounts].filter(Boolean);
  } catch (_error) {
    return [];
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

/***/ 1663:
/***/ ((module) => {

module.exports = "import FCL from 0xSERVICE\n\npub fun main(): [FCL.Account] {\n  return FCL.accounts().values\n}\n";

/***/ })

};
;