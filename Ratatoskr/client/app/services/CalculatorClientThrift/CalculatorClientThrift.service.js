'use strict';

angular.module('ratatoskrApp')
  .service('CalculatorClientThrift', function ($window, $q) {

    var CalculatorClient = (function () {
      var transport = new Thrift.Transport("http://localhost:9001/calculator/");
      var protocol = new Thrift.Protocol(transport);
      var client = new TCalculatorServiceClient(protocol);

      return {
        calculate: function (num1, num2, op) {
          try {
            var opCast = TOperation[op];
            return client.calculate(num1, num2, opCast);
          } catch (error) {
            console.log(error);
          }
        }
      };
    }());

    return {
      calculate: function (num1, num2, op) {
        var defered = $q.defer();
        var result = CalculatorClient.calculate(num1, num2, op);
        defered.resolve(result);
        return defered.promise;
      }
    };

  });
