const db = require("../data/db-config");

function getResources() {
  return db("resources");
}

function getResourceById(id) {
  return db("resources")
    .where({ id })
    .first();
}

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then(([id]) => getResourceById(id));
}

module.exports = {
  getResources,
  getResourceById,
  addResource
};
