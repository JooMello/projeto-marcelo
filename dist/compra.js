"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AddBox = _interopRequireDefault(require("@material-ui/icons/AddBox"));

var _ArrowUpward = _interopRequireDefault(require("@material-ui/icons/ArrowUpward"));

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _ChevronLeft = _interopRequireDefault(require("@material-ui/icons/ChevronLeft"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

var _DeleteOutline = _interopRequireDefault(require("@material-ui/icons/DeleteOutline"));

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _FilterList = _interopRequireDefault(require("@material-ui/icons/FilterList"));

var _FirstPage = _interopRequireDefault(require("@material-ui/icons/FirstPage"));

var _LastPage = _interopRequireDefault(require("@material-ui/icons/LastPage"));

var _materialTable = _interopRequireDefault(require("material-table"));

var _Remove = _interopRequireDefault(require("@material-ui/icons/Remove"));

var _SaveAlt = _interopRequireDefault(require("@material-ui/icons/SaveAlt"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _ViewColumn = _interopRequireDefault(require("@material-ui/icons/ViewColumn"));

var _defaultData = _interopRequireDefault(require("../data/defaultData"));

var _store = _interopRequireDefault(require("../store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var dataStore = new _store["default"]({
  configName: 'compra',
  defaults: {
    entryData: _defaultData["default"]
  }
});
var tableColumns = [{
  title: "Nome",
  field: "name"
},  {
  title: "Data Compra",
  field: "date",
  type: "date"
},
{
  title: "Quantidade",
  field: "quantidade",
  type: "number"
},{
  title: "Valor Unitário",
  field: "value",
  type: "number"
},{
  title: "Valor da Compra",
  field: "amountValue",
  type: "text"
},
 ];
var tableIcons = {
  Add: (0, _react.forwardRef)(function (props, ref) {
    return _react["default"].createElement(_AddBox["default"], _extends({}, props, {
      ref: ref
    }));
  }),
  Check: (0, _react.forwardRef)(function (props, ref) {
    return _react["default"].createElement(_Check["default"], _extends({}, props, {
      ref: ref
    }));
  }),
  Clear: (0, _react.forwardRef)(function (props, ref) {
    return _react["default"].createElement(_Clear["default"], _extends({}, props, {
      ref: ref
    }));
  }),
  Delete: (0, _react.forwardRef)(function (props, ref) {
    return _react["default"].createElement(_DeleteOutline["default"], _extends({}, props, {
      ref: ref
    }));
  }),
  DetailPanel: (0, _react.forwardRef)(function (props, ref) {
    return _react["default"].createElement(_ChevronRight["default"], _extends({}, props, {
      ref: ref
    }));
  }),
  Edit: (0, _react.forwardRef)(function (props, ref) {
    return _react["default"].createElement(_Edit["default"], _extends({}, props, {
      ref: ref
    }));
  }),
  Export: (0, _react.forwardRef)(function (props, ref) {
    return _react["default"].createElement(_SaveAlt["default"], _extends({}, props, {
      ref: ref
    }));
  }),
  Filter: (0, _react.forwardRef)(function (props, ref) {
    return _react["default"].createElement(_FilterList["default"], _extends({}, props, {
      ref: ref
    }));
  }),
  FirstPage: (0, _react.forwardRef)(function (props, ref) {
    return _react["default"].createElement(_FirstPage["default"], _extends({}, props, {
      ref: ref
    }));
  }),
  LastPage: (0, _react.forwardRef)(function (props, ref) {
    return _react["default"].createElement(_LastPage["default"], _extends({}, props, {
      ref: ref
    }));
  }),
  NextPage: (0, _react.forwardRef)(function (props, ref) {
    return _react["default"].createElement(_ChevronRight["default"], _extends({}, props, {
      ref: ref
    }));
  }),
  PreviousPage: (0, _react.forwardRef)(function (props, ref) {
    return _react["default"].createElement(_ChevronLeft["default"], _extends({}, props, {
      ref: ref
    }));
  }),
  ResetSearch: (0, _react.forwardRef)(function (props, ref) {
    return _react["default"].createElement(_Clear["default"], _extends({}, props, {
      ref: ref
    }));
  }),
  Search: (0, _react.forwardRef)(function (props, ref) {
    return _react["default"].createElement(_Search["default"], _extends({}, props, {
      ref: ref
    }));
  }),
  SortArrow: (0, _react.forwardRef)(function (props, ref) {
    return _react["default"].createElement(_ArrowUpward["default"], _extends({}, props, {
      ref: ref
    }));
  }),
  ThirdStateCheck: (0, _react.forwardRef)(function (props, ref) {
    return _react["default"].createElement(_Remove["default"], _extends({}, props, {
      ref: ref
    }));
  }),
  ViewColumn: (0, _react.forwardRef)(function (props, ref) {
    return _react["default"].createElement(_ViewColumn["default"], _extends({}, props, {
      ref: ref
    }));
  })
};

var Compra =
/*#__PURE__*/
function (_Component) {
  _inherits(Compra, _Component);

  function Compra(props) {
    var _this;

    _classCallCheck(this, Compra);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Compra).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "editable", {
      onRowAdd: function onRowAdd(newData) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            var data = _this.state.entryData;
            data.push(newData);

            _this.setState({
              entryData: data
            });

            dataStore.set('entryData', data);
            resolve();
          }, 1000);
        });
      },
      onRowDelete: function onRowDelete(oldData) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            var data = _this.state.entryData;
            var index = data.indexOf(oldData);
            data.splice(index, 1);

            _this.setState({
              entryData: data
            });

            dataStore.set('entryData', data);
            resolve();
          }, 1000);
        });
      },
      onRowUpdate: function onRowUpdate(newData, oldData) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            var data = _this.state.entryData;
            var index = data.indexOf(oldData);
            data[index] = newData;

            _this.setState({
              entryData: data
            });

            dataStore.set('entryData', data);
            resolve();
          }, 1000);
        });
      }
    });

    _this.state = {
      entryData: dataStore.get('entryData')
    };
    return _this;
  }

  _createClass(Compra, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        style: {
          maxWidth: "100%"
        }
      }, _react["default"].createElement(_materialTable["default"], {
        columns: tableColumns,
        data: this.state.entryData,
        editable: this.editable,
        icons: tableIcons,
        title: "Compra"
      }));
    }
  }]);

  return Compra;
}(_react.Component);

var _default = Compra;
exports["default"] = _default;
//# sourceMappingURL=Compra.js.map
