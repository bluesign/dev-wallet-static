"use strict";
(() => {
var exports = {};
exports.id = 869;
exports.ids = [869,463,272];
exports.modules = {

/***/ 8531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ authz),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "theme-ui/jsx-runtime"
var jsx_runtime_ = __webpack_require__(1237);
// EXTERNAL MODULE: external "@onflow/fcl"
var fcl_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./components/AuthzActions.tsx
var AuthzActions = __webpack_require__(6600);
// EXTERNAL MODULE: ./hooks/useAuthzContext.ts
var useAuthzContext = __webpack_require__(11);
// EXTERNAL MODULE: ./components/AuthzDetailsTable.tsx
var AuthzDetailsTable = __webpack_require__(9536);
;// CONCATENATED MODULE: external "@monaco-editor/react"
const react_namespaceObject = require("@monaco-editor/react");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/cadence.ts
// Imported from https://github.com/onflow/flow-playground/blob/master/src/util/cadence.ts
const CADENCE_LANGUAGE_ID = "cadence";
function configureCadence(monaco) {
  monaco.languages.register({
    id: CADENCE_LANGUAGE_ID,
    extensions: [".cdc"],
    aliases: ["CDC", "cdc"]
  });
  const languageDef = {
    keywords: ["if", "else", "return", "continue", "break", "while", "pre", "post", "prepare", "execute", "import", "from", "create", "destroy", "priv", "pub", "get", "set", "log", "emit", "event", "init", "struct", "interface", "fun", "let", "var", "resource", "access", "all", "contract", "self", "transaction"],
    typeKeywords: ["AnyStruct", "AnyResource", "Void", "Never", "String", "Character", "Bool", "Self", "Int8", "Int16", "Int32", "Int64", "Int128", "Int256", "UInt8", "UInt16", "UInt32", "UInt64", "UInt128", "UInt256", "Word8", "Word16", "Word32", "Word64", "Word128", "Word256", "Fix64", "UFix64"],
    operators: ["<-", "<=", ">=", "==", "!=", "+", "-", "*", "/", "%", "&", "!", "&&", "||", "?", "??", ":", "=", "@"],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    digits: /\d+(_+\d+)*/,
    octaldigits: /[0-7]+(_+[0-7]+)*/,
    binarydigits: /[0-1]+(_+[0-1]+)*/,
    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
    tokenizer: {
      root: [[/[{}]/, "delimiter.bracket"], {
        include: "common"
      }],
      common: [// identifiers and keywords
      [/[a-z_$][\w$]*/, {
        cases: {
          "@typeKeywords": "keyword",
          "@keywords": "keyword",
          "@default": "identifier"
        }
      }], [/[A-Z][\w]*/, "type.identifier"], // to show class names nicely
      // whitespace
      {
        include: "@whitespace"
      }, // delimiters and operators
      [/[()\[\]]/, "@brackets"], [/[<>](?!@symbols)/, "@brackets"], [/@symbols/, {
        cases: {
          "@operators": "delimiter",
          "@default": ""
        }
      }], // numbers
      [/(@digits)[eE]([\-+]?(@digits))?/, "number.float"], [/(@digits)\.(@digits)([eE][\-+]?(@digits))?/, "number.float"], [/0[xX](@hexdigits)/, "number.hex"], [/0[oO]?(@octaldigits)/, "number.octal"], [/0[bB](@binarydigits)/, "number.binary"], [/(@digits)/, "number"], // delimiter: after number because of .\d floats
      [/[;,.]/, "delimiter"], // strings
      [/"([^"\\]|\\.)*$/, "string.invalid"], // non-teminated string
      [/"/, "string", "@string_double"]],
      whitespace: [[/[ \t\r\n]+/, ""], [/\/\*/, "comment", "@comment"], [/\/\/.*$/, "comment"]],
      comment: [[/[^\/*]+/, "comment"], [/\*\//, "comment", "@pop"], [/[\/*]/, "comment"]],
      string_double: [[/[^\\"]+/, "string"], [/@escapes/, "string.escape"], [/\\./, "string.escape.invalid"], [/"/, "string", "@pop"]]
    }
  };
  monaco.languages.setMonarchTokensProvider(CADENCE_LANGUAGE_ID, languageDef);
}
// EXTERNAL MODULE: ./components/ExpandCollapseButton.tsx
var ExpandCollapseButton = __webpack_require__(5914);
;// CONCATENATED MODULE: ./components/Code.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsxImportSource theme-ui */





const styles = {
  codeContainer: {
    mx: [-15, -30]
  },
  block: {
    backgroundColor: "gray.100",
    overflow: "hidden",
    cursor: "pointer",
    py: 15,
    px: [15, 30]
  },
  blockExpanded: {
    backgroundColor: "white",
    maxHeight: "initial",
    cursor: "inherit",
    pl: 1,
    py: 0,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    code: {
      "> span:before": {
        display: "inline-block"
      }
    }
  },
  code: {
    display: "flex",
    flexDirection: "column",
    whiteSpace: "pre",
    "> br": {
      display: "none"
    },
    "> span": {
      counterIncrement: "line",
      "&:first-of-type:before": {
        pt: 2
      },
      "&:last-of-type:before": {
        pb: 2
      },
      "&:before": {
        display: "none",
        backgroundColor: "gray.100",
        borderRight: "1px solid",
        borderColor: "gray.300",
        content: "counter(line)",
        color: "gray.500",
        textAlign: "center",
        mr: 3,
        px: "2px",
        minWidth: 20
      }
    }
  },
  header: {
    height: 30,
    px: [15, 30],
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderTop: "1px solid",
    borderBottom: "1px solid",
    borderColor: "gray.200"
  },
  headerTitle: {
    color: "gray.300",
    textTransform: "uppercase",
    fontSize: 0
  },
  largeExpandButton: {
    background: "transparent",
    border: 0,
    padding: 0,
    display: "block",
    width: "100%",
    textAlign: "initial"
  }
};

function CodeBlock({
  isExpanded,
  colorizedSafeHtml
}) {
  return jsx_runtime_.jsx("div", {
    sx: _objectSpread(_objectSpread({}, styles.block), isExpanded ? styles.blockExpanded : {}),
    children: colorizedSafeHtml.length > 0 && jsx_runtime_.jsx("code", {
      sx: _objectSpread(_objectSpread({}, styles.code), {}, {
        overflow: isExpanded ? "scroll" : "hidden"
      }),
      dangerouslySetInnerHTML: {
        __html: colorizedSafeHtml
      }
    })
  });
}

function Code({
  title,
  value
}) {
  const monaco = (0,react_namespaceObject.useMonaco)();
  const {
    0: colorizedSafeHtml,
    1: setColorizedHtml
  } = (0,external_react_.useState)("");
  const {
    isExpanded,
    setCodePreview
  } = (0,useAuthzContext/* default */.Z)();
  (0,external_react_.useEffect)(() => {
    if (monaco) {
      configureCadence(monaco);
      monaco.editor.colorize(value, CADENCE_LANGUAGE_ID, {
        tabSize: 2
      }).then(setColorizedHtml);
    }
  }, [monaco, value]);

  const expand = () => setCodePreview({
    title,
    value
  });

  return (0,jsx_runtime_.jsxs)("div", {
    sx: styles.codeContainer,
    children: [(0,jsx_runtime_.jsxs)("div", {
      sx: _objectSpread(_objectSpread({}, styles.header), {}, {
        borderTop: isExpanded ? 0 : styles.header.borderTop
      }),
      children: [jsx_runtime_.jsx("div", {
        sx: styles.headerTitle,
        children: title
      }), !isExpanded && jsx_runtime_.jsx("div", {
        children: jsx_runtime_.jsx(ExpandCollapseButton/* default */.Z, {
          onClick: expand
        })
      })]
    }), isExpanded ? jsx_runtime_.jsx(CodeBlock, {
      isExpanded: isExpanded,
      colorizedSafeHtml: colorizedSafeHtml
    }) : jsx_runtime_.jsx("button", {
      onClick: expand,
      sx: styles.largeExpandButton,
      children: jsx_runtime_.jsx(CodeBlock, {
        isExpanded: isExpanded,
        colorizedSafeHtml: colorizedSafeHtml
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/AuthzDetails.tsx



function AuthzDetails_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AuthzDetails_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AuthzDetails_ownKeys(Object(source), true).forEach(function (key) { AuthzDetails_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AuthzDetails_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AuthzDetails_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsxImportSource theme-ui */



const AuthzDetails_styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100%",
    mx: [-15, -30]
  },
  wrappedValue: {
    width: [170, 200],
    overflowWrap: "break-word",
    textAlign: "right",
    ml: "auto"
  },
  codeContainer: {
    mt: 3,
    mb: -20,
    maxWidth: [332, "100%"]
  }
};

function AuthzDetails() {
  const {
    proposer,
    payer,
    authorizers,
    proposalKey,
    computeLimit,
    refBlock,
    args,
    cadence
  } = (0,useAuthzContext/* default */.Z)();
  return jsx_runtime_.jsx("div", {
    sx: AuthzDetails_styles.container,
    children: (0,jsx_runtime_.jsxs)("div", {
      sx: {
        px: [15, 30],
        display: "flex",
        flexDirection: "column",
        "overflow-x": "hidden"
      },
      children: [(0,jsx_runtime_.jsxs)(AuthzDetailsTable/* default */.ZP, {
        children: [(0,jsx_runtime_.jsxs)(AuthzDetailsTable/* AuthzDetailsRow */.Pk, {
          children: [jsx_runtime_.jsx("td", {
            children: "Proposer"
          }), jsx_runtime_.jsx("td", {
            children: jsx_runtime_.jsx(AuthzDetailsTable/* AuthzDetailsAccount */.jW, {
              account: proposer
            })
          })]
        }), (0,jsx_runtime_.jsxs)(AuthzDetailsTable/* AuthzDetailsRow */.Pk, {
          children: [jsx_runtime_.jsx("td", {
            children: "Payer"
          }), jsx_runtime_.jsx("td", {
            children: jsx_runtime_.jsx(AuthzDetailsTable/* AuthzDetailsAccount */.jW, {
              account: payer
            })
          })]
        }), (0,jsx_runtime_.jsxs)(AuthzDetailsTable/* AuthzDetailsRow */.Pk, {
          children: [jsx_runtime_.jsx("td", {
            children: "Authorizers"
          }), jsx_runtime_.jsx("td", {
            children: authorizers.map(authorizer => jsx_runtime_.jsx(AuthzDetailsTable/* AuthzDetailsAccount */.jW, {
              account: authorizer
            }, authorizer.address))
          })]
        }), (0,jsx_runtime_.jsxs)(AuthzDetailsTable/* AuthzDetailsRow */.Pk, {
          children: [jsx_runtime_.jsx("td", {
            children: "Proposal Key"
          }), jsx_runtime_.jsx("td", {
            children: jsx_runtime_.jsx("div", {
              sx: AuthzDetails_styles.wrappedValue,
              children: proposalKey.keyId
            })
          })]
        }), (0,jsx_runtime_.jsxs)(AuthzDetailsTable/* AuthzDetailsRow */.Pk, {
          children: [jsx_runtime_.jsx("td", {
            children: "Sequence #"
          }), jsx_runtime_.jsx("td", {
            children: proposalKey.sequenceNum
          })]
        }), (0,jsx_runtime_.jsxs)(AuthzDetailsTable/* AuthzDetailsRow */.Pk, {
          children: [jsx_runtime_.jsx("td", {
            children: "Gas Limit"
          }), jsx_runtime_.jsx("td", {
            children: computeLimit
          })]
        }), (0,jsx_runtime_.jsxs)(AuthzDetailsTable/* AuthzDetailsRow */.Pk, {
          children: [jsx_runtime_.jsx("td", {
            children: "Reference Block"
          }), jsx_runtime_.jsx("td", {
            children: jsx_runtime_.jsx("div", {
              sx: AuthzDetails_objectSpread(AuthzDetails_objectSpread({}, AuthzDetails_styles.wrappedValue), {}, {
                letterSpacing: "0.25em"
              }),
              children: refBlock
            })
          })]
        })]
      }), (0,jsx_runtime_.jsxs)("div", {
        sx: AuthzDetails_styles.codeContainer,
        children: [jsx_runtime_.jsx(Code, {
          title: "Arguments",
          value: JSON.stringify(args, null, 2)
        }), jsx_runtime_.jsx(Code, {
          title: "Script Source Code",
          value: cadence
        })]
      })]
    })
  });
}

/* harmony default export */ const components_AuthzDetails = (AuthzDetails);
// EXTERNAL MODULE: ./src/constants.ts
var constants = __webpack_require__(4007);
// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(7631);
// EXTERNAL MODULE: ./components/AccountImage.tsx + 1 modules
var AccountImage = __webpack_require__(7047);
// EXTERNAL MODULE: ./components/ConnectedAppIcon.tsx
var ConnectedAppIcon = __webpack_require__(7165);
;// CONCATENATED MODULE: ./components/AuthzHeader.tsx



/** @jsxImportSource theme-ui */





const AuthzHeader_styles = {
  header: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pt: 4
  },
  headerSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    px: [0, 3],
    zIndex: 1
  },
  label: {
    position: "relative",
    width: "auto",
    display: "flex",
    alignItems: "center"
  },
  greenDot: {
    position: "absolute",
    mt: "-2px",
    left: -15,
    backgroundColor: "primary",
    width: 7,
    height: 7,
    borderRadius: 7
  },
  transactionIcon: {
    position: "absolute",
    top: 45
  }
};

function AuthzHeader({
  flowAccountAddress,
  avatarUrl
}) {
  var _connectedAppConfig$c, _connectedAppConfig$c2, _connectedAppConfig$c3, _connectedAppConfig$c4;

  const {
    currentUser,
    connectedAppConfig
  } = (0,useAuthzContext/* default */.Z)();
  const title = (connectedAppConfig === null || connectedAppConfig === void 0 ? void 0 : (_connectedAppConfig$c = connectedAppConfig.config) === null || _connectedAppConfig$c === void 0 ? void 0 : (_connectedAppConfig$c2 = _connectedAppConfig$c.app) === null || _connectedAppConfig$c2 === void 0 ? void 0 : _connectedAppConfig$c2.title) || constants/* UNTITLED_APP_NAME */.jQ;
  const icon = connectedAppConfig === null || connectedAppConfig === void 0 ? void 0 : (_connectedAppConfig$c3 = connectedAppConfig.config) === null || _connectedAppConfig$c3 === void 0 ? void 0 : (_connectedAppConfig$c4 = _connectedAppConfig$c3.app) === null || _connectedAppConfig$c4 === void 0 ? void 0 : _connectedAppConfig$c4.icon;
  return (0,jsx_runtime_.jsxs)("div", {
    sx: AuthzHeader_styles.header,
    children: [jsx_runtime_.jsx("div", {
      sx: AuthzHeader_styles.transactionIcon,
      children: jsx_runtime_.jsx("img", {
        src: "/transaction.svg"
      })
    }), (0,jsx_runtime_.jsxs)("div", {
      sx: AuthzHeader_styles.headerSection,
      children: [jsx_runtime_.jsx(AccountImage/* default */.Z, {
        address: currentUser.address,
        seed: title,
        lg: true,
        flowAccountAddress: flowAccountAddress,
        avatarUrl: avatarUrl
      }), (0,jsx_runtime_.jsxs)(external_theme_ui_.Label, {
        sx: AuthzHeader_styles.label,
        children: [jsx_runtime_.jsx("div", {
          sx: AuthzHeader_styles.greenDot
        }), currentUser.label]
      })]
    }), (0,jsx_runtime_.jsxs)("div", {
      sx: AuthzHeader_styles.headerSection,
      children: [jsx_runtime_.jsx(ConnectedAppIcon/* default */.Z, {
        icon: icon
      }), jsx_runtime_.jsx(external_theme_ui_.Label, {
        sx: AuthzHeader_styles.label,
        children: title
      })]
    })]
  });
}

/* harmony default export */ const components_AuthzHeader = (AuthzHeader);
// EXTERNAL MODULE: ./components/Dialog.tsx
var Dialog = __webpack_require__(1905);
// EXTERNAL MODULE: ./contexts/AuthzContext.tsx
var AuthzContext = __webpack_require__(8095);
// EXTERNAL MODULE: ./pages/api/sign.ts
var sign = __webpack_require__(1632);
;// CONCATENATED MODULE: ./pages/fcl/authz.tsx


/** @jsxImportSource theme-ui */












function AuthzContent({
  flowAccountAddress,
  avatarUrl
}) {
  const {
    isExpanded,
    codePreview
  } = (0,useAuthzContext/* default */.Z)();
  const {
    currentUser,
    proposalKey,
    message,
    id
  } = (0,useAuthzContext/* default */.Z)();
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(false);

  const onApprove = () => {
    setIsLoading(true);
    const signature = (0,sign.default)(message);
    window.parent.postMessage({
      jsonrpc: "2.0",
      id,
      result: {
        f_type: "PollingResponse",
        f_vsn: "1.0.0",
        status: "APPROVED",
        reason: null,
        data: {
          f_type: "CompositeSignature",
          f_vsn: "1.0.0",
          addr: fcl_.sansPrefix(currentUser.address),
          keyId: Number(proposalKey.keyId),
          signature: signature["signature"]
        }
      }
    }, "*");
    setIsLoading(false);
  };

  const onDecline = () => fcl_.WalletUtils.close();

  return jsx_runtime_.jsx(Dialog/* default */.Z, {
    title: "Authorize Transaction",
    header: !isExpanded && jsx_runtime_.jsx(components_AuthzHeader, {
      flowAccountAddress: flowAccountAddress,
      avatarUrl: avatarUrl
    }),
    footer: !isExpanded && jsx_runtime_.jsx(AuthzActions/* default */.Z, {
      onApprove: onApprove,
      isLoading: isLoading,
      onDecline: onDecline
    }),
    children: !!codePreview ? jsx_runtime_.jsx(Code, {
      title: codePreview.title,
      value: codePreview.value
    }) : jsx_runtime_.jsx(components_AuthzDetails, {})
  });
}

function Authz({
  flowAccountAddress,
  avatarUrl
}) {
  return jsx_runtime_.jsx(AuthzContext/* AuthzContextProvider */.w, {
    children: jsx_runtime_.jsx(AuthzContent, {
      flowAccountAddress: flowAccountAddress,
      avatarUrl: avatarUrl
    })
  });
}

const getStaticProps = async () => {
  return {
    props: {
      flowAccountAddress: "0xf8d6e0586b0a20c7",
      avatarUrl: "https://avatars.onflow.org/avatar/"
    }
  };
};
/* harmony default export */ const authz = (Authz);

/***/ }),

/***/ 4025:
/***/ ((module) => {

module.exports = require("@headlessui/react");

/***/ }),

/***/ 6786:
/***/ ((module) => {

module.exports = require("@onflow/fcl");

/***/ }),

/***/ 7204:
/***/ ((module) => {

module.exports = require("@onflow/util-encode-key");

/***/ }),

/***/ 4378:
/***/ ((module) => {

module.exports = require("@theme-ui/color");

/***/ }),

/***/ 6704:
/***/ ((module) => {

module.exports = require("@theme-ui/match-media");

/***/ }),

/***/ 8080:
/***/ ((module) => {

module.exports = require("elliptic");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4292:
/***/ ((module) => {

module.exports = require("react-image");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8422:
/***/ ((module) => {

module.exports = require("sha3");

/***/ }),

/***/ 7749:
/***/ ((module) => {

module.exports = require("swr");

/***/ }),

/***/ 7631:
/***/ ((module) => {

module.exports = require("theme-ui");

/***/ }),

/***/ 1237:
/***/ ((module) => {

module.exports = require("theme-ui/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [38,496,437,53,352,632], () => (__webpack_exec__(8531)));
module.exports = __webpack_exports__;

})();