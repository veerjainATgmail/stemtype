"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToolbarHack = function (_Component) {
  (0, _inherits3.default)(ToolbarHack, _Component);

  function ToolbarHack() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ToolbarHack);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ToolbarHack.__proto__ || (0, _getPrototypeOf2.default)(ToolbarHack)).call.apply(_ref, [this].concat(args))), _this), _this.hackEditor = function () {
      var $ = require("cash-dom");
      var $footer = $(".markdown-editor-footer");
      var $toolbar = $(".editor-toolbar");
      var $status = $(".editor-statusbar");
      $toolbar.appendTo($footer);
      $status.appendTo($footer);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ToolbarHack, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.hackEditor();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ToolbarHack;
}(_react.Component);

exports.default = ToolbarHack;