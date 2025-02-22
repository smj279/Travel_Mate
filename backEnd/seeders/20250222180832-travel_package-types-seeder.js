'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tours', [
      {
        name: "3 Days Tour in Bandarban",
        price: 5000,
        location: "Bandarban",
        duration: "Three Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "2 Days Luxarious Cox's Bazar Beach Tour",
        price: 9000,
        location: "Cox's Bazar",
        duration: "Two Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "4 Days Adventure in Sundarbans",
        price: 15000,
        location: "Sundarbans",
        duration: "Four Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "5 Days Sylhet Tea Garden & Waterfall Tour",
        price: 7000,
        location: "Sylhet",
        duration: "Five Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "3 Days Saint Martin's Island Beach Getaway",
        price: 10000,
        location: "Saint Martin's Island",
        duration: "Three Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "2 Days Rangamati Lake & Tribal Culture Tour",
        price: 4000,
        location: "Rangamati",
        duration: "Two Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "3 Days Kuakata Sunrise & Sunset Tour",
        price: 5500,
        location: "Kuakata",
        duration: "Three Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "4 Days Historical Tour in Paharpur & Mahasthangarh",
        price: 6500,
        location: "Paharpur & Mahasthangarh",
        duration: "Four Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "3 Days Srimangal Rainforest & Wildlife Safari",
        price: 8000,
        location: "Srimangal",
        duration: "Three Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tours', null, {});
  }
};
