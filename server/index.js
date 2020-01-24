const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const ProjectsRouter = require("../routers/projects");
const TasksRouter = require("../routers/tasks");
const ResourcesRouter = require("../routers/resources");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/projects", ProjectsRouter);
server.use("/api/tasks", TasksRouter);
server.use("/api/resources", ResourcesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: `This API is working correctly` });
});

module.exports = server;
