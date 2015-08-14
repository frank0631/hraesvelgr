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
  .config(function (HATEOAS_HUGINN_URL) {
    console.log('HATEOAS_HUGINN_URL is: ' + JSON.stringify(HATEOAS_HUGINN_URL));
  })
  //// HATEOAS Interceptor
  //  .config(function (HateoasInterceptorProvider) {
  //  HateoasInterceptorProvider.transformAllResponses();
  //});

//if <body ng-app="ratatoskrApp"> is in the index, this will throw an error
deferredBootstrapper.bootstrap({
  element: document.body,
  module: 'ratatoskrApp',
  resolve: {
    HATEOAS_HUGINN_URL: ['$http', function ($http) {
      return $http.get('/api/huginn');
    }]
  }
});
