'use strict';

angular.module('ratatoskrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Calculator', {
        url: '/Calculator',
        templateUrl: 'app/Calculator/Calculator.html',
        controller: 'CalculatorCtrl'
      });
  });