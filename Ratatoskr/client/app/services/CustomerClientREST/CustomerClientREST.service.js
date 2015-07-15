'use strict';

angular.module('ratatoskrApp')
  .service('CustomerClientREST', function ($resource) {


    return $resource("http://localhost:9001/customers", {}, {});

  });
