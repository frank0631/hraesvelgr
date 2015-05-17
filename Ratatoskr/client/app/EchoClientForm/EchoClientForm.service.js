'use strict';

angular.module('ratatoskrApp')
  .factory('EchoClientForm', function () {

    var echoFields = [
      {
        key: 'input',
        type: 'input',
        templateOptions: {
          label: 'Input',
          placeholder: 'Hello World',
          required: true
        }
      }
    ];

    var meaningOfLife = 42;

    // Public API here
    return {
      fields: function () {
        return echoFields;
      }
    };
  });
