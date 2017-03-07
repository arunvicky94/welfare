(function() {
    'use strict';

    function Fund($stateProvider) {
        $stateProvider.state('fund example page', {
            url: '/fund/example',
            templateUrl: 'fund/views/index.html'
        }).state('form', {
            url: '/form',
            templateUrl: 'fund/views/fundForm.html',
            controller: 'FundController',
            controllerAs: 'FundCtrl',
            // data: {
            //     requiresLogin: true,
            //     requiresAdmin: false
            // }
        });
    }

    angular
        .module('mean.fund')
        .config(Fund);

    Fund.$inject = ['$stateProvider'];

})();
