"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleAlert = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SimpleAlert = exports.SimpleAlert = function SimpleAlert(_ref) {
  var color = _ref.color,
    text = _ref.text;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      color: "".concat(color)
    }
  }, "Hello ", text);
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _SimpleAlert = require("./SimpleAlert");
Object.keys(_SimpleAlert).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SimpleAlert[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SimpleAlert[key];
    }
  });
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Alerts = require("./components/Alerts");
Object.keys(_Alerts).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Alerts[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Alerts[key];
    }
  });
});
