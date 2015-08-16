'use strict';

var _ = require('lodash');

// Get list of huginns
exports.index = function(req, res) {
  var port = process.env.HUGG_PORT_9000_TCP_PORT || '9001';
  var address = process.env.HUGG_PORT_9000_TCP_ADDR || 'localhost';
  var url = address+":"+port;
  //console.log(JSON.stringify({"port": port, "address":address}));
  res.json({"port": port, "address": address, "url": url});
};
