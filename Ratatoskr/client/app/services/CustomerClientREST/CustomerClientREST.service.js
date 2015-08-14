'use strict';

angular.module('ratatoskrApp')
  .service('CustomerClientREST', function ($resource, SpringDataRestInterceptor, HATEOAS_HUGINN_URL) {

      var protocall = "http://";
      var endpoint = "/data/customers/:id";
      var customers_url = protocall+HATEOAS_HUGINN_URL.url+endpoint;
      
      return $resource(customers_url, {id: "@id"}, {
        'get':    {method:'GET'},
        'save':   {method:'POST'},
        'query':  {
          isArray:false,
          interceptor:SpringDataRestInterceptor},
        'remove': {method:'DELETE'},
        'delete': {method:'DELETE'}
      });

  });
