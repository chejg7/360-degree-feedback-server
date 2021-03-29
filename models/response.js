'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Response.init({
    projectTitle: DataTypes.STRING,
    projectID: DataTypes.INTEGER,
    surveyTitle: DataTypes.STRING,
    evaluatedName: DataTypes.STRING,
    evaluatedEmail: DataTypes.STRING,
    evaluatorName: DataTypes.STRING,
    evaluatorEmail: DataTypes.STRING,
    relationToEvaluated: DataTypes.STRING,
    response: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Response',
  });
  return Response;
};