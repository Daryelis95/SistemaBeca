'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @author v.lugovsky
 * created on 03.05.2016
 */
(function () {
  'use strict';

  angular.module('superUtil', []).service('superUtilService', superUtilService);

  /** @ngInject */
  function superUtilService() {
    this.isDescendant = function (parent, child) {
      var node = child.parentNode;
      while (node != null) {
        if (node == parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    };

    this.hexToRGB = function (hex, alpha) {
      var r = parseInt(hex.slice(1, 3), 16);
      var g = parseInt(hex.slice(3, 5), 16);
      var b = parseInt(hex.slice(5, 7), 16);
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    };

    this.hasAttr = function (elem, attrName) {
      var attr = $(elem).attr(attrName);
      return (typeof attr === 'undefined' ? 'undefined' : _typeof(attr)) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined)) && attr !== false;
    };
  }
})();
//# sourceMappingURL=superUtil.js.map
