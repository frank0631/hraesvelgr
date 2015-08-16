'use strict';

/**
 * @ngdoc service
 * @name ratastoskrApp.CustomerClientForm
 * @description
 * # CustomerClientForm
 * Factory in the ratastoskrApp.
 */
angular.module('ratastoskrApp')
  .factory('CustomerClientForm', function () {
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
