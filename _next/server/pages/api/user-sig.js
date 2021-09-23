"use strict";
(() => {
var exports = {};
exports.id = 856;
exports.ids = [856,272];
exports.modules = {

/***/ 5005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ API_user_sig)
/* harmony export */ });
/* harmony import */ var src_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1674);

async function API_user_sig(message, addr, keyId) {
  // UserDomainTag is the prefix of all signed user space payloads.
  //
  // A domain tag is encoded as UTF-8 bytes, right padded to a total length of 32 bytes.
  const rightPaddedHexBuffer = (value, pad) => Buffer.from(value.padEnd(pad * 2, "0"), "hex");

  const USER_DOMAIN_TAG = rightPaddedHexBuffer(Buffer.from("FLOW-V0.0-user").toString("hex"), 32).toString("hex");

  const prependUserDomainTag = msg => USER_DOMAIN_TAG + msg;

  return {
    addr: addr,
    keyId: keyId,
    signature: (0,src_crypto__WEBPACK_IMPORTED_MODULE_0__/* .sign */ .X)("84f82df6790f07b281adb5bbc848bd6298a2de67f94bdfac7a400d5a1b893de5", prependUserDomainTag(message))
  };
}

/***/ }),

/***/ 1674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ encodeServiceKey),
/* harmony export */   "X": () => (/* binding */ sign)
/* harmony export */ });
/* harmony import */ var _onflow_util_encode_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7204);
/* harmony import */ var _onflow_util_encode_key__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_onflow_util_encode_key__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8080);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sha3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8422);
/* harmony import */ var sha3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sha3__WEBPACK_IMPORTED_MODULE_2__);



const ec = new elliptic__WEBPACK_IMPORTED_MODULE_1__.ec("p256");
const encodeServiceKey = flowAccountPublicKey => {
  return (0,_onflow_util_encode_key__WEBPACK_IMPORTED_MODULE_0__.encodeKey)(flowAccountPublicKey, _onflow_util_encode_key__WEBPACK_IMPORTED_MODULE_0__.ECDSA_P256, _onflow_util_encode_key__WEBPACK_IMPORTED_MODULE_0__.SHA3_256, 1000);
};

const hashMsgHex = msgHex => {
  const sha = new sha3__WEBPACK_IMPORTED_MODULE_2__.SHA3(256);
  sha.update(Buffer.from(msgHex, "hex"));
  return sha.digest();
};

function sign(privateKey, msgHex) {
  const key = ec.keyFromPrivate(Buffer.from(privateKey, "hex"));
  const sig = key.sign(hashMsgHex(msgHex));
  const n = 32; // half of signature length?

  const r = sig.r.toArrayLike(Buffer, "be", n);
  const s = sig.s.toArrayLike(Buffer, "be", n);
  return Buffer.concat([r, s]).toString("hex");
}

/***/ }),

/***/ 7204:
/***/ ((module) => {

module.exports = require("@onflow/util-encode-key");

/***/ }),

/***/ 8080:
/***/ ((module) => {

module.exports = require("elliptic");

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
var __webpack_exports__ = (__webpack_exec__(5005));
module.exports = __webpack_exports__;

})();