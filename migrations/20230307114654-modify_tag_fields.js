'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {
return Promise.all([
      queryInterface.changeColumn('Tags', 'id', {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      }),
      queryInterface.changeColumn('Tags', 'name', {
        type: Sequelize.STRING,
        allowNull: false
      })
    ])
  },

  down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.dropTable('Tags')
    ])
  }
};
