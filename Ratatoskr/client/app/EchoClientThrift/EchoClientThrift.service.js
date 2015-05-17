'use strict';

angular.module('ratatoskrApp')
  .service('EchoClientThrift', function ($window, $q){

    var EchoClient = (function() {
      var transport = new Thrift.Transport("http://localhost:9001/echo/");
      var protocol  = new Thrift.Protocol(transport);
      var client    = new TEchoServiceClient(protocol);

      return {
        echo : function(message) {
          try {
            return client.echo(message);
          } catch(error){
            console.log(error);
          }
        }
      };
    }());

    return {
      echo: function(message) {
        var defered = $q.defer();
        var result = EchoClient.echo(message);
        defered.resolve(result);
        return defered.promise;
      }
    };

  });
