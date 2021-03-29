'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Responses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectTitle: {
        type: Sequelize.STRING
      },
      projectID: {
        type: Sequelize.INTEGER
      },
      surveyTitle: {
        type: Sequelize.STRING
      },
      evaluatedName: {
        type: Sequelize.STRING
      },
      evaluatedEmail: {
        type: Sequelize.STRING
      },
      evaluatorName: {
        type: Sequelize.STRING
      },
      evaluatorEmail: {
        type: Sequelize.STRING
      },
      relationToEvaluated: {
        type: Sequelize.STRING
      },
      response: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Responses');
  }
};