'use strict';

describe('Service: EchoClientForm', function () {

  // load the service's module
  beforeEach(module('ratatoskrApp'));

  // instantiate service
  var EchoClientForm;
  beforeEach(inject(function (_EchoClientForm_) {
    EchoClientForm = _EchoClientForm_;
  }));

  it('should do something', function () {
    expect(!!EchoClientForm).toBe(true);
  });

});
