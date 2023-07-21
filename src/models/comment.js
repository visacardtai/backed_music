const Sequelize = require("../config/Sequelize");
const { DataTypes } = require("sequelize");

const comment = Sequelize.define(
  "comment",
  {
    id_comment: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    tableName: "comment", // tên bảng trong database
    timestamps: false, // nếu không sử dụng trường createdAt và updatedAt
  }
);
export default comment;
