(function() {
    'use strict';

    /* jshint -W098 */

    function FundController($scope, Global, Fund, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'fund'
        };

        $scope.checkCircle = function() {
            Fund.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.fund')
        .controller('FundController', FundController);

    FundController.$inject = ['$scope', 'Global', 'Fund', '$stateParams'];

})();
