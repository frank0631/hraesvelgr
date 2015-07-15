'use strict';

angular.module('ratatoskrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Customer', {
        url: '/Customer',
        templateUrl: 'app/Customer/Customer.html',
        controller: 'CustomerCtrl'
      });
  });