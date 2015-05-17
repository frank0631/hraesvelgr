'use strict';

angular.module('ratatoskrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Echo', {
        url: '/Echo',
        templateUrl: 'app/Echo/Echo.html',
        controller: 'EchoCtrl'
      });
  });