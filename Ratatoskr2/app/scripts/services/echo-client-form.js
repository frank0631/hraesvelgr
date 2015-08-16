'use strict';
/**
 * @ngdoc service
 * @name ratastoskrApp.EchoClientForm
 * @description
 * # EchoClientForm
 * Factory in the ratastoskrApp.
 */
angular.module( 'ratastoskrApp' ).factory( 'EchoClientForm', function () {
	var echoFields = [ {
		key: 'input',
		type: 'input',
		templateOptions: {
			label: 'Input',
			placeholder: 'Hello World',
			required: true
		}
	} ];
	var EchoClientForm = function () {
		this.output = {};
		this.object = {};
		this.fields = echoFields;
		this.submit = null;
	};
	return function () {
		return new EchoClientForm();
	};
} );
