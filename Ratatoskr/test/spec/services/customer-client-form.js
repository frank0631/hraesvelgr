'use strict';

describe('Service: CustomerClientForm', function () {

  // load the service's module
  beforeEach(module('ratastoskrApp'));

  // instantiate service
  var CustomerClientForm;
  beforeEach(inject(function (_CustomerClientForm_) {
    CustomerClientForm = _CustomerClientForm_;
  }));

  it('should do something', function () {
    expect(!!CustomerClientForm).toBe(true);
  });

});
