'use strict';

/**
 * @author w.aular
 * created on 3/1/16
 */
(function () {
  'use strict';

  angular.module('preloader', []).service('preloader', preloader);

  /** @ngInject */
  function preloader($q) {
    return {
      loadImg: function loadImg(src) {
        var d = $q.defer();
        var img = new Image();
        img.src = src;
        img.onload = function () {
          d.resolve();
        };
        return d.promise;
      },
      loadAmCharts: function loadAmCharts() {
        var d = $q.defer();
        AmCharts.ready(function () {
          d.resolve();
        });
        return d.promise;
      }
    };
  }
})();
//# sourceMappingURL=preloader.js.map
