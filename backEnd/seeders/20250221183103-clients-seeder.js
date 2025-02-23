'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clients', [
      {
        username: 'rr',
        email: 'hh@gmail.com',
        password: '$2b$10$O9F6hhvmOsRZs6yaEh.uLOZOl.ZaSMDiEW23RIVruQTysTRd4Rg9.', 
        phone: 'dd',
        address: 'dd',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'rr',
        email: 'hr@gmail.com',
        password: '$2b$10$pvnSmJ5g3deSRlBfExQU7OcGtvuzW5NFyfjNaosytA9YQBRUWdGhi',
        phone: 'dd',
        address: 'dd',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'joy',
        email: 'joy@gmail.com',
        password: '$2b$10$1/YzeeW8vNdo6exwQXqc0ePLXkSF3k0BOC26e1l3KrWzm56CtMxPy',
        phone: '01827384743',
        address: 'dhaka',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'kamal',
        email: 'kamal@gmail.com',
        password: '$2b$10$gR5HbZvQzUfXRw8DbO5C/O75AiR.VtnEQdMKHuyKfyRfKwUvW5fpi',
        phone: '01728392832',
        address: 'Khulna',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
