'use strict';

angular.module('ratatoskrApp')
  .factory('CustomerClientForm', function () {

    var customerFields = [
      {
        key: 'first',
        type: 'input',
        templateOptions: {
          label: 'First',
          placeholder: 'John',
          required: true
        }
      },
      {
        key: 'last',
        type: 'input',
        templateOptions: {
          label: 'Last',
          placeholder: 'Smith',
          required: true
        }
      }
    ];

    return {
      fields: function () {
        return customerFields;
      }
    };
  });
