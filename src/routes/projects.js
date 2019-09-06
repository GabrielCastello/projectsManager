const express = require("express");
const router = express.Router();

const data = require("../data/data");
const { checkProject } = require("../middlewares/validations/projectsValidation/projectsValidation");
const { counter } = require("../middlewares/requestCounter");

/* GET home page. */
router.post("/", counter, function(req, res, next) {
  data.projects.push({ id: req.body.id, title: req.body.title, tasks: [] });
  // console.log(data.projects);
  res.send(JSON.stringify(data.projects));
});

router.get("/", counter, (req, res, next) => {
  res.send(JSON.stringify(data.projects));
});

router.put("/:id", counter, checkProject, (req, res, next) => {
  data.projects.map(project => {
    if (project.id == req.params.id) project.title = req.body.title;
    return project;
  });
  res.send(data.projects);
});

router.delete("/:id", counter, checkProject, (req, res, next) => {
  data.projects.forEach((project, i) => {
    if (project.id == req.params.id) data.projects.splice(i, 1);
  });
  res.send(data.projects);
});

router.post("/:id/task", counter, checkProject, (req, res, next) => {
  data.projects.map(project => {
    if (project.id == req.params.id) project.tasks.push(req.body.title);
    return project;
  });
  res.send(data.projects);
});

module.exports = router;
