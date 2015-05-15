'use strict';

angular.module('ratatoskrApp')
  .service('EchoClientREST', function ($resource) {

    return $resource("http://localhost:9001/api/echo",{},{
      echo: {
        method: 'POST',
        headers: {'Content-Type': 'multipart/form-data' }
      }
      });

  });
