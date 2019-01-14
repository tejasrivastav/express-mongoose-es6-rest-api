"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _httpStatus = _interopRequireDefault(require("http-status"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @extends Error
 */
var ExtendableError =
/*#__PURE__*/
function (_Error) {
  _inherits(ExtendableError, _Error);

  function ExtendableError(message, status, isPublic) {
    var _this;

    _classCallCheck(this, ExtendableError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExtendableError).call(this, message));
    _this.status = status;
    _this.isPublic = isPublic;
    _this.name = _this.constructor.name;
    _this.message = message;
    _this.status = status;
    _this.isPublic = isPublic;
    console.log(_this.status, _this.isPublic);
    Error.captureStackTrace(_assertThisInitialized(_assertThisInitialized(_this)), _this.constructor);
    return _this;
  }

  return ExtendableError;
}(_wrapNativeSuper(Error));
/**
 * Class representing an API error.
 * @extends ExtendableError
 */


var APIError =
/*#__PURE__*/
function (_ExtendableError) {
  _inherits(APIError, _ExtendableError);

  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  function APIError(message) {
    var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _httpStatus.default.INTERNAL_SERVER_ERROR;
    var isPublic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, APIError);

    return _possibleConstructorReturn(this, _getPrototypeOf(APIError).call(this, message, status, isPublic));
  }

  return APIError;
}(ExtendableError);

var _default = APIError;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9oZWxwZXJzL0FQSUVycm9yLnRzIl0sIm5hbWVzIjpbIkV4dGVuZGFibGVFcnJvciIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJpc1B1YmxpYyIsIm5hbWUiLCJjb25zdHJ1Y3RvciIsImNvbnNvbGUiLCJsb2ciLCJFcnJvciIsImNhcHR1cmVTdGFja1RyYWNlIiwiQVBJRXJyb3IiLCJodHRwU3RhdHVzIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxlOzs7OztBQUNKLDJCQUFZQyxPQUFaLEVBQXFDQyxNQUFyQyxFQUE2REMsUUFBN0QsRUFBZ0Y7QUFBQTs7QUFBQTs7QUFDOUUseUZBQU1GLE9BQU47QUFEOEU7QUFBQTtBQUU5RSxVQUFLRyxJQUFMLEdBQVksTUFBS0MsV0FBTCxDQUFpQkQsSUFBN0I7QUFDQSxVQUFLSCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBRyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFLTCxNQUFqQixFQUF5QixNQUFLQyxRQUE5QjtBQUNBSyxJQUFBQSxLQUFLLENBQUNDLGlCQUFOLHdEQUE4QixNQUFLSixXQUFuQztBQVA4RTtBQVEvRTs7O21CQVQyQkcsSztBQVk5Qjs7Ozs7O0lBSU1FLFE7Ozs7O0FBQ0o7Ozs7OztBQU1BLG9CQUFZVCxPQUFaLEVBQXVGO0FBQUEsUUFBN0RDLE1BQTZELHVFQUFwRFMsb0JBQVdDLHFCQUF5QztBQUFBLFFBQWxCVCxRQUFrQix1RUFBUCxLQUFPOztBQUFBOztBQUFBLGlGQUMvRUYsT0FEK0UsRUFDdEVDLE1BRHNFLEVBQzlEQyxRQUQ4RDtBQUV0Rjs7O0VBVG9CSCxlOztlQWFSVSxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEVycm9yXG4gKi9cbmNsYXNzIEV4dGVuZGFibGVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBwcml2YXRlIHN0YXR1czogbnVtYmVyLCBwcml2YXRlIGlzUHVibGljOiBib29sZWFuKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy5pc1B1YmxpYyA9IGlzUHVibGljO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdHVzLCB0aGlzLmlzUHVibGljKTtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgfVxufVxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhbiBBUEkgZXJyb3IuXG4gKiBAZXh0ZW5kcyBFeHRlbmRhYmxlRXJyb3JcbiAqL1xuY2xhc3MgQVBJRXJyb3IgZXh0ZW5kcyBFeHRlbmRhYmxlRXJyb3Ige1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBBUEkgZXJyb3IuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0gRXJyb3IgbWVzc2FnZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXR1cyAtIEhUVFAgc3RhdHVzIGNvZGUgb2YgZXJyb3IuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNQdWJsaWMgLSBXaGV0aGVyIHRoZSBtZXNzYWdlIHNob3VsZCBiZSB2aXNpYmxlIHRvIHVzZXIgb3Igbm90LlxuICAgKi9cbiAgY29uc3RydWN0b3IobWVzc2FnZTogYW55LCBzdGF0dXMgPSBodHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgaXNQdWJsaWMgPSBmYWxzZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UsIHN0YXR1cywgaXNQdWJsaWMpO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQVBJRXJyb3I7XG4iXX0=