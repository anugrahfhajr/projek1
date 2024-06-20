// controllers/employeeController.js
const { Employee, Project } = require("../models"); // Pastikan path ini sesuai dengan struktur proyek Anda

class EmployeeController {
  static getAllEmployees(req, res) {
    Employee.findAll()
      .then(employees => {
        res.render("employees", { employees: employees });
      })
      .catch(error => {
        console.error("Error fetching employees:", error);
        res.status(500).send("Internal Server Error");
      });
  }
  static EmployeesList(req, res) {
    Employee.findAll()
      .then(employees => {
        res.render("createProject", { employees: employees });
      })
      .catch(error => {
        console.error("Error fetching employees:", error);
        res.status(500).send("Internal Server Error");
      });
  }

  static getEmployeesWithProjects(req, res) {
    Employee.findAll({
      include: {
        model: Project,
        as: "Projects",
      },
    })
      .then(employees => {
        res.render("home.ejs", { employees });
      })
      .catch(error => {
        console.error("Error fetching employees with projects:", error);
        res.status(500).send("Error fetching employees with projects");
      });
  }
}

module.exports = EmployeeController;
