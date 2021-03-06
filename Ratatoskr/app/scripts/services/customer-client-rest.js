'use strict';
/**
 * @ngdoc service
 * @name ratastoskrApp.CustomerClientREST
 * @description
 * # CustomerClientREST
 * Service in the ratastoskrApp.
 */
angular.module( 'ratastoskrApp' ).service( 'CustomerClientREST', function ( $resource, SpringDataRestInterceptor, ENV ) {
	var endpoint = "/data/customers/:id";
	var HugginAddress = ENV.HugginAddress+endpoint;
	return $resource( HugginAddress, {
		id: "@id"
	}, {
		'get': {
			method: 'GET'
		},
		'save': {
			method: 'POST'
		},
		'query': {
			isArray: false,
			interceptor: SpringDataRestInterceptor
		},
		'remove': {
			method: 'DELETE'
		},
		'delete': {
			method: 'DELETE'
		}
	} );
} );
