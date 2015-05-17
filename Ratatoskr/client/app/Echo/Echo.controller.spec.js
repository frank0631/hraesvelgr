'use strict';

describe('Controller: EchoCtrl', function () {

  // load the controller's module
  beforeEach(module('ratatoskrApp'));

  var EchoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EchoCtrl = $controller('EchoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
