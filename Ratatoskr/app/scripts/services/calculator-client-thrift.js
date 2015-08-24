'use strict';
/**
 * @ngdoc service
 * @name ratastoskrApp.CalculatorClientThrift
 * @description
 * # CalculatorClientThrift
 * Service in the ratastoskrApp.
 */
angular.module( 'ratastoskrApp' ).service( 'CalculatorClientThrift', function ( $window, $q, ENV ) {
	var endpoint = '/thrift/calculator/';
	var HugginAddress = ENV.HugginAddress+endpoint;
	var CalculatorClient = ( function () {
		var transport = new $window.Thrift.Transport( HugginAddress );
		var protocol = new $window.Thrift.Protocol( transport );
		var client = new $window.TCalculatorServiceClient( protocol );
		return {
			calculate: function ( num1, num2, op ) {
				try {
					var opCast = $window.TOperation[ op ];
					return client.calculate( num1, num2, opCast );
				} catch( error ) {
					console.log( error );
				}
			}
		};
	}() );
	//Wrap in a promise
	return {
		calculate: function ( num1, num2, op ) {
			var defered = $q.defer();
			var result = CalculatorClient.calculate( num1, num2, op );
			defered.resolve( result );
			return defered.promise;
		}
	};
} );
