'use strict';
/**
 * @ngdoc service
 * @name ratastoskrApp.EchoClientThrift
 * @description
 * # EchoClientThrift
 * Service in the ratastoskrApp.
 */
angular.module( 'ratastoskrApp' ).service( 'EchoClientThrift', function ( $window, $q, ENV ) {
	var endpoint = '/thrift/echo/echo/';
	var HugginAddress = ENV.HugginAddress+endpoint;
	var EchoClient = ( function () {
		var transport = new $window.Thrift.Transport( HugginAddress );
		var protocol = new $window.Thrift.Protocol( transport );
		var client = new $window.TEchoServiceClient( protocol );
		return {
			echo: function ( message ) {
				try {
					return client.echo( message );
				} catch( error ) {
					console.log( error );
				}
			}
		};
	}() );
	//Wrap in a promise
	return {
		echo: function ( message ) {
			var defered = $q.defer();
			var result = EchoClient.echo( message );
			defered.resolve( result );
			return defered.promise;
		}
	};
} );
