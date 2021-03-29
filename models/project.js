'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Project.init({
    projectTitle: DataTypes.STRING,
    company: DataTypes.STRING,
    managerName: DataTypes.STRING,
    managerEmail: DataTypes.STRING,
    managerMobile: DataTypes.STRING,
    startDate: DataTypes.DATE,
    finishDate: DataTypes.DATE,
    userInfo: DataTypes.JSON,
    questions: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};