'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var reactDatepicker = _interopDefault(require('react-datepicker'));
var moment = _interopDefault(require('moment'));
var React = require('react');
var React__default = _interopDefault(React);
var ReactTable = _interopDefault(require('react-table'));
var reactRouterDom = require('react-router-dom');
var semanticUiReact = require('semantic-ui-react');
var semanticUiReact__default = _interopDefault(semanticUiReact);

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var bundle = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var DatePicker = _interopDefault(reactDatepicker);

var React__default$$1 = _interopDefault(React__default);

var moment$$1 = _interopDefault(moment);

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var InlineError = function InlineError(_ref) {
  var text = _ref.text;
  return React__default$$1.createElement("span", {
    style: {
      color: '#db2828'
    }
  }, text);
};

var InlineWarning = function InlineWarning(_ref2) {
  var text = _ref2.text;
  return React__default$$1.createElement("span", {
    style: {
      color: '#ffd700'
    }
  }, text);
};

var structureDescription = function structureDescription(description) {
  return React__default$$1.createElement("div", null, description.map(function (value, index) {
    return React__default$$1.createElement("p", {
      key: index
    }, value);
  }));
};

function fullFormField(displayName, description, error, warning, required, component) {
  return React__default$$1.createElement(semanticUiReact__default.Form.Field, {
    error: !!error,
    required: required
  }, React__default$$1.createElement(semanticUiReact__default.Popup, {
    hideOnScroll: true,
    position: "top left",
    header: displayName,
    wide: "very",
    trigger: React__default$$1.createElement("label", null, displayName),
    content: structureDescription(description)
  }), component, warning && !error && React__default$$1.createElement(InlineWarning, {
    text: warning
  }), error && !warning && React__default$$1.createElement(InlineError, {
    text: error
  }), error && warning && React__default$$1.createElement("div", null, React__default$$1.createElement(InlineError, {
    text: error
  }), React__default$$1.createElement(semanticUiReact__default.Divider, {
    hidden: true,
    fitted: true
  }), React__default$$1.createElement(InlineWarning, {
    text: warning
  })));
}
function simpleFormField(displayName, description, component) {
  return React__default$$1.createElement(semanticUiReact__default.Form.Field, null, React__default$$1.createElement(semanticUiReact__default.Popup, {
    hideOnScroll: true,
    position: "top left",
    header: displayName,
    wide: "very",
    trigger: component,
    content: structureDescription(description)
  }));
}
function simpleStaticFormField(displayName, description, component) {
  var icon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  return React__default$$1.createElement(semanticUiReact__default.Form.Field, null, React__default$$1.createElement(semanticUiReact__default.Popup, {
    hideOnScroll: true,
    position: "top left",
    header: displayName,
    wide: "very",
    content: structureDescription(description),
    trigger: React__default$$1.createElement("label", null, displayName, " ", icon)
  }), component);
}

function checkValueAndType(value, type) {
  return value !== undefined && value !== '' && value !== null && _typeof(value) === type;
}
function shorten(string) {
  if (typeof string === 'string' && string.length > 32) {
    return string.substring(0, 30) + '...';
  } else {
    return string;
  }
}

var DCText =
/*#__PURE__*/
function (_Component) {
  _inherits(DCText, _Component);

  function DCText(props) {
    var _this;

    _classCallCheck(this, DCText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DCText).call(this, props));

    _this.handleChange = function (event) {
      var _this$props = _this.props,
          valueChange = _this$props.valueChange,
          name = _this$props.name;

      _this.setState({
        value: event.target.value
      }, function () {
        return valueChange(name, _this.state.value);
      });
    };

    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(DCText, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var value = this.props.value;
      if (checkValueAndType(value, 'string')) this.setState({
        value: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;
      var _this$props2 = this.props,
          name = _this$props2.name,
          displayName = _this$props2.displayName,
          description = _this$props2.description,
          error = _this$props2.error,
          warning = _this$props2.warning,
          required = _this$props2.required;
      var component = React__default$$1.createElement(semanticUiReact__default.TextArea, {
        autoHeight: true,
        rows: 1,
        name: name,
        placeholder: shorten(displayName),
        value: value,
        onChange: this.handleChange
      });
      return fullFormField(displayName, description, error, warning, required, component);
    }
  }]);

  return DCText;
}(React__default.Component);

var DCBoolean =
/*#__PURE__*/
function (_Component) {
  _inherits(DCBoolean, _Component);

  function DCBoolean(props) {
    var _this;

    _classCallCheck(this, DCBoolean);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DCBoolean).call(this, props));

    _this.handleChange = function () {
      var _this$props = _this.props,
          valueChange = _this$props.valueChange,
          name = _this$props.name;

      _this.setState({
        value: !_this.state.value
      }, function () {
        return valueChange(name, _this.state.value);
      });
    };

    _this.state = {
      value: false
    };
    return _this;
  }

  _createClass(DCBoolean, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var value = this.props.value;
      if (checkValueAndType(value, 'boolean')) this.setState({
        value: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;
      var _this$props2 = this.props,
          displayName = _this$props2.displayName,
          description = _this$props2.description;
      var component = React__default$$1.createElement(semanticUiReact__default.Checkbox, {
        label: displayName,
        onChange: this.handleChange,
        checked: value
      });
      return simpleFormField(displayName, description, component);
    }
  }]);

  return DCBoolean;
}(React__default.Component);

var DCNumber =
/*#__PURE__*/
function (_Component) {
  _inherits(DCNumber, _Component);

  function DCNumber(props) {
    var _this;

    _classCallCheck(this, DCNumber);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DCNumber).call(this, props));

    _this.handleChange = function (event) {
      if (!isNaN(event.target.value)) {
        var _this$props = _this.props,
            valueChange = _this$props.valueChange,
            name = _this$props.name;
        var value = '';
        if (event.target.value !== '') value = parseFloat(event.target.value);

        _this.setState({
          value: value
        }, function () {
          return valueChange(name, _this.state.value);
        });
      }
    };

    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(DCNumber, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var value = this.props.value;
      if (checkValueAndType(value, 'number')) this.setState({
        value: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;
      var _this$props2 = this.props,
          name = _this$props2.name,
          displayName = _this$props2.displayName,
          description = _this$props2.description,
          error = _this$props2.error,
          warning = _this$props2.warning,
          required = _this$props2.required;
      var component = React__default$$1.createElement(semanticUiReact__default.Input, {
        icon: {
          name: 'hashtag',
          color: 'teal'
        },
        iconPosition: "left",
        name: name,
        value: value,
        placeholder: shorten(displayName),
        onChange: this.handleChange
      });
      return fullFormField(displayName, description, error, warning, required, component);
    }
  }]);

  return DCNumber;
}(React__default.Component);

var DCRadio =
/*#__PURE__*/
function (_Component) {
  _inherits(DCRadio, _Component);

  function DCRadio(props) {
    var _this;

    _classCallCheck(this, DCRadio);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DCRadio).call(this, props));

    _this.handleChange = function (event, _ref) {
      var value = _ref.value;
      var _this$props = _this.props,
          valueChange = _this$props.valueChange,
          name = _this$props.name;

      _this.setState({
        value: value
      }, function () {
        return valueChange(name, _this.state.value);
      });
    };

    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(DCRadio, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var value = this.props.value;
      if (checkValueAndType(value, 'string')) this.setState({
        value: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      var _this$props2 = this.props,
          displayName = _this$props2.displayName,
          description = _this$props2.description,
          error = _this$props2.error,
          warning = _this$props2.warning,
          required = _this$props2.required,
          options = _this$props2.options;
      var radios = Object.keys(options).map(function (key) {
        return React__default$$1.createElement(semanticUiReact__default.Form.Radio, {
          key: key,
          label: options[key].text,
          value: options[key].value,
          checked: value === options[key].value,
          onChange: _this2.handleChange
        });
      });
      var component = React__default$$1.createElement(semanticUiReact__default.Form.Group, {
        inline: true,
        children: radios,
        style: {
          margin: 0
        }
      });
      return fullFormField(displayName, description, error, warning, required, component);
    }
  }]);

  return DCRadio;
}(React__default.Component);

var UI = {
  NO_OPTIONS: {
    en: 'No options',
    nb: 'Ingen valg'
  },
  OPTIONS: {
    en: 'Pick one',
    nb: 'Velg'
  },
  TODAY: {
    en: 'Today',
    nb: 'I dag'
  }
};

var DCDate =
/*#__PURE__*/
function (_Component) {
  _inherits(DCDate, _Component);

  function DCDate(props) {
    var _this;

    _classCallCheck(this, DCDate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DCDate).call(this, props));

    _this.handleChange = function (index, date) {
      var _this$props = _this.props,
          valueChange = _this$props.valueChange,
          name = _this$props.name,
          multiple = _this$props.multiple;

      if (multiple) {
        var value = _toConsumableArray(_this.state.value);

        value[parseInt(index)] = date;

        _this.setState({
          value: value
        }, function () {
          return valueChange(name, _this.state.value);
        });
      } else {
        _this.setState({
          value: date
        }, function () {
          return valueChange(name, _this.state.value);
        });
      }
    };

    _this.handleAddEntry = function () {
      _this.setState({
        value: _toConsumableArray(_this.state.value).concat([null])
      }, function () {
        return _this.props.valueChange(_this.props.name, _this.state.value);
      });
    };

    _this.state = {
      value: _this.props.multiple ? [null] : null
    };
    return _this;
  }

  _createClass(DCDate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var value = this.props.value;
      if (checkValueAndType(value, 'object')) this.setState({
        value: value
      });
    }
  }, {
    key: "handleRemoveEntry",
    value: function handleRemoveEntry(index) {
      var _this2 = this;

      var _this$props2 = this.props,
          valueChange = _this$props2.valueChange,
          name = _this$props2.name;

      var entries = _toConsumableArray(this.state.value);

      if (parseInt(index) !== -1) entries.splice(parseInt(index), 1);
      this.setState({
        value: entries
      }, function () {
        return valueChange(name, _this2.state.value);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var value = this.state.value;
      var _this$props3 = this.props,
          displayName = _this$props3.displayName,
          description = _this$props3.description,
          error = _this$props3.error,
          warning = _this$props3.warning,
          required = _this$props3.required,
          multiple = _this$props3.multiple,
          languageCode = _this$props3.languageCode;
      var icon = React__default$$1.createElement(semanticUiReact__default.Icon, {
        name: "calendar alternate outline",
        size: "big",
        style: {
          paddingTop: '0.5rem'
        },
        color: "teal"
      });
      var component;

      if (multiple) {
        component = React__default$$1.createElement(semanticUiReact__default.Grid, null, value.map(function (entry, index) {
          var datePicker = React__default$$1.createElement(DatePicker, {
            selected: value[index],
            onChange: _this3.handleChange.bind(_this3, index),
            dateFormat: "DD/MM/YYYY",
            placeholderText: shorten(displayName),
            showWeekNumbers: true,
            dropdownMode: "select",
            todayButton: UI.TODAY[languageCode]
          });
          return React__default$$1.createElement(semanticUiReact__default.Grid.Row, {
            key: index
          }, React__default$$1.createElement(semanticUiReact__default.Grid.Column, {
            width: 1,
            style: {
              margin: 0,
              paddingRight: 0,
              paddingTop: '0.35rem'
            }
          }, React__default$$1.createElement(semanticUiReact__default.Container, {
            textAlign: "center"
          }, React__default$$1.createElement(semanticUiReact__default.Header, {
            as: "h4",
            color: "teal",
            content: index + 1 + '.',
            style: {
              marginBottom: 0
            }
          }), React__default$$1.createElement(semanticUiReact__default.Icon, {
            link: true,
            name: "close",
            color: "red",
            onClick: _this3.handleRemoveEntry.bind(_this3, index)
          }))), React__default$$1.createElement(semanticUiReact__default.Grid.Column, {
            width: 15,
            style: {
              margin: 0,
              paddingLeft: 0
            }
          }, React__default$$1.createElement(semanticUiReact__default.Form.Group, {
            inline: true,
            style: {
              margin: 0
            },
            children: React__default$$1.createElement("div", null, datePicker, icon)
          })));
        }), React__default$$1.createElement(semanticUiReact__default.Grid.Row, {
          style: {
            paddingTop: 0
          }
        }, React__default$$1.createElement(semanticUiReact__default.Grid.Column, {
          width: 16,
          style: {
            margin: 0
          }
        }, React__default$$1.createElement(semanticUiReact__default.Container, {
          textAlign: "right"
        }, React__default$$1.createElement(semanticUiReact__default.Icon, {
          link: true,
          name: "plus",
          color: "green",
          size: "large",
          onClick: this.handleAddEntry
        })))));
      } else {
        var datePicker = React__default$$1.createElement(DatePicker, {
          selected: value,
          onChange: this.handleChange.bind(this, null),
          isClearable: true,
          dateFormat: "DD/MM/YYYY",
          placeholderText: shorten(displayName),
          showWeekNumbers: true,
          dropdownMode: "select",
          todayButton: UI.TODAY[languageCode]
        });
        component = React__default$$1.createElement(semanticUiReact__default.Form.Group, {
          inline: true,
          style: {
            margin: 0
          },
          children: React__default$$1.createElement("div", null, datePicker, icon)
        });
      }

      return fullFormField(displayName, description, error, warning, required, component);
    }
  }]);

  return DCDate;
}(React__default.Component);

var DCDropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(DCDropdown, _Component);

  function DCDropdown(props) {
    var _this;

    _classCallCheck(this, DCDropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DCDropdown).call(this, props));

    _this.handleChange = function (event, data) {
      var _this$props = _this.props,
          valueChange = _this$props.valueChange,
          name = _this$props.name;

      _this.setState({
        value: data.value
      }, function () {
        return valueChange(name, _this.state.value);
      });
    };

    _this.state = {
      ready: false,
      problem: false,
      errorMessage: '',
      value: null,
      options: []
    };
    return _this;
  }

  _createClass(DCDropdown, [{
    key: "setOptionsAndValue",
    value: function setOptionsAndValue(options) {
      var _this2 = this;

      return new Promise(function (resolve) {
        var _this2$props = _this2.props,
            value = _this2$props.value,
            multiSelect = _this2$props.multiSelect;

        _this2.setState({
          options: options
        }, function () {
          if (checkValueAndType(value, 'string') || Array.isArray(value) && value.length !== 0) {
            _this2.setState({
              value: value
            }, function () {
              return resolve();
            });
          } else {
            _this2.setState({
              value: multiSelect ? [] : ''
            }, function () {
              return resolve();
            });
          }
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      if (this.props.hasOwnProperty('options')) {
        this.setOptionsAndValue(this.props.options).then(function () {
          return _this3.setState({
            ready: true
          });
        });
      } else {
        this.setOptionsAndValue([]).then(function () {
          return _this3.setState({
            ready: true
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          ready = _this$state.ready,
          problem = _this$state.problem,
          value = _this$state.value,
          options = _this$state.options,
          errorMessage = _this$state.errorMessage;
      var _this$props2 = this.props,
          displayName = _this$props2.displayName,
          description = _this$props2.description,
          error = _this$props2.error,
          warning = _this$props2.warning,
          required = _this$props2.required,
          multiSelect = _this$props2.multiSelect,
          searchable = _this$props2.searchable,
          languageCode = _this$props2.languageCode;

      if (!ready) {
        var component = React__default$$1.createElement(semanticUiReact__default.Dropdown, {
          placeholder: shorten(displayName),
          selection: true,
          options: [],
          loading: true,
          disabled: true
        });
        return fullFormField(displayName, description, error, warning, required, component);
      }

      if (ready && problem) {
        var _component = React__default$$1.createElement(semanticUiReact__default.Dropdown, {
          selection: true,
          options: [],
          disabled: true
        });

        return fullFormField(displayName, description, error, errorMessage, required, _component);
      }

      if (ready && !problem) {
        var _component2 = React__default$$1.createElement(semanticUiReact__default.Dropdown, {
          placeholder: options.length === 0 ? UI.NO_OPTIONS[languageCode] : shorten(displayName),
          value: value,
          options: options,
          clearable: true,
          selection: true,
          multiple: multiSelect,
          disabled: options.length === 0,
          onChange: this.handleChange,
          search: searchable,
          icon: {
            name: searchable ? 'search' : 'dropdown',
            disabled: !!searchable,
            size: searchable ? 'small' : null
          }
        });

        return fullFormField(displayName, description, error, warning, required, _component2);
      }

      return null;
    }
  }]);

  return DCDropdown;
}(React__default.Component);

var DCMultiInput =
/*#__PURE__*/
function (_Component) {
  _inherits(DCMultiInput, _Component);

  function DCMultiInput(props) {
    var _this;

    _classCallCheck(this, DCMultiInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DCMultiInput).call(this, props));

    _this.handleAddEntry = function () {
      var _this$props = _this.props,
          valueChange = _this$props.valueChange,
          name = _this$props.name,
          multiValue = _this$props.multiValue;

      _this.setState({
        value: _toConsumableArray(_this.state.value).concat([{
          text: multiValue ? [''] : '',
          option: ''
        }])
      }, function () {
        return valueChange(name, _this.state.value);
      });
    };

    _this.state = {
      ready: false,
      problem: false,
      errorMessage: '',
      value: [{
        text: _this.props.multiValue ? [''] : '',
        option: ''
      }],
      options: []
    };
    return _this;
  }

  _createClass(DCMultiInput, [{
    key: "setOptionsAndValue",
    value: function setOptionsAndValue(options) {
      var _this2 = this;

      return new Promise(function (resolve) {
        var value = _this2.props.value;

        _this2.setState({
          options: options
        }, function () {
          if (Array.isArray(value) && value.length !== 0) {
            _this2.setState({
              value: value
            }, function () {
              return resolve();
            });
          } else resolve();
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      if (this.props.hasOwnProperty('options')) {
        this.setOptionsAndValue(this.props.options).then(function () {
          return _this3.setState({
            ready: true
          });
        });
      } else {
        this.setOptionsAndValue([]).then(function () {
          return _this3.setState({
            ready: true
          });
        });
      }
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(index, innerIndex, event) {
      var _this4 = this;

      var _this$props2 = this.props,
          valueChange = _this$props2.valueChange,
          name = _this$props2.name,
          multiValue = _this$props2.multiValue;

      var value = _toConsumableArray(this.state.value);

      if (!multiValue) {
        value[parseInt(index)].text = event.target.value;
      } else {
        value[parseInt(index)].text[parseInt(innerIndex)] = event.target.value;
      }

      this.setState({
        value: value
      }, function () {
        return valueChange(name, _this4.state.value);
      });
    }
  }, {
    key: "handleDropdownChange",
    value: function handleDropdownChange(index, event, data) {
      var _this5 = this;

      var _this$props3 = this.props,
          valueChange = _this$props3.valueChange,
          name = _this$props3.name;

      var value = _toConsumableArray(this.state.value);

      value[parseInt(index)].option = data.value;
      this.setState({
        value: value
      }, function () {
        return valueChange(name, _this5.state.value);
      });
    }
  }, {
    key: "handleRemoveEntry",
    value: function handleRemoveEntry(index) {
      var _this6 = this;

      var _this$props4 = this.props,
          valueChange = _this$props4.valueChange,
          name = _this$props4.name;

      var entries = _toConsumableArray(this.state.value);

      if (parseInt(index) !== -1) entries.splice(parseInt(index), 1);
      this.setState({
        value: entries
      }, function () {
        return valueChange(name, _this6.state.value);
      });
    }
  }, {
    key: "handleAddValueToEntry",
    value: function handleAddValueToEntry(index) {
      var _this7 = this;

      var _this$props5 = this.props,
          valueChange = _this$props5.valueChange,
          name = _this$props5.name;

      var entries = _toConsumableArray(this.state.value);

      entries[parseInt(index)].text = _toConsumableArray(this.state.value[parseInt(index)].text).concat(['']);
      this.setState({
        value: entries
      }, function () {
        return valueChange(name, _this7.state.value);
      });
    }
  }, {
    key: "handleRemoveValueFromEntry",
    value: function handleRemoveValueFromEntry(index, innerIndex) {
      var _this8 = this;

      var _this$props6 = this.props,
          valueChange = _this$props6.valueChange,
          name = _this$props6.name;

      var entries = _toConsumableArray(this.state.value);

      if (parseInt(index) !== -1 && parseInt(innerIndex) !== -1) {
        entries[parseInt(index)].text.splice(parseInt(innerIndex), 1);
      }

      this.setState({
        value: entries
      }, function () {
        return valueChange(name, _this8.state.value);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      var _this$state = this.state,
          ready = _this$state.ready,
          problem = _this$state.problem,
          value = _this$state.value,
          options = _this$state.options,
          errorMessage = _this$state.errorMessage;
      var _this$props7 = this.props,
          name = _this$props7.name,
          displayName = _this$props7.displayName,
          description = _this$props7.description,
          error = _this$props7.error,
          warning = _this$props7.warning,
          required = _this$props7.required,
          multiValue = _this$props7.multiValue,
          languageCode = _this$props7.languageCode;

      if (!ready) {
        var component = React__default$$1.createElement(semanticUiReact__default.Grid, {
          columns: "equal"
        }, React__default$$1.createElement(semanticUiReact__default.Grid.Column, null, React__default$$1.createElement(semanticUiReact__default.Dropdown, {
          selection: true,
          options: [],
          loading: true,
          fluid: true
        })), React__default$$1.createElement(semanticUiReact__default.Grid.Column, null, React__default$$1.createElement(semanticUiReact__default.Input, {
          placeholder: displayName,
          disabled: true
        })));
        return fullFormField(displayName, description, error, warning, required, component);
      }

      if (ready && problem) {
        var _component = React__default$$1.createElement(semanticUiReact__default.Grid, {
          columns: "equal"
        }, React__default$$1.createElement(semanticUiReact__default.Grid.Column, null, React__default$$1.createElement(semanticUiReact__default.Dropdown, {
          selection: true,
          options: [],
          disabled: true,
          fluid: true
        })), React__default$$1.createElement(semanticUiReact__default.Grid.Column, null, React__default$$1.createElement(semanticUiReact__default.Input, {
          placeholder: displayName,
          disabled: true
        })));

        return fullFormField(displayName, description, error, errorMessage, required, _component);
      }

      if (ready && !problem) {
        var components = React__default$$1.createElement(semanticUiReact__default.Grid, null, value.map(function (entry, index) {
          var dropdown = React__default$$1.createElement(semanticUiReact__default.Dropdown, {
            options: options,
            value: entry.option,
            selection: true,
            disabled: options.length === 0,
            placeholder: options.length === 0 ? UI.NO_OPTIONS[languageCode] : UI.OPTIONS[languageCode],
            clearable: true,
            fluid: !!multiValue,
            onChange: _this9.handleDropdownChange.bind(_this9, index)
          });
          return React__default$$1.createElement(semanticUiReact__default.Grid.Row, {
            key: index
          }, React__default$$1.createElement(semanticUiReact__default.Grid.Column, {
            width: 1,
            style: {
              margin: 0,
              paddingRight: 0,
              paddingTop: '0.2rem'
            }
          }, React__default$$1.createElement(semanticUiReact__default.Container, {
            textAlign: "center"
          }, React__default$$1.createElement(semanticUiReact__default.Header, {
            as: "h4",
            color: "teal",
            content: index + 1 + '.',
            style: {
              marginBottom: 0
            }
          }), React__default$$1.createElement(semanticUiReact__default.Icon, {
            link: true,
            name: "close",
            color: "red",
            onClick: _this9.handleRemoveEntry.bind(_this9, index)
          }))), multiValue && React__default$$1.createElement(semanticUiReact__default.Grid.Column, {
            width: 8,
            style: {
              margin: 0,
              paddingLeft: 0
            }
          }, dropdown), multiValue && React__default$$1.createElement(semanticUiReact__default.Grid.Column, {
            width: 7,
            style: {
              margin: 0
            }
          }, entry.text.map(function (innerValue, innerIndex) {
            var action = React__default$$1.createElement(semanticUiReact__default.Button, {
              basic: true,
              icon: {
                name: 'close',
                color: 'red'
              },
              onClick: _this9.handleRemoveValueFromEntry.bind(_this9, index, innerIndex)
            });
            return React__default$$1.createElement(semanticUiReact__default.Input, {
              key: innerIndex,
              action: action,
              style: {
                paddingTop: innerIndex === 0 ? 0 : '0.5rem'
              },
              placeholder: shorten(displayName),
              value: innerValue,
              name: name + innerIndex,
              onChange: _this9.handleInputChange.bind(_this9, index, innerIndex)
            });
          }), React__default$$1.createElement(semanticUiReact__default.Icon, {
            link: true,
            name: "plus",
            color: "green",
            onClick: _this9.handleAddValueToEntry.bind(_this9, index)
          })), !multiValue && React__default$$1.createElement(semanticUiReact__default.Grid.Column, {
            width: 15,
            style: {
              margin: 0,
              paddingLeft: 0
            }
          }, React__default$$1.createElement(semanticUiReact__default.Input, {
            name: name,
            placeholder: shorten(displayName),
            value: entry.text,
            actionPosition: "left",
            onChange: _this9.handleInputChange.bind(_this9, index, index),
            action: dropdown
          })));
        }), React__default$$1.createElement(semanticUiReact__default.Grid.Row, {
          style: {
            paddingTop: 0
          }
        }, React__default$$1.createElement(semanticUiReact__default.Grid.Column, {
          width: 16,
          style: {
            margin: 0
          }
        }, React__default$$1.createElement(semanticUiReact__default.Container, {
          textAlign: "right"
        }, React__default$$1.createElement(semanticUiReact__default.Icon, {
          link: true,
          name: "plus",
          color: "green",
          size: "large",
          onClick: this.handleAddEntry
        })))));
        return fullFormField(displayName, description, error, warning, required, components);
      }

      return null;
    }
  }]);

  return DCMultiInput;
}(React__default.Component);

var formats = ['date', 'label', 'tag'];

var DCStatic =
/*#__PURE__*/
function (_Component) {
  _inherits(DCStatic, _Component);

  function DCStatic(props) {
    var _this;

    _classCallCheck(this, DCStatic);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DCStatic).call(this, props));
    _this.state = {
      ready: false,
      component: null,
      icon: null
    };
    return _this;
  }

  _createClass(DCStatic, [{
    key: "checkIcon",
    value: function checkIcon() {
      var _this2 = this;

      return new Promise(function (resolve) {
        if (_this2.props.hasOwnProperty('icon')) {
          _this2.setState({
            icon: React__default$$1.createElement(semanticUiReact__default.Icon, {
              name: _this2.props.icon,
              color: "teal"
            })
          }, function () {
            return resolve();
          });
        } else {
          _this2.setState({
            icon: ''
          }, function () {
            return resolve();
          });
        }
      });
    }
  }, {
    key: "createComponent",
    value: function createComponent() {
      var _this3 = this;

      return new Promise(function (resolve) {
        var _this3$props = _this3.props,
            format = _this3$props.format,
            value = _this3$props.value;

        if (!formats.includes(format)) {
          resolve(React__default$$1.createElement(semanticUiReact__default.List, {
            style: {
              marginTop: 0
            },
            items: value
          }));
        } else {
          var entries = [];

          for (var entry in value) {
            if (value.hasOwnProperty(entry)) {
              if (format === 'date') {
                var convertedEntry = void 0;

                try {
                  convertedEntry = moment$$1(value[entry]).format('LLL');
                } catch (error) {
                  convertedEntry = error;
                }

                entries.push(convertedEntry);
              } else {
                entries.push(React__default$$1.createElement(semanticUiReact__default.Label, {
                  key: entry,
                  color: "teal"
                }, value[entry]));
              }
            }
          }

          if (format === 'date') {
            _this3.setState({
              icon: React__default$$1.createElement(semanticUiReact__default.Icon, {
                name: "calendar alternate outline",
                color: "teal",
                size: "large"
              })
            }, function () {
              resolve(React__default$$1.createElement(semanticUiReact__default.List, {
                style: {
                  marginTop: 0
                },
                items: entries
              }));
            });
          } else {
            resolve(React__default$$1.createElement(semanticUiReact__default.Label.Group, {
              tag: format === 'tag',
              color: "teal",
              content: entries
            }));
          }
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      this.checkIcon().then(function () {
        _this4.createComponent().then(function (result) {
          _this4.setState({
            component: result
          }, function () {
            return _this4.setState({
              ready: true
            });
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          ready = _this$state.ready,
          component = _this$state.component,
          icon = _this$state.icon;
      var _this$props = this.props,
          displayName = _this$props.displayName,
          description = _this$props.description;
      if (ready) return simpleStaticFormField(displayName, description, component, icon);
      return null;
    }
  }]);

  return DCStatic;
}(React__default.Component);

var formComponents = {
  DCText: DCText,
  DCBoolean: DCBoolean,
  DCNumber: DCNumber,
  DCRadio: DCRadio,
  DCDate: DCDate,
  DCDropdown: DCDropdown,
  DCMultiInput: DCMultiInput,
  DCStatic: DCStatic
};

var DCFormField =
/*#__PURE__*/
function (_Component) {
  _inherits(DCFormField, _Component);

  function DCFormField() {
    _classCallCheck(this, DCFormField);

    return _possibleConstructorReturn(this, _getPrototypeOf(DCFormField).apply(this, arguments));
  }

  _createClass(DCFormField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          properties = _this$props.properties,
          valueChange = _this$props.valueChange,
          languageCode = _this$props.languageCode;
      var FormComponent = formComponents[properties.component];
      return React__default$$1.createElement(FormComponent, _extends({}, properties, {
        valueChange: valueChange,
        languageCode: languageCode
      }));
    }
  }]);

  return DCFormField;
}(React__default.Component);

exports.DCFormField = DCFormField;
});

unwrapExports(bundle);
var bundle_1 = bundle.DCFormField;

var defaultVersioning = {
  component: 'DCRadio',
  name: 'versionIncrementation',
  displayName: 'Version incrementation',
  description: ['How should the versioning increment?'],
  value: '2',
  options: [{
    text: 'Major',
    value: '0'
  }, {
    text: 'Minor',
    value: '1'
  }, {
    text: 'Patch',
    value: '2'
  }]
};

function splitOnUppercase(string) {
  if (typeof string === 'string') {
    return string.match(/[A-Z][a-z]+|[0-9]+/g).join(' ');
  } else {
    return string;
  }
}
function extractName(string) {
  if (typeof string === 'string') {
    return string.replace('#/definitions/', '');
  } else {
    return string;
  }
}
function setVersion(version, versionIncrementation) {
  var versionIncrement = parseInt(versionIncrementation);
  var versionArray = version.split('.');
  versionArray[versionIncrement] = parseInt(versionArray[versionIncrement]) + 1;
  return versionArray.join('.');
}

var uuidv4 = require('uuid/v4');

function generateDefaultDataState(element) {
  switch (element) {
    case 'id':
      return uuidv4();

    case 'version':
      return '1.0.0';

    default:
      return null;
  }
}
function updateNewDefaultDataState(element) {
  switch (element) {
    case 'version':
      return '1.0.0';

    default:
      return null;
  }
}
function updateDefaultDataState(element, version, versionIncrementation) {
  switch (element) {
    case 'version':
      return setVersion(version, versionIncrementation);

    default:
      return null;
  }
}

function resolveReferences(properties, returnSchema, schema, key, name) {
  var customType = extractName(properties[key].items.$ref);
  returnSchema[name].properties[key].customType = customType;
  returnSchema[name].properties[key].description.push('Input type: ' + customType);
  returnSchema[name].properties[key].multiValue = true;
  returnSchema[name].properties[key].component = 'DCMultiInput';
  Object.keys(schema[customType].properties).forEach(function (property) {
    returnSchema[name].properties[key].description.push(schema[customType].properties[property].displayName + ': ' + returnSchema[customType].properties[property].description);
  });
}

function resolveLinks(properties, returnSchema, url, key) {
  var linkedKey = key.replace('_link_property_', '');
  var endpoints = [];
  Object.keys(properties[key].properties).forEach(function (property) {
    endpoints.push(url + 'data/' + property);
  });
  returnSchema[linkedKey].endpoints = endpoints;
  returnSchema[linkedKey].component = 'DCDropdown';

  if (properties[linkedKey].type === 'array') {
    returnSchema[linkedKey].multiSelect = true;
  }

  delete returnSchema[key];
}

function resolveDefaultProperties(schema, url) {
  return new Promise(function (resolve) {
    var returnSchema = JSON.parse(JSON.stringify(schema));
    var name = extractName(schema.$ref);
    var properties = JSON.parse(JSON.stringify(schema.definitions[name].properties));
    Object.keys(properties).forEach(function (key) {
      var description = [];
      description.push(returnSchema.definitions[name].properties[key].description);
      returnSchema.definitions[name].properties[key].description = description;

      if (properties[key].hasOwnProperty('items')) {
        if (properties[key].items.hasOwnProperty('$ref')) {
          resolveReferences(properties, returnSchema.definitions, schema.definitions, key, name);
        }

        if (properties[key].items.hasOwnProperty('format') && properties[key].items.format === 'date-time') {
          returnSchema.definitions[name].properties[key].component = 'DCDate';
          returnSchema.definitions[name].properties[key].multiple = properties[key].type === 'array';
        }

        delete returnSchema.definitions[name].properties[key].items;
      }

      if (key.startsWith('_link_property_')) {
        resolveLinks(properties, returnSchema.definitions[name].properties, url, key);
      }
    });
    resolve(returnSchema);
  });
}

// TODO: Rename ('DIV' is not a particularly good name)
var DIV = {
  JSON_FILE_ENDING: 'Example.json',
  SAGA: 'saga-execution-id'
};
var MESSAGES = {
  CORRECT_ERRORS: {
    en: 'Object was not saved, correct any errors and try again',
    nb: 'Objektet ble ikke lagret, rett opp feil og prøv igjen'
  },
  COULD_NOT_CONNECT: {
    en: 'Could not connect to: ',
    nb: 'Klarte ikke å koble til: '
  },
  FILTER_BY_NAME: {
    en: 'Filter table by name',
    nb: 'Filtrere tabellen etter navn'
  },
  GENERATE_JSON: {
    en: 'Simulates storing the data to LDS and generates the JSON-file to download',
    nb: 'Simuler lagring av data til LDS og generer en JSON-fil for nedlastning'
  },
  NAME_NOT_FOUND: {
    en: 'Found nothing matching',
    nb: 'Fant ingenting som matcher'
  },
  NOT_EMPTY: {
    en: 'Cannot be blank',
    nb: 'Kan ikke være blankt'
  },
  NOT_FILL: {
    en: 'Could not fill data state: ',
    nb: 'Kunne ikke fylle data: '
  },
  NOT_POPULATE: {
    en: 'Could not populate dropdown: ',
    nb: 'Kunne ikke populere nedtrekkslister: '
  },
  NOTHING_FOUND: {
    en: 'Found nothing...',
    nb: 'Fant ingenting...'
  },
  SAVED: {
    en: 'saved',
    nb: 'lagret'
  },
  SCHEMA_HANDLER_ERROR: 'SchemaHandler error: ',
  TIMEOUT: {
    en: 'Request timeout for url: ',
    nb: 'Tidsavbrudd for kobling mot: '
  },
  UNKNOWN_CHECK: {
    en: 'Unknown type, cannot check if empty',
    nb: 'Ukjent type, kan ikke sjekke om er tom/blank'
  },
  UNKNOWN_GENERATE: {
    en: 'Unknown type, cannot generate default value',
    nb: 'Ukjent type, kan ikke generere standardverdi'
  },
  UPDATED: {
    en: 'updated',
    nb: 'oppdatert'
  },
  WAS_NOT_SAVED: {
    en: 'Object was not saved!',
    nb: 'Objektet ble ikke lagret!'
  },
  WAS_SAVED: {
    en: 'Object was ',
    nb: 'Objektet ble '
  }
};
var TABLE = {
  LOADING: {
    en: 'Loading',
    nb: 'Laster'
  },
  NEXT: {
    en: 'Next',
    nb: 'Neste'
  },
  OF: {
    en: 'of',
    nb: 'av'
  },
  PAGE: {
    en: 'Page',
    nb: 'Side'
  },
  PREVIOUS: {
    en: 'Previous',
    nb: 'Forrige'
  },
  ROWS: {
    en: 'rows',
    nb: 'rader'
  }
};
var UI = {
  CREATE_JSON: {
    en: 'Create JSON',
    nb: 'Lag JSON'
  },
  CREATE_NEW: {
    en: 'Create new',
    nb: 'Opprett ny'
  },
  DOWNLOAD_JSON: {
    en: 'Download JSON',
    nb: 'Last ned JSON'
  },
  SAVE: {
    en: 'Save',
    nb: 'Lagre'
  },
  SEARCH: {
    en: 'Search',
    nb: 'Søk'
  },
  UPDATE: {
    en: 'Update',
    nb: 'Oppdater'
  }
};

function fetchData(url, languageCode) {
  var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
  return new Promise(function (resolve, reject) {
    var controller = new AbortController();
    var signal = controller.signal;
    var timer = setTimeout(function () {
      reject(MESSAGES.TIMEOUT[languageCode] + url);
      controller.abort();
    }, timeout);
    fetch(url, {
      signal: signal,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(function (response) {
      if (response.ok) {
        response.json().then(function (json) {
          return resolve(json);
        });
      } else {
        response.text().then(function (text) {
          reject(text + ' (' + url + ')');
        });
      }
    }).catch(function (error) {
      reject(error.toString() + ' \'' + url + '\'');
    }).finally(function () {
      return clearTimeout(timer);
    });
  });
}

function putData(url, endpoint, data, languageCode) {
  var timeout = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 3000;
  return new Promise(function (resolve, reject) {
    var controller = new AbortController();
    var signal = controller.signal;
    var timer = setTimeout(function () {
      reject(MESSAGES.TIMEOUT[languageCode] + url);
      controller.abort();
    }, timeout);
    fetch(url, {
      signal: signal,
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(function (response) {
      if (response.ok) {
        response.json().then(function (json) {
          return resolve(json);
        });
      } else {
        response.text().then(function (text) {
          reject(text + ' (' + url + ')');
        });
      }
    }).catch(function (error) {
      reject(MESSAGES.COULD_NOT_CONNECT[languageCode] + '\'' + endpoint + '\' (' + error.toString() + ')');
    }).finally(function () {
      return clearTimeout(timer);
    });
  });
}

function createOptions(response, prefix, languageCode, addPrefix) {
  var options = [];
  var cleanedPrefix = '';

  if (addPrefix) {
    cleanedPrefix = ' (' + prefix.replace(/\//ig, '') + ')';
  }

  Object.keys(response).forEach(function (value) {
    var text = response[value].id;

    if (response[value].name !== undefined) {
      text = response[value].name;
    }

    options.push({
      key: response[value].id,
      text: text + cleanedPrefix,
      value: prefix + response[value].id
    });
  });
  return options;
}

function fetchDefaultOptions(url, languageCode, addPrefix) {
  return new Promise(function (resolve, reject) {
    fetchData(url).then(function (response) {
      var prefix = '/' + url.substring(url.lastIndexOf('/') + 1) + '/';

      if (response.length !== 0) {
        resolve(createOptions(response, prefix, languageCode, addPrefix));
      } else {
        resolve([]);
      }
    }).catch(function (error) {
      reject(error);
    });
  });
}

var type = {
	string: {
		component: "DCText"
	},
	array: {
		component: "DCDropdown"
	},
	number: {
		component: "DCNumber"
	},
	boolean: {
		component: "DCBoolean"
	},
	object: {
		component: "DCMultiInput"
	}
};
var format = {
	"date-time": {
		component: "DCDate"
	}
};
var autofilled = [
	"id",
	"version"
];
var groups = {
	common: [
	]
};
var transformer = {
};
var table = {
	defaultTableHeaders: [
		"id"
	],
	needsTransforming: {
	}
};
var icons = {
};
var DefaultUISchema = {
	type: type,
	format: format,
	autofilled: autofilled,
	groups: groups,
	transformer: transformer,
	table: table,
	icons: icons
};

function resolveDefaultTableObject(data) {
  var tableSchema = DefaultUISchema.table;
  var tableObject = {};
  tableSchema.defaultTableHeaders.forEach(function (header) {
    if (Object.keys(tableSchema.needsTransforming).includes(header)) {
      switch (tableSchema.needsTransforming[header]) {
        default:
          tableObject[header] = data[header];
      }
    } else {
      tableObject[header] = data[header];
    }
  });
  return tableObject;
}

var uuidv4$1 = require('uuid/v4');

function generateGSIMDataState(element, user) {
  switch (element) {
    case 'createdDate':
    case 'lastUpdatedDate':
    case 'versionValidFrom':
    case 'validFrom':
      return moment();

    case 'id':
      return uuidv4$1();

    case 'version':
      return '1.0.0';

    case 'createdBy':
    case 'lastUpdatedBy':
      return user;

    default:
      return null;
  }
}
function updateNewGSIMDataState(element, user) {
  switch (element) {
    case 'createdDate':
    case 'lastUpdatedDate':
    case 'versionValidFrom':
    case 'validFrom':
      return moment();

    case 'version':
      return '1.0.0';

    case 'createdBy':
    case 'lastUpdatedBy':
      return user;

    default:
      return null;
  }
}
function updateGSIMDataState(element, user, version, versionIncrementation) {
  switch (element) {
    case 'lastUpdatedDate':
    case 'versionValidFrom':
      return moment();

    case 'version':
      return setVersion(version, versionIncrementation);

    case 'lastUpdatedBy':
      return user;

    default:
      return null;
  }
}

var type$1 = {
	string: {
		component: "DCText"
	},
	array: {
		component: "DCDropdown"
	},
	number: {
		component: "DCNumber"
	},
	boolean: {
		component: "DCBoolean"
	},
	object: {
		component: "DCMultiInput"
	}
};
var format$1 = {
	"date-time": {
		component: "DCDate"
	}
};
var autofilled$1 = [
	"createdBy",
	"createdDate",
	"id",
	"lastUpdatedBy",
	"lastUpdatedDate",
	"version",
	"versionValidFrom",
	"validFrom"
];
var groups$1 = {
	common: [
		"administrativeDetails",
		"administrativeStatus",
		"agentInRoles",
		"validUntil",
		"versionRationale"
	]
};
var transformer$1 = {
	AdministrativeDetails: {
		text: "values",
		option: "administrativeDetailType"
	},
	AgentDetails: {
		text: "values",
		option: "agentDetailType"
	}
};
var table$1 = {
	defaultTableHeaders: [
		"name",
		"description",
		"id"
	],
	needsTransforming: {
		name: "MultilingualText",
		description: "MultilingualText"
	}
};
var icons$1 = {
	user: [
		"createdBy",
		"lastUpdatedBy"
	]
};
var DefaultGSIMUISchema = {
	type: type$1,
	format: format$1,
	autofilled: autofilled$1,
	groups: groups$1,
	transformer: transformer$1,
	table: table$1,
	icons: icons$1
};

function resolveReferences$1(properties, returnSchema, schema, key, name) {
  var customType = extractName(properties[key].items.$ref);
  returnSchema[name].properties[key].customType = customType;
  returnSchema[name].properties[key].description.push('Input type: ' + customType);

  if (customType === 'MultilingualText') {
    returnSchema[name].properties[key].component = 'DCText';
  } else {
    returnSchema[name].properties[key].multiValue = true;
    returnSchema[name].properties[key].component = 'DCMultiInput';
  }

  Object.keys(schema[customType].properties).forEach(function (property) {
    if (schema[customType].properties[property].hasOwnProperty('enum')) {
      var options = [];
      schema[customType].properties[property].enum.forEach(function (value) {
        options.push({
          key: value,
          text: value,
          value: value
        });
      });
      returnSchema[name].properties[key].options = options;
      delete returnSchema[customType].properties[property].enum;
    }

    returnSchema[name].properties[key].description.push(schema[customType].properties[property].displayName + ': ' + returnSchema[customType].properties[property].description);
  });
}

function resolveLinks$1(properties, returnSchema, url, key) {
  var linkedKey = key.replace('_link_property_', '');
  var endpoints = [];
  Object.keys(properties[key].properties).forEach(function (property) {
    endpoints.push(url + 'data/' + property);
  });
  returnSchema[linkedKey].endpoints = endpoints;
  returnSchema[linkedKey].component = 'DCDropdown';

  if (properties[linkedKey].type === 'array') {
    returnSchema[linkedKey].multiSelect = true;
  }

  delete returnSchema[key];
}

function resolveEnums(properties, returnSchema) {
  var options = [];
  properties.enum.forEach(function (value) {
    options.push({
      key: value,
      text: value,
      value: value
    });
  });
  returnSchema.options = options;
  returnSchema.component = 'DCDropdown';
  delete returnSchema.enum;
}

function resolveGSIMProperties(schema, url) {
  return new Promise(function (resolve) {
    var returnSchema = JSON.parse(JSON.stringify(schema));
    var name = extractName(schema.$ref);
    var properties = JSON.parse(JSON.stringify(schema.definitions[name].properties));
    Object.keys(properties).forEach(function (key) {
      var description = [];
      description.push(returnSchema.definitions[name].properties[key].description);
      returnSchema.definitions[name].properties[key].description = description;

      if (properties[key].hasOwnProperty('items')) {
        if (properties[key].items.hasOwnProperty('$ref')) {
          resolveReferences$1(properties, returnSchema.definitions, schema.definitions, key, name);
        }

        if (properties[key].items.hasOwnProperty('format') && properties[key].items.format === 'date-time') {
          returnSchema.definitions[name].properties[key].component = 'DCDate';
          returnSchema.definitions[name].properties[key].multiple = properties[key].type === 'array';
        }

        delete returnSchema.definitions[name].properties[key].items;
      }

      if (key.startsWith('_link_property_')) {
        resolveLinks$1(properties, returnSchema.definitions[name].properties, url, key);
      }

      if (properties[key].hasOwnProperty('enum')) {
        resolveEnums(properties[key], returnSchema.definitions[name].properties[key]);
      }

      if (DefaultGSIMUISchema.icons.user.includes(key)) {
        returnSchema.definitions[name].properties[key].icon = 'user';
      }
    });
    resolve(returnSchema);
  });
}

function transformGSIMProperties(producer, schema, data, languageCode, fromSource) {
  var returnData = JSON.parse(JSON.stringify(data));
  var name = extractName(schema.$ref);
  var properties = schema.definitions[name].properties;
  Object.keys(properties).forEach(function (property) {
    if (properties[property].hasOwnProperty('customType') && properties[property].customType === 'MultilingualText') {
      if (returnData.hasOwnProperty(property)) {
        if (fromSource) {
          var text = data[property][0].languageText;
          data[property].forEach(function (multilingual) {
            if (multilingual.languageCode === languageCode) {
              text = multilingual.languageText;
            }
          });
          returnData[property] = text;
        } else {
          // TODO: This array overrides array stored in object in LDS which means it loses stored langauge texts for other
          // language codes on save.
          returnData[property] = [{
            languageCode: languageCode,
            languageText: data[property]
          }];
        }
      }
    }
  });
  return returnData;
}

function createOptions$1(response, prefix, languageCode, addPrefix) {
  var options = [];
  var cleanedPrefix = '';

  if (addPrefix) {
    cleanedPrefix = ' (' + prefix.replace(/\//ig, '') + ')';
  }

  Object.keys(response).forEach(function (value) {
    var text = response[value].name[0].languageText;
    response[value].name.forEach(function (name) {
      if (name.languageCode === languageCode) text = name.languageText;
    });
    options.push({
      key: response[value].id,
      text: text + cleanedPrefix,
      value: prefix + response[value].id
    });
  });
  return options;
}

function fetchGSIMOptions(url, languageCode, addPrefix) {
  return new Promise(function (resolve, reject) {
    fetchData(url).then(function (response) {
      var prefix = '/' + url.substring(url.lastIndexOf('/') + 1) + '/';

      if (response.length !== 0) {
        resolve(createOptions$1(response, prefix, languageCode, addPrefix));
      } else {
        resolve([]);
      }
    }).catch(function (error) {
      reject(error);
    });
  });
}

var name = "DescribedValueDomain";
var hideOnChoice = {
	dataType: {
		BOOLEAN: [
			"minValue",
			"maxValue",
			"minLength",
			"maxLength",
			"minDecimals",
			"maxDecimals"
		],
		DATETIME: [
			"minValue",
			"maxValue",
			"minLength",
			"maxLength",
			"minDecimals",
			"maxDecimals"
		],
		FLOAT: [
			"minLength",
			"maxLength"
		],
		INTEGER: [
			"minLength",
			"maxLength",
			"minDecimals",
			"maxDecimals"
		],
		STRING: [
			"minValue",
			"maxValue",
			"minDecimals",
			"maxDecimals"
		]
	}
};
var DescribedValueDomainUISchema = {
	name: name,
	hideOnChoice: hideOnChoice
};

function mergeGSIMUISchema(schema) {
  return new Promise(function (resolve) {
    var returnSchema = JSON.parse(JSON.stringify(schema));
    var name$$1 = extractName(schema.$ref);
    var properties = JSON.parse(JSON.stringify(schema.definitions[name$$1].properties));

    if (DescribedValueDomainUISchema.name === name$$1) {
      Object.keys(properties).forEach(function (key) {
        if (DescribedValueDomainUISchema.hideOnChoice.hasOwnProperty(key)) {
          returnSchema.definitions[name$$1].properties[key].hideOnChoice = DescribedValueDomainUISchema.hideOnChoice[key];
        }
      });
    }

    resolve(returnSchema);
  });
}

function resolveGSIMTableObject(data, languageCode) {
  var tableSchema = DefaultGSIMUISchema.table;
  var tableObject = {};
  tableSchema.defaultTableHeaders.forEach(function (header) {
    if (Object.keys(tableSchema.needsTransforming).includes(header)) {
      switch (tableSchema.needsTransforming[header]) {
        case 'MultilingualText':
          var text = data[header][0].languageText;
          data[header].forEach(function (multilingual) {
            if (multilingual.languageCode === languageCode) {
              text = multilingual.languageText;
            }
          });
          tableObject[header] = text;
          break;

        default:
          tableObject[header] = data[header];
      }
    } else {
      tableObject[header] = data[header];
    }
  });
  return tableObject;
}

function producers(producer, element, user, version, versionIncrementation) {
  switch (producer) {
    case 'GSIM':
      return updateGSIMDataState(element, user, version, versionIncrementation);

    case 'GSIMNew':
      return updateNewGSIMDataState(element, user);

    case 'Default':
      return updateDefaultDataState(element, version, versionIncrementation);

    case 'DefaultNew':
      return updateNewDefaultDataState(element);

    default:
      return null;
  }
}

function updateAutofill(producer, schema, data, user, versionIncrementation, isNew) {
  return new Promise(function (resolve) {
    var name = extractName(schema.$ref);
    var properties = schema.definitions[name].properties;
    var returnData = JSON.parse(JSON.stringify(data));
    Object.keys(properties).forEach(function (key) {
      if (properties[key].hasOwnProperty('autofilled')) {
        if (isNew) {
          var updateNewProducer = producer + 'New';

          if (producers(updateNewProducer, key, user) !== null) {
            returnData[key] = producers(updateNewProducer, key, user);
          }
        } else {
          if (producers(producer, key, user, data.version, versionIncrementation) !== null) {
            returnData[key] = producers(producer, key, user, data.version, versionIncrementation);
          }
        }
      }
    });
    resolve(returnData);
  });
}
function setAutofillAndClean(schema, data, hiddenFields) {
  return new Promise(function (resolve) {
    var name = extractName(schema.$ref);
    var returnSchema = JSON.parse(JSON.stringify(schema));
    var returnData = JSON.parse(JSON.stringify(data));
    Object.keys(returnSchema.definitions[name].properties).forEach(function (key) {
      if (data.hasOwnProperty(key)) {
        if (returnSchema.definitions[name].properties[key].hasOwnProperty('autofilled')) {
          returnSchema.definitions[name].properties[key].value = [data[key]];
        } else {
          returnSchema.definitions[name].properties[key].value = data[key];
        }
      }
    });
    Object.keys(data).forEach(function (key) {
      if (hiddenFields.includes(key)) {
        delete returnData[key];
      }
    });
    resolve({
      returnSchema: returnSchema,
      returnData: returnData
    });
  });
}

function producers$1(producer) {
  switch (producer) {
    case 'GSIM':
      return DefaultGSIMUISchema;

    case 'Default':
      return DefaultUISchema;

    default:
      return null;
  }
}

function producersSpecialProperties(producer, schema, data, languageCode, fromSource) {
  switch (producer) {
    case 'GSIM':
      return transformGSIMProperties(producer, schema, data, languageCode, fromSource);

    case 'Default':
      return data;

    default:
      return null;
  }
}

function checkEmpty(property) {
  if (property === '') {
    return true;
  } else if (Array.isArray(property) && property.length === 0) {
    return true;
  } else return _typeof(property) === 'object' && Object.keys(property).length === 0;
}

function transformDefaultProperties(producer, schema, data, fromSource) {
  return new Promise(function (resolve) {
    var returnData = JSON.parse(JSON.stringify(data));
    var name = extractName(schema.$ref);
    var properties = schema.definitions[name].properties;
    var transformer$$1 = producers$1(producer).transformer;
    Object.keys(properties).forEach(function (property) {
      if (checkEmpty(returnData[property])) {
        delete returnData[property];
      }

      Object.keys(transformer$$1).forEach(function (transformable) {
        if (properties[property].hasOwnProperty('customType') && properties[property].customType === transformable) {
          if (Array.isArray(returnData[property]) && returnData[property].length !== 0) {
            returnData[property].forEach(function (value, index) {
              Object.keys(transformer$$1[transformable]).forEach(function (transformKey) {
                if (fromSource) {
                  returnData[property][index][transformKey] = returnData[property][index][transformer$$1[transformable][transformKey]];
                  delete returnData[property][index][transformer$$1[transformable][transformKey]];
                } else {
                  returnData[property][index][transformer$$1[transformable][transformKey]] = returnData[property][index][transformKey];
                  delete returnData[property][index][transformKey];
                }
              });
            });
          }
        }
      });
    });
    resolve(returnData);
  });
}

function transformProperties(producer, schema, data, languageCode, fromSource) {
  return new Promise(function (resolve) {
    transformDefaultProperties(producer, schema, data, fromSource).then(function (transformedProperties) {
      resolve(producersSpecialProperties(producer, schema, transformedProperties, languageCode, fromSource));
    });
  });
}

function saveData(producer, schema, data, endpoint, languageCode) {
  return new Promise(function (resolve, reject) {
    transformProperties(producer, schema, data, languageCode, false).then(function (savableData) {
      var url = endpoint + 'data/' + extractName(schema.$ref) + '/' + savableData.id;
      putData(url, endpoint, savableData, languageCode).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  });
}

var types = ['string', 'number', 'object'];

function checkRequiredIsNotEmpty(schema, data, name, languageCode) {
  var properties = schema.definitions[name].properties;
  var errors = {};
  Object.keys(properties).forEach(function (key) {
    if (properties[key].required) {
      if (properties[key].type === 'array' && data[key].length === 0) {
        errors[key] = MESSAGES.NOT_EMPTY[languageCode];
      } else if (types.includes(_typeof(properties[key].type))) {
        if (data[key] === '' || data[key] === null || data[key] === undefined) {
          errors[key] = MESSAGES.NOT_EMPTY[languageCode];
        }
      } else {
        errors[key] = MESSAGES.UNKNOWN_CHECK[languageCode];
      }
    }
  });
  return errors;
}

function validation(schema, data, languageCode) {
  return new Promise(function (resolve, reject) {
    var returnSchema = JSON.parse(JSON.stringify(schema));
    var name = extractName(schema.$ref);
    var errors = checkRequiredIsNotEmpty(schema, data, name, languageCode);
    Object.keys(schema.definitions[name].properties).forEach(function (key) {
      if (schema.definitions[name].properties[key].hasOwnProperty('autofilled')) {
        returnSchema.definitions[name].properties[key].value = [data[key]];
      } else {
        returnSchema.definitions[name].properties[key].value = data[key];
      }

      if (Object.keys(errors).length !== 0) {
        if (errors.hasOwnProperty(key)) {
          returnSchema.definitions[name].properties[key].error = errors[key];
        } else {
          delete returnSchema.definitions[name].properties[key].error;
        }
      } else {
        delete returnSchema.definitions[name].properties[key].error;
      }
    });

    if (Object.keys(errors).length === 0) {
      resolve(returnSchema);
    } else {
      reject(returnSchema);
    }
  });
}

var DEFAULT_VALUE_BY_TYPE = {
  array: [],
  boolean: false,
  number: '',
  object: {},
  string: ''
};

function producers$2(producer, element, user) {
  switch (producer) {
    case 'GSIM':
      return generateGSIMDataState(element, user);

    case 'Default':
      return generateDefaultDataState(element);

    default:
      return null;
  }
}

function generateDataState(producer, schema, user, languageCode) {
  return new Promise(function (resolve) {
    var name = extractName(schema.$ref);
    var properties = schema.definitions[name].properties;
    var dataObject = {};
    Object.keys(properties).forEach(function (key) {
      if (properties[key].hasOwnProperty('autofilled')) {
        dataObject[key] = producers$2(producer, key, user);
      } else {
        if (DEFAULT_VALUE_BY_TYPE.hasOwnProperty(properties[key].type)) {
          dataObject[key] = DEFAULT_VALUE_BY_TYPE[properties[key].type];
        } else {
          throw Error(MESSAGES.UNKNOWN_GENERATE[languageCode]);
        }
      }
    });
    resolve(dataObject);
  });
}
function fillDataState(producer, schema, id, endpoint, languageCode) {
  return new Promise(function (resolve, reject) {
    var name = extractName(schema.$ref);
    var url = endpoint + 'data/' + name + '/' + id;
    fetchData(url, languageCode).then(function (response) {
      transformProperties(producer, schema, response, languageCode, true).then(function (transformedData) {
        resolve(transformedData);
      });
    }).catch(function (error) {
      reject(error);
    });
  });
}
function setDataToSchema(schema, data) {
  return new Promise(function (resolve) {
    var name = extractName(schema.$ref);
    var returnSchema = JSON.parse(JSON.stringify(schema));
    var properties = returnSchema.definitions[name].properties;
    var returnHiddenFields = [];
    Object.keys(data).forEach(function (key) {
      if (properties[key].hasOwnProperty('autofilled')) {
        properties[key].value = [data[key]];
      } else {
        properties[key].value = data[key];
      }
    });
    Object.keys(properties).forEach(function (property) {
      if (properties[property].hasOwnProperty('hideOnChoice')) {
        returnHiddenFields = returnHiddenFields.concat(properties[property].hideOnChoice[data[property]]);
      }
    });
    resolve({
      returnSchema: returnSchema,
      returnHiddenFields: returnHiddenFields
    });
  });
}

function producers$3(producer) {
  switch (producer) {
    case 'GSIM':
      return DefaultGSIMUISchema;

    case 'Default':
      return DefaultUISchema;

    default:
      return null;
  }
}

function cleanDefinitions(definitions, returnSchema) {
  Object.keys(definitions).forEach(function (definition) {
    Object.keys(definitions[definition].properties).forEach(function (property) {
      if (definitions[definition].required.includes(property)) {
        returnSchema.definitions[definition].properties[property].required = true;
      }
    });
    delete returnSchema.definitions[definition].required;
  });
}

function updateAndCleanProperties(properties, returnSchema, defaultUISchema, name) {
  Object.keys(properties).forEach(function (key) {
    returnSchema.definitions[name].properties[key].name = key;

    if (defaultUISchema.type.hasOwnProperty(properties[key].type)) {
      returnSchema.definitions[name].properties[key].component = defaultUISchema.type[properties[key].type].component;
    }

    if (defaultUISchema.format.hasOwnProperty(properties[key].format)) {
      returnSchema.definitions[name].properties[key].component = defaultUISchema.format[properties[key].format].component;
    }

    if (defaultUISchema.autofilled.includes(key)) {
      returnSchema.definitions[name].properties[key].autofilled = true;
      returnSchema.definitions[name].properties[key].component = 'DCStatic';

      if (properties[key].hasOwnProperty('format') && properties[key].format === 'date-time') {
        returnSchema.definitions[name].properties[key].format = 'date';
        returnSchema.definitions[name].properties[key].multiple = properties[key].type === 'array';
      }
    }

    if (defaultUISchema.groups.common.includes(key)) {
      returnSchema.definitions[name].properties[key].group = 'common';
    }
  });
}

function mergeDefaultUISchema(producer, schema) {
  return new Promise(function (resolve) {
    var defaultUISchema = producers$3(producer);
    var returnSchema = JSON.parse(JSON.stringify(schema));
    var name = extractName(schema.$ref);
    var properties = JSON.parse(JSON.stringify(schema.definitions[name].properties));
    cleanDefinitions(schema.definitions, returnSchema);
    updateAndCleanProperties(properties, returnSchema, defaultUISchema, name);
    resolve(returnSchema);
  });
}

function fetchOptions(producer, url, languageCode, addPrefix) {
  switch (producer) {
    case 'GSIM':
      return fetchGSIMOptions(url, languageCode, addPrefix);

    case 'Default':
      return fetchDefaultOptions(url, languageCode, addPrefix);

    default:
      return null;
  }
}

function buildOptions(producer, endpoints, languageCode) {
  return new Promise(function (resolve, reject) {
    Promise.all(endpoints.map(function (url) {
      return fetchOptions(producer, url, languageCode, endpoints.length > 1);
    })).then(function (allOptions) {
      var options = [].concat.apply([], allOptions);
      resolve(options);
    }).catch(function (error) {
      reject(error);
    });
  });
}

function populateOptions(producer, schema, languageCode) {
  return new Promise(function (resolve, reject) {
    var returnSchema = JSON.parse(JSON.stringify(schema));
    var name = extractName(schema.$ref);
    var properties = JSON.parse(JSON.stringify(schema.definitions[name].properties));
    Promise.all(Object.keys(properties).map(function (value) {
      if (properties[value].hasOwnProperty('endpoints')) {
        return buildOptions(producer, properties[value].endpoints, languageCode);
      }

      return null;
    })).then(function (options) {
      Object.keys(returnSchema.definitions[name].properties).forEach(function (key, index) {
        if (options[index] !== null) {
          returnSchema.definitions[name].properties[key].options = options[index];
          delete returnSchema.definitions[name].properties[key].endpoints;
        }
      });
      resolve(returnSchema);
    }).catch(function (error) {
      reject(error);
    });
  });
}

function resolveProperties(producer, schema, url) {
  switch (producer) {
    case 'GSIM':
      return resolveGSIMProperties(schema, url);

    case 'Default':
      return resolveDefaultProperties(schema, url);

    default:
      return null;
  }
}

function mergeUISchema(producer, schema) {
  switch (producer) {
    case 'GSIM':
      return mergeGSIMUISchema(schema);

    case 'Default':
      return schema;

    default:
      return null;
  }
}

var DCFormBuilder =
/*#__PURE__*/
function (_Component) {
  _inherits(DCFormBuilder, _Component);

  function DCFormBuilder(props) {
    var _this;

    _classCallCheck(this, DCFormBuilder);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DCFormBuilder).call(this, props));

    _this.handleLockClick = function () {
      _this.setState({
        readOnly: !_this.state.readOnly
      }, function () {
        if (!_this.state.readOnly) _this.setState({
          message: ''
        });
      });
    };

    _this.handleValueChange = function (name, value) {
      _this.setState({
        data: _objectSpread({}, _this.state.data, _defineProperty({}, name, value)),
        saved: false
      });
    };

    _this.handleVersionIncrementationChange = function (name, value) {
      var _this$setState;

      _this.setState((_this$setState = {}, _defineProperty(_this$setState, name, value), _defineProperty(_this$setState, "saved", false), _this$setState));
    };

    _this.handleVisibilityChange = function (name, value) {
      _this.setState({
        data: _objectSpread({}, _this.state.data, _defineProperty({}, name, value)),
        hiddenFields: _this.state.schema.definitions[_this.state.name].properties[name].hideOnChoice[value],
        saved: false
      });
    };

    _this.validateAndSave = function (event) {
      event.preventDefault();

      _this.setState({
        ready: false
      }, function () {
        var _this$state = _this.state,
            schema = _this$state.schema,
            data = _this$state.data,
            versionIncrementation = _this$state.versionIncrementation,
            hiddenFields = _this$state.hiddenFields,
            isNew = _this$state.isNew;
        var _this$props = _this.props,
            producer = _this$props.producer,
            endpoint = _this$props.endpoint,
            user = _this$props.user,
            languageCode = _this$props.languageCode;
        var copiedSchema = JSON.parse(JSON.stringify(schema));
        validation(copiedSchema, data, languageCode).then(function (schemaWithoutErrors) {
          updateAutofill(producer, schemaWithoutErrors, data, user, versionIncrementation, isNew).then(function (autofilledData) {
            setAutofillAndClean(schemaWithoutErrors, autofilledData, hiddenFields).then(function (finished) {
              var savedMessage = isNew ? MESSAGES.SAVED[languageCode] : MESSAGES.UPDATED[languageCode];
              saveData(producer, finished.returnSchema, finished.returnData, endpoint, languageCode).then(function (response) {
                if (isNew) {
                  var newUrl = window.location.pathname.replace('/new', '/' + autofilledData.id);
                  window.history.pushState({}, '', newUrl);
                }

                _this.setState({
                  schema: finished.returnSchema,
                  data: finished.returnData,
                  saved: true,
                  message: MESSAGES.WAS_SAVED[languageCode] + savedMessage + ' (' + DIV.SAGA + ': ' + response[DIV.SAGA] + ')',
                  readOnly: true,
                  isNew: false
                }, function () {
                  return _this.setState({
                    ready: true
                  });
                });
              }).catch(function (saveError) {
                _this.setState({
                  schema: schemaWithoutErrors,
                  saved: false,
                  message: MESSAGES.WAS_NOT_SAVED[languageCode] + ' ' + saveError
                }, function () {
                  return _this.setState({
                    ready: true
                  });
                });
              });
            });
          });
        }).catch(function (schemaWithErrors) {
          _this.setState({
            ready: true,
            schema: schemaWithErrors,
            saved: false,
            message: MESSAGES.CORRECT_ERRORS[languageCode]
          });
        });
      });
    };

    _this.simulateSaveAndDownloadJson = function (event) {
      event.preventDefault();

      _this.setState({
        ready: false
      }, function () {
        var _this$state2 = _this.state,
            name = _this$state2.name,
            schema = _this$state2.schema,
            data = _this$state2.data,
            versionIncrementation = _this$state2.versionIncrementation,
            hiddenFields = _this$state2.hiddenFields,
            isNew = _this$state2.isNew;
        var _this$props2 = _this.props,
            producer = _this$props2.producer,
            user = _this$props2.user,
            languageCode = _this$props2.languageCode;
        var copiedSchema = JSON.parse(JSON.stringify(schema));
        validation(copiedSchema, data, languageCode).then(function (schemaWithoutErrors) {
          updateAutofill(producer, schemaWithoutErrors, data, user, versionIncrementation, isNew).then(function (autofilledData) {
            setAutofillAndClean(schemaWithoutErrors, autofilledData, hiddenFields).then(function (finished) {
              transformProperties(producer, finished.returnSchema, finished.returnData, languageCode, false).then(function (saveableData) {
                var downloadableJson = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(saveableData, null, ' '));
                var downloadLink = React__default.createElement("a", {
                  href: "data: ".concat(downloadableJson),
                  download: name + DIV.JSON_FILE_ENDING
                }, UI.DOWNLOAD_JSON[languageCode]);

                _this.setState({
                  schema: finished.returnSchema,
                  data: finished.returnData,
                  saved: true,
                  message: downloadLink
                }, function () {
                  _this.setState({
                    ready: true
                  });
                });
              });
            });
          });
        }).catch(function (schemaWithErrors) {
          _this.setState({
            ready: true,
            schema: schemaWithErrors,
            saved: false,
            message: MESSAGES.CORRECT_ERRORS[languageCode]
          });
        });
      });
    };

    var _name = extractName(_this.props.schema.$ref);

    _this.state = {
      ready: false,
      readOnly: false,
      message: '',
      saved: false,
      versionIncrementation: '2',
      data: {},
      schema: {},
      hiddenFields: [],
      name: _name,
      description: _this.props.schema.definitions[_name].description,
      problem: false,
      isNew: _this.props.params.id === 'new'
    };
    return _this;
  }

  _createClass(DCFormBuilder, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var isNew = this.state.isNew;
      var _this$props3 = this.props,
          producer = _this$props3.producer,
          schema = _this$props3.schema,
          params = _this$props3.params,
          endpoint = _this$props3.endpoint,
          user = _this$props3.user,
          languageCode = _this$props3.languageCode;
      populateOptions(producer, schema, languageCode).then(function (populatedSchema) {
        if (isNew) {
          _this2.newComponent(producer, populatedSchema, user, languageCode);
        } else {
          fillDataState(producer, populatedSchema, params.id, endpoint, languageCode).then(function (filledData) {
            setDataToSchema(populatedSchema, filledData).then(function (filled) {
              _this2.setState({
                data: filledData,
                schema: filled.returnSchema,
                hiddenFields: filled.returnHiddenFields
              }, function () {
                return _this2.setState({
                  ready: true
                });
              });
            });
          }).catch(function (error) {
            _this2.setState({
              problem: true,
              message: MESSAGES.NOT_FILL[languageCode] + error
            });
          });
        }
      }).catch(function (error) {
        _this2.setState({
          problem: true,
          message: MESSAGES.NOT_POPULATE[languageCode] + error
        });
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this3 = this;

      var _this$state3 = this.state,
          hiddenFields = _this$state3.hiddenFields,
          data = _this$state3.data;
      var _this$props4 = this.props,
          params = _this$props4.params,
          producer = _this$props4.producer,
          schema = _this$props4.schema,
          user = _this$props4.user;
      if (hiddenFields !== nextState.hiddenFields) return true;

      if (params.id !== nextProps.params.id && nextProps.params.id === 'new') {
        this.setState({
          ready: false,
          isNew: true
        }, function () {
          populateOptions(producer, schema).then(function (populatedSchema) {
            _this3.newComponent(producer, populatedSchema, user);
          });
        });
        return true;
      }

      return data === nextState.data;
    }
  }, {
    key: "newComponent",
    value: function newComponent(producer, schema, user, languageCode) {
      var _this4 = this;

      var name = this.state.name;
      var properties = schema.definitions[name].properties;
      generateDataState(producer, schema, user, languageCode).then(function (generatedDataState) {
        Object.keys(properties).forEach(function (key) {
          if (properties[key].hasOwnProperty('autofilled')) {
            properties[key].value = [generatedDataState[key]];
          }
        });

        _this4.setState({
          data: generatedDataState,
          schema: schema,
          hiddenFields: [],
          message: '',
          saved: false,
          readOnly: false
        }, function () {
          return _this4.setState({
            ready: true
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state4 = this.state,
          ready = _this$state4.ready,
          readOnly = _this$state4.readOnly,
          message = _this$state4.message,
          saved = _this$state4.saved,
          schema = _this$state4.schema,
          hiddenFields = _this$state4.hiddenFields,
          name = _this$state4.name,
          description = _this$state4.description,
          problem = _this$state4.problem,
          isNew = _this$state4.isNew;
      var _this$props5 = this.props,
          specialFeatures = _this$props5.specialFeatures,
          languageCode = _this$props5.languageCode;

      if (problem) {
        return React__default.createElement("div", null, React__default.createElement(semanticUiReact.Header, {
          as: "h1",
          content: splitOnUppercase(name),
          subheader: description,
          dividing: true,
          icon: {
            name: 'warning',
            color: 'red'
          }
        }), message !== '' && React__default.createElement(semanticUiReact.Message, {
          negative: true,
          content: message
        }));
      }

      if (ready) {
        var formIcon = readOnly ? 'lock' : 'unlock';
        var formIconColor = readOnly ? 'red' : 'green';
        var properties = schema.definitions[name].properties;
        return React__default.createElement(semanticUiReact.Form, null, React__default.createElement(semanticUiReact.Header, {
          as: "h1",
          content: splitOnUppercase(name),
          subheader: description,
          dividing: true,
          icon: {
            name: formIcon,
            color: formIconColor,
            link: true,
            onClick: this.handleLockClick
          }
        }), message !== '' && React__default.createElement(semanticUiReact.Message, {
          color: saved ? 'green' : 'red',
          content: message
        }), React__default.createElement(semanticUiReact.Dimmer.Dimmable, {
          dimmed: readOnly
        }, React__default.createElement(semanticUiReact.Dimmer, {
          active: readOnly,
          style: {
            backgroundColor: 'rgba(0,0,0,.0010)',
            border: 'solid',
            borderWidth: '0.1rem',
            borderColor: 'rgba(33, 186, 69,.25',
            borderRadius: '.3rem',
            zIndex: 1
          }
        }), React__default.createElement(semanticUiReact.Grid, {
          columns: "equal",
          style: {
            padding: '0.5rem',
            zIndex: 0
          },
          divided: true
        }, React__default.createElement(semanticUiReact.Grid.Column, null, Object.keys(properties).map(function (property, index) {
          if (!properties[property].hasOwnProperty('autofilled') && properties[property].group !== 'common') {
            if (properties[property].hasOwnProperty('hideOnChoice')) {
              return React__default.createElement(bundle_1, {
                key: index,
                properties: properties[property],
                languageCode: languageCode,
                valueChange: _this5.handleVisibilityChange
              });
            } else {
              if (Array.isArray(hiddenFields) && hiddenFields.length !== 0 && hiddenFields.includes(property)) {
                return null;
              } else {
                return React__default.createElement(bundle_1, {
                  key: index,
                  properties: properties[property],
                  languageCode: languageCode,
                  valueChange: _this5.handleValueChange
                });
              }
            }
          }

          return null;
        })), React__default.createElement(semanticUiReact.Grid.Column, null, Object.keys(properties).map(function (property, index) {
          if (!properties[property].hasOwnProperty('autofilled') && properties[property].group === 'common') {
            return React__default.createElement(bundle_1, {
              key: index,
              properties: properties[property],
              languageCode: languageCode,
              valueChange: _this5.handleValueChange
            });
          }

          return null;
        })), React__default.createElement(semanticUiReact.Grid.Column, null, Object.keys(properties).map(function (property, index) {
          if (properties[property].hasOwnProperty('autofilled')) {
            return React__default.createElement(bundle_1, {
              key: index,
              properties: properties[property],
              languageCode: languageCode,
              valueChange: _this5.handleValueChange
            });
          }

          return null;
        }), !isNew && React__default.createElement(bundle_1, {
          properties: defaultVersioning,
          valueChange: this.handleVersionIncrementationChange,
          languageCode: languageCode
        }), React__default.createElement(semanticUiReact.Button, {
          primary: true,
          content: isNew ? UI.SAVE[languageCode] : UI.UPDATE[languageCode],
          onClick: this.validateAndSave
        }))), specialFeatures && React__default.createElement(semanticUiReact.Popup, {
          flowing: true,
          hideOnScroll: true,
          position: "right center",
          trigger: React__default.createElement(semanticUiReact.Button, {
            color: "teal",
            content: UI.CREATE_JSON[languageCode],
            onClick: this.simulateSaveAndDownloadJson
          })
        }, React__default.createElement(semanticUiReact.Icon, {
          color: "blue",
          name: "info circle"
        }), MESSAGES.GENERATE_JSON[languageCode])));
      }

      return React__default.createElement(semanticUiReact.Header, {
        as: "h1",
        content: splitOnUppercase(name),
        subheader: description,
        dividing: true,
        icon: {
          name: 'spinner',
          color: 'teal',
          loading: true
        }
      });
    }
  }]);

  return DCFormBuilder;
}(React.Component);

function SchemaHandler(url, producer, endpoint) {
  return new Promise(function (resolve, reject) {
    fetchData(url).then(function (result) {
      Promise.all(result.map(function (schema) {
        return mergeDefaultUISchema(producer, schema);
      })).then(function (mergedSchemas) {
        Promise.all(mergedSchemas.map(function (mergedSchema) {
          return resolveProperties(producer, mergedSchema, endpoint);
        })).then(function (resolvedSchemas) {
          Promise.all(resolvedSchemas.map(function (resolvedSchema) {
            return mergeUISchema(producer, resolvedSchema);
          })).then(function (finishedSchemas) {
            resolve(finishedSchemas);
          }).catch(function (error) {
            reject(MESSAGES.SCHEMA_HANDLER_ERROR + error.toString());
          });
        }).catch(function (error) {
          reject(MESSAGES.SCHEMA_HANDLER_ERROR + error.toString());
        });
      }).catch(function (error) {
        reject(MESSAGES.SCHEMA_HANDLER_ERROR + error.toString());
      });
    }).catch(function (error) {
      reject(error);
    });
  });
}

function producers$4(producer) {
  switch (producer) {
    case 'GSIM':
      return DefaultGSIMUISchema;

    case 'Default':
      return DefaultUISchema;

    default:
      return null;
  }
}

function resolveTableHeaders(producer) {
  return producers$4(producer).table.defaultTableHeaders;
}
function resolveTableObject(producer, data) {
  switch (producer) {
    case 'GSIM':
      return resolveGSIMTableObject(data);

    case 'Default':
      return resolveDefaultTableObject(data);

    default:
      return null;
  }
}

var DCTableBuilder =
/*#__PURE__*/
function (_Component) {
  _inherits(DCTableBuilder, _Component);

  function DCTableBuilder(props) {
    var _this;

    _classCallCheck(this, DCTableBuilder);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DCTableBuilder).call(this, props));

    _this.searchInputOnChange = function (event) {
      _this.setState({
        search: event.target.value
      });
    };

    var _this$props = _this.props,
        producer = _this$props.producer,
        schema = _this$props.schema,
        routing = _this$props.routing;
    var name = extractName(schema.$ref);
    var description = schema.definitions[name].description;
    var tableHeaders = resolveTableHeaders(producer);
    var tableColumns = [];
    tableHeaders.forEach(function (header) {
      var displayName = schema.definitions[name].properties[header].displayName;
      var tableColumn = {};
      tableColumn['Header'] = displayName;
      tableColumn['accessor'] = header;

      switch (header) {
        case 'name':
          tableColumn['Cell'] = function (props) {
            return React__default.createElement(reactRouterDom.Link, {
              to: routing + '/' + props.original.id
            }, props.value);
          };

          break;

        default:
          tableColumn['Cell'] = function (props) {
            return React__default.createElement("div", {
              className: "textCenter"
            }, props.value);
          };

      }

      tableColumns.push(tableColumn);
    });
    _this.state = {
      ready: false,
      message: '',
      search: '',
      name: name,
      description: description,
      tableColumns: tableColumns,
      tableData: []
    };
    return _this;
  }

  _createClass(DCTableBuilder, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props2 = this.props,
          producer = _this$props2.producer,
          endpoint = _this$props2.endpoint;
      var url = endpoint + 'data/' + this.state.name;
      var tableData = [];
      fetchData(url).then(function (result) {
        if (result.length !== 0) {
          result.forEach(function (data) {
            tableData.push(resolveTableObject(producer, data));
          });
        }

        _this2.setState({
          ready: true,
          tableData: tableData
        });
      }).catch(function (error) {
        _this2.setState({
          ready: true,
          message: error
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          ready = _this$state.ready,
          message = _this$state.message,
          search = _this$state.search,
          name = _this$state.name,
          description = _this$state.description,
          tableColumns = _this$state.tableColumns,
          tableData = _this$state.tableData;
      var _this$props3 = this.props,
          routing = _this$props3.routing,
          languageCode = _this$props3.languageCode;
      var filteredTableData = tableData;
      var noDataText = '';

      if (ready) {
        noDataText = MESSAGES.NOTHING_FOUND[languageCode];

        if (search) {
          noDataText = MESSAGES.NAME_NOT_FOUND[languageCode] + ' \'' + search + '\'';
          filteredTableData = tableData.filter(function (row) {
            return row.name.toUpperCase().includes(search.toUpperCase());
          });
        }

        return React__default.createElement("div", null, React__default.createElement(semanticUiReact.Header, {
          as: "h1",
          content: splitOnUppercase(name),
          subheader: description,
          dividing: true,
          icon: {
            name: 'list alternate outline',
            color: 'teal'
          }
        }), React__default.createElement(semanticUiReact.Divider, {
          hidden: true
        }), React__default.createElement(semanticUiReact.Popup, {
          flowing: true,
          hideOnScroll: true,
          position: "top center",
          trigger: React__default.createElement(semanticUiReact.Input, {
            icon: "search",
            placeholder: UI.SEARCH[languageCode],
            value: search,
            onChange: this.searchInputOnChange
          })
        }, React__default.createElement(semanticUiReact.Icon, {
          color: "blue",
          name: "info circle"
        }), MESSAGES.FILTER_BY_NAME[languageCode]), React__default.createElement(semanticUiReact.Label, {
          color: "teal",
          size: "large",
          circular: true
        }, Object.keys(filteredTableData).length), React__default.createElement(reactRouterDom.Link, {
          to: routing + '/new'
        }, React__default.createElement(semanticUiReact.Button, {
          primary: true,
          floated: "right",
          content: UI.CREATE_NEW[languageCode] + ' ' + splitOnUppercase(name)
        })), message ? React__default.createElement(semanticUiReact.Message, {
          negative: true,
          content: message
        }) : React__default.createElement(semanticUiReact.Divider, {
          hidden: true
        }), React__default.createElement(ReactTable, {
          sortable: true,
          data: filteredTableData,
          resizable: false,
          columns: tableColumns,
          defaultPageSize: 10,
          noDataText: noDataText,
          previousText: TABLE.PREVIOUS[languageCode],
          nextText: TABLE.NEXT[languageCode],
          ofText: TABLE.OF[languageCode],
          pageText: TABLE.PAGE[languageCode],
          loadingText: TABLE.LOADING[languageCode],
          rowsText: TABLE.ROWS[languageCode],
          className: "-highlight"
        }));
      }

      return React__default.createElement(semanticUiReact.Header, {
        as: "h1",
        content: splitOnUppercase(name),
        subheader: description,
        dividing: true,
        icon: {
          name: 'spinner',
          color: 'teal',
          loading: true
        }
      });
    }
  }]);

  return DCTableBuilder;
}(React.Component);

exports.DCFormBuilder = DCFormBuilder;
exports.SchemaHandler = SchemaHandler;
exports.DCTableBuilder = DCTableBuilder;
