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
    content: description
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
    content: description
  }));
}
function simpleStaticFormField(displayName, description, component) {
  var icon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  return React__default$$1.createElement(semanticUiReact__default.Form.Field, null, React__default$$1.createElement(semanticUiReact__default.Popup, {
    hideOnScroll: true,
    position: "top left",
    header: displayName,
    wide: "very",
    content: description,
    trigger: React__default$$1.createElement("label", null, displayName, " ", icon)
  }), component);
}

function checkValueAndType(value, type) {
  return value !== undefined && value !== '' && value !== null && _typeof(value) === type;
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
      _this.setState({
        value: event.target.value
      }, function () {
        return _this.props.valueChange(_this.props.name, _this.state.value);
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
      if (checkValueAndType(this.props.value, 'string')) this.setState({
        value: this.props.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;
      var _this$props = this.props,
          name = _this$props.name,
          displayName = _this$props.displayName,
          description = _this$props.description,
          error = _this$props.error,
          warning = _this$props.warning,
          required = _this$props.required;
      var component = React__default$$1.createElement(semanticUiReact__default.TextArea, {
        autoHeight: true,
        rows: 1,
        name: name,
        placeholder: displayName,
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
      _this.setState({
        value: !_this.state.value
      }, function () {
        return _this.props.valueChange(_this.props.name, _this.state.value);
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
      if (checkValueAndType(this.props.value, 'boolean')) this.setState({
        value: this.props.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;
      var _this$props = this.props,
          displayName = _this$props.displayName,
          description = _this$props.description;
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
        var value = '';
        if (event.target.value !== '') value = parseFloat(event.target.value);

        _this.setState({
          value: value
        }, function () {
          return _this.props.valueChange(_this.props.name, _this.state.value);
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
      if (checkValueAndType(this.props.value, 'number')) this.setState({
        value: this.props.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;
      var _this$props = this.props,
          name = _this$props.name,
          displayName = _this$props.displayName,
          description = _this$props.description,
          error = _this$props.error,
          warning = _this$props.warning,
          required = _this$props.required;
      var component = React__default$$1.createElement(semanticUiReact__default.Input, {
        icon: {
          name: 'hashtag',
          color: 'teal'
        },
        iconPosition: "left",
        name: name,
        value: value,
        placeholder: displayName,
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

      _this.setState({
        value: value
      }, function () {
        return _this.props.valueChange(_this.props.name, _this.state.value);
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
      if (checkValueAndType(this.props.value, 'string')) this.setState({
        value: this.props.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      var _this$props = this.props,
          displayName = _this$props.displayName,
          description = _this$props.description,
          error = _this$props.error,
          warning = _this$props.warning,
          required = _this$props.required,
          options = _this$props.options;
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

var DCDate =
/*#__PURE__*/
function (_Component) {
  _inherits(DCDate, _Component);

  function DCDate(props) {
    var _this;

    _classCallCheck(this, DCDate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DCDate).call(this, props));

    _this.handleChange = function (index, date) {
      if (_this.props.multiple) {
        var value = _toConsumableArray(_this.state.value);

        value[parseInt(index)] = date;

        _this.setState({
          value: value
        }, function () {
          return _this.props.valueChange(_this.props.name, _this.state.value);
        });
      } else {
        _this.setState({
          value: date
        }, function () {
          return _this.props.valueChange(_this.props.name, _this.state.value);
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
      if (checkValueAndType(this.props.value, 'object')) this.setState({
        value: this.props.value
      });
    }
  }, {
    key: "handleRemoveEntry",
    value: function handleRemoveEntry(index) {
      var _this2 = this;

      var entries = _toConsumableArray(this.state.value);

      if (parseInt(index) !== -1) entries.splice(parseInt(index), 1);
      this.setState({
        value: entries
      }, function () {
        return _this2.props.valueChange(_this2.props.name, _this2.state.value);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var value = this.state.value;
      var _this$props = this.props,
          displayName = _this$props.displayName,
          description = _this$props.description,
          error = _this$props.error,
          warning = _this$props.warning,
          required = _this$props.required,
          multiple = _this$props.multiple;
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
            placeholderText: displayName,
            showWeekNumbers: true,
            dropdownMode: "select",
            todayButton: "I dag"
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
          placeholderText: displayName,
          showWeekNumbers: true,
          dropdownMode: "select",
          todayButton: "I dag"
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
      _this.setState({
        value: data.value
      }, function () {
        return _this.props.valueChange(_this.props.name, _this.state.value);
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
        _this2.setState({
          options: options
        }, function () {
          if (checkValueAndType(_this2.props.value, 'string') || Array.isArray(_this2.props.value) && _this2.props.value.length !== 0) {
            _this2.setState({
              value: _this2.props.value
            }, function () {
              return resolve();
            });
          } else {
            _this2.setState({
              value: _this2.props.multiSelect ? [] : ''
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
      var _this$props = this.props,
          displayName = _this$props.displayName,
          description = _this$props.description,
          error = _this$props.error,
          warning = _this$props.warning,
          required = _this$props.required,
          multiSelect = _this$props.multiSelect,
          searchable = _this$props.searchable;

      if (!ready) {
        var component = React__default$$1.createElement(semanticUiReact__default.Dropdown, {
          placeholder: displayName,
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
          placeholder: options.length === 0 ? 'No options' : displayName,
          search: searchable,
          value: value,
          options: options,
          clearable: true,
          selection: true,
          multiple: multiSelect,
          disabled: options.length === 0,
          onChange: this.handleChange,
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
      _this.setState({
        value: _toConsumableArray(_this.state.value).concat([{
          text: _this.props.multiValue ? [''] : '',
          option: ''
        }])
      }, function () {
        return _this.props.valueChange(_this.props.name, _this.state.value);
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
        _this2.setState({
          options: options
        }, function () {
          if (Array.isArray(_this2.props.value) && _this2.props.value.length !== 0) {
            _this2.setState({
              value: _this2.props.value
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

      var value = _toConsumableArray(this.state.value);

      if (!this.props.multiValue) {
        value[parseInt(index)].text = event.target.value;
      } else {
        value[parseInt(index)].text[parseInt(innerIndex)] = event.target.value;
      }

      this.setState({
        value: value
      }, function () {
        return _this4.props.valueChange(_this4.props.name, _this4.state.value);
      });
    }
  }, {
    key: "handleDropdownChange",
    value: function handleDropdownChange(index, event, data) {
      var _this5 = this;

      var value = _toConsumableArray(this.state.value);

      value[parseInt(index)].option = data.value;
      this.setState({
        value: value
      }, function () {
        return _this5.props.valueChange(_this5.props.name, _this5.state.value);
      });
    }
  }, {
    key: "handleRemoveEntry",
    value: function handleRemoveEntry(index) {
      var _this6 = this;

      var entries = _toConsumableArray(this.state.value);

      if (parseInt(index) !== -1) entries.splice(parseInt(index), 1);
      this.setState({
        value: entries
      }, function () {
        return _this6.props.valueChange(_this6.props.name, _this6.state.value);
      });
    }
  }, {
    key: "handleAddValueToEntry",
    value: function handleAddValueToEntry(index) {
      var _this7 = this;

      var entries = _toConsumableArray(this.state.value);

      entries[parseInt(index)].text = _toConsumableArray(this.state.value[parseInt(index)].text).concat(['']);
      this.setState({
        value: entries
      }, function () {
        return _this7.props.valueChange(_this7.props.name, _this7.state.value);
      });
    }
  }, {
    key: "handleRemoveValueFromEntry",
    value: function handleRemoveValueFromEntry(index, innerIndex) {
      var _this8 = this;

      var entries = _toConsumableArray(this.state.value);

      if (parseInt(index) !== -1 && parseInt(innerIndex) !== -1) {
        entries[parseInt(index)].text.splice(parseInt(innerIndex), 1);
      }

      this.setState({
        value: entries
      }, function () {
        return _this8.props.valueChange(_this8.props.name, _this8.state.value);
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
      var _this$props = this.props,
          name = _this$props.name,
          displayName = _this$props.displayName,
          description = _this$props.description,
          error = _this$props.error,
          warning = _this$props.warning,
          required = _this$props.required,
          multiValue = _this$props.multiValue;

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
            placeholder: options.length === 0 ? 'No options' : 'Pick one',
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
              placeholder: displayName,
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
            placeholder: displayName,
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
      var FormComponent = formComponents[this.props.properties.component];
      return React__default$$1.createElement(FormComponent, _extends({}, this.props.properties, {
        valueChange: this.props.valueChange
      }));
    }
  }]);

  return DCFormField;
}(React__default.Component);

exports.DCFormField = DCFormField;
});

unwrapExports(bundle);
var bundle_1 = bundle.DCFormField;

var uuidv4 = require('uuid/v4');

function setVersion(version, versionIncrementation) {
  var versionIncrement = parseInt(versionIncrementation);
  var versionArray = version.split('.');
  var updatedVersion;
  versionArray[versionIncrement] = parseInt(versionArray[versionIncrement]) + 1;
  updatedVersion = versionArray.join('.');
  return updatedVersion;
}

function generateGSIMDataState(element, user) {
  switch (element) {
    case 'createdDate':
    case 'lastUpdatedDate':
    case 'versionValidFrom':
    case 'validFrom':
      return moment();

    case 'id':
      return uuidv4();

    case 'version':
      return '1.0.0';

    case 'lastUpdatedBy':
    case 'createdBy':
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
	"createdBy",
	"createdDate",
	"id",
	"lastUpdatedBy",
	"lastUpdatedDate",
	"version",
	"versionValidFrom",
	"validFrom"
];
var groups = {
	common: [
		"administrativeDetails",
		"administrativeStatus",
		"agentInRoles",
		"validUntil",
		"versionRationale"
	]
};
var transformer = {
	AdministrativeDetails: {
		text: "values",
		option: "administrativeDetailType"
	},
	AgentDetails: {
		text: "values",
		option: "agentDetailType"
	}
};
var defaultTableHeaders = [
	"id",
	"name",
	"description"
];
var icons = {
	user: [
		"createdBy",
		"lastUpdatedBy"
	]
};
var DefaultGSIMUISchema = {
	type: type,
	format: format,
	autofilled: autofilled,
	groups: groups,
	transformer: transformer,
	defaultTableHeaders: defaultTableHeaders,
	icons: icons
};

function resolveGSIMProperties(schema, url) {
  return new Promise(function (resolve) {
    var returnSchema = JSON.parse(JSON.stringify(schema));
    var name = schema.$ref.replace('#/definitions/', '');
    var properties = JSON.parse(JSON.stringify(schema.definitions[name].properties));
    Object.keys(properties).forEach(function (key) {
      if (properties[key].hasOwnProperty('items')) {
        if (properties[key].items.hasOwnProperty('$ref')) {
          var customType = properties[key].items.$ref.replace('#/definitions/', '');
          returnSchema.definitions[name].properties[key].customType = customType;

          if (customType === 'MultilingualText') {
            returnSchema.definitions[name].properties[key].component = 'DCText';
          } else {
            returnSchema.definitions[name].properties[key].multiValue = true;
            returnSchema.definitions[name].properties[key].component = 'DCMultiInput';
          }

          Object.keys(schema.definitions[customType].properties).forEach(function (property) {
            if (schema.definitions[customType].properties[property].hasOwnProperty('enum')) {
              var options = [];
              schema.definitions[customType].properties[property].enum.forEach(function (value) {
                options.push({
                  key: value,
                  text: value,
                  value: value
                });
              });
              returnSchema.definitions[name].properties[key].options = options;
              delete schema.definitions[customType].properties[property].enum;
            }
          });
        }

        if (properties[key].items.hasOwnProperty('format') && properties[key].items.format === 'date-time') {
          returnSchema.definitions[name].properties[key].component = 'DCDate';
          returnSchema.definitions[name].properties[key].multiple = properties[key].type === 'array';
        }

        delete returnSchema.definitions[name].properties[key].items;
      }

      if (key.startsWith('_link_property_')) {
        var linkedKey = key.replace('_link_property_', '');
        var endpoints = [];
        Object.keys(properties[key].properties).forEach(function (property) {
          endpoints.push(url + 'data/' + property);
        });
        returnSchema.definitions[name].properties[linkedKey].endpoints = endpoints;
        returnSchema.definitions[name].properties[linkedKey].component = 'DCDropdown';

        if (properties[linkedKey].type === 'array') {
          returnSchema.definitions[name].properties[linkedKey].multiSelect = true;
        }

        delete returnSchema.definitions[name].properties[key];
      }

      if (properties[key].hasOwnProperty('enum')) {
        var options = [];
        properties[key].enum.forEach(function (value) {
          options.push({
            key: value,
            text: value,
            value: value
          });
        });
        returnSchema.definitions[name].properties[key].options = options;
        returnSchema.definitions[name].properties[key].component = 'DCDropdown';
        delete schema.definitions[name].properties[key].enum;
      }

      if (DefaultGSIMUISchema.icons.user.includes(key)) {
        returnSchema.definitions[name].properties[key].icon = 'user';
      }
    });
    resolve(returnSchema);
  });
}

function producers(producer) {
  switch (producer) {
    case 'GSIM':
      return DefaultGSIMUISchema;

    default:
      return null;
  }
}

function transformProperties(producer, schema, data, fromSource) {
  var returnObject = JSON.parse(JSON.stringify(data));
  var name = schema.$ref.replace('#/definitions/', '');
  var properties = schema.definitions[name].properties;
  var transformer$$1 = producers(producer).transformer;
  Object.keys(properties).forEach(function (property) {
    if (returnObject[property] === '') {
      delete returnObject[property];
    }

    if (Array.isArray(returnObject[property]) && returnObject[property].length === 0) {
      delete returnObject[property];
    }

    Object.keys(transformer$$1).forEach(function (transformable) {
      if (properties[property].hasOwnProperty('customType') && properties[property].customType === transformable) {
        if (Array.isArray(returnObject[property]) && returnObject[property].length !== 0) {
          returnObject[property].forEach(function (value, index) {
            Object.keys(transformer$$1[transformable]).forEach(function (transformKey) {
              if (fromSource) {
                returnObject[property][index][transformKey] = returnObject[property][index][transformer$$1[transformable][transformKey]];
                delete returnObject[property][index][transformer$$1[transformable][transformKey]];
              } else {
                returnObject[property][index][transformer$$1[transformable][transformKey]] = returnObject[property][index][transformKey];
                delete returnObject[property][index][transformKey];
              }
            });
          });
        }
      }
    }); // TODO: This is GSIM spesific, needs work

    if (properties[property].hasOwnProperty('customType') && properties[property].customType === 'MultilingualText' && returnObject.hasOwnProperty(property)) {
      if (fromSource) {
        returnObject[property] = returnObject[property][0].languageText; // TODO: This is slightly dangerous since because of [0]
      } else {
        var value = returnObject[property];
        returnObject[property] = [{
          languageCode: 'nb',
          languageText: value
        }];
      }
    }
  });
  return returnObject;
}

function fetchData(url) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
  return new Promise(function (resolve, reject) {
    var controller = new AbortController();
    var signal = controller.signal;
    var timer = setTimeout(function () {
      reject('Request timeout for url: ' + url);
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
function putData(url, data) {
  var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
  return new Promise(function (resolve, reject) {
    var controller = new AbortController();
    var signal = controller.signal;
    var timer = setTimeout(function () {
      reject('Request timeout for url: ' + url);
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
      reject(error.toString() + ' \'' + url + '\'');
    }).finally(function () {
      return clearTimeout(timer);
    });
  });
}

var DEFAULT_VALUE_BY_TYPE = {
  array: [],
  boolean: false,
  number: '',
  object: {},
  string: ''
};

function producers$1(producer, element, user) {
  switch (producer) {
    case 'GSIM':
      return generateGSIMDataState(element, user);

    default:
      return null;
  }
}

function generateDataState(producer, schema, user) {
  return new Promise(function (resolve) {
    var name = schema.$ref.replace('#/definitions/', '');
    var properties = schema.definitions[name].properties;
    var dataObject = {};
    Object.keys(properties).forEach(function (key) {
      if (properties[key].hasOwnProperty('autofilled')) {
        dataObject[key] = producers$1(producer, key, user);
      } else {
        if (DEFAULT_VALUE_BY_TYPE.hasOwnProperty(properties[key].type)) {
          dataObject[key] = DEFAULT_VALUE_BY_TYPE[properties[key].type];
        } else {
          throw Error('Unknown type, cannot generate default value');
        }
      }
    });
    resolve(dataObject);
  });
}
function fillDataState(producer, schema, id, endpoint) {
  return new Promise(function (resolve, reject) {
    var name = schema.$ref.replace('#/definitions/', '');
    var url = endpoint + 'data/' + name + '/' + id;
    fetchData(url).then(function (response) {
      var transformedData = transformProperties(producer, schema, response, true);
      resolve(transformedData);
    }).catch(function (error) {
      reject(error);
    });
  });
}

function splitOnUppercase(string) {
  if (typeof string === 'string') {
    return string.match(/[A-Z][a-z]+|[0-9]+/g).join(' ');
  } else {
    return string;
  }
}

var types = ['string', 'number', 'object'];

function checkRequiredIsNotEmpty(schema, data, name) {
  var properties = schema.definitions[name].properties;
  var errors = {};
  Object.keys(properties).forEach(function (key) {
    if (properties[key].required) {
      if (properties[key].type === 'array' && data[key].length === 0) {
        errors[key] = 'Cannot be blank';
      } else if (types.includes(_typeof(properties[key].type))) {
        if (data[key] === '' || data[key] === null || data[key] === undefined) {
          errors[key] = 'Cannot be blank';
        }
      } else {
        errors[key] = 'Unknown type, cannot check if empty';
      }
    }
  });
  return errors;
}

function validation(schema, data) {
  return new Promise(function (resolve, reject) {
    var returnSchema = JSON.parse(JSON.stringify(schema));
    var name = schema.$ref.replace('#/definitions/', '');
    var errors = checkRequiredIsNotEmpty(schema, data, name);
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

function saveData(producer, schema, data, endpoint) {
  return new Promise(function (resolve, reject) {
    var saveableData = transformProperties(producer, schema, data, false);
    var url = endpoint + 'data/' + schema.$ref.replace('#/definitions/', '') + '/' + saveableData.id;
    putData(url, saveableData).then(function (response) {
      resolve(response);
    }).catch(function (error) {
      reject(error);
    });
  });
}

function producers$2(producer, element, user, version, versionIncrementation) {
  switch (producer) {
    case 'GSIM':
      return updateGSIMDataState(element, user, version, versionIncrementation);

    default:
      return null;
  }
}

function updateAutofill(producer, schema, data, user, versionIncrementation) {
  return new Promise(function (resolve) {
    var name = schema.$ref.replace('#/definitions/', '');
    var properties = schema.definitions[name].properties;
    var dataObject = JSON.parse(JSON.stringify(data));
    Object.keys(properties).forEach(function (key) {
      if (properties[key].hasOwnProperty('autofilled')) {
        if (producers$2(producer, key, user, data.version, versionIncrementation !== null)) {
          dataObject[key] = producers$2(producer, key, user, data.version, versionIncrementation);
        }
      }
    });
    resolve(dataObject);
  });
}

function fetchGSIMOptions(url) {
  return new Promise(function (resolve) {
    var options = [];
    fetchData(url).then(function (response) {
      var prefix = '/' + url.substring(url.lastIndexOf('/') + 1) + '/';

      if (response.length !== 0) {
        Object.keys(response).forEach(function (value) {
          var text = response[value].name[0].languageText;
          response[value].name.forEach(function (name) {
            if (name.languageCode === 'nb') {
              text = name.languageText;
            }
          });
          options.push({
            key: response[value].id,
            text: text,
            value: prefix + response[value].id
          });
        });
        resolve(options);
      } else {
        resolve(options);
      }
    }).catch(function () {
      // TODO: Tell user something went wrong
      resolve(options);
    });
  });
}

function fetchOptions(producer, url) {
  switch (producer) {
    case 'GSIM':
      return fetchGSIMOptions(url);

    default:
      return null;
  }
}

function buildOptions(producer, endpoints) {
  return new Promise(function (resolve) {
    Promise.all(endpoints.map(function (url) {
      return fetchOptions(producer, url);
    })).then(function (allOptions) {
      var options = [].concat.apply([], allOptions);
      resolve(options);
    });
  });
}

function populateOptions(producer, schema) {
  return new Promise(function (resolve) {
    var returnSchema = JSON.parse(JSON.stringify(schema));
    var name = schema.$ref.replace('#/definitions/', '');
    var properties = JSON.parse(JSON.stringify(schema.definitions[name].properties));
    Promise.all(Object.keys(properties).map(function (value) {
      if (properties[value].hasOwnProperty('endpoints')) {
        return buildOptions(producer, properties[value].endpoints);
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
    });
  });
}

var version = {
  component: 'DCRadio',
  name: 'versionIncrementation',
  displayName: 'Versjonsinkrementering',
  description: 'Hvordan skal versjonen inkrementeres?',
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

var FormBuilder =
/*#__PURE__*/
function (_Component) {
  _inherits(FormBuilder, _Component);

  function FormBuilder(props) {
    var _this;

    _classCallCheck(this, FormBuilder);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormBuilder).call(this, props));

    _this.handleLockClick = function () {
      _this.setState({
        readOnly: !_this.state.readOnly
      }, function () {
        if (!_this.state.readOnly) {
          _this.setState({
            message: ''
          });
        }
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

    _this.validateAndSave = function (event) {
      event.preventDefault();
      var schema = JSON.parse(JSON.stringify(_this.state.schema));
      var data = JSON.parse(JSON.stringify(_this.state.data));

      _this.setState({
        ready: false
      }, function () {
        validation(schema, data).then(function (resultWithoutErrors) {
          _this.setState({
            schema: resultWithoutErrors
          }, function () {
            updateAutofill(_this.props.producer, schema, data, 'Test', _this.state.versionIncrementation).then(function (result) {
              _this.setState({
                data: result
              }, function () {
                var updatedSchema = JSON.parse(JSON.stringify(_this.state.schema));
                Object.keys(updatedSchema.definitions[_this.state.name].properties).forEach(function (key) {
                  if (result.hasOwnProperty(key)) {
                    if (updatedSchema.definitions[_this.state.name].properties[key].hasOwnProperty('autofilled')) {
                      updatedSchema.definitions[_this.state.name].properties[key].value = [result[key]];
                    } else {
                      updatedSchema.definitions[_this.state.name].properties[key].value = result[key];
                    }
                  }
                });

                _this.setState({
                  schema: updatedSchema
                }, function () {
                  saveData(_this.props.producer, updatedSchema, result, _this.props.endpoint).then(function (response) {
                    _this.setState({
                      ready: true,
                      saved: true,
                      message: 'Objektet ble lagret (saga-execution-id: ' + response['saga-execution-id'] + ')',
                      readOnly: true
                    });
                  });
                });
              });
            }).catch(function (error) {
              _this.setState({
                ready: true,
                saved: false,
                message: error
              });
            });
          });
        }).catch(function (resultWithErrors) {
          _this.setState({
            ready: true,
            schema: resultWithErrors,
            saved: false,
            message: 'Objektet ble ikke lagret, rett opp feil og lagre igjen'
          });
        });
      });
    };

    _this.checkState = function () {
      console.log(_this.state);
      console.log(_this.props);
    };

    _this.state = {
      ready: false,
      readOnly: false,
      message: '',
      saved: false,
      versionIncrementation: '2',
      data: {},
      schema: {},
      name: _this.props.schema.$ref.replace('#/definitions/', ''),
      description: _this.props.schema.definitions[_this.props.schema.$ref.replace('#/definitions/', '')].description
    };
    return _this;
  }

  _createClass(FormBuilder, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      populateOptions(this.props.producer, this.props.schema).then(function (schema) {
        if (_this2.props.params.id === 'new') {
          generateDataState(_this2.props.producer, schema, 'Test').then(function (result) {
            Object.keys(schema.definitions[_this2.state.name].properties).forEach(function (key) {
              if (schema.definitions[_this2.state.name].properties[key].hasOwnProperty('autofilled')) {
                schema.definitions[_this2.state.name].properties[key].value = [result[key]];
              }
            });

            _this2.setState({
              data: result,
              schema: schema
            }, function () {
              return _this2.setState({
                ready: true
              });
            });
          });
        } else {
          fillDataState(_this2.props.producer, schema, _this2.props.params.id, _this2.props.endpoint).then(function (result) {
            Object.keys(result).forEach(function (key) {
              if (schema.definitions[_this2.state.name].properties[key].hasOwnProperty('autofilled')) {
                schema.definitions[_this2.state.name].properties[key].value = [result[key]];
              } else {
                schema.definitions[_this2.state.name].properties[key].value = result[key];
              }
            });

            _this2.setState({
              data: result,
              schema: schema
            }, function () {
              return _this2.setState({
                ready: true
              });
            });
          }).catch(function (error) {
            console.log(error);
          });
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.data === nextState.data;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          ready = _this$state.ready,
          readOnly = _this$state.readOnly,
          message = _this$state.message,
          saved = _this$state.saved,
          schema = _this$state.schema,
          name = _this$state.name,
          description = _this$state.description;

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
          content: message.toString()
        }), React__default.createElement(semanticUiReact.Dimmer.Dimmable, {
          dimmed: readOnly
        }, React__default.createElement(semanticUiReact.Dimmer, {
          active: readOnly,
          style: {
            backgroundColor: 'rgba(0,0,0,.01)',
            border: 'solid',
            borderWidth: '0.1rem',
            borderColor: 'rgba(219,40,40,.1'
          }
        }), React__default.createElement(semanticUiReact.Grid, {
          columns: "equal",
          style: {
            padding: '0.5rem'
          },
          divided: true
        }, React__default.createElement(semanticUiReact.Grid.Column, null, Object.keys(properties).map(function (property, index) {
          if (!properties[property].hasOwnProperty('autofilled') && properties[property].group !== 'common') {
            return React__default.createElement(bundle_1, {
              key: index,
              properties: properties[property],
              valueChange: _this3.handleValueChange
            });
          }

          return null;
        })), React__default.createElement(semanticUiReact.Grid.Column, null, Object.keys(properties).map(function (property, index) {
          if (!properties[property].hasOwnProperty('autofilled') && properties[property].group === 'common') {
            return React__default.createElement(bundle_1, {
              key: index,
              properties: properties[property],
              valueChange: _this3.handleValueChange
            });
          }

          return null;
        })), React__default.createElement(semanticUiReact.Grid.Column, null, Object.keys(properties).map(function (property, index) {
          if (properties[property].hasOwnProperty('autofilled')) {
            return React__default.createElement(bundle_1, {
              key: index,
              properties: properties[property],
              valueChange: _this3.handleValueChange
            });
          }

          return null;
        }), React__default.createElement(bundle_1, {
          properties: version,
          valueChange: this.handleVersionIncrementationChange
        }), React__default.createElement(semanticUiReact.Button, {
          color: "green",
          content: "Lagre",
          onClick: this.validateAndSave
        })))), React__default.createElement(semanticUiReact.Button, {
          color: "pink",
          content: "Inner State",
          onClick: this.checkState
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

  return FormBuilder;
}(React.Component);

function producers$3(producer) {
  switch (producer) {
    case 'GSIM':
      return DefaultGSIMUISchema;

    default:
      return null;
  }
}

function resolveTableHeaders(producer) {
  return producers$3(producer).defaultTableHeaders;
}

var TableBuilder =
/*#__PURE__*/
function (_Component) {
  _inherits(TableBuilder, _Component);

  function TableBuilder(props) {
    var _this;

    _classCallCheck(this, TableBuilder);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableBuilder).call(this, props));

    _this.searchInputOnChange = function (event) {
      _this.setState({
        search: event.target.value
      });
    };

    var name = _this.props.schema.$ref.replace('#/definitions/', '');

    var description = _this.props.schema.definitions[name].description;
    var tableHeaders = resolveTableHeaders(_this.props.producer);
    var tableColumns = [];
    tableHeaders.forEach(function (header) {
      var displayName = _this.props.schema.definitions[name].properties[header].displayName;
      var tableColumn = {};
      tableColumn['Header'] = displayName;
      tableColumn['accessor'] = header;

      switch (header) {
        case 'id':
          // TODO: This syntax does not work with commonjs and rollup
          tableColumn['Cell'] = function (props) {
            return React__default.createElement(reactRouterDom.Link, {
              to: _this.props.routing + '/' + props.original.id
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

  _createClass(TableBuilder, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var url = this.props.endpoint + 'data/' + this.state.name;
      var tableData = [];
      fetchData(url).then(function (result) {
        if (result.length !== 0) {
          result.forEach(function (value) {
            var tableObject = {}; // TODO: Make a producer for this

            tableObject['id'] = value.id;
            tableObject['name'] = value.name[0].languageText;
            tableObject['description'] = value.description[0].languageText;
            tableData.push(tableObject);
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
      var filteredTableData = tableData;
      var noDataText = '';

      if (ready) {
        noDataText = 'Fant ingen...';

        if (search) {
          noDataText = 'Fant ingen med navnet \'' + search + '\'';
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
            placeholder: "S\xF8k",
            value: search,
            onChange: this.searchInputOnChange
          })
        }, React__default.createElement(semanticUiReact.Icon, {
          color: "blue",
          name: "info circle"
        }), "Filtrerer tabellen etter navn"), React__default.createElement(semanticUiReact.Label, {
          color: "teal",
          size: "large",
          circular: true
        }, Object.keys(filteredTableData).length), React__default.createElement(reactRouterDom.Link, {
          to: this.props.routing + '/new'
        }, React__default.createElement(semanticUiReact.Button, {
          primary: true,
          floated: "right",
          content: 'Opprett ny ' + splitOnUppercase(name)
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
          previousText: "Forrige",
          nextText: "Neste",
          loadingText: "Laster",
          pageText: "Side",
          ofText: "av",
          rowsText: "rader",
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

  return TableBuilder;
}(React.Component);

function producers$4(producer) {
  switch (producer) {
    case 'GSIM':
      return DefaultGSIMUISchema;

    default:
      return null;
  }
}

function mergeDefaultUISchema(producer, schema) {
  return new Promise(function (resolve) {
    var defaultUISchema = producers$4(producer);
    var returnSchema = JSON.parse(JSON.stringify(schema));
    var name = schema.$ref.replace('#/definitions/', '');
    var properties = JSON.parse(JSON.stringify(schema.definitions[name].properties));
    Object.keys(schema.definitions).forEach(function (definition) {
      Object.keys(schema.definitions[definition].properties).forEach(function (property) {
        if (schema.definitions[definition].required.includes(property)) {
          returnSchema.definitions[definition].properties[property].required = true;
        }
      });
      delete returnSchema.definitions[definition].required;
    });
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
    resolve(returnSchema);
  });
}

function resolveProperties(producer, schema, url) {
  switch (producer) {
    case 'GSIM':
      return resolveGSIMProperties(schema, url);

    default:
      return null;
  }
}

function schemaHandling(url, producer, endpoint) {
  return new Promise(function (resolve, reject) {
    fetchData(url).then(function (result) {
      Promise.all(result.map(function (schema) {
        return mergeDefaultUISchema(producer, schema);
      })).then(function (mergedSchemas) {
        Promise.all(mergedSchemas.map(function (mergedSchema) {
          return resolveProperties(producer, mergedSchema, endpoint);
        })).then(function (resolvedSchemas) {
          resolve(resolvedSchemas);
        }).catch(function (error) {
          console.log(error);
          reject();
        });
      }).catch(function (error) {
        console.log(error);
        reject();
      });
    }).catch(function (error) {
      console.log(error);
      reject();
    });
  });
}

exports.FormBuilder = FormBuilder;
exports.TableBuilder = TableBuilder;
exports.schemaHandling = schemaHandling;
