'use strict';

describe('Service: CalculatorClientThrift', function () {

  // load the service's module
  beforeEach(module('ratastoskrApp'));

  // instantiate service
  var CalculatorClientThrift;
  beforeEach(inject(function (_CalculatorClientThrift_) {
    CalculatorClientThrift = _CalculatorClientThrift_;
  }));

  it('should do something', function () {
    expect(!!CalculatorClientThrift).toBe(true);
  });

});
