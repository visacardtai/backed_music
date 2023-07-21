const Sequelize = require("../config/Sequelize");
const { DataTypes } = require("sequelize");

const history_search = Sequelize.define(
  "history_search",
  {
    id_history_search: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    key_search: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    tableName: "history_search", // tên bảng trong database
    timestamps: false, // nếu không sử dụng trường createdAt và updatedAt
  }
);
export default history_search;
