'use strict';
/**
 * @ngdoc service
 * @name ratastoskrApp.EchoClientREST
 * @description
 * # EchoClientREST
 * Service in the ratastoskrApp.
 */
angular.module( 'ratastoskrApp' ).service( 'EchoClientREST', function ( $resource, ENV ) {
	var endpoint = '/api/echo/';
	var HugginAddress = 'http://' + ENV.HUGG_ADDR + ':' + ENV.HUGG_PORT + endpoint;

	function transformToParam( obj ) {
		return $.param( obj ); // jshint ignore:line
	}
	return $resource( HugginAddress, {}, {
		echo: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			transformRequest: transformToParam
		}
	} );
} );
