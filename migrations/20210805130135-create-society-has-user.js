'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('society_has_users', {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      societyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('society_has_users');
  }
};