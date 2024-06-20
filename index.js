const { sequelize, Employee, Project } = require("./models");
const { QueryTypes } = require("sequelize");

const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routers");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", routes);

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("Database synced successfully.");
//     // Mulai server atau lakukan operasi lain setelah sinkronisasi berhasil
//   })
//   .catch(err => {
//     console.error("Error syncing database:", err);
//   });

app.listen(port, (req, res) => {
  console.log(`app running on port ${port}`);
});
