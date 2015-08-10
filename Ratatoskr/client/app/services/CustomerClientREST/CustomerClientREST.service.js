'use strict';

angular.module('ratatoskrApp')
  .service('CustomerClientREST', function ($resource, SpringDataRestInterceptor, $q) {

    var HATEOAS_URL = "http://localhost:9001/data/customers/:id";

    return $resource(HATEOAS_URL, {id: "@id"}, {
      'get':    {method:'GET'},
      'save':   {method:'POST'},
      'query':  {
        isArray:false,
        interceptor:SpringDataRestInterceptor},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'}
    });
  })
  .config(['config'],function (config) {
  console.print("Huggin",config.HUGG_PORT,config.HUGG_ADDR)
});
