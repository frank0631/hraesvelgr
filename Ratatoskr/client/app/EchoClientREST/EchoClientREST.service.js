'use strict';

angular.module('ratatoskrApp')
  .service('EchoClientREST', function ($resource) {

    function transformToParam(obj) {
      return $.param(obj);
    }

    return $resource("http://localhost:9001/api/echo", {}, {
      echo: {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        transformRequest: transformToParam
      }
    });

  });
