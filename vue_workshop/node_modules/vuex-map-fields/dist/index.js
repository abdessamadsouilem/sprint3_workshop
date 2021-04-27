(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['vuex-map-fields'] = {}));
}(this, (function (exports) { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function arrayToObject() {
    var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return fields.reduce(function (prev, path) {
      var key = path.split(".").slice(-1)[0];

      if (prev[key]) {
        throw new Error("The key `".concat(key, "` is already in use."));
      } // eslint-disable-next-line no-param-reassign


      prev[key] = path;
      return prev;
    }, {});
  }

  function objectEntries(obj) {
    return Object.keys(obj).map(function (key) {
      return [key, obj[key]];
    });
  }

  function normalizeNamespace(fn) {
    return function () {
      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      // eslint-disable-next-line prefer-const
      var _ref = typeof params[0] === "string" ? [].concat(params) : [""].concat(params),
          _ref2 = _slicedToArray(_ref, 4),
          namespace = _ref2[0],
          map = _ref2[1],
          getterType = _ref2[2],
          mutationType = _ref2[3];

      if (namespace.length && namespace.charAt(namespace.length - 1) !== "/") {
        namespace += "/";
      }

      getterType = "".concat(namespace).concat(getterType || "getField");
      mutationType = "".concat(namespace).concat(mutationType || "updateField");
      return fn(namespace, map, getterType, mutationType);
    };
  }

  function getField(state) {
    return function (path) {
      return path.split(/[.[\]]+/).reduce(function (prev, key) {
        return prev[key];
      }, state);
    };
  }
  function updateField(state, _ref3) {
    var path = _ref3.path,
        value = _ref3.value;
    path.split(/[.[\]]+/).reduce(function (prev, key, index, array) {
      if (array.length === index + 1) {
        // eslint-disable-next-line no-param-reassign
        prev[key] = value;
      }

      return prev[key];
    }, state);
  }
  var mapFields = normalizeNamespace(function (namespace, fields, getterType, mutationType) {
    var fieldsObject = Array.isArray(fields) ? arrayToObject(fields) : fields;
    return Object.keys(fieldsObject).reduce(function (prev, key) {
      var path = fieldsObject[key];
      var field = {
        get: function get() {
          return this.$store.getters[getterType](path);
        },
        set: function set(value) {
          this.$store.commit(mutationType, {
            path: path,
            value: value
          });
        }
      }; // eslint-disable-next-line no-param-reassign

      prev[key] = field;
      return prev;
    }, {});
  });
  var mapMultiRowFields = normalizeNamespace(function (namespace, paths, getterType, mutationType) {
    var pathsObject = Array.isArray(paths) ? arrayToObject(paths) : paths;
    return Object.keys(pathsObject).reduce(function (entries, key) {
      var path = pathsObject[key]; // eslint-disable-next-line no-param-reassign

      entries[key] = {
        get: function get() {
          var store = this.$store;
          var rows = objectEntries(store.getters[getterType](path));
          return rows.map(function (fieldsObject) {
            return Object.keys(fieldsObject[1]).reduce(function (prev, fieldKey) {
              var fieldPath = "".concat(path, "[").concat(fieldsObject[0], "].").concat(fieldKey);
              return Object.defineProperty(prev, fieldKey, {
                get: function get() {
                  return store.getters[getterType](fieldPath);
                },
                set: function set(value) {
                  store.commit(mutationType, {
                    path: fieldPath,
                    value: value
                  });
                }
              });
            }, {});
          });
        }
      };
      return entries;
    }, {});
  });
  var createHelpers = function createHelpers(_ref4) {
    var _ref5;

    var getterType = _ref4.getterType,
        mutationType = _ref4.mutationType;
    return _ref5 = {}, _defineProperty(_ref5, getterType, getField), _defineProperty(_ref5, mutationType, updateField), _defineProperty(_ref5, "mapFields", normalizeNamespace(function (namespace, fields) {
      return mapFields(namespace, fields, getterType, mutationType);
    })), _defineProperty(_ref5, "mapMultiRowFields", normalizeNamespace(function (namespace, paths) {
      return mapMultiRowFields(namespace, paths, getterType, mutationType);
    })), _ref5;
  };

  exports.createHelpers = createHelpers;
  exports.getField = getField;
  exports.mapFields = mapFields;
  exports.mapMultiRowFields = mapMultiRowFields;
  exports.updateField = updateField;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
