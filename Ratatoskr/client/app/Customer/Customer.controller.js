'use strict';

angular.module('ratatoskrApp')
  .controller('CustomerCtrl', function ($scope, CustomerClientForm, CustomerClientREST, $resource) {
    $scope.message = 'Hello';


    $scope.customers = CustomerClientREST.query();


  });
