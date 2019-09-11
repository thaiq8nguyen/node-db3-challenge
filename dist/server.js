"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _schemeRouter = _interopRequireDefault(require("./schemes/scheme-router"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const server = (0, _express.default)();
server.use(_express.default.json());
server.use("/api/schemes", _schemeRouter.default);
var _default = server;
exports.default = _default;
