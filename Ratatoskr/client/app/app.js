'use strict';

angular.module('ratatoskrApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'formly',
  'formlyBootstrap',
  'spring-data-rest'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .config(function (HateoasInterceptorProvider) {
  HateoasInterceptorProvider.transformAllResponses();
});
