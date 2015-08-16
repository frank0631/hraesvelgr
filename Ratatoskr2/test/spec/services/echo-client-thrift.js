'use strict';

describe('Service: EchoClientThrift', function () {

  // load the service's module
  beforeEach(module('ratastoskrApp'));

  // instantiate service
  var EchoClientThrift;
  beforeEach(inject(function (_EchoClientThrift_) {
    EchoClientThrift = _EchoClientThrift_;
  }));

  it('should do something', function () {
    expect(!!EchoClientThrift).toBe(true);
  });

});
