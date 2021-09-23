"use strict";
exports.id = 632;
exports.ids = [632];
exports.modules = {

/***/ 1632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ API_sign)
/* harmony export */ });
/* harmony import */ var src_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1674);

function API_sign(message) {
  const result = {
    signature: (0,src_crypto__WEBPACK_IMPORTED_MODULE_0__/* .sign */ .X)("84f82df6790f07b281adb5bbc848bd6298a2de67f94bdfac7a400d5a1b893de5", message)
  };
  console.log("signed");
  console.log(src_crypto__WEBPACK_IMPORTED_MODULE_0__/* .sign */ .X);
  console.log(result);
  return result;
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

/***/ })

};
;