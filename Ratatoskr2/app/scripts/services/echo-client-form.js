'use strict';

/**
 * @ngdoc service
 * @name ratastoskrApp.EchoClientForm
 * @description
 * # EchoClientForm
 * Factory in the ratastoskrApp.
 */
angular.module('ratastoskrApp')
  .factory('EchoClientForm', function () {
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
