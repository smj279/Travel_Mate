'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('guides', [
      {
        guide_id: 101,
        name: "Ahmed Khan",
        phone: "01712345678"
      },
      {
        guide_id: 102,
        name: "Moshiur Rahman",
        phone: "01723456789"
      },
      {
        guide_id: 103,
        name: "Rohit Das",
        phone: "01734567890"
      },
      {
        guide_id: 104,
        name: "Shamsul Alam",
        phone: "01745678901"
      },
      {
        guide_id: 105,
        name: "Sabbir Ahmed",
        phone: "01756789012"
      },
      {
        guide_id: 106,
        name: "Nusrat Ali",
        phone: "01767890123"
      },
      {
        guide_id: 107,
        name: "Sunny Hossain",
        phone: "01778901234"
      },
      {
        guide_id: 108,
        name: "Sharmin Sultana",
        phone: "01789012345"
      },
      {
        guide_id: 109,
        name: "Rifat Islam",
        phone: "01790123456"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Guides', null, {});
  }
};
