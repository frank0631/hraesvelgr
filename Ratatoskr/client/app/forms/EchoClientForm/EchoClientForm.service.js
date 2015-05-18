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

    return {
      fields: function () {
        return echoFields;
      }
    };
  });
