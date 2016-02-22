(function() {
  'use strict';

  angular
    .module('gaCampingStore')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('items', {
        url: '/',
        templateUrl: 'app/item/index.html',
        controller: 'ItemIndexController',
        controllerAs: 'ctrl'
      })
      .state('itemDetail', {
        url: '/items/:itemId',
        templateUrl: 'app/item/show.html',
        controller: 'ItemShowController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }

})();
