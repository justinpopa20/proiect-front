'use strict';

(function (ng) {
    ng.module('BoogIT.Iustinian', [])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider.state('iustinian', {
                url: '/iustinian',
                templateUrl: 'app/Iustinian/iustinian.template.html'
            });
            $stateProvider.state('iustinian.tema1', {
                url: '/tema1',
                templateUrl: 'app/Iustinian/teme/tema1/tema1.template.html'
            });
            $stateProvider.state('iustinian.tema2', {
                url: '/tema2',
                templateUrl: 'app/Iustinian/teme/tema2/tema2.template.html'
            });
            $stateProvider.state('iustinian.tema3', {
                url: '/tema3',
                templateUrl: 'app/Iustinian/teme/tema3/tema3.template.html'
            });
        }])
}).call(this, this.angular);