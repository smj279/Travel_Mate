'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('travel_packages', [
      {
        package_id: 101,
        name: "3 Days Tour in Bandarban",
        price: 5000,
        location_id: 11,
        duration: "Three Days",
        guide_id: 1
      },
      {
        package_id: 102,
        name: "2 Days Cox's Bazar Beach Tour",
        price: 9000,
        location_id: 12,
        duration: "Two Days",
        guide_id: 2
      },
      {
        package_id: 103,
        name: "4 Days Adventure in Sundarbans",
        price: 15000,
        location_id: 13,
        duration: "Four Days",
        guide_id: 3
      },
      {
        package_id: 104,
        name: "5 Days Sylhet Tea Garden & Waterfall Tour",
        price: 7000,
        location_id: 14,
        duration: "Five Days",
        guide_id: 4
      },
      {
        package_id: 105,
        name: "3 Days Saint Martin's Island Beach Getaway",
        price: 10000,
        location_id: 15,
        duration: "Three Days",
        guide_id: 5
      },
      {
        package_id: 106,
        name: "2 Days Rangamati Lake & Tribal Culture Tour",
        price: 4000,
        location_id: 16,
        duration: "Two Days",
        guide_id: 6
      },
      {
        package_id: 107,
        name: "3 Days Kuakata Sunrise & Sunset Tour",
        price: 5500,
        location_id: 17,
        duration: "Three Days",
        guide_id: 7
      },
      {
        package_id: 108,
        name: "4 Days Historical Tour in Paharpur & Mahasthangarh",
        price: 6500,
        location_id: 18,
        duration: "Four Days",
        guide_id: 8
      },
      {
        package_id: 109,
        name: "3 Days Srimangal Rainforest & Wildlife Safari",
        price: 7000,
        location_id: 19,
        duration: "Three Days",
        guide_id: 9
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tours', null, {});
  }
};
