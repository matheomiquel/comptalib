'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class society_has_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  society_has_user.init({
    userId: {
      type: DataTypes.NUMBER,
      require: true,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    societyId: {
      type: DataTypes.NUMBER,
      require: true,
      references: {
        model: 'society',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'society_has_user',
    timestamps: false
  });
  return society_has_user;
};