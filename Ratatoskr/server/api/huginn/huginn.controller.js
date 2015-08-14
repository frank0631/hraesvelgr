'use strict';

var _ = require('lodash');

// Get list of huginns
exports.index = function(req, res) {
  var port = process.env.HUGG_PORT;
  var address = process.env.HUGG_ADDR;
  var url = address+":"+port;
  //console.log(JSON.stringify({"port": port, "address":address}));
  res.json({"port": port, "address": address, "url": url});
};
