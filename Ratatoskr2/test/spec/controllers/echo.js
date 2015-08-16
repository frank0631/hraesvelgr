'use strict';

describe('Controller: EchoCtrl', function () {

  // load the controller's module
  beforeEach(module('ratastoskrApp'));

  var EchoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EchoCtrl = $controller('EchoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EchoCtrl.awesomeThings.length).toBe(3);
  });
});
