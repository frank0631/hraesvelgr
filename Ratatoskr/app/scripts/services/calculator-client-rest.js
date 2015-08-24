'use strict';
/**
 * @ngdoc service
 * @name ratastoskrApp.CalculatorClientREST
 * @description
 * # CalculatorClientREST
 * Service in the ratastoskrApp.
 */
angular.module( 'ratastoskrApp' ).service( 'CalculatorClientREST', function ( $resource, ENV ) {
	var endpoint = '/api/calculator/';
	var HugginAddress = ENV.HugginAddress+endpoint;

	function transformToParam( obj ) {
		return $.param( obj ); // jshint ignore:line
	}
	return $resource( HugginAddress, {}, {
		calculate: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			transformRequest: transformToParam
		}
	} );
} );
