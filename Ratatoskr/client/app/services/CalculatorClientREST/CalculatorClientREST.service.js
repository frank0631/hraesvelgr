'use strict';

angular.module('ratatoskrApp')
  .service('CalculatorClientREST', function ($resource) {

    function transformToParam(obj) {
      return $.param(obj);
    }

    return $resource("http://localhost:9001/api/calculator", {}, {
      calculate: {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        transformRequest: transformToParam
      }
    });

  });
