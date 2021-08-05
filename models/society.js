'use strict';
const user = require('./user')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class society extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.myAssociation = this.belongsToMany(models.user, {
        through: 'society_has_user',
        otherKey: 'userId'
      });
    }
  };
  society.init({
    name: {
      type: DataTypes.STRING,
      require: true,
      allowNull: false,
    },

  }, {
    sequelize,
    modelName: 'society',
  });
  return society;
};