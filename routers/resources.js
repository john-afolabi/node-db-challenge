const express = require("express");
const {
  getResources,
  getResourceById,
  addResource
} = require("../helpers/resources");

const router = express.Router();

router.get("/", (req, res) => {
  getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: `Unable to retrieve resources at this moment` });
    });
});

router.get("/:id", (req, res) => {
  getResourceById(req.params.id)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: `Unable to retrieve the resource at this moment`
      });
    });
});

router.post("/", (req, res) => {
  addResource(req.body)
    .then(newresource => {
      res.status(200).json(newresource);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: `Unable to add new resource at this moment`
      });
    });
});

module.exports = router;
