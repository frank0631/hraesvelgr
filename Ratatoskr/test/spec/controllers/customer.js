'use strict';

describe('Controller: CustomerCtrl', function () {

  // load the controller's module
  beforeEach(module('ratastoskrApp'));

  var CustomerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomerCtrl = $controller('CustomerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CustomerCtrl.awesomeThings.length).toBe(3);
  });
});
