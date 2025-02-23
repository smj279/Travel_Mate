'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('locations', [
      {
        location_id: 11,
        name: "Bandarban",
        description: "A scenic hill district known for its breathtaking landscapes and tribal culture.",
        city: "Bandarban"
      },
      {
        location_id: 12,
        name: "Cox's Bazar",
        description: "Home to the longest unbroken sandy beach in the world.",
        city: "Cox's Bazar"
      },
      {
        location_id: 13,
        name: "Sundarbans",
        description: "The largest mangrove forest in the world and home to the Royal Bengal Tiger.",
        city: "Khulna"
      },
      {
        location_id: 14,
        name: "Sylhet",
        description: "Famous for its lush tea gardens, waterfalls, and serene landscapes.",
        city: "Sylhet"
      },
      {
        location_id: 15,
        name: "Saint Martin's Island",
        description: "A beautiful coral island with crystal-clear waters and sandy beaches.",
        city: "Saint Martin"
      },
      {
        location_id: 16,
        name: "Rangamati",
        description: "Known for its scenic Kaptai Lake and indigenous tribal culture.",
        city: "Rangamati"
      },
      {
        location_id: 17,
        name: "Kuakata",
        description: "A rare place where you can enjoy both sunrise and sunset from the same beach.",
        city: "Patuakhali"
      },
      {
        location_id: 18,
        name: "Paharpur & Mahasthangarh",
        description: "Ancient archaeological sites showcasing Buddhist and Hindu history.",
        city: "Bogra"
      },
      {
        location_id: 19,
        name: "Srimangal",
        description: "The tea capital of Bangladesh, rich in biodiversity and wildlife.",
        city: "Moulvibazar"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Locations', null, {});
  }
};
