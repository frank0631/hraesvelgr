'use strict';

/**
 * @ngdoc service
 * @name ratastoskrApp.CalculatorClientForm
 * @description
 * # CalculatorClientForm
 * Factory in the ratastoskrApp.
 */
angular.module('ratastoskrApp')
  .factory('CalculatorClientForm', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
