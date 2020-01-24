const db = require("../data/db-config");

function getProjects() {
  return db("projects");
}

function getProjectAndDetailsById(id) {
  return db("projects")
    .where({ id })
    .first()
    .then(async projects => {
      const tasks = await db("tasks as t")
        .join("projects as p", "p.id", "t.project_id")
        .select("t.id", "t.description", "t.notes", "t.completed")
        .where({ "p.id": id })
        .orderBy("t.step");
      const resources = await db("resources as r")
        .join("project_resource as pr", "pr.resource_id", "r.id")
        .select("r.id", "r.name", "r.description")
        .where({ "pr.project_id": id });
      return { ...projects, tasks, resources };
    });
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(([id]) => getProjectById(id));
}

module.exports = {
  getProjects,
  getProjectAndDetailsById,
  addProject
};
