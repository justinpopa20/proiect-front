'use strict';


(function (ng) {
  // Declare app level module which depends on views, and components
  ng.module('BoogIT', [
      'ui.router',
      'BoogIT.Iustinian'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider.state('home', {
        url: '/'
      });
      $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get('$state');
        $state.go('home');
      });

      $locationProvider.html5Mode(true);
    }])
}).call(this, this.angular);