'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.bulkInsert('tags', [{
            name: 'yogapractice',
          createdAt: new Date(),
          updatedAt: new Date()
        }]),
        queryInterface.bulkInsert('tags', [{
            name: 'yogainspiration',
          createdAt: new Date(),
          updatedAt: new Date()
        }]),
        queryInterface.bulkInsert('tags', [{
            name: 'wellness',
          createdAt: new Date(),
          updatedAt: new Date()
        }]),
        queryInterface.bulkInsert('tags', [{
            name: 'nature',
          createdAt: new Date(),
          updatedAt: new Date()
        }]),
        queryInterface.bulkInsert('tags', [{
            name: 'spiritual',
          createdAt: new Date(),
          updatedAt: new Date()
        }]),
        queryInterface.bulkInsert('tags', [{
            name: 'sport',
          createdAt: new Date(),
          updatedAt: new Date()
        }]),
        queryInterface.bulkInsert('tags', [{
            name: 'yogateacher',
          createdAt: new Date(),
          updatedAt: new Date()
        }])
    ])
    },

  down (queryInterface, Sequelize) {
      return Promise.all([
    queryInterface.bulkDelete('tags', null, {})
  ])
    }
};
