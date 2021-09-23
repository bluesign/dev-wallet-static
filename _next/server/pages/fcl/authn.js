"use strict";
(() => {
var exports = {};
exports.id = 601;
exports.ids = [601,463,272];
exports.modules = {

/***/ 976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ API_is_init)
/* harmony export */ });
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_fclConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8923);


async function API_is_init() {
  (0,src_fclConfig__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)("http://localhost:8080", "0xf8d6e0586b0a20c7");
  console.log("is_init");

  try {
    const account = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.send([_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.getAccount("0xf8d6e0586b0a20c7")]).then(_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.decode);

    if (account["contracts"]["FCL"]) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

/***/ }),

/***/ 5684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ authn),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "theme-ui/jsx-runtime"
var jsx_runtime_ = __webpack_require__(1237);
// EXTERNAL MODULE: ./hooks/useVariants.ts
var useVariants = __webpack_require__(7426);
// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(7631);
;// CONCATENATED MODULE: ./components/Switch.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsxImportSource theme-ui */



const Switch = ({
  onClick,
  defaultChecked = false,
  variant = "primary",
  size = "lg",
  sx = {},
  id = ""
}) => {
  const variants = (0,useVariants/* default */.Z)([`forms.switch.${variant}`, `forms.switch.sizes.${size}`]);
  return jsx_runtime_.jsx(external_theme_ui_.Switch, {
    onClick: onClick,
    defaultChecked: defaultChecked,
    sx: _objectSpread(_objectSpread({}, sx), variants),
    id: id,
    role: "switch"
  });
};

/* harmony default export */ const components_Switch = (Switch);
// EXTERNAL MODULE: external "react/jsx-runtime"
var external_react_jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@onflow/fcl"
var fcl_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./hooks/useConnectedAppConfig.ts


function useConnectedAppConfig() {
  var _connectedAppConfig$c, _connectedAppConfig$c2, _connectedAppConfig$c3, _connectedAppConfig$c4, _connectedAppConfig$c5;

  const {
    0: connectedAppConfig,
    1: setConnectedAppConfig
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    function callback({
      data
    }) {
      if (typeof data !== "object") return;
      if (data.type !== "FCL:VIEW:READY:RESPONSE") return;
      setConnectedAppConfig(data);
    }

    window.addEventListener("message", callback);
    fcl_.WalletUtils.sendMsgToFCL("FCL:VIEW:READY");
    return () => window.removeEventListener("message", callback);
  }, []);
  const appScopes = (_connectedAppConfig$c = connectedAppConfig === null || connectedAppConfig === void 0 ? void 0 : (_connectedAppConfig$c2 = connectedAppConfig.config) === null || _connectedAppConfig$c2 === void 0 ? void 0 : (_connectedAppConfig$c3 = _connectedAppConfig$c2.services) === null || _connectedAppConfig$c3 === void 0 ? void 0 : (_connectedAppConfig$c4 = _connectedAppConfig$c3["OpenID.scopes"]) === null || _connectedAppConfig$c4 === void 0 ? void 0 : (_connectedAppConfig$c5 = _connectedAppConfig$c4.trim()) === null || _connectedAppConfig$c5 === void 0 ? void 0 : _connectedAppConfig$c5.split(/\s+/)) !== null && _connectedAppConfig$c !== void 0 ? _connectedAppConfig$c : [];
  return {
    connectedAppConfig,
    appScopes
  };
}
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(7749);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: ./pages/api/is-init.ts
var is_init = __webpack_require__(976);
// EXTERNAL MODULE: ./pages/api/init.ts
var init = __webpack_require__(8403);
;// CONCATENATED MODULE: ./contexts/AuthnContext.tsx






const AuthnContext = /*#__PURE__*/(0,external_react_.createContext)({
  connectedAppConfig: {},
  appScopes: [],
  initError: null
});
function AuthnContextProvider({
  children
}) {
  const isInit = external_swr_default()("is_init", is_init.default);
  const {
    connectedAppConfig,
    appScopes
  } = useConnectedAppConfig();
  const {
    0: error
  } = (0,external_react_.useState)(null);

  const initializeWallet = () => {
    (0,init.default)();
  };

  (0,external_react_.useEffect)(() => {
    if (isInit.data === false) initializeWallet();
  }, [isInit]);
  if (!isInit.data || !connectedAppConfig) return null;
  const value = {
    connectedAppConfig,
    appScopes,
    initError: error
  };
  return /*#__PURE__*/external_react_jsx_runtime_.jsx(AuthnContext.Provider, {
    value: value,
    children: children
  });
}
;// CONCATENATED MODULE: ./hooks/useAuthnContext.ts



const useAuthnContext = () => {
  console.log("useAuthnContext");
  return (0,external_react_.useContext)(AuthnContext);
};

/* harmony default export */ const hooks_useAuthnContext = (useAuthnContext);
;// CONCATENATED MODULE: ./components/AccountListItemScopes.tsx




function AccountListItemScopes_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AccountListItemScopes_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AccountListItemScopes_ownKeys(Object(source), true).forEach(function (key) { AccountListItemScopes_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AccountListItemScopes_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AccountListItemScopes_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsxImportSource theme-ui */



const styles = {
  headingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  heading: {
    textTransform: "uppercase",
    color: "gray.400",
    fontWeight: "normal",
    fontSize: 0,
    letterSpacing: "0.05em"
  },
  label: {
    textTransform: "capitalize",
    margin: 0
  },
  scope: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
};
function AccountListItemScopes({
  scopes,
  setScopes,
  compact = false
}) {
  const {
    appScopes
  } = hooks_useAuthnContext();

  const toggleScope = scope => {
    scopes.has(scope) ? scopes.delete(scope) : scopes.add(scope);
    setScopes(scopes);
  };

  return (0,jsx_runtime_.jsxs)("div", {
    id: "scopes",
    children: [jsx_runtime_.jsx("div", {
      sx: AccountListItemScopes_objectSpread(AccountListItemScopes_objectSpread({}, styles.headingContainer), {}, {
        height: compact ? 30 : 40
      }),
      children: jsx_runtime_.jsx("div", {
        sx: styles.heading,
        children: appScopes.length > 0 && "Scopes"
      })
    }), appScopes.length > 0 && (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [jsx_runtime_.jsx(external_theme_ui_.Themed.hr, {
        sx: {
          mt: 0,
          mb: compact ? 1 : 3
        }
      }), appScopes.map(scope => jsx_runtime_.jsx("div", {
        children: (0,jsx_runtime_.jsxs)("div", {
          sx: AccountListItemScopes_objectSpread(AccountListItemScopes_objectSpread({}, styles.scope), {}, {
            paddingBottom: compact ? 1 : 3
          }),
          children: [jsx_runtime_.jsx(external_theme_ui_.Label, {
            htmlFor: `scope-${scope}`,
            sx: styles.label,
            children: scope
          }), jsx_runtime_.jsx("div", {
            sx: {
              display: "inline-flex"
            },
            children: jsx_runtime_.jsx(components_Switch, {
              size: "lg",
              id: `scope-${scope}`,
              defaultChecked: scopes.has(scope),
              onClick: () => toggleScope(scope),
              "aria-checked": "true"
            })
          })]
        })
      }, scope))]
    })]
  });
}
// EXTERNAL MODULE: ./components/Button.tsx
var Button = __webpack_require__(1408);
// EXTERNAL MODULE: ./components/AccountImage.tsx + 1 modules
var AccountImage = __webpack_require__(7047);
;// CONCATENATED MODULE: ./hooks/useThemeUI.ts

const useThemeUI = external_theme_ui_.useThemeUI;
/* harmony default export */ const hooks_useThemeUI = (useThemeUI);
;// CONCATENATED MODULE: ./components/InfoIcon.tsx




function InfoIcon({
  active
}) {
  const {
    theme
  } = hooks_useThemeUI();
  return /*#__PURE__*/external_react_jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    fill: "none",
    viewBox: "0 0 22 22",
    children: /*#__PURE__*/external_react_jsx_runtime_.jsx("path", {
      stroke: active ? theme.colors.green : theme.colors.gray[500],
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10zM11 15v-4M11 7v-.5"
    })
  });
}

/* harmony default export */ const components_InfoIcon = (InfoIcon);
// EXTERNAL MODULE: ./src/constants.ts
var constants = __webpack_require__(4007);
// EXTERNAL MODULE: ./components/ConnectedAppIcon.tsx
var ConnectedAppIcon = __webpack_require__(7165);
;// CONCATENATED MODULE: ./components/ConnectedAppHeader.tsx



/** @jsxImportSource theme-ui */







const ConnectedAppHeader_styles = {
  container: {
    textAlign: "center",
    position: "relative"
  },
  info: {
    textAlign: "left",
    fontSize: 1,
    color: "textMedium",
    marginTop: -2
  },
  infoLabel: {
    opacity: 0.8
  },
  imageContainer: {
    width: 65,
    height: 65,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    margin: "0 auto"
  },
  title: {
    marginTop: 3,
    marginBottom: 2
  },
  image: {
    borderRadius: 65,
    width: 65
  },
  description: {
    maxWidth: 340,
    margin: "0 auto"
  },
  infoButton: {
    position: "absolute",
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  missingAppDetail: {
    color: "red.200",
    display: "inline-flex",
    alignItems: "center"
  }
};

function MissingAppDetail({
  text
}) {
  return (0,jsx_runtime_.jsxs)("div", {
    sx: ConnectedAppHeader_styles.missingAppDetail,
    children: [text, jsx_runtime_.jsx(external_theme_ui_.Link, {
      href: "https://docs.onflow.org/fcl/api/#common-configuration-keys",
      target: "_blank",
      sx: {
        ml: 1,
        color: "blue"
      },
      children: "Learn More"
    })]
  });
}

function ConnectedAppHeader({
  title,
  description,
  info = true,
  account,
  flowAccountAddress,
  avatarUrl
}) {
  const {
    0: showInfo,
    1: setShowInfo
  } = (0,external_react_.useState)(false);
  const {
    connectedAppConfig: {
      config: {
        app: {
          icon,
          title: connectedAppTitle
        }
      }
    }
  } = hooks_useAuthnContext();

  const toggleShowInfo = () => setShowInfo(prev => !prev);

  return (0,jsx_runtime_.jsxs)("div", {
    sx: ConnectedAppHeader_styles.container,
    children: [info && jsx_runtime_.jsx("div", {
      id: "info",
      children: showInfo && (0,jsx_runtime_.jsxs)("div", {
        sx: ConnectedAppHeader_styles.info,
        children: [(0,jsx_runtime_.jsxs)("div", {
          children: [jsx_runtime_.jsx("span", {
            sx: ConnectedAppHeader_styles.infoLabel,
            children: "app.detail.icon:"
          }), " ", icon || jsx_runtime_.jsx(MissingAppDetail, {
            text: "Missing, please include an icon."
          })]
        }), (0,jsx_runtime_.jsxs)("div", {
          children: [jsx_runtime_.jsx("span", {
            sx: ConnectedAppHeader_styles.infoLabel,
            children: "app.detail.title:"
          }), " ", connectedAppTitle || jsx_runtime_.jsx(MissingAppDetail, {
            text: "Untitled, please include a title."
          })]
        }), jsx_runtime_.jsx(external_theme_ui_.Themed.hr, {})]
      })
    }), (0,jsx_runtime_.jsxs)("div", {
      children: [info && jsx_runtime_.jsx(external_theme_ui_.Button, {
        variant: "unstyled",
        sx: ConnectedAppHeader_styles.infoButton,
        onClick: toggleShowInfo,
        "aria-controls": "info",
        "aria-expanded": showInfo,
        children: jsx_runtime_.jsx(components_InfoIcon, {
          active: showInfo
        })
      }), jsx_runtime_.jsx("div", {
        sx: ConnectedAppHeader_styles.imageContainer,
        children: account !== null && account !== void 0 && account.address ? jsx_runtime_.jsx(AccountImage/* default */.Z, {
          address: account.address,
          seed: connectedAppTitle,
          lg: true,
          flowAccountAddress: flowAccountAddress,
          avatarUrl: avatarUrl
        }) : jsx_runtime_.jsx(ConnectedAppIcon/* default */.Z, {
          icon: icon
        })
      }), jsx_runtime_.jsx(external_theme_ui_.Themed.h1, {
        sx: ConnectedAppHeader_styles.title,
        children: title || connectedAppTitle || constants/* UNTITLED_APP_NAME */.jQ
      }), description && jsx_runtime_.jsx(external_theme_ui_.Themed.p, {
        sx: ConnectedAppHeader_styles.description,
        children: description
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/FormErrors.tsx


/** @jsxImportSource theme-ui */

const FieldError = ({
  children
}) => {
  const style = {
    border: "1px solid",
    borderColor: "red.200",
    backgroundColor: "red.100",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    color: "red.200",
    marginTop: "-1px",
    px: "20px",
    py: 3,
    "> a": {
      color: "red.200"
    }
  };
  return jsx_runtime_.jsx("div", {
    sx: style,
    children: children
  });
};
function FormErrors({
  errors
}) {
  return jsx_runtime_.jsx(external_theme_ui_.Box, {
    mt: 3,
    mb: 4,
    children: jsx_runtime_.jsx(FieldError, {
      children: errors.join(". ")
    })
  });
}
;// CONCATENATED MODULE: external "formik"
const external_formik_namespaceObject = require("formik");
;// CONCATENATED MODULE: external "yup"
const external_yup_namespaceObject = require("yup");
;// CONCATENATED MODULE: ./src/validate.ts


const updateAccountSchemaClientShape = {
  label: external_yup_namespaceObject.string().required(constants/* LABEL_MISSING_ERROR */.HN)
};
const updateAccountSchemaClient = external_yup_namespaceObject.object().shape(updateAccountSchemaClientShape);
;// CONCATENATED MODULE: ./components/Label.tsx



function Label_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Label_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Label_ownKeys(Object(source), true).forEach(function (key) { Label_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Label_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Label_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsxImportSource theme-ui */

const Label_styles = {
  required: {
    color: "red.200",
    fontWeight: "normal"
  }
};

const Label = (_ref) => {
  let {
    required = false,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["required", "children"]);

  return (0,jsx_runtime_.jsxs)(external_theme_ui_.Label, Label_objectSpread(Label_objectSpread({}, props), {}, {
    children: [children, required && jsx_runtime_.jsx("div", {
      sx: Label_styles.required,
      children: "*"
    })]
  }));
};

/* harmony default export */ const components_Label = (Label);
;// CONCATENATED MODULE: ./components/Inputs.tsx




function Inputs_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Inputs_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Inputs_ownKeys(Object(source), true).forEach(function (key) { Inputs_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Inputs_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Inputs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Inputs_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Inputs_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Inputs_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsxImportSource theme-ui */



const errorInputStyles = {
  border: "1px solid",
  borderColor: "red.200",
  color: "red.200",
  outlineColor: "red.200",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  "&:focus, &:focus-visible": {
    outline: "none",
    boxShadow: theme => {
      var _theme$colors;

      return `inset 0 0 0 1pt ${(_theme$colors = theme.colors) !== null && _theme$colors !== void 0 && _theme$colors.red ? ["200"] : ""}`;
    },
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  }
};
const CustomInputComponent = (_ref) => {
  let {
    field,
    form: {
      touched,
      errors
    },
    inputLabel,
    required = false,
    sx = {}
  } = _ref,
      props = Inputs_objectWithoutProperties(_ref, ["field", "form", "inputLabel", "required", "sx"]);

  const showError = touched[field.name] && errors[field.name];
  return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [jsx_runtime_.jsx(components_Label, {
      required: required,
      children: inputLabel
    }), jsx_runtime_.jsx(external_theme_ui_.Input, Inputs_objectSpread(Inputs_objectSpread(Inputs_objectSpread({
      width: "100%"
    }, field), props), {}, {
      sx: showError ? Inputs_objectSpread(Inputs_objectSpread({}, sx), errorInputStyles) : sx
    })), showError && jsx_runtime_.jsx(FieldError, {
      children: errors[field.name]
    })]
  });
};
// EXTERNAL MODULE: ./pages/api/accounts/new.ts
var accounts_new = __webpack_require__(5470);
// EXTERNAL MODULE: ./pages/api/accounts/[address]/update.ts
var update = __webpack_require__(7065);
;// CONCATENATED MODULE: ./components/AccountForm.tsx



/** @jsxImportSource theme-ui */











const AccountForm_styles = {
  actions: {
    display: "flex",
    flex: 1,
    pt: 20,
    pb: 20
  }
};
function AccountForm({
  account,
  onSubmitComplete,
  onCancel,
  flowAccountAddress,
  avatarUrl
}) {
  const {
    0: errors,
    1: setErrors
  } = (0,external_react_.useState)([]);
  return jsx_runtime_.jsx("div", {
    children: jsx_runtime_.jsx(external_formik_namespaceObject.Formik, {
      initialValues: {
        label: account.label,
        scopes: new Set(account.scopes)
      },
      validationSchema: updateAccountSchemaClient,
      onSubmit: ({
        label,
        scopes
      }, {
        setSubmitting
      }) => {
        setErrors([]);
        setSubmitting(true);

        if (account.address) {
          //update
          (0,update.default)(account.address, label, Array.from(scopes));
          onSubmitComplete(undefined);
          setSubmitting(false);
        } else {
          //new
          (0,accounts_new.default)(label, Array.from(scopes));
          onSubmitComplete(undefined);
          setSubmitting(false);
        }
      },
      children: ({
        values,
        setFieldValue,
        isSubmitting,
        isValid
      }) => (0,jsx_runtime_.jsxs)(external_formik_namespaceObject.Form, {
        children: [jsx_runtime_.jsx(external_theme_ui_.Box, {
          mb: 4,
          children: jsx_runtime_.jsx(ConnectedAppHeader, {
            info: false,
            account: account,
            title: account.address ? "Manage Account" : "Create New Account",
            description: account.address,
            flowAccountAddress: flowAccountAddress,
            avatarUrl: avatarUrl
          })
        }), jsx_runtime_.jsx(external_theme_ui_.Box, {
          mb: 3,
          children: jsx_runtime_.jsx(external_formik_namespaceObject.Field, {
            component: CustomInputComponent,
            inputLabel: "Label",
            name: "label",
            placeholder: "Account label",
            required: true
          })
        }), (0,jsx_runtime_.jsxs)(external_theme_ui_.Box, {
          mb: 3,
          children: [jsx_runtime_.jsx(AccountListItemScopes, {
            scopes: values.scopes,
            setScopes: newScopes => setFieldValue("scopes", newScopes),
            compact: true
          }), jsx_runtime_.jsx(external_theme_ui_.Themed.hr, {
            sx: {
              mt: 0,
              mb: 1
            }
          })]
        }), (0,jsx_runtime_.jsxs)("div", {
          sx: AccountForm_styles.actions,
          children: [jsx_runtime_.jsx(Button/* default */.Z, {
            onClick: onCancel,
            type: "button",
            variant: "ghost",
            block: true,
            size: "lg",
            sx: {
              flex: 1,
              mr: 10,
              w: "50%"
            },
            children: "Cancel"
          }), jsx_runtime_.jsx(Button/* default */.Z, {
            type: "submit",
            block: true,
            size: "lg",
            sx: {
              flex: 1,
              ml: 10,
              w: "50%"
            },
            disabled: isSubmitting || !isValid,
            children: account.address ? "Save" : "Create"
          })]
        }), errors.length > 0 && jsx_runtime_.jsx(FormErrors, {
          errors: errors
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/CaretIcon.tsx




function CaretIcon({
  up,
  active
}) {
  const {
    theme
  } = hooks_useThemeUI();
  const d = up ? "M8.825 6.842L5 3.025 1.175 6.842 0 5.667l5-5 5 5-1.175 1.175z" : "M8.825.158L5 3.975 1.175.158 0 1.333l5 5 5-5L8.825.158z";
  return /*#__PURE__*/external_react_jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "7",
    fill: "none",
    viewBox: "0 0 10 7",
    children: /*#__PURE__*/external_react_jsx_runtime_.jsx("path", {
      fill: active ? theme.colors.blue : theme.colors.black,
      fillRule: "evenodd",
      d: d,
      clipRule: "evenodd"
    })
  });
}

/* harmony default export */ const components_CaretIcon = (CaretIcon);
;// CONCATENATED MODULE: ./src/accountAuth.ts
function accountAuth_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function accountAuth_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { accountAuth_ownKeys(Object(source), true).forEach(function (key) { accountAuth_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { accountAuth_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function accountAuth_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const PROFILE_SCOPES = new Set("name family_name given_name middle_name nickname preferred_username profile picture website gender birthday zoneinfo locale updated_at".trim().split(/\s+/));
const EMAIL_SCOPES = new Set("email email_verified".trim().split(/\s+/));

const intersection = (a, b) => new Set([...a].filter(x => b.has(x)));

function entries(arr = []) {
  const arrEntries = [arr].flatMap(a => a).filter(Boolean);
  return Object.fromEntries(arrEntries);
}

const entry = (scopes, key, value) => scopes.has(key) && [key, value];

function authnResponse(data) {
  return () => {
    fcl_.WalletUtils.sendMsgToFCL("FCL:VIEW:RESPONSE", data);
  };
}

function chooseAccount(account, scopes, connectedAppConfig) {
  const {
    address,
    keyId
  } = account;
  const services = [{
    f_type: "Service",
    f_vsn: "1.0.0",
    type: "authn",
    uid: "fcl-dev-wallet#authn",
    endpoint: `${location.origin}/_next/server/pages/fcl/authn.html`,
    id: address,
    identity: {
      address: address
    },
    provider: {
      address: null,
      name: "FCL Dev Wallet",
      icon: null,
      description: "For Local Development Only"
    }
  }, {
    f_type: "Service",
    f_vsn: "1.0.0",
    type: "authz",
    uid: "fcl-dev-wallet#authz",
    endpoint: `${location.origin}/_next/server/pages/fcl/authz.html`,
    method: "IFRAME/RPC",
    identity: {
      address: address,
      keyId: Number(keyId)
    }
  }, {
    f_type: "Service",
    f_vsn: "1.0.0",
    type: "user-signature",
    uid: "fcl-dev-wallet#user-sig",
    endpoint: `${location.origin}/_next/server/pages/fcl/user-sig.html`,
    method: "IFRAME/RPC",
    id: address,
    data: {
      addr: address,
      keyId: Number(keyId)
    },
    params: {}
  }];

  if (!!scopes.size) {
    services.push({
      f_type: "Service",
      f_vsn: "1.0.0",
      type: "open-id",
      uid: "fcl-dev-wallet#open-id",
      method: "data",
      data: accountAuth_objectSpread({
        f_type: "OpenID",
        f_vsn: "1.0.0"
      }, entries([intersection(PROFILE_SCOPES, scopes).size && ["profile", entries([entry(scopes, "name", `name[${address}]`), entry(scopes, "family_name", `family_name[${address}]`), entry(scopes, "given_name", `given_name[${address}]`), entry(scopes, "middle_name", `middle_name[${address}]`), entry(scopes, "nickname", `nickname[${address}]`), entry(scopes, "preferred_username", `preferred_username[${address}]`), entry(scopes, "profile", `https://onflow.org`), entry(scopes, "piture", `https://https://avatars.onflow.org/avatar/${address}`), entry(scopes, "website", "https://onflow.org"), entry(scopes, "gender", `gender[${address}]`), entry(scopes, "birthday", `0000-${new Date().getMonth() + 1}-${new Date().getDate()}`), entry(scopes, "zoneinfo", `America/Vancouver`), entry(scopes, "locale", `en`), entry(scopes, "updated_at", Date.now())])], intersection(EMAIL_SCOPES, scopes).size && ["email", entries([entry(scopes, "email", `${address}@example.com`), entry(scopes, "email_verified", true)])]]))
    });
  }

  localStorage.setItem("connectedAppConfig", JSON.stringify(connectedAppConfig));
  return authnResponse({
    addr: address,
    services
  });
}
;// CONCATENATED MODULE: ./components/AccountsListItem.tsx




function AccountsListItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AccountsListItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AccountsListItem_ownKeys(Object(source), true).forEach(function (key) { AccountsListItem_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AccountsListItem_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AccountsListItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsxImportSource theme-ui */








const AccountsListItem_styles = {
  accountListItem: {
    marginX: -15,
    paddingX: 15
  },
  accountButtonContainer: {
    display: "flex",
    items: "center",
    alignItems: "center",
    justifyContent: "space-between"
  },
  accountImage: {
    marginRight: 2
  },
  chooseAccountButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 66,
    paddingX: 0,
    color: "colors.black",
    background: "transparent",
    border: 0,
    textAlign: "left",
    fontSize: 2,
    marginRight: 10,
    textTransform: "initial",
    fontWeight: 600,
    lineHeight: "1.3rem"
  },
  chooseAccountAddress: {
    fontSize: 1,
    fontWeight: "normal",
    color: "gray.500"
  },
  chooseAccountButtonText: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  expandAccountButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    right: -15,
    px: 15
  },
  isNew: {
    textTransform: "uppercase",
    backgroundColor: "green",
    fontSize: 11,
    fontWeight: "bold",
    borderRadius: 14,
    position: "relative",
    top: "-2px",
    py: "1px",
    px: "7px",
    ml: 2
  },
  manageAccountButton: {
    margin: 0,
    padding: 0,
    fontSize: 0,
    fontWeight: "normal"
  }
};
function AccountsListItem({
  account,
  onEditAccount,
  isNew,
  flowAccountAddress,
  avatarUrl
}) {
  const {
    connectedAppConfig,
    appScopes
  } = hooks_useAuthnContext();
  const {
    config: {
      app: {
        title
      }
    }
  } = connectedAppConfig;
  const {
    0: showScopes,
    1: setShowScopes
  } = (0,external_react_.useState)(false);
  const {
    0: scopes,
    1: setScopes
  } = (0,external_react_.useState)(new Set(account.scopes));

  const toggleShowScopes = () => setShowScopes(prev => !prev);

  const hasScopes = appScopes.length > 0;
  (0,external_react_.useEffect)(() => {
    setScopes(new Set(account.scopes));
  }, [account.scopes]);
  return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [(0,jsx_runtime_.jsxs)("div", {
      sx: AccountsListItem_objectSpread(AccountsListItem_objectSpread({}, AccountsListItem_styles.accountListItem), {}, {
        backgroundColor: showScopes ? "gray.100" : "transparent"
      }),
      children: [(0,jsx_runtime_.jsxs)("div", {
        sx: AccountsListItem_styles.accountButtonContainer,
        children: [(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
          variant: "unstyled",
          sx: AccountsListItem_styles.chooseAccountButton,
          onClick: () => chooseAccount(account, scopes, connectedAppConfig)(),
          children: [jsx_runtime_.jsx(AccountImage/* default */.Z, {
            address: account.address,
            seed: title,
            sxStyles: AccountsListItem_styles.accountImage,
            flowAccountAddress: flowAccountAddress,
            avatarUrl: avatarUrl
          }), (0,jsx_runtime_.jsxs)("div", {
            sx: AccountsListItem_styles.chooseAccountButtonText,
            children: [(0,jsx_runtime_.jsxs)("div", {
              children: [account.label || account.address, isNew && jsx_runtime_.jsx("span", {
                sx: AccountsListItem_styles.isNew,
                children: "New"
              })]
            }), jsx_runtime_.jsx("code", {
              sx: AccountsListItem_styles.chooseAccountAddress,
              children: account.address
            })]
          })]
        }), (0,jsx_runtime_.jsxs)(external_theme_ui_.Flex, {
          children: [jsx_runtime_.jsx(Button/* default */.Z, {
            variant: "link",
            onClick: () => onEditAccount(account),
            sx: AccountsListItem_styles.manageAccountButton,
            children: "Manage"
          }), hasScopes && jsx_runtime_.jsx(Button/* default */.Z, {
            variant: "unstyled",
            sx: AccountsListItem_styles.expandAccountButton,
            onClick: toggleShowScopes,
            "aria-controls": "scopes",
            "aria-expanded": showScopes,
            children: jsx_runtime_.jsx(components_CaretIcon, {
              up: showScopes,
              active: showScopes
            })
          })]
        })]
      }), hasScopes && showScopes && jsx_runtime_.jsx(AccountListItemScopes, {
        scopes: scopes,
        setScopes: setScopes
      })]
    }), jsx_runtime_.jsx(external_theme_ui_.Themed.hr, {
      sx: {
        mt: 0,
        mb: 0
      }
    })]
  });
}
;// CONCATENATED MODULE: ./components/PlusButton.tsx



/** @jsxImportSource theme-ui */


const PlusButton_styles = {
  button: {
    textTransform: "none",
    paddingLeft: 0,
    justifyContent: "flex-start",
    backgroundColor: "transparent",
    fontWeight: 600
  },
  icon: {
    backgroundColor: "green",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 3,
    fontFamily: "inherit",
    fontWeight: "normal"
  }
};
function AccountsList({
  onClick,
  disabled,
  children
}) {
  return (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
    variant: "unstyled",
    size: "sm",
    onClick: onClick,
    sx: PlusButton_styles.button,
    block: true,
    disabled: disabled,
    children: [jsx_runtime_.jsx("div", {
      sx: PlusButton_styles.icon,
      children: jsx_runtime_.jsx("img", {
        src: "/plus-icon.svg"
      })
    }), children]
  });
}
// EXTERNAL MODULE: ./src/accountGenerator.ts
var accountGenerator = __webpack_require__(6053);
;// CONCATENATED MODULE: ./components/AccountsList.tsx




/** @jsxImportSource theme-ui */







const AccountsList_styles = {
  accountCreated: {
    backgroundColor: "#00EF8B1A",
    border: "1px solid #00EF8B",
    textAlign: "center",
    py: 10,
    px: 3,
    mb: 3
  },
  footer: {
    lineHeight: 1.7,
    color: "gray.400",
    fontSize: 0
  }
};
function AccountsList_AccountsList({
  accounts,
  onEditAccount,
  createdAccountAddress,
  flowAccountAddress,
  avatarUrl
}) {
  const {
    initError
  } = hooks_useAuthnContext();
  return (0,jsx_runtime_.jsxs)("div", {
    children: [jsx_runtime_.jsx(external_theme_ui_.Box, {
      mb: 4,
      children: jsx_runtime_.jsx(ConnectedAppHeader, {
        description: "Select an existing account to log in or create a new account.",
        flowAccountAddress: flowAccountAddress,
        avatarUrl: avatarUrl
      })
    }), createdAccountAddress && jsx_runtime_.jsx("div", {
      sx: AccountsList_styles.accountCreated,
      children: jsx_runtime_.jsx("b", {
        children: "Account Created"
      })
    }), initError ? jsx_runtime_.jsx(FormErrors, {
      errors: [initError]
    }) : (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [jsx_runtime_.jsx(external_theme_ui_.Box, {
        mb: 2,
        children: accounts.map(account => jsx_runtime_.jsx(AccountsListItem, {
          account: account,
          onEditAccount: onEditAccount,
          isNew: account.address === createdAccountAddress,
          flowAccountAddress: flowAccountAddress,
          avatarUrl: avatarUrl
        }, account.address))
      }), (0,jsx_runtime_.jsxs)(external_theme_ui_.Box, {
        mb: 4,
        children: [jsx_runtime_.jsx(AccountsList, {
          onClick: () => onEditAccount((0,accountGenerator/* default */.Z)(accounts.length - 1)),
          children: "Create New Account"
        }), jsx_runtime_.jsx(external_theme_ui_.Themed.hr, {
          sx: {
            mt: 2,
            mb: 0
          }
        })]
      })]
    })]
  });
}
// EXTERNAL MODULE: ./components/Dialog.tsx
var Dialog = __webpack_require__(1905);
// EXTERNAL MODULE: ./hooks/useAccounts.ts
var useAccounts = __webpack_require__(5538);
;// CONCATENATED MODULE: ./src/comps/err.comp.tsx

function Err({
  error
}) {
  if (error == null) return null;
  return /*#__PURE__*/external_react_jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/external_react_jsx_runtime_.jsx("pre", {
      children: error.stack
    })
  });
}
;// CONCATENATED MODULE: ./pages/fcl/authn.tsx


/** @jsxImportSource theme-ui */








function Authn({
  flowAccountAddress,
  avatarUrl
}) {
  const {
    0: editingAccount,
    1: setEditingAccount
  } = (0,external_react_.useState)(null);
  const {
    data,
    error,
    isLoading
  } = (0,useAccounts/* default */.Z)();
  const {
    0: createdAccountAddress,
    1: setCreatedAccountAddress
  } = (0,external_react_.useState)(null);

  const onEditAccount = account => {
    setCreatedAccountAddress(null);
    setEditingAccount(account);
  };

  const onSubmitComplete = createdAccountAddress => {
    setEditingAccount(null);
    if (createdAccountAddress) setCreatedAccountAddress(createdAccountAddress);
  };

  const onCancel = () => setEditingAccount(null);

  if (!data && error) return jsx_runtime_.jsx(Err, {
    error: error
  });
  if (!data || isLoading) return null;
  return jsx_runtime_.jsx(AuthnContextProvider, {
    children: jsx_runtime_.jsx(Dialog/* default */.Z, {
      children: jsx_runtime_.jsx("div", {
        children: editingAccount ? jsx_runtime_.jsx(AccountForm, {
          account: editingAccount,
          onSubmitComplete: onSubmitComplete,
          onCancel: onCancel,
          flowAccountAddress: flowAccountAddress,
          avatarUrl: avatarUrl
        }) : jsx_runtime_.jsx(AccountsList_AccountsList, {
          accounts: data,
          onEditAccount: onEditAccount,
          createdAccountAddress: createdAccountAddress,
          flowAccountAddress: flowAccountAddress,
          avatarUrl: avatarUrl
        })
      })
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
/* harmony default export */ const authn = (Authn);

/***/ }),

/***/ 4025:
/***/ ((module) => {

module.exports = require("@headlessui/react");

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

/***/ 8877:
/***/ ((module) => {

module.exports = require("namegenerator");

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
var __webpack_exports__ = __webpack_require__.X(0, [38,496,903,437,403,352,470,65], () => (__webpack_exec__(5684)));
module.exports = __webpack_exports__;

})();