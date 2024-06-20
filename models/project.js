"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.belongsTo(models.Employee);
    }
  }
  Project.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      releaseTarget: DataTypes.DATE,
      status: DataTypes.ENUM(
        "planned",
        "in-progress",
        "completed",
        "cancelled"
      ),
    },
    {
      sequelize,
      modelName: "Project",
    }
  );
  return Project;
};
