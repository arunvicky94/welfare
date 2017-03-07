(function() {
    'use strict';

    function Fund($stateProvider) {
        $stateProvider
        .state('form', {
            url: '/form',
            templateUrl: 'fund/views/fundForm.html',
            controller: 'FundController',
            controllerAs: 'FundCtrl',
            data: {
                requiresLogin: true,
                requiresAdmin: false
            }
        }).state('funds', {
            url: '/funds',
            templateUrl: 'fund/views/fundgrid.html',
            controller: 'FundController',
            controllerAs: 'FundCtrl',
            data: {
                requiresLogin: true,
                requiresAdmin: false
            }
        }).state('adminPage', {
            url: '/admin',
            templateUrl: 'fund/views/adminPage.html',
            controller: 'FundController',
            controllerAs: 'FundCtrl',
            data: {
                requiresLogin: true,
                requiresAdmin: true
            }
        });
    }
    function authentication($rootScope, $state, $timeout, $window, MeanUser) {
      $rootScope.$on('$stateChangeStart', function(event, toState) {
        console.log(MeanUser.loggedin);
        if (toState.data) {
          if (toState.data.requiresLogin) {
              if (!MeanUser.loggedin) {
                  $timeout(function() {
                      $state.go('auth.login');
                  });
              }
          }
        }
      })
  }

    angular
        .module('mean.fund')
        .config(Fund)
        .run(authentication);

    Fund.$inject = ['$stateProvider'];
    authentication.$inject = ['$rootScope', '$state', '$timeout', '$window', 'MeanUser'];

})();
