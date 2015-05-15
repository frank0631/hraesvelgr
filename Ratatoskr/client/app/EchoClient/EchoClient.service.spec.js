'use strict';

describe('Service: EchoClient', function () {

  // load the service's module
  beforeEach(module('ratatoskrApp'));

  // instantiate service
  var EchoClient;
  beforeEach(inject(function (_EchoClient_) {
    EchoClient = _EchoClient_;
  }));

  it('should do something', function () {
    expect(!!EchoClient).toBe(true);
  });

});
