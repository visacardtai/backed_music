const Sequelize = require("../config/Sequelize");
const { DataTypes } = require("sequelize");

const user = Sequelize.define(
  "user",
  {
    id_user: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    tableName: "user", // tên bảng trong database
    timestamps: false, // nếu không sử dụng trường createdAt và updatedAt
  }
);

export default user;
