"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  font-size: 16px;\n  font-weight: 400;\n  font-style: normal;\n  word-break: break-word;\n  word-wrap: break-word;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-align: left;\n  line-height: 1.7em;\n  letter-spacing: -0.003em;\n\n  strong {\n    font-weight: 700;\n  }\n  \n  h1, h2, h3, h4, h5, h6 {\n    margin-bottom: 30px;\n    margin-top: 30px;\n  }\n\n  ol,\n  ul {\n    padding: 0;\n    padding-left: 15px;\n  }\n\n  ul li,\n  ol li {\n    margin-bottom: 15px;\n  }\n\n  p {\n    margin: 0;\n    padding: 0;\n    margin-bottom: 26px;\n  }\n\n  a,\n  a:hover,\n  a:focus,\n  a:visited {\n    color: ", ";\n    text-decoration: underline;\n    transition: color 0.25s ease;\n  }\n\n  a:hover {\n    color: ", ";\n  }\n\n  table {\n    /* Remove spacing between table cells (from Normalize.css) */\n    border-collapse: collapse;\n    border-spacing: 0;\n    empty-cells: show;\n    border: 1px solid #cbcbcb;\n    margin: 0 auto 26px auto;\n  }\n\n  table caption {\n    color: #000;\n    font: italic 85%/1 arial, sans-serif;\n    padding: 1em 0;\n    text-align: center;\n  }\n\n  table td,\n  table th {\n    border-left: 1px solid #cbcbcb; /*  inner column border */\n    border-width: 0 0 0 1px;\n    font-size: inherit;\n    margin: 0;\n    overflow: visible; /*to make ths where the title is really long work*/\n    padding: 0.5em 1em; /* cell padding */\n  }\n\n  /* Consider removing this next declaration block, as it causes problems when\nthere's a rowspan on the first cell. Case added to the tests. issue#432 */\n  table td:first-child,\n  table th:first-child {\n    border-left-width: 0;\n  }\n\n  table thead {\n    background-color: #e0e0e0;\n    color: #000;\n    text-align: left;\n    vertical-align: bottom;\n  }\n"], ["\n  font-size: 16px;\n  font-weight: 400;\n  font-style: normal;\n  word-break: break-word;\n  word-wrap: break-word;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-align: left;\n  line-height: 1.7em;\n  letter-spacing: -0.003em;\n\n  strong {\n    font-weight: 700;\n  }\n  \n  h1, h2, h3, h4, h5, h6 {\n    margin-bottom: 30px;\n    margin-top: 30px;\n  }\n\n  ol,\n  ul {\n    padding: 0;\n    padding-left: 15px;\n  }\n\n  ul li,\n  ol li {\n    margin-bottom: 15px;\n  }\n\n  p {\n    margin: 0;\n    padding: 0;\n    margin-bottom: 26px;\n  }\n\n  a,\n  a:hover,\n  a:focus,\n  a:visited {\n    color: ", ";\n    text-decoration: underline;\n    transition: color 0.25s ease;\n  }\n\n  a:hover {\n    color: ", ";\n  }\n\n  table {\n    /* Remove spacing between table cells (from Normalize.css) */\n    border-collapse: collapse;\n    border-spacing: 0;\n    empty-cells: show;\n    border: 1px solid #cbcbcb;\n    margin: 0 auto 26px auto;\n  }\n\n  table caption {\n    color: #000;\n    font: italic 85%/1 arial, sans-serif;\n    padding: 1em 0;\n    text-align: center;\n  }\n\n  table td,\n  table th {\n    border-left: 1px solid #cbcbcb; /*  inner column border */\n    border-width: 0 0 0 1px;\n    font-size: inherit;\n    margin: 0;\n    overflow: visible; /*to make ths where the title is really long work*/\n    padding: 0.5em 1em; /* cell padding */\n  }\n\n  /* Consider removing this next declaration block, as it causes problems when\nthere's a rowspan on the first cell. Case added to the tests. issue#432 */\n  table td:first-child,\n  table th:first-child {\n    border-left-width: 0;\n  }\n\n  table thead {\n    background-color: #e0e0e0;\n    color: #000;\n    text-align: left;\n    vertical-align: bottom;\n  }\n"]);

exports.default = _styledComponents2.default.article(_templateObject, function (props) {
  return props.theme.colors.text;
}, function (props) {
  return props.theme.colors.inversedLinkHover;
});