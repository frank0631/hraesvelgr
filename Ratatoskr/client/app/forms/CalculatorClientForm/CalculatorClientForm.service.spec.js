'use strict';

describe('Service: CalculatorClientForm', function () {

  // load the service's module
  beforeEach(module('ratatoskrApp'));

  // instantiate service
  var CalculatorClientForm;
  beforeEach(inject(function (_CalculatorClientForm_) {
    CalculatorClientForm = _CalculatorClientForm_;
  }));

  it('should do something', function () {
    expect(!!CalculatorClientForm).toBe(true);
  });

});
