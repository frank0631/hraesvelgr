'use strict';

angular.module('ratatoskrApp')
  .service('CalculatorClientREST', function ($resource) {

    return $resource("http://localhost:9001/api/calculator",{},{
          calc: {
            method: 'POST'
          }
          });

  });
