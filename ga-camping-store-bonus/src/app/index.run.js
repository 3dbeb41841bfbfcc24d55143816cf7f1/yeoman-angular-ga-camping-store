(function() {
  'use strict';

  angular
    .module('gaCampingStore')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
