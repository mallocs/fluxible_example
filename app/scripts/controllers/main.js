'use strict';

var testingServers = {
   "GetTestingServerResponse" : {
      "TestingServer" : [ {
         "@name" : "Test01",
         "@isCurrent" : false
      }, {
         "@name" : "Test06",
         "@isCurrent" : true
      } ]
   }
};

/**
 * @ngdoc function
 * @name achillesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the achillesApp
 */
angular.module('achillesApp')
  .controller('MainCtrl', function ($scope) {
 //     $http.get(API_ENDPOINT).success(function(data) {
    //    $scope.phones = data;
    //  });
    $scope.testingServers = testingServers.GetTestingServerResponse.TestingServer.map(function(item) { 
        return { value: item["@name"],
                 current: item["@isCurrent"]};
    });
  });
