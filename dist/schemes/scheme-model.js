"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addStep = exports.remove = exports.update = exports.add = exports.findSteps = exports.findById = exports.find = void 0;

var _dbConfig = _interopRequireDefault(require("../data/dbConfig"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const find = () => {
  return _dbConfig.default
    .select()
    .from("schemes")
    .then(schemes => schemes);
};

exports.find = find;

const findById = id => {
  return _dbConfig.default
    .select()
    .from("schemes")
    .where("id", id)
    .then(schemes => schemes);
};

exports.findById = findById;

const findSteps = id => {
  return _dbConfig.default
    .select()
    .from("schemes")
    .innerJoin("steps", "schemes.id", "steps.scheme_id")
    .where("schemes.id", id)
    .then(schemes => schemes);
};

exports.findSteps = findSteps;

const add = scheme => {
  return _dbConfig.default
    .insert(scheme)
    .into("schemes")
    .then(row => row);
};

exports.add = add;

const update = (id, changes) => {
  return (0, _dbConfig.default)("schemes")
    .where("id", id)
    .update(changes)
    .then(row => row);
};

exports.update = update;

const remove = id => {
  return (0, _dbConfig.default)("schemes")
    .where("id", id)
    .del()
    .then(row => row);
};

exports.remove = remove;

const addStep = (scheme_id, step) => {
  return _dbConfig.default
    .insert(step)
    .into("steps")
    .then(row => row);
};

exports.addStep = addStep;
