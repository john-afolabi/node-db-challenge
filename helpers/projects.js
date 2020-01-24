const db = require("../data/db-config");

function getProjects() {
  return db("projects");
}

function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(([id]) => getProjectById(id));
}

module.exports = {
  getProjects,
  getProjectById,
  addProject
};
