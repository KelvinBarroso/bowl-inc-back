const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database");

class UserInfo extends Model {}

UserInfo.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    comment: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "userinfo",
  }
);

module.exports = UserInfo;
