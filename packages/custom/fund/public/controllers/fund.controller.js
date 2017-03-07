angular
    .module('mean.fund')
    .controller('FundController', function ($window, fundService, MeanUser, $rootScope, $window) {
        var vm = this;
        vm.fundRequest = {};
        vm.requestFund = function () {
            fundService.fundRequest({fund: vm.fundRequest, user: MeanUser.user })
                .then(function (response) {
                    alert("Your request sent succesfully")
                    vm.fundRequest = {};
                }, function (error) {
                    alert("You are not elligible for request fund"
                     + " : " + error.status + " : " + error.statusText);
                    vm.fundRequest = {};
                });
        }
        vm.getFundByUserId = function () {
            $rootScope.showNav = true;
            fundService.getFundByUserId(MeanUser.user._id)
                .then(function (response) {
                    vm.funds = response.data;
                }, function (error) {
                    alert("Unable to get fund details" + " : "
                    + error.status + " : " + error.statusText);
                });
        }
        vm.getFunds = function() {
            fundService.getFunds()
            .then(function(response){
                vm.funds = response.data;
            }, function(error){
                alert("Unable to get fund details"
                + " : " + error.status + " : " +  error.statusText);
            });
        }

        vm.getFundsByStatus = function (status) {
            $rootScope.showNav = true;
            fundService.getFundsByStatus(status)
            .then(function (response) {
                vm.funds = response.data;
            }, function (error) {
                alert("Unable to get fund details" + " : "
                + error.status + " : " + error.statusText);
            });
        }

        vm.acceptFund = function (fund) {
              fund.status = "Accept";
            fundService.updateFund(fund)
            .then(function(response){
            }, function(error) {
              alert("Unable to accept fund request. please try again"
               + " : " + error.status + " : " +  error.statusText);
            });
        }

        vm.rejectFund = function (fund) {
            fund.status = "Reject";
            fundService.updateFund(fund)
            .then(function(response){
            }, function(error){
                alert("Unable to reject fund request. please try again"
                + " : " + error.status + " : " +  error.statusText);
            });
        }

    });
