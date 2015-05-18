'use strict';

describe('Service: EchoClientREST', function () {

  // load the service's module
  beforeEach(module('ratatoskrApp'));

  // instantiate service
  var EchoClientREST;
  beforeEach(inject(function (_EchoClientREST_) {
    EchoClientREST = _EchoClientREST_;
  }));

  it('should do something', function () {
    expect(!!EchoClientREST).toBe(true);
  });

});
