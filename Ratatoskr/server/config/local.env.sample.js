'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

var HUGG_PORT = process.env.HUGG_PORT_9000_TCP_PORT || 'localhost';
var HUGG_ADDR = process.env.HUGG_PORT_9000_TCP_ADDR || '9000';

module.exports = {

  //Docker Loaded environment variables for Huginn
  HUGG_PORT: HUGG_PORT,
  HUGG_ADDR: HUGG_ADDR,

  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'ratatoskr-secret',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};

