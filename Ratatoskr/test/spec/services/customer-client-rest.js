'use strict';

describe('Service: CustomerClientREST', function () {

  // load the service's module
  beforeEach(module('ratastoskrApp'));

  // instantiate service
  var CustomerClientREST;
  beforeEach(inject(function (_CustomerClientREST_) {
    CustomerClientREST = _CustomerClientREST_;
  }));

  it('should do something', function () {
    expect(!!CustomerClientREST).toBe(true);
  });

});
