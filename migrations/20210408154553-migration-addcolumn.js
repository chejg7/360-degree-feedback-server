'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      return [
        queryInterface.addColumn('Responses', 'evaluatedPosition', {
          type: Sequelize.DataTypes.STRING
        }),
        queryInterface.addColumn('Responses', 'evaluatedDivision', {
          type: Sequelize.DataTypes.STRING
        }),
        queryInterface.addColumn('Responses', 'evaluatedDepartment', {
          type: Sequelize.DataTypes.STRING
        }),
        queryInterface.addColumn('Responses', 'evaluatedTeam', {
          type: Sequelize.DataTypes.STRING
        }),
        queryInterface.addColumn('Responses', 'evaluatorPosition', {
          type: Sequelize.DataTypes.STRING
        }),
        queryInterface.addColumn('Responses', 'evaluatorDivision', {
          type: Sequelize.DataTypes.STRING
        }),
        queryInterface.addColumn('Responses', 'evaluatorDepartment', {
          type: Sequelize.DataTypes.STRING
        }),
        queryInterface.addColumn('Responses', 'evaluatorTeam', {
          type: Sequelize.DataTypes.STRING
        }),
        queryInterface.addColumn('Responses', 'evaluatorMobile', {
          type: Sequelize.DataTypes.STRING
        })
      ];
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
      return [
        queryInterface.removeColumn('Responses', 'evaluatedPosition'),
        queryInterface.removeColumn('Responses', 'evaluatedDivision'),
        queryInterface.removeColumn('Responses', 'evaluatedDepartment'),
        queryInterface.removeColumn('Responses', 'evaluatedTeam'),
        queryInterface.removeColumn('Responses', 'evaluatorPosition'),
        queryInterface.removeColumn('Responses', 'evaluatorDivision'),
        queryInterface.removeColumn('Responses', 'evaluatorDepartment'),
        queryInterface.removeColumn('Responses', 'evaluatorTeam'),
        queryInterface.removeColumn('Responses', 'evaluatorMobile')
      ];
    }
};
