const express = require("express");
const {
  getProjects,
  getProjectById,
  addProject
} = require("../helpers/projects");

const router = express.Router();

router.get("/", (req, res) => {
  getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: `Unable to retrieve projects at this moment` });
    });
});

router.get("/:id", (req, res) => {
  getProjectById(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: `Unable to retrieve the project at this moment`
      });
    });
});

router.post("/", (req, res) => {
  addProject(req.body)
    .then(newProject => {
      res.status(200).json(newProject);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: `Unable to add new project at this moment`
      });
    });
});

module.exports = router;
