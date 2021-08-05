'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.myAssociation = this.belongsToMany(models.society, {
        through: 'society_has_user',
        otherKey: 'societyId'
      });
    }
  };
  User.init({
    firstName: {
      type: DataTypes.STRING,
      require: true
    },
    lastName: {
      type: DataTypes.STRING,
      require: true
    },
    email: {
      type: DataTypes.STRING,
      require: true
    },
  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};