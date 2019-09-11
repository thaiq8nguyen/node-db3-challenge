import db from "../data/dbConfig";

const find = () => {
  return db
    .select()
    .from("schemes")
    .then(schemes => schemes);
};

const findById = id => {
  return db
    .select()
    .from("schemes")
    .where("id", id)
    .then(schemes => schemes);
};

const findSteps = id => {
  return db
    .select()
    .from("schemes")
    .innerJoin("steps", "schemes.id", "steps.scheme_id")
    .where("schemes.id", id)
    .then(schemes => schemes);
};

const add = scheme => {
  return db
    .insert(scheme)
    .into("schemes")
    .then(row => row);
};

const update = (id, changes) => {
  return db("schemes")
    .where("id", id)
    .update(changes)
    .then(row => row);
};

const remove = id => {
  return db("schemes")
    .where("id", id)
    .del()
    .then(row => row);
};

const addStep = (scheme_id, step) => {
  return db
    .insert(step)
    .into("steps")
    .then(row => row);
};

export { find, findById, findSteps, add, update, remove, addStep };
