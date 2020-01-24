const express = require("express");
const { getTasks, getTaskById, addTask } = require("../helpers/tasks");

const router = express.Router();

router.get("/", (req, res) => {
  getTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: `Unable to retrieve tasks at this moment` });
    });
});

router.get("/:id", (req, res) => {
  getTaskById(req.params.id)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: `Unable to retrieve the task at this moment`
      });
    });
});

router.post("/", (req, res) => {
  addTask(req.body)
    .then(newTask => {
      res.status(200).json(newTask);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: `Unable to add new task at this moment`
      });
    });
});

module.exports = router;
