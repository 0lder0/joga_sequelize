'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up (queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.bulkInsert('Articles', [{
                name: 'Introduction to Ashtaanga',
                slug: 'introduction-to-ashtaanga',
                image: 'ashtanga.jpg',
                body: '<p>Ashtanga Yoga is a system of  bla bla bla bla bla...</p>',
                published: '2021-03-01 00:00:00',
                author_id: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }]),
            queryInterface.bulkInsert('Articles', [{
                name: 'Morning vinysasa flow routine',
                slug: 'morning-vinysasa-flow-routine',
                image: 'morning.jpg',
                body: '<p>Morning vynysasa flow routine bla bla bla bla bla...</p>',
                published: '2021-03-01 00:00:00',
                author_id: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }]),
            queryInterface.bulkInsert('Articles', [{
                name: 'Secrets of a yoga teacher',
                slug: 'secrets-of-a-yoga-teacher',
                image: 'yoga.teacher.jpg',
                body: '<p>Secrets of a yoga teacher bla bla bla bla bla...</p>',
                published: '2021-03-01 00:00:00',
                author_id: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }]),
        ]);
    },


    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.bulkDelete('Articles', null, {})
        ]);
    }
};