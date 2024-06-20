const { Employee, Project } = require("../models");
const project = require("../models/project");

class ProjectController {
  static create(req, res) {
    const { name, description, releaseTarget, status, Employeeid } = req.body;

    Project.create({
      name,
      description,
      releaseTarget,
      status,
      Employeeid,
    })
      .then(project => {
        res.redirect("/");
      })
      .catch(error => {
        res.status(500).send("Internal Server Error");
      });
  }

  static projectList(req, res) {}
}

module.exports = ProjectController;
