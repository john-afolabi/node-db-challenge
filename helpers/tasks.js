const db = require("../data/db-config");

function getTasks() {
  return db("tasks")
    .join("projects", "projects.id", "tasks.project_id")
    .select(
      "tasks.id",
      "tasks.step",
      "tasks.description",
      "tasks.notes",
      "projects.name as project_name",
      "projects.description as project_description"
    );
}

function getTaskById(id) {
  return db("tasks")
    .join("projects", "projects.id", "tasks.project_id")
    .select(
      "tasks.id",
      "tasks.step",
      "tasks.description",
      "tasks.notes",
      "projects.name as project_name",
      "projects.description as project_description"
    )
    .where({ "tasks.id": id })
    .first();
}

function addTask(task) {
  return db("tasks")
    .insert(task)
    .then(([id]) => getTaskById(id));
}

module.exports = {
  getTasks,
  getTaskById,
  addTask
};
