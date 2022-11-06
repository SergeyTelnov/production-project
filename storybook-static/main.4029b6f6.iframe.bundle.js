(self.webpackChunkproduction_project =
  self.webpackChunkproduction_project || []).push([
  [179],
  {
    "./config/.storybook/preview.js-generated-config-entry.js": (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(preview_namespaceObject, {
          __namedExportsOrder: () => __namedExportsOrder,
          parameters: () => parameters
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.filter.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.for-each.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/web.dom-collections.for-each.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.define-properties.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.define-property.js"
        );
      var ClientApi = __webpack_require__(
          "./node_modules/@storybook/client-api/dist/esm/ClientApi.js"
        ),
        client = __webpack_require__(
          "./node_modules/@storybook/react/dist/esm/client/index.js"
        ),
        ThemeDecorator =
          (__webpack_require__("./src/app/styles/index.scss"),
          __webpack_require__(
            "./src/shared/config/storybook/ThemeDecorator.tsx"
          )),
        react_router_dom = __webpack_require__(
          "./node_modules/react-router-dom/index.js"
        ),
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        RouteDecorator = function RouteDecorator(story) {
          return (0, jsx_runtime.jsx)(react_router_dom.VK, {
            children: story()
          });
        };
      RouteDecorator.displayName = "RouteDecorator";
      try {
        (RouteDecorator.displayName = "RouteDecorator"),
          (RouteDecorator.__docgenInfo = {
            description: "",
            displayName: "RouteDecorator",
            props: {}
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/shared/config/storybook/RouteDecorator.tsx#RouteDecorator"
            ] = {
              docgenInfo: RouteDecorator.__docgenInfo,
              name: "RouteDecorator",
              path: "src/shared/config/storybook/RouteDecorator.tsx#RouteDecorator"
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var ThemeProvider = __webpack_require__(
          "./src/app/providers/ThemeProvider/index.tsx"
        ),
        parameters = {
          actions: { argTypesRegex: "^on[A-Z].*" },
          controls: {
            matchers: { color: /(background|color)$/i, date: /Date$/ }
          }
        };
      (0, client.addDecorator)(function StyleDecorator(story) {
        return story();
      }),
        (0, client.addDecorator)((0, ThemeDecorator.F)(ThemeProvider.Q2.LIGHT)),
        (0, client.addDecorator)(RouteDecorator);
      var __namedExportsOrder = ["parameters"];
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case "args":
            return (0, ClientApi.uc)(value);
          case "argTypes":
            return (0, ClientApi.v9)(value);
          case "decorators":
            return value.forEach(function (decorator) {
              return (0, ClientApi.$9)(decorator, !1);
            });
          case "loaders":
            return value.forEach(function (loader) {
              return (0, ClientApi.HZ)(loader, !1);
            });
          case "parameters":
            return (0, ClientApi.h1)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case "argTypesEnhancers":
            return value.forEach(function (enhancer) {
              return (0, ClientApi.My)(enhancer);
            });
          case "argsEnhancers":
            return value.forEach(function (enhancer) {
              return (0, ClientApi._C)(enhancer);
            });
          case "render":
            return (0, ClientApi.$P)(value);
          case "globals":
          case "globalTypes":
            var v = {};
            return (v[key] = value), (0, ClientApi.h1)(v, !1);
          case "__namedExportsOrder":
          case "decorateStory":
          case "renderToDOM":
            return null;
          default:
            return console.log(key + " was not supported :( !");
        }
      });
    },
    "./src/pages/AboutPage/ui/AboutPage.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Normal: () => Normal,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => AboutPage_stories
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        );
      var ThemeDecorator = __webpack_require__(
          "./src/shared/config/storybook/ThemeDecorator.tsx"
        ),
        ThemeProvider = __webpack_require__(
          "./src/app/providers/ThemeProvider/index.tsx"
        ),
        useTranslation = __webpack_require__(
          "./node_modules/react-i18next/dist/es/useTranslation.js"
        ),
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        AboutPage = function AboutPage() {
          var t = (0, useTranslation.$)("about").t;
          return (0, jsx_runtime.jsx)("div", { children: t("About Us") });
        };
      AboutPage.displayName = "AboutPage";
      const ui_AboutPage = AboutPage;
      const AboutPage_stories = {
        title: "pages/AboutPage",
        component: ui_AboutPage,
        argTypes: { backgroundColor: { control: "color" } }
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(ui_AboutPage, Object.assign({}, args));
      };
      Template.displayName = "Template";
      var Normal = Template.bind({});
      Normal.args = {};
      var Dark = Template.bind({});
      (Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Normal.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\r\n  <AboutPage {...args} />\r\n)"
            }
          },
          Normal.parameters
        )),
        (Dark.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\r\n  <AboutPage {...args} />\r\n)"
            }
          },
          Dark.parameters
        ));
      var __namedExportsOrder = ["Normal", "Dark"];
    },
    "./src/pages/MainPage/ui/MainPage.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Normal: () => Normal,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => MainPage_stories
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var ThemeDecorator = __webpack_require__(
          "./src/shared/config/storybook/ThemeDecorator.tsx"
        ),
        ThemeProvider = __webpack_require__(
          "./src/app/providers/ThemeProvider/index.tsx"
        ),
        useTranslation = __webpack_require__(
          "./node_modules/react-i18next/dist/es/useTranslation.js"
        ),
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        MainPage = function MainPage() {
          var t = (0, useTranslation.$)().t;
          return (0, jsx_runtime.jsx)("div", { children: t("Home") });
        };
      MainPage.displayName = "MainPage";
      const ui_MainPage = MainPage;
      const MainPage_stories = {
        title: "pages/MainPage",
        component: ui_MainPage,
        argTypes: { backgroundColor: { control: "color" } }
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(ui_MainPage, Object.assign({}, args));
      };
      Template.displayName = "Template";
      var Normal = Template.bind({});
      Normal.args = {};
      var Dark = Template.bind({});
      (Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Normal.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\r\n  <MainPage {...args} />\r\n)"
            }
          },
          Normal.parameters
        )),
        (Dark.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\r\n  <MainPage {...args} />\r\n)"
            }
          },
          Dark.parameters
        ));
      var __namedExportsOrder = ["Normal", "Dark"];
    },
    "./src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Normal: () => Normal,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => NotFoundPage_stories
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        );
      var ThemeDecorator = __webpack_require__(
          "./src/shared/config/storybook/ThemeDecorator.tsx"
        ),
        ThemeProvider = __webpack_require__(
          "./src/app/providers/ThemeProvider/index.tsx"
        ),
        useTranslation = __webpack_require__(
          "./node_modules/react-i18next/dist/es/useTranslation.js"
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js"
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        NotFoundPage_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NotFoundPage/ui/NotFoundPage.module.scss"
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(NotFoundPage_module.Z, options);
      const ui_NotFoundPage_module =
        NotFoundPage_module.Z && NotFoundPage_module.Z.locals
          ? NotFoundPage_module.Z.locals
          : void 0;
      var jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        NotFoundPage = function NotFoundPage(_ref) {
          _ref.className;
          var t = (0, useTranslation.$)().t;
          return (0, jsx_runtime.jsx)("div", {
            className: ui_NotFoundPage_module.NotFoundPage,
            children: t("Page not found")
          });
        };
      NotFoundPage.displayName = "NotFoundPage";
      try {
        (NotFoundPage.displayName = "NotFoundPage"),
          (NotFoundPage.__docgenInfo = {
            description: "",
            displayName: "NotFoundPage",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" }
              }
            }
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/pages/NotFoundPage/ui/NotFoundPage.tsx#NotFoundPage"
            ] = {
              docgenInfo: NotFoundPage.__docgenInfo,
              name: "NotFoundPage",
              path: "src/pages/NotFoundPage/ui/NotFoundPage.tsx#NotFoundPage"
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const NotFoundPage_stories = {
        title: "pages/NotFoundPage",
        component: NotFoundPage,
        argTypes: { backgroundColor: { control: "color" } }
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(NotFoundPage, Object.assign({}, args));
      };
      Template.displayName = "Template";
      var Normal = Template.bind({});
      Normal.args = {};
      var Dark = Template.bind({});
      (Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Normal.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\r\n  <NotFoundPage {...args} />\r\n)"
            }
          },
          Normal.parameters
        )),
        (Dark.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\r\n  <NotFoundPage {...args} />\r\n)"
            }
          },
          Dark.parameters
        ));
      var __namedExportsOrder = ["Normal", "Dark"];
    },
    "./src/shared/ui/AppLink/AppLink.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          Primary: () => Primary,
          Secondary: () => Secondary,
          PrimaryDark: () => PrimaryDark,
          SecondaryDark: () => SecondaryDark,
          __namedExportsOrder: () => __namedExportsOrder
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        );
      var shared_config_storybook_ThemeDecorator__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./src/shared/config/storybook/ThemeDecorator.tsx"
          ),
        app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./src/app/providers/ThemeProvider/index.tsx"),
        _AppLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./src/shared/ui/AppLink/AppLink.tsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "shared/AppLink",
        component: _AppLink__WEBPACK_IMPORTED_MODULE_4__.F,
        argTypes: { backgroundColor: { control: "color" } },
        args: { to: "/" }
      };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
          _AppLink__WEBPACK_IMPORTED_MODULE_4__.F,
          Object.assign({}, args)
        );
      };
      Template.displayName = "Template";
      var Primary = Template.bind({});
      Primary.args = {
        children: "Text",
        theme: _AppLink__WEBPACK_IMPORTED_MODULE_4__.u.PRIMARY
      };
      var Secondary = Template.bind({});
      Secondary.args = {
        children: "Text",
        theme: _AppLink__WEBPACK_IMPORTED_MODULE_4__.u.SECONDARY
      };
      var PrimaryDark = Template.bind({});
      (PrimaryDark.args = {
        children: "Text",
        theme: _AppLink__WEBPACK_IMPORTED_MODULE_4__.u.PRIMARY
      }),
        (PrimaryDark.decorators = [
          (0,
          shared_config_storybook_ThemeDecorator__WEBPACK_IMPORTED_MODULE_2__.F)(
            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.Q2.DARK
          )
        ]);
      var SecondaryDark = Template.bind({});
      (SecondaryDark.args = {
        children: "Text",
        theme: _AppLink__WEBPACK_IMPORTED_MODULE_4__.u.SECONDARY
      }),
        (SecondaryDark.decorators = [
          (0,
          shared_config_storybook_ThemeDecorator__WEBPACK_IMPORTED_MODULE_2__.F)(
            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.Q2.DARK
          )
        ]),
        (Primary.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\r\n  <AppLink {...args} />\r\n)"
            }
          },
          Primary.parameters
        )),
        (Secondary.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\r\n  <AppLink {...args} />\r\n)"
            }
          },
          Secondary.parameters
        )),
        (PrimaryDark.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\r\n  <AppLink {...args} />\r\n)"
            }
          },
          PrimaryDark.parameters
        )),
        (SecondaryDark.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\r\n  <AppLink {...args} />\r\n)"
            }
          },
          SecondaryDark.parameters
        ));
      var __namedExportsOrder = [
        "Primary",
        "Secondary",
        "PrimaryDark",
        "SecondaryDark"
      ];
    },
    "./src/shared/ui/Button/Button.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          Primary: () => Primary,
          Clear: () => Clear,
          Outline: () => Outline,
          OutlineDark: () => OutlineDark,
          __namedExportsOrder: () => __namedExportsOrder
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        );
      var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/shared/ui/Button/Button.tsx"
        ),
        shared_config_storybook_ThemeDecorator__WEBPACK_IMPORTED_MODULE_4__ =
          (__webpack_require__("./src/app/styles/index.scss"),
          __webpack_require__(
            "./src/shared/config/storybook/ThemeDecorator.tsx"
          )),
        app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./src/app/providers/ThemeProvider/index.tsx"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "shared/Button",
        component: _Button__WEBPACK_IMPORTED_MODULE_2__.z,
        argTypes: { backgroundColor: { control: "color" } }
      };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
          _Button__WEBPACK_IMPORTED_MODULE_2__.z,
          Object.assign({}, args)
        );
      };
      Template.displayName = "Template";
      var Primary = Template.bind({});
      Primary.args = { children: "text" };
      var Clear = Template.bind({});
      Clear.args = {
        children: "text",
        theme: _Button__WEBPACK_IMPORTED_MODULE_2__.U.CLEAR
      };
      var Outline = Template.bind({});
      Outline.args = {
        children: "text",
        theme: _Button__WEBPACK_IMPORTED_MODULE_2__.U.OUTLINE
      };
      var OutlineDark = Template.bind({});
      (OutlineDark.args = {
        children: "text",
        theme: _Button__WEBPACK_IMPORTED_MODULE_2__.U.OUTLINE
      }),
        (OutlineDark.decorators = [
          (0,
          shared_config_storybook_ThemeDecorator__WEBPACK_IMPORTED_MODULE_4__.F)(
            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.Q2.DARK
          )
        ]),
        (Primary.parameters = Object.assign(
          { storySource: { source: "(args) => <Button {...args} />" } },
          Primary.parameters
        )),
        (Clear.parameters = Object.assign(
          { storySource: { source: "(args) => <Button {...args} />" } },
          Clear.parameters
        )),
        (Outline.parameters = Object.assign(
          { storySource: { source: "(args) => <Button {...args} />" } },
          Outline.parameters
        )),
        (OutlineDark.parameters = Object.assign(
          { storySource: { source: "(args) => <Button {...args} />" } },
          OutlineDark.parameters
        ));
      var __namedExportsOrder = ["Primary", "Clear", "Outline", "OutlineDark"];
    },
    "./src/shared/ui/Loader/Loader.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Normal: () => Normal,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Loader_stories
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        );
      var ThemeDecorator = __webpack_require__(
          "./src/shared/config/storybook/ThemeDecorator.tsx"
        ),
        ThemeProvider = __webpack_require__(
          "./src/app/providers/ThemeProvider/index.tsx"
        ),
        classNames = __webpack_require__(
          "./src/shared/lib/classNames/classNames.ts"
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js"
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        Loader = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Loader/Loader.scss"
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Loader.Z, options);
      Loader.Z && Loader.Z.locals && Loader.Z.locals;
      var jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        Loader_Loader_Loader = function Loader(_ref) {
          var className = _ref.className;
          return (0, jsx_runtime.jsxs)("div", {
            className: (0, classNames.A)("lds-ellipsis", {}, [className]),
            children: [
              (0, jsx_runtime.jsx)("div", {}),
              (0, jsx_runtime.jsx)("div", {}),
              (0, jsx_runtime.jsx)("div", {}),
              (0, jsx_runtime.jsx)("div", {})
            ]
          });
        };
      Loader_Loader_Loader.displayName = "Loader";
      try {
        (Loader_Loader_Loader.displayName = "Loader"),
          (Loader_Loader_Loader.__docgenInfo = {
            description: "",
            displayName: "Loader",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" }
              }
            }
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/shared/ui/Loader/Loader.tsx#Loader"] =
              {
                docgenInfo: Loader_Loader_Loader.__docgenInfo,
                name: "Loader",
                path: "src/shared/ui/Loader/Loader.tsx#Loader"
              });
      } catch (__react_docgen_typescript_loader_error) {}
      const Loader_stories = {
        title: "shared/Loader",
        component: Loader_Loader_Loader,
        argTypes: { backgroundColor: { control: "color" } }
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(
          Loader_Loader_Loader,
          Object.assign({}, args)
        );
      };
      Template.displayName = "Template";
      var Normal = Template.bind({});
      Normal.args = {};
      var Dark = Template.bind({});
      (Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Normal.parameters = Object.assign(
          { storySource: { source: "(args) => <Loader {...args} />" } },
          Normal.parameters
        )),
        (Dark.parameters = Object.assign(
          { storySource: { source: "(args) => <Loader {...args} />" } },
          Dark.parameters
        ));
      var __namedExportsOrder = ["Normal", "Dark"];
    },
    "./src/widgets/Navbar/ui/Navbar.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Navbar_stories
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        );
      var ThemeDecorator = __webpack_require__(
          "./src/shared/config/storybook/ThemeDecorator.tsx"
        ),
        ThemeProvider = __webpack_require__(
          "./src/app/providers/ThemeProvider/index.tsx"
        ),
        useTranslation = __webpack_require__(
          "./node_modules/react-i18next/dist/es/useTranslation.js"
        ),
        classNames = __webpack_require__(
          "./src/shared/lib/classNames/classNames.ts"
        ),
        AppLink = __webpack_require__("./src/shared/ui/AppLink/AppLink.tsx"),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js"
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        Navbar_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Navbar/ui/Navbar.module.scss"
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Navbar_module.Z, options);
      const ui_Navbar_module =
        Navbar_module.Z && Navbar_module.Z.locals
          ? Navbar_module.Z.locals
          : void 0;
      var jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        Navbar = function Navbar(_ref) {
          var className = _ref.className,
            t = (0, useTranslation.$)().t;
          return (0, jsx_runtime.jsx)("div", {
            className: (0, classNames.A)(ui_Navbar_module.Navbar, {}, [
              className
            ]),
            children: (0, jsx_runtime.jsxs)("div", {
              className: ui_Navbar_module.links,
              children: [
                (0, jsx_runtime.jsx)(AppLink.F, {
                  theme: AppLink.u.SECONDARY,
                  to: "/",
                  className: ui_Navbar_module.mainLink,
                  children: t("Home")
                }),
                (0, jsx_runtime.jsx)(AppLink.F, {
                  theme: AppLink.u.SECONDARY,
                  to: "/about",
                  children: t("About Us")
                })
              ]
            })
          });
        };
      Navbar.displayName = "Navbar";
      try {
        (Navbar.displayName = "Navbar"),
          (Navbar.__docgenInfo = {
            description: "",
            displayName: "Navbar",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" }
              }
            }
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/widgets/Navbar/ui/Navbar.tsx#Navbar"
            ] = {
              docgenInfo: Navbar.__docgenInfo,
              name: "Navbar",
              path: "src/widgets/Navbar/ui/Navbar.tsx#Navbar"
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Navbar_stories = {
        title: "widget/Navbar",
        component: Navbar,
        argTypes: { backgroundColor: { control: "color" } }
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(Navbar, Object.assign({}, args));
      };
      Template.displayName = "Template";
      var Light = Template.bind({});
      Light.args = {};
      var Dark = Template.bind({});
      (Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Light.parameters = Object.assign(
          { storySource: { source: "(args) => <Navbar {...args} />" } },
          Light.parameters
        )),
        (Dark.parameters = Object.assign(
          { storySource: { source: "(args) => <Navbar {...args} />" } },
          Dark.parameters
        ));
      var __namedExportsOrder = ["Light", "Dark"];
    },
    "./src/widgets/PageError/ui/PageError.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => PageError_stories
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        );
      var ThemeDecorator = __webpack_require__(
          "./src/shared/config/storybook/ThemeDecorator.tsx"
        ),
        ThemeProvider = __webpack_require__(
          "./src/app/providers/ThemeProvider/index.tsx"
        ),
        useTranslation = __webpack_require__(
          "./node_modules/react-i18next/dist/es/useTranslation.js"
        ),
        classNames = __webpack_require__(
          "./src/shared/lib/classNames/classNames.ts"
        ),
        Button = __webpack_require__("./src/shared/ui/Button/Button.tsx"),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js"
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        PageError_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageError/ui/PageError.module.scss"
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(PageError_module.Z, options);
      const ui_PageError_module =
        PageError_module.Z && PageError_module.Z.locals
          ? PageError_module.Z.locals
          : void 0;
      var jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        PageError = function PageError(_ref) {
          var className = _ref.className,
            t = (0, useTranslation.$)().t;
          return (0, jsx_runtime.jsxs)("div", {
            className: (0, classNames.A)(ui_PageError_module.PageError, {}, [
              className
            ]),
            children: [
              (0, jsx_runtime.jsx)("p", {
                children: t("An unexpected error has occurred")
              }),
              (0, jsx_runtime.jsx)(Button.z, {
                onClick: function reloadPage() {
                  location.reload();
                },
                children: t("Refresh the page")
              })
            ]
          });
        };
      PageError.displayName = "PageError";
      try {
        (PageError.displayName = "PageError"),
          (PageError.__docgenInfo = {
            description: "",
            displayName: "PageError",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" }
              }
            }
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/widgets/PageError/ui/PageError.tsx#PageError"
            ] = {
              docgenInfo: PageError.__docgenInfo,
              name: "PageError",
              path: "src/widgets/PageError/ui/PageError.tsx#PageError"
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const PageError_stories = {
        title: "widget/PageError",
        component: PageError,
        argTypes: { backgroundColor: { control: "color" } }
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(PageError, Object.assign({}, args));
      };
      Template.displayName = "Template";
      var Light = Template.bind({});
      Light.args = {};
      var Dark = Template.bind({});
      (Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Light.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\r\n  <PageError {...args} />\r\n)"
            }
          },
          Light.parameters
        )),
        (Dark.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\r\n  <PageError {...args} />\r\n)"
            }
          },
          Dark.parameters
        ));
      var __namedExportsOrder = ["Light", "Dark"];
    },
    "./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Sidebar_stories
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.is-array.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.symbol.description.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.to-string.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.symbol.iterator.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.string.iterator.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.iterator.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/web.dom-collections.iterator.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.name.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.array.from.js");
      var react = __webpack_require__("./node_modules/react/index.js"),
        useTranslation = __webpack_require__(
          "./node_modules/react-i18next/dist/es/useTranslation.js"
        ),
        classNames = __webpack_require__(
          "./src/shared/lib/classNames/classNames.ts"
        ),
        Button = __webpack_require__("./src/shared/ui/Button/Button.tsx"),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js"
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        LangSwitcher_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/LangSwitcher/LangSwitcher.module.scss"
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(LangSwitcher_module.Z, options);
      const LangSwitcher_LangSwitcher_module =
        LangSwitcher_module.Z && LangSwitcher_module.Z.locals
          ? LangSwitcher_module.Z.locals
          : void 0;
      var jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        LangSwitcher = function LangSwitcher(_ref) {
          var className = _ref.className,
            _useTranslation = (0, useTranslation.$)(),
            t = _useTranslation.t,
            i18n = _useTranslation.i18n;
          return (0, jsx_runtime.jsx)(Button.z, {
            theme: Button.U.CLEAR,
            className: (0, classNames.A)(
              LangSwitcher_LangSwitcher_module.LangSwitcher,
              {},
              [className]
            ),
            onClick: function toggle() {
              i18n.changeLanguage("ru" === i18n.language ? "en" : "ru");
            },
            children: t("Language")
          });
        };
      LangSwitcher.displayName = "LangSwitcher";
      try {
        (LangSwitcher.displayName = "LangSwitcher"),
          (LangSwitcher.__docgenInfo = {
            description: "",
            displayName: "LangSwitcher",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" }
              }
            }
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/widgets/LangSwitcher/LangSwitcher.tsx#LangSwitcher"
            ] = {
              docgenInfo: LangSwitcher.__docgenInfo,
              name: "LangSwitcher",
              path: "src/widgets/LangSwitcher/LangSwitcher.tsx#LangSwitcher"
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var ThemeSwitcher = __webpack_require__(
          "./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx"
        ),
        Sidebar_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss"
        ),
        Sidebar_module_options = {};
      (Sidebar_module_options.styleTagTransform = styleTagTransform_default()),
        (Sidebar_module_options.setAttributes =
          setAttributesWithoutAttributes_default()),
        (Sidebar_module_options.insert = insertBySelector_default().bind(
          null,
          "head"
        )),
        (Sidebar_module_options.domAPI = styleDomAPI_default()),
        (Sidebar_module_options.insertStyleElement =
          insertStyleElement_default());
      injectStylesIntoStyleTag_default()(
        Sidebar_module.Z,
        Sidebar_module_options
      );
      const Sidebar_Sidebar_module =
        Sidebar_module.Z && Sidebar_module.Z.locals
          ? Sidebar_module.Z.locals
          : void 0;
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
                  arr["@@iterator"];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            "Object" === n && o.constructor && (n = o.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(o);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var Sidebar = function Sidebar(_ref) {
        var _classNames,
          className = _ref.className,
          _useState2 = _slicedToArray((0, react.useState)(!1), 2),
          collapsed = _useState2[0],
          setCollapsed = _useState2[1],
          t = (0, useTranslation.$)().t;
        return (0, jsx_runtime.jsxs)("div", {
          "data-testid": "sidebar",
          className: (0, classNames.A)(
            Sidebar_Sidebar_module.Sidebar,
            ((_classNames = {}),
            (_classNames[Sidebar_Sidebar_module.collapsed] = collapsed),
            _classNames),
            [className]
          ),
          children: [
            (0, jsx_runtime.jsx)(Button.z, {
              "data-testid": "sidebar-toggle",
              onClick: function onToggle() {
                setCollapsed(function (prevState) {
                  return !prevState;
                });
              },
              children: t("toggle")
            }),
            (0, jsx_runtime.jsxs)("div", {
              className: Sidebar_Sidebar_module.switchers,
              children: [
                (0, jsx_runtime.jsx)(ThemeSwitcher.O, {}),
                (0, jsx_runtime.jsx)(LangSwitcher, {
                  className: Sidebar_Sidebar_module.lang
                })
              ]
            })
          ]
        });
      };
      Sidebar.displayName = "Sidebar";
      try {
        (Sidebar.displayName = "Sidebar"),
          (Sidebar.__docgenInfo = {
            description: "",
            displayName: "Sidebar",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" }
              }
            }
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx#Sidebar"
            ] = {
              docgenInfo: Sidebar.__docgenInfo,
              name: "Sidebar",
              path: "src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx#Sidebar"
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__("./src/app/styles/index.scss");
      var ThemeDecorator = __webpack_require__(
          "./src/shared/config/storybook/ThemeDecorator.tsx"
        ),
        ThemeProvider = __webpack_require__(
          "./src/app/providers/ThemeProvider/index.tsx"
        );
      const Sidebar_stories = {
        title: "widget/Sidebar",
        component: Sidebar,
        argTypes: { backgroundColor: { control: "color" } }
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(Sidebar, Object.assign({}, args));
      };
      Template.displayName = "Template";
      var Light = Template.bind({});
      Light.args = {};
      var Dark = Template.bind({});
      (Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Light.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\r\n  <Sidebar {...(args as object)} />\r\n)"
            }
          },
          Light.parameters
        )),
        (Dark.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\r\n  <Sidebar {...(args as object)} />\r\n)"
            }
          },
          Dark.parameters
        ));
      var __namedExportsOrder = ["Light", "Dark"];
    },
    "./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          Normal: () => Normal,
          Dark: () => Dark,
          __namedExportsOrder: () => __namedExportsOrder
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        );
      var shared_config_storybook_ThemeDecorator__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./src/shared/config/storybook/ThemeDecorator.tsx"
          ),
        app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./src/app/providers/ThemeProvider/index.tsx"),
        _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "shared/ThemeSwitcher",
        component: _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_4__.O,
        argTypes: { backgroundColor: { control: "color" } }
      };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
          _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_4__.O,
          Object.assign({}, args)
        );
      };
      Template.displayName = "Template";
      var Normal = Template.bind({});
      Normal.args = {};
      var Dark = Template.bind({});
      (Dark.args = {}),
        (Dark.decorators = [
          (0,
          shared_config_storybook_ThemeDecorator__WEBPACK_IMPORTED_MODULE_2__.F)(
            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.Q2.DARK
          )
        ]),
        (Normal.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\r\n  <ThemeSwitcher {...args} />\r\n)"
            }
          },
          Normal.parameters
        )),
        (Dark.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\r\n  <ThemeSwitcher {...args} />\r\n)"
            }
          },
          Dark.parameters
        ));
      var __namedExportsOrder = ["Normal", "Dark"];
    },
    "./src/app/providers/ThemeProvider/index.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        Q2: () => Theme,
        Fg: () => useTheme
      });
      var Theme,
        react = __webpack_require__("./node_modules/react/index.js");
      !(function (Theme) {
        (Theme.LIGHT = "light"), (Theme.DARK = "dark");
      })(Theme || (Theme = {}));
      var ThemeContext = (0, react.createContext)({});
      function useTheme() {
        var _useContext = (0, react.useContext)(ThemeContext),
          theme = _useContext.theme,
          setTheme = _useContext.setTheme;
        return {
          theme,
          toggleTheme: function toggleTheme() {
            var newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
            setTheme(newTheme), localStorage.setItem("theme", newTheme);
          }
        };
      }
      __webpack_require__(
        "./node_modules/core-js/modules/es.array.is-array.js"
      ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.symbol.description.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.to-string.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.symbol.iterator.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.string.iterator.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.iterator.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/web.dom-collections.iterator.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.name.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.array.from.js");
      var jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js"
      );
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
                  arr["@@iterator"];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            "Object" === n && o.constructor && (n = o.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(o);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var defaultTheme = localStorage.getItem("theme") || Theme.LIGHT,
        ThemeProvider_ThemeProvider = function ThemeProvider(_ref) {
          var children = _ref.children,
            _useState2 = _slicedToArray((0, react.useState)(defaultTheme), 2),
            theme = _useState2[0],
            setTheme = _useState2[1],
            defaultProps = (0, react.useMemo)(
              function () {
                return { theme, setTheme };
              },
              [theme]
            );
          return (0, jsx_runtime.jsx)(ThemeContext.Provider, {
            value: defaultProps,
            children
          });
        };
      ThemeProvider_ThemeProvider.displayName = "ThemeProvider";
      try {
        (ThemeProvider_ThemeProvider.displayName = "ThemeProvider"),
          (ThemeProvider_ThemeProvider.__docgenInfo = {
            description: "",
            displayName: "ThemeProvider",
            props: {}
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider"
            ] = {
              docgenInfo: ThemeProvider_ThemeProvider.__docgenInfo,
              name: "ThemeProvider",
              path: "src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider"
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (ThemeProvider.displayName = "ThemeProvider"),
          (ThemeProvider.__docgenInfo = {
            description: "",
            displayName: "ThemeProvider",
            props: {}
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/providers/ThemeProvider/index.tsx#ThemeProvider"
            ] = {
              docgenInfo: ThemeProvider.__docgenInfo,
              name: "ThemeProvider",
              path: "src/app/providers/ThemeProvider/index.tsx#ThemeProvider"
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/shared/config/storybook/ThemeDecorator.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { F: () => ThemeDecorator });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        ThemeDecorator = function ThemeDecorator(theme) {
          return function (StoryComponent) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "div",
              {
                className: "app " + theme,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  StoryComponent,
                  {}
                )
              }
            );
          };
        };
      try {
        (ThemeDecorator.displayName = "ThemeDecorator"),
          (ThemeDecorator.__docgenInfo = {
            description: "",
            displayName: "ThemeDecorator",
            props: {}
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/shared/config/storybook/ThemeDecorator.tsx#ThemeDecorator"
            ] = {
              docgenInfo: ThemeDecorator.__docgenInfo,
              name: "ThemeDecorator",
              path: "src/shared/config/storybook/ThemeDecorator.tsx#ThemeDecorator"
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/shared/lib/classNames/classNames.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { A: () => classNames });
      __webpack_require__("./node_modules/core-js/modules/es.array.join.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.concat.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.filter.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.array.map.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.entries.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.is-array.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.symbol.description.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.to-string.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.symbol.iterator.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.string.iterator.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.iterator.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/web.dom-collections.iterator.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.array.from.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.name.js"
        );
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
                  arr["@@iterator"];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          })(arr) ||
          (function _iterableToArray(iter) {
            if (
              ("undefined" != typeof Symbol && null != iter[Symbol.iterator]) ||
              null != iter["@@iterator"]
            )
              return Array.from(iter);
          })(arr) ||
          _unsupportedIterableToArray(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            "Object" === n && o.constructor && (n = o.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(o)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function classNames(cls) {
        var mods =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          additional =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        return [cls]
          .concat(
            _toConsumableArray(additional.filter(Boolean)),
            _toConsumableArray(
              Object.entries(mods)
                .filter(function (_ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                    value = (_ref2[0], _ref2[1]);
                  return Boolean(value);
                })
                .map(function (_ref3) {
                  return _slicedToArray(_ref3, 1)[0];
                })
            )
          )
          .join(" ");
      }
    },
    "./src/shared/ui/AppLink/AppLink.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        F: () => AppLink,
        u: () => AppLinkTheme
      });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.index-of.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        );
      var react_router_dom = __webpack_require__(
          "./node_modules/react-router-dom/index.js"
        ),
        classNames = __webpack_require__(
          "./src/shared/lib/classNames/classNames.ts"
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js"
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        AppLink_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss"
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(AppLink_module.Z, options);
      const AppLink_AppLink_module =
        AppLink_module.Z && AppLink_module.Z.locals
          ? AppLink_module.Z.locals
          : void 0;
      var AppLinkTheme,
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        _excluded = ["to", "className", "theme", "children"];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      !(function (AppLinkTheme) {
        (AppLinkTheme.PRIMARY = "primary"),
          (AppLinkTheme.SECONDARY = "secondary");
      })(AppLinkTheme || (AppLinkTheme = {}));
      var AppLink = function AppLink(props) {
        var to = props.to,
          className = props.className,
          _props$theme = props.theme,
          theme = void 0 === _props$theme ? AppLinkTheme.PRIMARY : _props$theme,
          children = props.children,
          otherProps = _objectWithoutProperties(props, _excluded);
        return (0, jsx_runtime.jsx)(
          react_router_dom.rU,
          Object.assign(
            {
              to,
              className: (0, classNames.A)(AppLink_AppLink_module.AppLink, {}, [
                className,
                AppLink_AppLink_module[theme]
              ])
            },
            otherProps,
            { children }
          )
        );
      };
      AppLink.displayName = "AppLink";
      try {
        (AppLink.displayName = "AppLink"),
          (AppLink.__docgenInfo = {
            description: "",
            displayName: "AppLink",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" }
              },
              theme: {
                defaultValue: null,
                description: "",
                name: "theme",
                required: !1,
                type: {
                  name: "enum",
                  value: [{ value: '"primary"' }, { value: '"secondary"' }]
                }
              }
            }
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/shared/ui/AppLink/AppLink.tsx#AppLink"
            ] = {
              docgenInfo: AppLink.__docgenInfo,
              name: "AppLink",
              path: "src/shared/ui/AppLink/AppLink.tsx#AppLink"
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/shared/ui/Button/Button.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        z: () => Button,
        U: () => ButtonTheme
      });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.index-of.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        );
      var classNames = __webpack_require__(
          "./src/shared/lib/classNames/classNames.ts"
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js"
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        Button_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss"
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Button_module.Z, options);
      const Button_Button_module =
        Button_module.Z && Button_module.Z.locals
          ? Button_module.Z.locals
          : void 0;
      var ButtonTheme,
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        _excluded = ["className", "children", "theme"];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      !(function (ButtonTheme) {
        (ButtonTheme.CLEAR = "clear"), (ButtonTheme.OUTLINE = "outline");
      })(ButtonTheme || (ButtonTheme = {}));
      var Button = function Button(props) {
        var className = props.className,
          children = props.children,
          theme = props.theme,
          otherProps = _objectWithoutProperties(props, _excluded);
        return (0, jsx_runtime.jsx)(
          "button",
          Object.assign(
            {
              className: (0, classNames.A)(Button_Button_module.Button, {}, [
                className,
                Button_Button_module[theme]
              ])
            },
            otherProps,
            { children }
          )
        );
      };
      Button.displayName = "Button";
      try {
        (Button.displayName = "Button"),
          (Button.__docgenInfo = {
            description: "",
            displayName: "Button",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" }
              },
              theme: {
                defaultValue: null,
                description: "",
                name: "theme",
                required: !1,
                type: {
                  name: "enum",
                  value: [{ value: '"clear"' }, { value: '"outline"' }]
                }
              }
            }
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/shared/ui/Button/Button.tsx#Button"] =
              {
                docgenInfo: Button.__docgenInfo,
                name: "Button",
                path: "src/shared/ui/Button/Button.tsx#Button"
              });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { O: () => ThemeSwitcher });
      var _path,
        ThemeProvider = __webpack_require__(
          "./src/app/providers/ThemeProvider/index.tsx"
        ),
        classNames = __webpack_require__(
          "./src/shared/lib/classNames/classNames.ts"
        ),
        react = __webpack_require__("./node_modules/react/index.js");
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      const theme_light = function SvgThemeLight(props) {
        return react.createElement(
          "svg",
          _extends(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 41,
              height: 40,
              viewBox: "0 0 24 24",
              style: { enableBackground: "new 0 0 512 512" },
              xmlSpace: "preserve"
            },
            props
          ),
          _path ||
            (_path = react.createElement("path", {
              d: "M23 11h-3.062a7.956 7.956 0 0 0-.575-2.129l2.655-1.546A1 1 0 0 0 21.012 5.6l-2.658 1.545a8.1 8.1 0 0 0-1.507-1.5l1.541-2.648a1 1 0 0 0-1.729-1.006L15.12 4.633A7.971 7.971 0 0 0 13 4.062V1a1 1 0 0 0-2 0v3.062a7.965 7.965 0 0 0-2.108.566L7.355 1.986a1 1 0 1 0-1.728 1.006l1.536 2.641a8.046 8.046 0 0 0-1.512 1.506L3 5.6a1 1 0 0 0-1 1.725l2.64 1.54A7.955 7.955 0 0 0 4.062 11H1a1 1 0 0 0 0 2h3.062a7.957 7.957 0 0 0 .576 2.129L2 16.662a1 1 0 0 0 1.01 1.729l2.637-1.535a8.083 8.083 0 0 0 1.5 1.5L5.6 21a1 1 0 0 0 1.73 1.007l1.538-2.646a7.943 7.943 0 0 0 2.132.577V23a1 1 0 0 0 2 0v-3.062a7.934 7.934 0 0 0 2.143-.582l1.543 2.651A1 1 0 0 0 18.414 21l-1.546-2.657a8.076 8.076 0 0 0 1.49-1.494l2.647 1.541a1 1 0 0 0 1.006-1.729l-2.646-1.54A7.941 7.941 0 0 0 19.938 13H23a1 1 0 0 0 0-2Zm-11 7c-7.644-.094-8.208-11.68 0-12 7.929.252 7.928 11.749 0 12Zm1.455-2.229C7.889 17.5 5.64 9.3 11.361 8.051a4.393 4.393 0 0 1 1.683.068.544.544 0 0 1 .243.918 3.7 3.7 0 0 0 .319 5.793.545.545 0 0 1-.151.941Z",
              fill: "#74D1FF",
              "data-original": "#000000"
            }))
        );
      };
      var theme_dark_path;
      function theme_dark_extends() {
        return (
          (theme_dark_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          theme_dark_extends.apply(this, arguments)
        );
      }
      const theme_dark = function SvgThemeDark(props) {
        return react.createElement(
          "svg",
          theme_dark_extends(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 41,
              height: 40,
              viewBox: "0 0 24 24",
              style: { enableBackground: "new 0 0 512 512" },
              xmlSpace: "preserve"
            },
            props
          ),
          theme_dark_path ||
            (theme_dark_path = react.createElement("path", {
              d: "M23 11h-3.062a7.956 7.956 0 0 0-.575-2.129l2.655-1.546A1 1 0 0 0 21.012 5.6l-2.658 1.545a8.1 8.1 0 0 0-1.507-1.5l1.541-2.648a1 1 0 0 0-1.729-1.006L15.12 4.633A7.971 7.971 0 0 0 13 4.062V1a1 1 0 0 0-2 0v3.062a7.965 7.965 0 0 0-2.108.566L7.355 1.986a1 1 0 1 0-1.728 1.006l1.536 2.641a8.046 8.046 0 0 0-1.512 1.506L3 5.6a1 1 0 0 0-1 1.725l2.64 1.54A7.955 7.955 0 0 0 4.062 11H1a1 1 0 0 0 0 2h3.062a7.957 7.957 0 0 0 .576 2.129L2 16.662a1 1 0 0 0 1.01 1.729l2.637-1.535a8.083 8.083 0 0 0 1.5 1.5L5.6 21a1 1 0 0 0 1.73 1.007l1.538-2.646a7.943 7.943 0 0 0 2.132.577V23a1 1 0 0 0 2 0v-3.062a7.934 7.934 0 0 0 2.143-.582l1.543 2.651A1 1 0 0 0 18.414 21l-1.546-2.657a8.076 8.076 0 0 0 1.49-1.494l2.647 1.541a1 1 0 0 0 1.006-1.729l-2.646-1.54A7.941 7.941 0 0 0 19.938 13H23a1 1 0 0 0 0-2Zm-9.182 5.714c-6.956 2.162-9.767-8.087-2.618-9.65a5.468 5.468 0 0 1 2.1.085.68.68 0 0 1 .3 1.148 4.618 4.618 0 0 0 .4 7.241.681.681 0 0 1-.182 1.176Z",
              fill: "#292a35",
              "data-original": "#000000"
            }))
        );
      };
      var Button = __webpack_require__("./src/shared/ui/Button/Button.tsx"),
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        ThemeSwitcher = function ThemeSwitcher(_ref) {
          var className = _ref.className,
            _useTheme = (0, ThemeProvider.Fg)(),
            theme = _useTheme.theme,
            toggleTheme = _useTheme.toggleTheme;
          return (0, jsx_runtime.jsx)(Button.z, {
            theme: Button.U.CLEAR,
            className: (0, classNames.A)("", {}, [className]),
            onClick: toggleTheme,
            children:
              theme === ThemeProvider.Q2.DARK
                ? (0, jsx_runtime.jsx)(theme_dark, {})
                : (0, jsx_runtime.jsx)(theme_light, {})
          });
        };
      ThemeSwitcher.displayName = "ThemeSwitcher";
      try {
        (ThemeSwitcher.displayName = "ThemeSwitcher"),
          (ThemeSwitcher.__docgenInfo = {
            description: "",
            displayName: "ThemeSwitcher",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" }
              }
            }
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx#ThemeSwitcher"
            ] = {
              docgenInfo: ThemeSwitcher.__docgenInfo,
              name: "ThemeSwitcher",
              path: "src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx#ThemeSwitcher"
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./storybook-init-framework-entry.js": (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__(
        "./node_modules/@storybook/react/dist/esm/client/index.js"
      );
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js"
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js"
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '*{margin:0;padding:0;box-sizing:border-box}input,button,textarea,select{margin:0;font:inherit}:root{--font-family-main: "verdana", sans-serif;--font-size-m: 16px;--font-line-m: 24px;--font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);--font-size-l: 24px;--font-line-l: 32px;--font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);--navbar-height: 50px;--sidebar-width: 300px;--sidebar-width-collapsed: 80px}:root{--bg-color: #fff;--inverted-bg-color: #292a35;--primary-color: #353e6e;--secondary-color: #2b2424;--inverted-primary-color: #75b7ec;--inverted-secondary-color: #eee7e7}.dark{--bg-color: #292a35;--inverted-bg-color: #fff;--primary-color: #75b7ec;--secondary-color: #eee7e7;--inverted-primary-color: #353e6e;--inverted-secondary-color: #2b2424}.app{font:var(--font-m);background:var(--bg-color);color:var(--primary-color);min-height:100vh}.content-page{display:flex}.page-wrapper{padding:20px;flex-grow:1}',
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/styles/reset.scss",
              "webpack://./src/app/styles/variables/global.scss",
              "webpack://./src/app/styles/themes/normal.scss",
              "webpack://./src/app/styles/themes/dark.scss",
              "webpack://./src/app/styles/index.scss"
            ],
            names: [],
            mappings:
              "AAAA,EACE,QAAA,CACA,SAAA,CACA,qBAAA,CAGF,6BAIE,QAAA,CACA,YAAA,CCXF,MACE,yCAAA,CAEA,mBAAA,CACA,mBAAA,CACA,yEAAA,CAEA,mBAAA,CACA,mBAAA,CACA,yEAAA,CAGA,qBAAA,CACA,sBAAA,CACA,+BAAA,CCdF,MACE,gBAAA,CACA,4BAAA,CAEA,wBAAA,CACA,0BAAA,CAEA,iCAAA,CACA,mCAAA,CCRF,MACE,mBAAA,CACA,yBAAA,CAEA,wBAAA,CACA,0BAAA,CAEA,iCAAA,CACA,mCAAA,CCHF,KACE,kBAAA,CACA,0BAAA,CACA,0BAAA,CACA,gBAAA,CAGF,cACE,YAAA,CAGF,cACE,YAAA,CACA,WAAA",
            sourcesContent: [
              "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  margin: 0;\r\n  font: inherit;\r\n}\r\n",
              ':root {\r\n  --font-family-main: "verdana", sans-serif;\r\n\r\n  --font-size-m: 16px;\r\n  --font-line-m: 24px;\r\n  --font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);\r\n\r\n  --font-size-l: 24px;\r\n  --font-line-l: 32px;\r\n  --font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);\r\n\r\n  // Размеры\r\n  --navbar-height: 50px;\r\n  --sidebar-width: 300px;\r\n  --sidebar-width-collapsed: 80px;\r\n}\r\n',
              ":root {\r\n  --bg-color: #fff;\r\n  --inverted-bg-color: #292a35;\r\n\r\n  --primary-color: #353e6e;\r\n  --secondary-color: #2b2424;\r\n\r\n  --inverted-primary-color: #75b7ec;\r\n  --inverted-secondary-color: #eee7e7;\r\n}\r\n",
              ".dark {\r\n  --bg-color: #292a35;\r\n  --inverted-bg-color: #fff;\r\n\r\n  --primary-color: #75b7ec;\r\n  --secondary-color: #eee7e7;\r\n\r\n  --inverted-primary-color: #353e6e;\r\n  --inverted-secondary-color: #2b2424;\r\n}\r\n",
              '@import "reset";\r\n@import "variables/global";\r\n@import "themes/normal";\r\n@import "themes/dark";\r\n\r\n.app {\r\n  font: var(--font-m);\r\n  background: var(--bg-color);\r\n  color: var(--primary-color);\r\n  min-height: 100vh;\r\n}\r\n\r\n.content-page {\r\n  display: flex;\r\n}\r\n\r\n.page-wrapper {\r\n  padding: 20px;\r\n  flex-grow: 1;\r\n}\r\n'
            ],
            sourceRoot: ""
          }
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NotFoundPage/ui/NotFoundPage.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js"
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js"
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".src-pages-NotFoundPage-ui-NotFoundPage-module__NotFoundPage--s3qI9{display:flex;justify-content:center;align-items:center;font:var(--font-l);height:100%}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/pages/NotFoundPage/ui/NotFoundPage.module.scss"
            ],
            names: [],
            mappings:
              "AAAA,oEACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,kBAAA,CACA,WAAA",
            sourcesContent: [
              ".NotFoundPage {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font: var(--font-l);\r\n  height: 100%;\r\n}\r\n"
            ],
            sourceRoot: ""
          }
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            NotFoundPage:
              "src-pages-NotFoundPage-ui-NotFoundPage-module__NotFoundPage--s3qI9"
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js"
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js"
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".src-shared-ui-AppLink-AppLink-module__AppLink--mVYHW{color:var(--primary-color)}.src-shared-ui-AppLink-AppLink-module__primary--lPwbq{color:var(--primary-color)}.src-shared-ui-AppLink-AppLink-module__secondary--E8eho{color:var(--inverted-primary-color)}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/shared/ui/AppLink/AppLink.module.scss"],
            names: [],
            mappings: "AAAA,sDACE,0BAAA,CAGF,sDACE,0BAAA,CAGF,wDACE,mCAAA",
            sourcesContent: [
              ".AppLink {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.primary {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.secondary {\r\n  color: var(--inverted-primary-color);\r\n}\r\n"
            ],
            sourceRoot: ""
          }
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            AppLink: "src-shared-ui-AppLink-AppLink-module__AppLink--mVYHW",
            primary: "src-shared-ui-AppLink-AppLink-module__primary--lPwbq",
            secondary: "src-shared-ui-AppLink-AppLink-module__secondary--E8eho"
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js"
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js"
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".src-shared-ui-Button-Button-module__Button--a4nOa{cursor:pointer;color:var(--primary-color)}.src-shared-ui-Button-Button-module__clear--FAEtI{padding:0;border:none;background:none;outline:none}.src-shared-ui-Button-Button-module__outline--pxBl_{padding:10px 15px;border:2px solid var(--primary-color);color:var(--primary-color);background:none}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/shared/ui/Button/Button.module.scss"],
            names: [],
            mappings:
              "AAAA,mDACE,cAAA,CACA,0BAAA,CAGF,kDACE,SAAA,CACA,WAAA,CACA,eAAA,CACA,YAAA,CAGF,oDACE,iBAAA,CACA,qCAAA,CACA,0BAAA,CACA,eAAA",
            sourcesContent: [
              ".Button {\r\n  cursor: pointer;\r\n  color: var(--primary-color);\r\n}\r\n\r\n.clear {\r\n  padding: 0;\r\n  border: none;\r\n  background: none;\r\n  outline: none;\r\n}\r\n\r\n.outline {\r\n  padding: 10px 15px;\r\n  border: 2px solid var(--primary-color);\r\n  color: var(--primary-color);\r\n  background: none;\r\n}\r\n"
            ],
            sourceRoot: ""
          }
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            Button: "src-shared-ui-Button-Button-module__Button--a4nOa",
            clear: "src-shared-ui-Button-Button-module__clear--FAEtI",
            outline: "src-shared-ui-Button-Button-module__outline--pxBl_"
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Loader/Loader.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js"
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js"
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".lds-ellipsis{display:inline-block;position:relative;width:80px;height:80px}.lds-ellipsis div{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:var(--inverted-bg-color);animation-timing-function:cubic-bezier(0, 1, 1, 0)}.lds-ellipsis div:nth-child(1){left:8px;animation:lds-ellipsis1 .6s infinite}.lds-ellipsis div:nth-child(2){left:8px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(3){left:32px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(4){left:56px;animation:lds-ellipsis3 .6s infinite}@keyframes lds-ellipsis1{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes lds-ellipsis3{0%{transform:scale(1)}100%{transform:scale(0)}}@keyframes lds-ellipsis2{0%{transform:translate(0, 0)}100%{transform:translate(24px, 0)}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/shared/ui/Loader/Loader.scss"],
            names: [],
            mappings:
              "AAAA,cACE,oBAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CAGF,kBACE,iBAAA,CACA,QAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,mCAAA,CACA,kDAAA,CAGF,+BACE,QAAA,CACA,oCAAA,CAGF,+BACE,QAAA,CACA,oCAAA,CAGF,+BACE,SAAA,CACA,oCAAA,CAGF,+BACE,SAAA,CACA,oCAAA,CAGF,yBACE,GACE,kBAAA,CAEF,KACE,kBAAA,CAAA,CAIJ,yBACE,GACE,kBAAA,CAEF,KACE,kBAAA,CAAA,CAIJ,yBACE,GACE,yBAAA,CAEF,KACE,4BAAA,CAAA",
            sourcesContent: [
              ".lds-ellipsis {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n\r\n.lds-ellipsis div {\r\n  position: absolute;\r\n  top: 33px;\r\n  width: 13px;\r\n  height: 13px;\r\n  border-radius: 50%;\r\n  background: var(--inverted-bg-color);\r\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\r\n}\r\n\r\n.lds-ellipsis div:nth-child(1) {\r\n  left: 8px;\r\n  animation: lds-ellipsis1 0.6s infinite;\r\n}\r\n\r\n.lds-ellipsis div:nth-child(2) {\r\n  left: 8px;\r\n  animation: lds-ellipsis2 0.6s infinite;\r\n}\r\n\r\n.lds-ellipsis div:nth-child(3) {\r\n  left: 32px;\r\n  animation: lds-ellipsis2 0.6s infinite;\r\n}\r\n\r\n.lds-ellipsis div:nth-child(4) {\r\n  left: 56px;\r\n  animation: lds-ellipsis3 0.6s infinite;\r\n}\r\n\r\n@keyframes lds-ellipsis1 {\r\n  0% {\r\n    transform: scale(0);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes lds-ellipsis3 {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n  100% {\r\n    transform: scale(0);\r\n  }\r\n}\r\n\r\n@keyframes lds-ellipsis2 {\r\n  0% {\r\n    transform: translate(0, 0);\r\n  }\r\n  100% {\r\n    transform: translate(24px, 0);\r\n  }\r\n}\r\n"
            ],
            sourceRoot: ""
          }
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/LangSwitcher/LangSwitcher.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js"
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js"
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".src-widgets-LangSwitcher-LangSwitcher-module__LangSwitcher--bjcfR{color:var(--inverted-primary-color)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/widgets/LangSwitcher/LangSwitcher.module.scss"
            ],
            names: [],
            mappings: "AAAA,mEACE,mCAAA",
            sourcesContent: [
              ".LangSwitcher {\r\n  color: var(--inverted-primary-color);\r\n}\r\n"
            ],
            sourceRoot: ""
          }
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            LangSwitcher:
              "src-widgets-LangSwitcher-LangSwitcher-module__LangSwitcher--bjcfR"
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Navbar/ui/Navbar.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js"
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js"
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".src-widgets-Navbar-ui-Navbar-module__Navbar--YC5yK{width:100%;height:var(--navbar-height);background:var(--inverted-bg-color);display:flex;align-items:center;padding:20px}.src-widgets-Navbar-ui-Navbar-module__mainLink--ZMsbP{margin-right:15px}.src-widgets-Navbar-ui-Navbar-module__links--_tl_p{margin-left:auto}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/widgets/Navbar/ui/Navbar.module.scss"],
            names: [],
            mappings:
              "AAAA,oDACE,UAAA,CACA,2BAAA,CACA,mCAAA,CACA,YAAA,CACA,kBAAA,CACA,YAAA,CAGF,sDACE,iBAAA,CAGF,mDACE,gBAAA",
            sourcesContent: [
              ".Navbar {\r\n  width: 100%;\r\n  height: var(--navbar-height);\r\n  background: var(--inverted-bg-color);\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 20px;\r\n}\r\n\r\n.mainLink {\r\n  margin-right: 15px;\r\n}\r\n\r\n.links {\r\n  margin-left: auto;\r\n}\r\n"
            ],
            sourceRoot: ""
          }
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            Navbar: "src-widgets-Navbar-ui-Navbar-module__Navbar--YC5yK",
            mainLink: "src-widgets-Navbar-ui-Navbar-module__mainLink--ZMsbP",
            links: "src-widgets-Navbar-ui-Navbar-module__links--_tl_p"
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageError/ui/PageError.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js"
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js"
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".src-widgets-PageError-ui-PageError-module__PageError--HSFBb{width:100%;height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/widgets/PageError/ui/PageError.module.scss"
            ],
            names: [],
            mappings:
              "AAAA,6DACE,UAAA,CACA,YAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,qBAAA",
            sourcesContent: [
              ".PageError {\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n"
            ],
            sourceRoot: ""
          }
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            PageError:
              "src-widgets-PageError-ui-PageError-module__PageError--HSFBb"
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js"
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js"
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".src-widgets-Sidebar-ui-Sidebar-Sidebar-module__Sidebar--ld5FU{height:calc(100vh - var(--navbar-height));width:var(--sidebar-width);background:var(--inverted-bg-color);position:relative;transition:width .3s}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapsed--EudhC{width:var(--sidebar-width-collapsed)}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__switchers--QQRIw{position:absolute;bottom:20px;display:flex;justify-content:center;width:100%}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__lang--Cc0mZ{margin-left:20px}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss"
            ],
            names: [],
            mappings:
              "AAAA,+DACE,yCAAA,CACA,0BAAA,CACA,mCAAA,CACA,iBAAA,CACA,oBAAA,CAGF,iEACE,oCAAA,CAGF,iEACE,iBAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CACA,UAAA,CAGF,4DACE,gBAAA",
            sourcesContent: [
              ".Sidebar {\r\n  height: calc(100vh - var(--navbar-height));\r\n  width: var(--sidebar-width);\r\n  background: var(--inverted-bg-color);\r\n  position: relative;\r\n  transition: width 0.3s;\r\n}\r\n\r\n.collapsed {\r\n  width: var(--sidebar-width-collapsed);\r\n}\r\n\r\n.switchers {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n}\r\n\r\n.lang {\r\n  margin-left: 20px;\r\n}\r\n"
            ],
            sourceRoot: ""
          }
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            Sidebar:
              "src-widgets-Sidebar-ui-Sidebar-Sidebar-module__Sidebar--ld5FU",
            collapsed:
              "src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapsed--EudhC",
            switchers:
              "src-widgets-Sidebar-ui-Sidebar-Sidebar-module__switchers--QQRIw",
            lang: "src-widgets-Sidebar-ui-Sidebar-Sidebar-module__lang--Cc0mZ"
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./src/app/styles/index.scss": (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          ),
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          ),
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          ),
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          ),
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          ),
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          ),
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          ),
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          ),
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          ),
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          ),
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          ),
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          ),
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_11_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss"
          ),
        options = {};
      (options.styleTagTransform =
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default()),
        (options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default()),
        (options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          )),
        (options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default()),
        (options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());
      _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_11_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z,
        options
      ),
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_11_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_11_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__
            .Z.locals &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_11_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__
            .Z.locals;
    },
    "./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          "./pages/AboutPage/ui/AboutPage.stories.tsx":
            "./src/pages/AboutPage/ui/AboutPage.stories.tsx",
          "./pages/MainPage/ui/MainPage.stories.tsx":
            "./src/pages/MainPage/ui/MainPage.stories.tsx",
          "./pages/NotFoundPage/ui/NotFoundPage.stories.tsx":
            "./src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx",
          "./shared/ui/AppLink/AppLink.stories.tsx":
            "./src/shared/ui/AppLink/AppLink.stories.tsx",
          "./shared/ui/Button/Button.stories.tsx":
            "./src/shared/ui/Button/Button.stories.tsx",
          "./shared/ui/Loader/Loader.stories.tsx":
            "./src/shared/ui/Loader/Loader.stories.tsx",
          "./widgets/Navbar/ui/Navbar.stories.tsx":
            "./src/widgets/Navbar/ui/Navbar.stories.tsx",
          "./widgets/PageError/ui/PageError.stories.tsx":
            "./src/widgets/PageError/ui/PageError.stories.tsx",
          "./widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx":
            "./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx",
          "./widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx":
            "./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx"
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            "./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$");
      },
    "?4f7e": () => {},
    "./generated-stories-entry.cjs": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      (module = __webpack_require__.nmd(module)),
        (0,
        __webpack_require__(
          "./node_modules/@storybook/react/dist/esm/client/index.js"
        ).configure)(
          [
            __webpack_require__(
              "./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"
            )
          ],
          module,
          !1
        );
    }
  },
  (__webpack_require__) => {
    var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    __webpack_require__.O(
      0,
      [22],
      () => (
        __webpack_exec__(
          "./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/core-client/dist/esm/globals/globals.js"
        ),
        __webpack_exec__("./storybook-init-framework-entry.js"),
        __webpack_exec__(
          "./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./config/.storybook/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__("./generated-stories-entry.cjs")
      )
    );
    __webpack_require__.O();
  }
]);
