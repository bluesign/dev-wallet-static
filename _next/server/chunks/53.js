"use strict";
exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 6600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1237);
/* harmony import */ var theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1408);



/** @jsxImportSource theme-ui */

const styles = {
  actionsContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    bottom: 0,
    borderTop: "1px solid",
    borderColor: "gray.200",
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    px: 20
  },
  actions: {
    display: "flex",
    flex: 1,
    pt: 20,
    pb: 20
  }
};

function AuthzActions({
  onApprove,
  onDecline,
  isLoading
}) {
  return theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    sx: styles.actionsContainer,
    children: (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      sx: styles.actions,
      children: [theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        variant: "ghost",
        size: "lg",
        sx: {
          flex: 1,
          mx: 10,
          w: "50%"
        },
        onClick: onDecline,
        children: "Decline"
      }), theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        size: "lg",
        sx: {
          flex: 1,
          mx: 10,
          w: "50%"
        },
        onClick: onApprove,
        disabled: isLoading,
        children: "Approve"
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthzActions);

/***/ }),

/***/ 9536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jW": () => (/* binding */ AuthzDetailsAccount),
/* harmony export */   "Pk": () => (/* binding */ AuthzDetailsRow),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1237);
/* harmony import */ var theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_ui_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4378);
/* harmony import */ var _theme_ui_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_theme_ui_color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useAuthzContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsxImportSource theme-ui */


const styles = {
  table: {
    fontSize: [0, 1],
    width: "100%",
    borderCollapse: "collapse",
    "word-break": "break-word"
  },
  row: {
    "> td": {
      borderBottom: "1px solid",
      borderColor: (0,_theme_ui_color__WEBPACK_IMPORTED_MODULE_1__.alpha)("gray.200", 0.7),
      verticalAlign: "top",
      py: 1,
      "&:first-of-type": {
        color: "gray.500"
      },
      "&:last-of-type": {
        textAlign: "right",
        fontFamily: "monospace",
        letterSpacing: "0.16em"
      }
    },
    "&:last-of-type": {
      "> td": {
        border: 0
      }
    }
  },
  accountDetail: {
    display: "flex",
    alignItems: ["flex-end", "center"],
    justifyContent: "flex-end",
    flexDirection: ["column", "row"]
  },
  accountDetailLabel: {
    textTransform: "uppercase",
    fontFamily: "sans-serif",
    fontSize: "0.625rem",
    letterSpacing: "initial",
    color: "gray.300",
    border: "1px solid",
    borderColor: "gray.200",
    borderRadius: 20,
    px: 2
  },
  accountAddress: {
    ml: 2
  },
  accountDetailLabelCurrent: {
    backgroundColor: "primary",
    borderColor: "primary",
    color: "black",
    fontWeight: 700
  }
};
function AuthzDetailsAccount({
  account
}) {
  const {
    currentUser
  } = (0,hooks_useAuthzContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
  const isCurrent = account.address === currentUser.address;
  return (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    sx: styles.accountDetail,
    children: [theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      sx: _objectSpread(_objectSpread({}, styles.accountDetailLabel), isCurrent ? styles.accountDetailLabelCurrent : {}),
      children: account.label
    }), theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      sx: styles.accountAddress,
      children: account.address
    })]
  });
}
function AuthzDetailsRow({
  children
}) {
  return theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
    sx: styles.row,
    children: children
  });
}

function AuthzDetailsTable({
  children
}) {
  return (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
    sx: styles.table,
    children: [theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
      children: (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
        children: [theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
          sx: {
            minWidth: 100
          }
        }), theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {})]
      })
    }), theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
      children: children
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthzDetailsTable);

/***/ })

};
;