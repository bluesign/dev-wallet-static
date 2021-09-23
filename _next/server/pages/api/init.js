"use strict";
(() => {
var exports = {};
exports.id = 965;
exports.ids = [965,463,272];
exports.modules = {

/***/ 4007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hb": () => (/* binding */ paths),
/* harmony export */   "y$": () => (/* binding */ FLOW_EVENT_TYPES),
/* harmony export */   "HN": () => (/* binding */ LABEL_MISSING_ERROR),
/* harmony export */   "Fw": () => (/* binding */ SERVICE_ACCOUNT_LABEL),
/* harmony export */   "jQ": () => (/* binding */ UNTITLED_APP_NAME)
/* harmony export */ });
const paths = {
  root: "/",
  apiInit: "/api/init",
  apiAccount: address => `/api/accounts/${address}`,
  apiAccountUpdate: address => `/api/accounts/${address}/update`,
  apiAccounts: "/api/accounts",
  apiAccountsNew: "/api/accounts/new",
  apiConfig: "/api/config",
  apiSign: "/api/sign",
  userSig: "/api/user-sig"
};
const FLOW_EVENT_TYPES = {
  accountCreated: "flow.AccountCreated"
};
const LABEL_MISSING_ERROR = "Label is required.";
const SERVICE_ACCOUNT_LABEL = "Service Account";
const UNTITLED_APP_NAME = "Untitled Dapp";

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

/***/ }),

/***/ 2543:
/***/ ((module) => {

module.exports = require("@onflow/types");

/***/ }),

/***/ 7204:
/***/ ((module) => {

module.exports = require("@onflow/util-encode-key");

/***/ }),

/***/ 8080:
/***/ ((module) => {

module.exports = require("elliptic");

/***/ }),

/***/ 8877:
/***/ ((module) => {

module.exports = require("namegenerator");

/***/ }),

/***/ 8422:
/***/ ((module) => {

module.exports = require("sha3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [903,403], () => (__webpack_exec__(8403)));
module.exports = __webpack_exports__;

})();