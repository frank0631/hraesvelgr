'use strict';

angular.module('ratatoskrApp')
  .controller('EchoCtrl', function ($scope, EchoClientForm, EchoClientThrift, EchoClientREST) {

    $scope.EchoThriftVM = {};
    $scope.EchoThriftVM.output = {};
    $scope.EchoThriftVM.object = {};
    $scope.EchoThriftVM.fields = EchoClientForm.fields();
    $scope.EchoThriftVM.submit = echoThrift;

    function echoThrift(object, output) {
      var inputString = $scope.EchoThriftVM.object.input;
      EchoClientThrift.echo(inputString).then(function (outputString) {
        $scope.EchoThriftVM.output = outputString;
      });
    }

    $scope.EchoRESTVM = {};
    $scope.EchoRESTVM.output = {};
    $scope.EchoRESTVM.object = {};
    $scope.EchoRESTVM.fields = EchoClientForm.fields();
    $scope.EchoRESTVM.submit = echoREST;

    function echoREST() {
      var inputString = $scope.EchoRESTVM.object;
      EchoClientREST.echo(inputString, function (outputString) {
        $scope.EchoRESTVM.output = outputString.output;
      });
    }

  });
