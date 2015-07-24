'use strict';

angular.module('ratatoskrApp')
  .controller('CustomerCtrl', function($scope, CustomerClientForm, CustomerClientREST) {

    $scope.CustomerVM = {};
    $scope.CustomerVM.output = {};
    $scope.CustomerVM.object = {};
    $scope.CustomerVM.fields = CustomerClientForm.fields();
    $scope.CustomerVM.submit = customerSubmit;

    function customerSubmit() {
      var inputObject = $scope.CustomerVM.object;
      CustomerClientREST.save({
        firstName: inputObject.first,
        lastName: inputObject.last
      }, function() {
        $scope.getCustomers();
      });
    }

    $scope.removeCustomer = function removeCustomer(customer) {
      var id = customer.id;
      CustomerClientREST.delete({'id': id},
        function() {
          $scope.getCustomers();
        });
    }

    $scope.getCustomers = function getCustomers() {
      CustomerClientREST.query(function(spring_rest_promise) {
        spring_rest_promise.then(function(processedResponse) {
          $scope.CustomerVM.output = processedResponse.data._embeddedItems;
        })
      });
    };

    $scope.getCustomers();

    //CustomerClientREST.get({id:1},function(data) {
    //  $scope.customers = data._embeddedItems;
    //});

  });
