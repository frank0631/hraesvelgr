'use strict';
/**
 * @ngdoc service
 * @name ratastoskrApp.CustomerClientForm
 * @description
 * # CustomerClientForm
 * Factory in the ratastoskrApp.
 */
angular.module( 'ratastoskrApp' ).factory( 'CustomerClientForm', function () {
	var customerFields = [ {
		key: 'first',
		type: 'input',
		templateOptions: {
			label: 'First',
			placeholder: 'John',
			required: true
		}
	}, {
		key: 'last',
		type: 'input',
		templateOptions: {
			label: 'Last',
			placeholder: 'Smith',
			required: true
		}
	} ];
	var CustomerClientForm = function () {
		this.output = {};
		this.object = {};
		this.fields = customerFields;
		this.submit = null;
	};
	return function () {
		return new CustomerClientForm();
	};
} );
