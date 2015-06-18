'use strict';

angular.module('ratatoskrApp')
  .service('CustomerClientREST', function ($resource) {

    function transformToParam(obj) {
      return $.param(obj);
    }

    return $resource("http://localhost:9001/api/customer", {}, {
      calculate: {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        transformRequest: transformToParam
      }
    });

  });
