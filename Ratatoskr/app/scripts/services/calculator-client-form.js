'use strict';
/**
 * @ngdoc service
 * @name ratastoskrApp.CalculatorClientForm
 * @description
 * # CalculatorClientForm
 * Factory in the ratastoskrApp.
 */
angular.module( 'ratastoskrApp' ).factory( 'CalculatorClientForm', function () {
	var calculatorFields = [ {
		key: 'num1',
		type: 'input',
		templateOptions: {
			label: 'num1',
			placeholder: '5',
			required: true
		}
	}, {
		key: 'num2',
		type: 'input',
		templateOptions: {
			label: 'num2',
			placeholder: '3',
			required: true
		}
	}, {
		key: 'op',
		type: 'select',
		templateOptions: {
			label: 'Operation',
			valueProp: 'name',
			required: true,
			options: [ {
				name: 'ADD'
			}, {
				name: 'SUBTRACT'
			} ]
		}
	} ];
	var CalculatorClientForm = function () {
		this.output = {};
		this.object = {};
		this.fields = calculatorFields;
		this.submit = null;
	};
	return function () {
		return new CalculatorClientForm();
	};
} );
