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


    //return {
    //  query: function(callback) {
    //    //SpringDataRestAdapter.processWithPromise($http.get("http://localhost:9001/customers")).then(callback);
    //
    //    var deferred = $http.get(HATEOAS_URL);
    //    return SpringDataRestAdapter.process(deferred).then(callback);
    //    }
    //  };
    //
    //  //SpringDataRestAdapter.processWithPromise($http.get('categories')).then(function(processedResponse) {
    //  //  $scope.categories = processedResponse._embeddedItems;
    //  //};

  });
