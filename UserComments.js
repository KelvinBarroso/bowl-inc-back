const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database");

class UserComments extends Model {}

UserComments.init(
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
    modelName: "usercomments",
  }
);

module.exports = UserComments;
