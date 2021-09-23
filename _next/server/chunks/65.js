"use strict";
exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 7065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ API_accounts_update)
/* harmony export */ });
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _onflow_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2543);
/* harmony import */ var _onflow_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_onflow_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cadence_transactions_updateAccount_cdc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1896);
/* harmony import */ var src_authz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9903);
/* harmony import */ var src_fclConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8923);





async function API_accounts_update(paddress, label, scopes) {
  const address = _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.withPrefix(paddress);
  (0,src_fclConfig__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)("http://localhost:8080", "0xf8d6e0586b0a20c7");
  const authorization = await (0,src_authz__WEBPACK_IMPORTED_MODULE_3__/* .authz */ .w)("0xf8d6e0586b0a20c7", "0", "84f82df6790f07b281adb5bbc848bd6298a2de67f94bdfac7a400d5a1b893de5");

  try {
    const txId = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.send([_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.transaction(cadence_transactions_updateAccount_cdc__WEBPACK_IMPORTED_MODULE_2__), _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.args([_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.arg(address, _onflow_types__WEBPACK_IMPORTED_MODULE_1__.Address), _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.arg(label, _onflow_types__WEBPACK_IMPORTED_MODULE_1__.String), _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.arg(scopes, _onflow_types__WEBPACK_IMPORTED_MODULE_1__.Array(_onflow_types__WEBPACK_IMPORTED_MODULE_1__.String))]), _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.proposer(authorization), _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.payer(authorization), _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.limit(100)]).then(_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.decode);
    await _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.tx(txId).onceSealed();
    return {};
  } catch (_error) {
    return {
      errors: "Account update failed."
    };
  }
}

/***/ }),

/***/ 1896:
/***/ ((module) => {

module.exports = "import FCL from 0xSERVICE\n\ntransaction(address: Address, label: String, scopes: [String]) {\n  prepare() {\n    FCL.update(address: address, label: label, scopes: scopes)\n  }\n}\n";

/***/ })

};
;