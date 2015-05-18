'use strict';

describe('Service: CalculatorClientREST', function () {

  // load the service's module
  beforeEach(module('ratatoskrApp'));

  // instantiate service
  var CalculatorClientREST;
  beforeEach(inject(function (_CalculatorClientREST_) {
    CalculatorClientREST = _CalculatorClientREST_;
  }));

  it('should do something', function () {
    expect(!!CalculatorClientREST).toBe(true);
  });

});
