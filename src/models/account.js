const Sequelize = require("../config/Sequelize");
const { DataTypes } = require("sequelize");

const account = Sequelize.define(
  "account",
  {
    id_account: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    permission: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    tableName: "account", // tên bảng trong database
    timestamps: false, // nếu không sử dụng trường createdAt và updatedAt
  }
);

export default account;
