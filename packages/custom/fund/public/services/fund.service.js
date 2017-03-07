angular
    .module('mean.fund')
    .service('fundService', function ($http, $window) {
        this.fundRequest = function (fundRequest) {
            return $http.post('/api/fund', fundRequest);
        }

        this.getFundByUserId = function (id) {
            return $http.get('/api/fund/' + id);
        }

        this.getFunds = function () {
            return $http.get('/api/funds');
        }
        this.getFundsByStatus = function (status) {
            return $http.get('/api/funds/' + status);
        }
        this.updateFund = function (fund) {
            return $http.put('/api/fund', fund);
        }

    });
