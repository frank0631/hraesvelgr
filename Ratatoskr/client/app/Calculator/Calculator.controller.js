'use strict';

angular.module('ratatoskrApp')
  .controller('CalculatorCtrl', function ($scope, CalculatorClientForm, CalculatorClientREST, CalculatorClientThrift) {

    $scope.CalculatorThriftVM = {};
    $scope.CalculatorThriftVM.output = {};
    $scope.CalculatorThriftVM.object = {};
    $scope.CalculatorThriftVM.fields = CalculatorClientForm.fields();
    $scope.CalculatorThriftVM.submit = calculatorThrift;

    function calculatorThrift() {
      var inputObject = $scope.CalculatorThriftVM.object;
      CalculatorClientThrift.calculate(inputObject.num1,inputObject.num2,inputObject.op).then(function(outputOutput){
        $scope.CalculatorThriftVM.output = outputOutput;
      });
    }

    $scope.CalculatorRESTVM = {};
    $scope.CalculatorRESTVM.output = {};
    $scope.CalculatorRESTVM.object = {};
    $scope.CalculatorRESTVM.fields = CalculatorClientForm.fields();
    $scope.CalculatorRESTVM.submit = calculatorREST;

    function calculatorREST() {
      var inputObject = $scope.CalculatorRESTVM.object;
      CalculatorClientREST.calculate(inputObject, function(outputObject){
        $scope.CalculatorRESTVM.output = outputObject.result;
      });
    }

  });
