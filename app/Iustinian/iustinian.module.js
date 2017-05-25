'use strict';

(function (ng) {
    ng.module('BoogIT.Iustinian', [])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider.state('iustinian', {
                url: '/iustinian',
                templateUrl: 'app/Iustinian/iustinian.template.html'
            });
            $stateProvider.state('iustinian.teme.dynamicTable', {
                url: '/iustinian/teme/dynamicTable',
                templateUrl: 'app/Iustinian/teme/dynamicTable/dynamicTable.template.html'
            });
        }])
}).call(this, this.angular);