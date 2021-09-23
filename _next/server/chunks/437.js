"use strict";
exports.id = 437;
exports.ids = [437];
exports.modules = {

/***/ 1408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1237);
/* harmony import */ var theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useVariants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7426);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7631);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsxImportSource theme-ui */




const Button = (_ref) => {
  let {
    variant = "primary",
    size = "md",
    block = false,
    sx = {},
    disabled,
    href,
    target
  } = _ref,
      props = _objectWithoutProperties(_ref, ["variant", "size", "block", "sx", "disabled", "href", "target"]);

  const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const variants = (0,hooks_useVariants__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)([`buttons.${disabled ? "disabled" : variant}`, `buttons.sizes.${size}`, `${variant === "unstyled" ? "buttons.unstyled" : ""}`]);

  const style = _objectSpread(_objectSpread({
    display: "inline-flex",
    cursor: "pointer",
    textTransform: "uppercase",
    alignItems: "center",
    justifyContent: "center",
    width: block ? "100%" : "auto",
    m: 0,
    border: 0,
    borderRadius: 4,
    textDecoration: "none",
    fontFamily: "body",
    "&:hover": {
      opacity: 0.9
    }
  }, variants), sx);

  if (!!href) {
    return theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__.Link, _objectSpread(_objectSpread({
      href: href,
      sx: style,
      target: target
    }, props), {}, {
      children: props.children
    }));
  }

  return theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__.Button, _objectSpread(_objectSpread({}, props), {}, {
    sx: style,
    ref: ref,
    disabled: disabled,
    children: props.children
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ 1905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Dialog)
/* harmony export */ });
/* harmony import */ var theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1237);
/* harmony import */ var theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6786);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4025);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useAuthzContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7631);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ExpandCollapseButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5914);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsxImportSource theme-ui */






const styles = {
  dialog: {
    width: ["100%", 500],
    height: "90vh",
    margin: "0 auto",
    backgroundColor: "white",
    boxShadow: "0px 4px 74px 0px #00000026",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column"
  },
  dialogExpanded: {
    width: ["100%", "100%", "100%", 950],
    minHeight: "auto"
  },
  header: {
    position: "sticky",
    zIndex: 1,
    top: 0
  },
  topHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 52,
    pl: 3,
    pr: 1,
    borderBottom: "1px solid",
    borderColor: "gray.200"
  },
  footer: {
    position: "sticky",
    zIndex: 1,
    bottom: 0
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  logoText: {
    ml: 1,
    fontSize: 1,
    color: "gray.500",
    marginTop: 1
  },
  closeButton: {
    width: 30,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  "closeButton:hover": {
    opacity: 0.5
  },
  body: {
    pt: 40,
    px: [15, 30],
    pb: 10,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    overflowY: "auto"
  }
};
function Dialog({
  title,
  header,
  footer,
  children
}) {
  const closeButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);

  const onClose = () => _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.WalletUtils.close();

  const {
    isExpanded,
    setCodePreview
  } = (0,hooks_useAuthzContext__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)();
  return (// @ts-expect-error The headless-ui dialog raises a "Expression produces a union type that is too complex to represent" error when used with theme-ui sx props
    // See https://github.com/tailwindlabs/headlessui/issues/233, https://github.com/tailwindlabs/headlessui/issues/330
    (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
      open: true,
      onClose: onClose,
      sx: _objectSpread(_objectSpread({}, styles.dialog), isExpanded ? styles.dialogExpanded : {}),
      initialFocus: closeButtonRef,
      children: [theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Overlay, {}), (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        sx: _objectSpread(_objectSpread({}, styles.header), {}, {
          mb: isExpanded ? 0 : styles.header.mb
        }),
        children: [(0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          sx: styles.topHeader,
          children: [(0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            sx: styles.logo,
            children: [theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: "/flow-logo.svg"
            }), theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              sx: styles.logoText,
              children: ["FCL Dev Wallet", title].filter(Boolean).join(" - ")
            })]
          }), isExpanded ? theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_5__.Box, {
            mr: 2,
            children: theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ExpandCollapseButton__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
              onClick: () => setCodePreview(null)
            })
          }) : theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
            variant: "unstyled",
            onClick: onClose,
            sx: styles.closeButton,
            ref: closeButtonRef,
            children: theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: "/x-icon.svg"
            })
          })]
        }), header]
      }), theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        sx: _objectSpread(_objectSpread({}, styles.body), {}, {
          pt: isExpanded ? 0 : styles.body.pt,
          pb: isExpanded ? 0 : styles.body.pb
        }),
        children: children
      }), theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        sx: styles.footer,
        children: footer
      })]
    })
  );
}

/***/ }),

/***/ 5914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ExpandCollapseButton)
/* harmony export */ });
/* harmony import */ var theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1237);
/* harmony import */ var theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useAuthzContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7631);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1408);



/** @jsxImportSource theme-ui */



function ExpandCollapseButton({
  onClick
}) {
  const {
    isExpanded
  } = (0,hooks_useAuthzContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)();
  return (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Button__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    variant: "link",
    size: "xs",
    onClick: onClick,
    children: [isExpanded ? "collapse" : "expand", theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Flex, {
      ml: 2,
      sx: {
        alignItems: "center",
        justifyContent: "center"
      },
      children: theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: `/${isExpanded ? "collapse" : "expand"}.svg`
      })
    })]
  });
}

/***/ }),

/***/ 8095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthzContext),
/* harmony export */   "w": () => (/* binding */ AuthzContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6786);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useAccounts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5538);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





const AuthzContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({
  currentUser: {},
  proposer: {},
  payer: {},
  authorizers: [],
  roles: {},
  proposalKey: {
    address: "",
    keyId: 0,
    sequenceNum: 0
  },
  args: [],
  cadence: "",
  computeLimit: 0,
  refBlock: "",
  message: "",
  id: "",
  codePreview: null,
  setCodePreview: () => null,
  isExpanded: false,
  connectedAppConfig: undefined
});
function AuthzContextProvider({
  children
}) {
  const {
    0: signable,
    1: setSignable
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const {
    0: id,
    1: setId
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const {
    0: codePreview,
    1: setCodePreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const {
    data: accountsData
  } = (0,hooks_useAccounts__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    function callback({
      data
    }) {
      if (data == null) return;
      if (data.jsonrpc != "2.0") return;
      if (data.method != "fcl:sign") return;
      const [signable] = data.params;
      delete signable.interaction;
      setId(data.id);
      setSignable(signable);
    }

    window.addEventListener("message", callback);
    _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.WalletUtils.sendMsgToFCL("FCL:VIEW:READY");
    return () => window.removeEventListener("message", callback);
  }, []);
  const accounts = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    if (!accountsData) return {};
    const hash = {};
    accountsData.forEach(account => hash[account.address] = account);
    return hash;
  }, [accountsData]);
  if (!signable || !id || Object.entries(accounts).length === 0) return null;
  const {
    addr: currentUserAddress,
    voucher,
    roles,
    message
  } = signable;
  const savedConnectedAppConfig = localStorage.getItem("connectedAppConfig");
  const value = {
    currentUser: accounts[_onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.withPrefix(currentUserAddress)],
    proposer: accounts[_onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.withPrefix(voucher.proposalKey.address)],
    payer: accounts[_onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.withPrefix(voucher.payer)],
    authorizers: voucher.authorizers.map(authorizer => accounts[_onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.withPrefix(authorizer)]),
    roles,
    proposalKey: voucher.proposalKey,
    args: voucher.arguments,
    cadence: voucher.cadence,
    computeLimit: voucher.computeLimit,
    refBlock: voucher.refBlock,
    message,
    id,
    codePreview,
    setCodePreview,
    isExpanded: codePreview !== null,
    connectedAppConfig: savedConnectedAppConfig ? JSON.parse(savedConnectedAppConfig) : undefined,
    appTitle: "Test Harness",
    appIcon: "https://placekitten.com/g/200/200"
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthzContext.Provider, {
    value: value,
    children: children
  });
}

/***/ }),

/***/ 5538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useAccounts)
/* harmony export */ });
/* harmony import */ var pages_api_accounts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1038);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7749);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);



function getAccounts() {
  return (0,pages_api_accounts__WEBPACK_IMPORTED_MODULE_0__.API_Accounts)().then(res => res);
}

function useAccounts() {
  console.log("getAccounts");
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_1___default()("accounts", getAccounts);
  return {
    data,
    error: error,
    isLoading: !error && !data
  };
}

/***/ }),

/***/ 11:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var contexts_AuthzContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8095);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const useAuthzContext = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(contexts_AuthzContext__WEBPACK_IMPORTED_MODULE_0__/* .AuthzContext */ .H);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuthzContext);

/***/ }),

/***/ 7426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useVariants)
/* harmony export */ });
/* harmony import */ var _theme_ui_match_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6704);
/* harmony import */ var _theme_ui_match_media__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_theme_ui_match_media__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4496);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7631);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Adds support for multiple variants https://github.com/system-ui/theme-ui/issues/403#issuecomment-561322255



function useVariants(...variantBlocks) {
  const variants = (0,_theme_ui_match_media__WEBPACK_IMPORTED_MODULE_0__.useResponsiveValue)(variantBlocks);
  let styles = {};
  variants.map(variant => {
    styles = _objectSpread(_objectSpread({}, styles), (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.get)(src_theme__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, variant));
  });
  return styles;
}

/***/ }),

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

/***/ })

};
;