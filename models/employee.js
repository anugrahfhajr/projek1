"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.hasMany(models.Project);
    }
  }
  Employee.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      jobPosition: DataTypes.STRING,
      jobLevel: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      salary: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Employee",
    }
  );
  return Employee;
};
