'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class travel_package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define foreign key relationships
      travel_package.belongsTo(models.location, {
        foreignKey: 'location_id',
        as: 'location'
      });

      travel_package.belongsTo(models.guide, {
        foreignKey: 'guide_id',
        as: 'guide'
      });
    }
  }

  travel_package.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      location_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'locations', 
          key: 'location_id'
        }
      },
      duration: DataTypes.STRING,
      guide_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'guides', 
          key: 'guide_id'
        }
      }
    },
    {
      sequelize,
      modelName: 'travel_package',
      timestamps:false
    }
  );

  return travel_package;
};
