'use strict';

angular.module('ratatoskrApp')
  .controller('MainCtrl', function ($scope, $http, EchoClient, EchoClientREST, CalculatorClientREST) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.input = {text : "Hello World"};
	  $scope.output = {text : ""};

    //Basic Echo Form
	  $scope.echo = function() {
		  //EchoClient.echo($scope.input.text).then(function(message){
		  EchoClientREST.echo({},{input:$scope.input.text}, function(message){
			  $scope.output.text = message;
        if(!$scope.$$phase) {
            $scope.$apply();
          }
		  });
		  }


		//Calculator Formly
		$scope.Calculator = {};
		$scope.Calculator.output = {};
    $scope.Calculator.calcobj = {};
      $scope.Calculator.calcFields = [
        {
          key: 'num1',
          type: 'input',
          templateOptions: {
            label: 'num1',
            placeholder: '5',
            required: true,
          }
        },
        {
          key: 'num2',
          type: 'input',
          templateOptions: {
            label: 'num2',
            placeholder: '3',
            required: true,
          }
        },
        {
          key: 'op',
          type: 'select',
          templateOptions: {
            label: 'Operation',
            valueProp: 'name',
            required: true,
            options: [
                  {name: 'ADD'},
                  {name: 'SUBTRACT'}
                  ]
              }
          }
      ];

      $scope.Calculator.calculate = calculate;

      function onSubmit() {
        console.log('form submitted:', JSON.stringify($scope.Calculator.calc));
      }

       function calculate(){
        CalculatorClientREST.calc($scope.Calculator.calcobj, function(result){
          $scope.Calculator.output = result;
          if(!$scope.$$phase) {
              $scope.$apply();
            }
        });
        }



  });
