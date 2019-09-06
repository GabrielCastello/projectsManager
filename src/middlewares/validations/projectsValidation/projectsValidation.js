const data = require("../../../data/data");

class ProjectsValidation {
  static checkProject(req, res, next) {
    let sendError = true;
    (async () => {
      await data.projects.forEach(project => {
        if (project.id == req.params.id) {
          sendError = false;
          next();
        }
      });
      sendError ? res.send("Error, project doesn't exist.") : "";
    })();
  }
}

module.exports = ProjectsValidation;
