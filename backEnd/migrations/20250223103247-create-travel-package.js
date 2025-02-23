'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('travel_packages', {
      package_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      location_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'locations',  
          key: 'location_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      duration: {
        type: Sequelize.STRING,
      },
      guide_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'guides',  
          key: 'guide_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('travel_packages');
  }
};
