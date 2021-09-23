"use strict";
exports.id = 470;
exports.ids = [470];
exports.modules = {

/***/ 5470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ API_accounts_new)
/* harmony export */ });
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _onflow_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2543);
/* harmony import */ var _onflow_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_onflow_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cadence_transactions_newAccount_cdc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9875);
/* harmony import */ var src_authz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9903);
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4007);
/* harmony import */ var src_fclConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8923);






async function API_accounts_new(label, scopes) {
  (0,src_fclConfig__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)("http://localhost:8080", "0xf8d6e0586b0a20c7");
  const authorization = await (0,src_authz__WEBPACK_IMPORTED_MODULE_3__/* .authz */ .w)("0xf8d6e0586b0a20c7", "0", "84f82df6790f07b281adb5bbc848bd6298a2de67f94bdfac7a400d5a1b893de5");

  try {
    var _createdAccountEvent$;

    const txId = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.send([_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.transaction(cadence_transactions_newAccount_cdc__WEBPACK_IMPORTED_MODULE_2__), _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.args([_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.arg(label, _onflow_types__WEBPACK_IMPORTED_MODULE_1__.String), _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.arg(scopes, _onflow_types__WEBPACK_IMPORTED_MODULE_1__.Array(_onflow_types__WEBPACK_IMPORTED_MODULE_1__.String))]), _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.proposer(authorization), _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.payer(authorization), _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.limit(100)]).then(_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.decode);
    const txStatus = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.tx(txId).onceSealed();
    const createdAccountEvent = txStatus.events.find(e => e.type === src_constants__WEBPACK_IMPORTED_MODULE_4__/* .FLOW_EVENT_TYPES.accountCreated */ .y$.accountCreated);
    if (!(createdAccountEvent !== null && createdAccountEvent !== void 0 && (_createdAccountEvent$ = createdAccountEvent.data) !== null && _createdAccountEvent$ !== void 0 && _createdAccountEvent$.address)) throw "Account address not created";
    return {
      address: createdAccountEvent.data.address
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("ISSUE CREATING ACCOUNT", error);
    return {
      errors: ["Account creation failed."]
    };
  }
}

/***/ }),

/***/ 9875:
/***/ ((module) => {

module.exports = "import FCL from 0xSERVICE\n\ntransaction(label: String, scopes: [String]) {\n  prepare() {\n    FCL.new(label: label, scopes: scopes, address: nil)\n  }\n}\n";

/***/ })

};
;