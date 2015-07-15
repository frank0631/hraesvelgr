'use strict';

angular.module('ratatoskrApp')
  .factory('CalculatorClientForm', function () {

    var calculatorFields = [
      {
        key: 'num1',
        type: 'input',
        templateOptions: {
          label: 'num1',
          placeholder: '5',
          required: true
        }
      },
      {
        key: 'num2',
        type: 'input',
        templateOptions: {
          label: 'num2',
          placeholder: '3',
          required: true
        }
      },
      {
        key: 'op',
        type: 'select',
        templateOptions: {
          label: 'Operation',
          valueProp: 'name',
          required: true,
          options: [
            {name: 'ADD'},
            {name: 'SUBTRACT'}
          ]
        }
      }
    ];

    return {
      fields: function () {
        return calculatorFields;
      }
    };
  });
