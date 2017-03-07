(function() {
    'use strict';

    function Fund($http, $q) {
        return {
            name: 'fund',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/fund/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.fund')
        .factory('Fund', Fund);

    Fund.$inject = ['$http', '$q'];

})();
