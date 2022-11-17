"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DataTable = _interopRequireDefault(require("./DataTable"));

var _compra = _interopRequireDefault(require("./compra"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var App = function App() {
  return _react["default"].createElement("div", {
    className: "hello"
  }, _react["default"].createElement(_DataTable["default"], null));
};

var _default = App;
exports["default"] = _default;
//# sourceMappingURL=app.js.map
