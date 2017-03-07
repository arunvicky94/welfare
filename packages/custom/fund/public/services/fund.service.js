angular
    .module('mean.fund')
    .service('fundService', function ($http, $window) {
        this.fundRequest = function (fundRequest) {
            console.log("service calling" + fundRequest);
            return $http.post('/api/fund', fundRequest);
        }

        this.getFundByUserId = function (id) {
            console.log("service calling", id);
            return $http.get('/api/fund/' + id, config);
        }

    });