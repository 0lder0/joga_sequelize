'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('authors', [{
        name: 'Ashley Galvin'
      }]),
      queryInterface.bulkInsert('authors', [{
        name: 'Patrick Beach'
      }]),
      queryInterface.bulkInsert('authors', [{
        name: 'MacKenzie Miller'
      }]),
    ])
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('authors', null, {});
  }
};