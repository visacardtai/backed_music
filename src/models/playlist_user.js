const Sequelize = require("../config/Sequelize");
const { DataTypes } = require("sequelize");

const playlist_user = Sequelize.define(
  "playlist_user",
  {
    id_playlist_user: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_create: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    tableName: "playlist_user", // tên bảng trong database
    timestamps: false, // nếu không sử dụng trường createdAt và updatedAt
  }
);
export default playlist_user;
