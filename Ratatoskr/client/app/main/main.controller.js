'use strict';

angular.module('ratatoskrApp')
  .controller('MainCtrl', function ($scope, $http, CalculatorClientREST) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

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
