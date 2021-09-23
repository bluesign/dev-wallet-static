"use strict";
exports.id = 903;
exports.ids = [903];
exports.modules = {

/***/ 9903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ authz)
/* harmony export */ });
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1674);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // alias Hex = String
// type signable = { message: Hex, voucher: voucher }
// type compositeSignature = { addr: String, keyId: Number, signature: Hex }
// signingFunction :: signable -> compositeSignature
// type account = { tempId: String, addr: String, keyId: Number, signingFunction: signingFunction }
// authz :: account -> account

async function authz(flowAccountAddress, flowAccountKeyId, flowAccountPrivateKey) {
  return account => {
    return _objectSpread(_objectSpread({}, account), {}, {
      // the tempId here is a very special and specific case.
      // what you are usually looking for in a tempId value is a unique string for the address and keyId as a pair
      // if you have no idea what this is doing, or what it does, or are getting an error in your own
      // implementation of an authorization function it is recommended that you use a string with the address and keyId in it.
      // something like... tempId: `${address}-${keyId}`
      tempId: "SERVICE_ACCOUNT",
      addr: _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.sansPrefix(flowAccountAddress),
      // eventually it wont matter if this address has a prefix or not, sadly :'( currently it does matter.
      keyId: Number(flowAccountKeyId),
      // must be a number
      signingFunction: signable => ({
        addr: _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.withPrefix(flowAccountAddress),
        // must match the address that requested the signature, but with a prefix
        keyId: Number(flowAccountKeyId),
        // must match the keyId in the account that requested the signature
        signature: (0,_crypto__WEBPACK_IMPORTED_MODULE_1__/* .sign */ .X)(flowAccountPrivateKey, signable.message) // signable.message |> hexToBinArray |> hash |> sign |> binArrayToHex
        // if you arent in control of the transaction that is being signed we recommend constructing the
        // message from signable.voucher using the @onflow/encode module

      })
    });
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

/***/ })

};
;