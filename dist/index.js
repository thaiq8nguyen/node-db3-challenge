"use strict";

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

//const server = require('./server.js');
const PORT = process.env.PORT || 4000;

_server.default.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
