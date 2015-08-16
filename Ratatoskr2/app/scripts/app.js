'use strict';

/**
 * @ngdoc overview
 * @name ratastoskrApp
 * @description
 * # ratastoskrApp
 *
 * Main module of the application.
 */
angular
  .module('ratastoskrApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'config',
    'formly',
    'formlyBootstrap',
    'spring-data-rest'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/Calculator', {
        templateUrl: 'views/calculator.html',
        controller: 'CalculatorCtrl',
        controllerAs: 'Calculator'
      })
      .when('/Customer', {
        templateUrl: 'views/customer.html',
        controller: 'CustomerCtrl',
        controllerAs: 'Customer'
      })
      .when('/Echo', {
        templateUrl: 'views/echo.html',
        controller: 'EchoCtrl',
        controllerAs: 'Echo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
