'use strict';
/**
 * @ngdoc function
 * @name ratastoskrApp.controller:CustomerCtrl
 * @description
 * # CustomerCtrl
 * Controller of the ratastoskrApp
 */
angular.module( 'ratastoskrApp' ).controller( 'CustomerCtrl', function ( $scope, CustomerClientForm, CustomerClientREST ) {
	function customerSubmit() {
		var inputObject = $scope.CustomerVM.object;
		CustomerClientREST.save( {
			firstName: inputObject.first,
			lastName: inputObject.last
		}, function () {
			$scope.getCustomers();
		} );
	}
	$scope.CustomerVM = new CustomerClientForm();
	$scope.CustomerVM.submit = customerSubmit;
	$scope.removeCustomer = function removeCustomer( customer ) {
		var id = customer.id;
		CustomerClientREST.delete( {
			'id': id
		}, function () {
			$scope.getCustomers();
		} );
	};
	$scope.getCustomers = function getCustomers() {
		CustomerClientREST.query( function ( spring_rest_promise ) {
			spring_rest_promise.then( function ( processedResponse ) {
				$scope.CustomerVM.output = processedResponse.data._embeddedItems;
			} );
		} );
	};
	$scope.getCustomers();
} );
