webpackJsonp([3],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rmc_tabs_assets_index_less__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rmc_tabs_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rmc_tabs_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src__ = __webpack_require__(37);





/* tslint:disable:no-console */




var tabData = [{ title: 'title 1' }, { title: 'title 2' }, { title: 'title 3' }, { title: 'title 4' }, { title: 'title 5' }, { title: 'title 6' }, { title: 'title 7' }, { title: 'title 8' }, { title: 'title 9' }];

var BasicDemo = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(BasicDemo, _React$Component);

    function BasicDemo(props) {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, BasicDemo);

        var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (BasicDemo.__proto__ || Object.getPrototypeOf(BasicDemo)).call(this, props));

        _this.state = {
            scData: JSON.stringify({ index: 0, tab: { title: 't1' } }),
            scData2: JSON.stringify({ index: 0, tab: { title: 't1' } })
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(BasicDemo, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var baseStyle = {
                display: 'flex', flexDirection: 'column', marginTop: 10, marginBottom: 10, fontSize: 14
            };
            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, baseStyle) },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'h2',
                        null,
                        'normal'
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_8__src__["a" /* Tabs */],
                        { tabs: tabData, onChange: function onChange(tab, index) {
                                _this2.setState({
                                    scData: JSON.stringify({ index: index + Math.random(), tab: tab })
                                });
                            }, renderTabBar: function renderTabBar(props) {
                                return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src__["b" /* DefaultTabBar */], props);
                            } },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            'div',
                            { style: { padding: 10, background: '#ADFFD7' } },
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                this.state.scData
                            ),
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'h2',
                        null,
                        'page'
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_8__src__["a" /* Tabs */],
                        { tabs: tabData, onChange: function onChange(tab, index) {
                                _this2.setState({
                                    scData2: JSON.stringify({ index: index + Math.random(), tab: tab })
                                });
                            }, renderTabBar: function renderTabBar(props) {
                                return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src__["b" /* DefaultTabBar */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { page: 4 }));
                            } },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            'div',
                            { style: { padding: 10, background: '#ADFFD7' } },
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                this.state.scData2
                            ),
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return BasicDemo;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(BasicDemo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(140);


/***/ })

},[300]);
//# sourceMappingURL=scroll-tab.js.map