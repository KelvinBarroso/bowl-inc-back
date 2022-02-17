const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database");

class UserSubscribed extends Model {}

UserSubscribed.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "usersubscribed",
  }
);

module.exports = UserSubscribed;
