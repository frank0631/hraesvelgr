'use strict';
/**
 * @ngdoc function
 * @name ratastoskrApp.controller:EchoCtrl
 * @description
 * # EchoCtrl
 * Controller of the ratastoskrApp
 */
angular.module( 'ratastoskrApp' ).controller( 'EchoCtrl', function ( $scope, EchoClientForm, EchoClientThrift, EchoClientREST ) {
	function echoThrift() {
		var inputString = $scope.EchoThriftVM.object.input;
		EchoClientThrift.echo( inputString ).then( function ( outputString ) {
			$scope.EchoThriftVM.output = outputString;
		} );
	}
	$scope.EchoThriftVM = new EchoClientForm();
	$scope.EchoThriftVM.submit = echoThrift;

	function echoREST() {
		var inputString = $scope.EchoRESTVM.object;
		EchoClientREST.echo( inputString, function ( outputString ) {
			$scope.EchoRESTVM.output = outputString.output;
		} );
	}
	$scope.EchoRESTVM = new EchoClientForm();
	$scope.EchoRESTVM.submit = echoREST;
} );
