"use strict";
exports.id = 352;
exports.ids = [352];
exports.modules = {

/***/ 7047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AccountImage)
});

// EXTERNAL MODULE: external "theme-ui/jsx-runtime"
var jsx_runtime_ = __webpack_require__(1237);
// EXTERNAL MODULE: external "@onflow/fcl"
var fcl_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "react-image"
var external_react_image_ = __webpack_require__(4292);
;// CONCATENATED MODULE: ./src/avatar.ts
const avatar = (avatarUrl, hash) => encodeURI(`${avatarUrl}avatar/${hash}.svg`);
;// CONCATENATED MODULE: ./components/AccountImage.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsxImportSource theme-ui */



const styles = {
  border: "1px solid",
  borderColor: "gray.200",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  "> img": {
    width: "100%"
  }
};
function AccountImage({
  address = "",
  src,
  seed,
  sxStyles = {},
  lg,
  flowAccountAddress,
  avatarUrl
}) {
  const size = lg ? 65 : 40;
  const prefixedAddress = fcl_.withPrefix(address);
  const isServiceAccount = prefixedAddress === fcl_.withPrefix(flowAccountAddress);
  const defaultSrc = isServiceAccount ? "/settings.svg" : avatar(avatarUrl, `${prefixedAddress}-${seed}`);
  return jsx_runtime_.jsx("div", {
    sx: _objectSpread(_objectSpread(_objectSpread({}, styles), sxStyles), {}, {
      width: size,
      height: size,
      borderRadius: size,
      border: isServiceAccount ? 0 : sxStyles.border || styles.border
    }),
    children: jsx_runtime_.jsx(external_react_image_.Img, {
      src: [src || defaultSrc, "/missing-avatar-icon.svg"]
    })
  });
}

/***/ }),

/***/ 7165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ConnectedAppIcon)
/* harmony export */ });
/* harmony import */ var theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1237);
/* harmony import */ var theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


/** @jsxImportSource theme-ui */
const styles = {
  image: {
    borderRadius: 65,
    width: 65
  }
};
function ConnectedAppIcon({
  icon
}) {
  const appIcon = icon || "/missing-app-icon.svg";
  return theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
    src: appIcon,
    sx: styles.image,
    title: icon ? undefined : "Missing app icon"
  });
}

/***/ })

};
;