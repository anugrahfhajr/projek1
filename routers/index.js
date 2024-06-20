const express = require("express");
const router = express.Router();
const EmployeeController = require("../controllers/employeeController");
const ProjectController = require("../controllers/projectController");
const { Employee } = require("../models"); // Pastikan path ini sesuai dengan struktur proyek Anda

router.get("/", EmployeeController.getEmployeesWithProjects);
router.get("/employees", EmployeeController.getAllEmployees);
router.get("/projects/add", EmployeeController.EmployeesList);
router.post("/projects/add", ProjectController.create);
// app.put("/projects/:id", projectController.updateProject);
// app.delete("/projects/:id", projectController.deleteProject);

module.exports = router;
