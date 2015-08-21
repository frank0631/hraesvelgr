'use strict';
/**
 * @ngdoc function
 * @name ratastoskrApp.controller:CalculatorCtrl
 * @description
 * # CalculatorCtrl
 * Controller of the ratastoskrApp
 */
angular.module( 'ratastoskrApp' ).controller( 'CalculatorCtrl', function ( $scope, CalculatorClientForm, CalculatorClientREST, CalculatorClientThrift ) {
	function calculatorThrift() {
		var inputObject = $scope.CalculatorThriftVM.object;
		CalculatorClientThrift.calculate( inputObject.num1, inputObject.num2, inputObject.op ).then( function ( outputOutput ) {
			$scope.CalculatorThriftVM.output = outputOutput;
		} );
	}
	$scope.CalculatorThriftVM = new CalculatorClientForm();
	$scope.CalculatorThriftVM.submit = calculatorThrift;

	function calculatorREST() {
		var inputObject = $scope.CalculatorRESTVM.object;
		CalculatorClientREST.calculate( inputObject, function ( outputObject ) {
			$scope.CalculatorRESTVM.output = outputObject.result;
		} );
	}
	$scope.CalculatorRESTVM = new CalculatorClientForm();
	$scope.CalculatorRESTVM.submit = calculatorREST;
} );
