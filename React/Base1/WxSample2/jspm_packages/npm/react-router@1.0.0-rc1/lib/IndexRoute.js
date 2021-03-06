/* */ 
'use strict';
exports.__esModule = true;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _invariant = require('invariant');
var _invariant2 = _interopRequireDefault(_invariant);
var _warning = require('warning');
var _warning2 = _interopRequireDefault(_warning);
var _RouteUtils = require('./RouteUtils');
var _PropTypes = require('./PropTypes');
var _React$PropTypes = _react2['default'].PropTypes;
var bool = _React$PropTypes.bool;
var func = _React$PropTypes.func;
var IndexRoute = _react2['default'].createClass({
  displayName: 'IndexRoute',
  statics: {createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
      if (parentRoute) {
        parentRoute.indexRoute = _RouteUtils.createRouteFromReactElement(element);
      } else {
        _warning2['default'](false, 'An <IndexRoute> does not make sense at the root of your route config');
      }
    }},
  propTypes: {
    path: _PropTypes.falsy,
    ignoreScrollBehavior: bool,
    component: _PropTypes.component,
    components: _PropTypes.components,
    getComponents: func
  },
  render: function render() {
    _invariant2['default'](false, '<IndexRoute> elements are for router configuration only and should not be rendered');
  }
});
exports['default'] = IndexRoute;
module.exports = exports['default'];
