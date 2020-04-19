'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Customers', [
      {
        name: 'Henrique',
        email: 'henrique@gmail.com',
        password: '123456',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'João',
        email: 'joao@gmail.com',
        password: '123456',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Maria',
        email: 'maria@gmail.com',
        password: '123456',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Jose',
        email: 'jose@gmail.com',
        password: '123456',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Customers', null, {})
  }
};
