'use strict';

describe('Controller: CalculatorCtrl', function () {

  // load the controller's module
  beforeEach(module('ratastoskrApp'));

  var CalculatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalculatorCtrl = $controller('CalculatorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CalculatorCtrl.awesomeThings.length).toBe(3);
  });
});
