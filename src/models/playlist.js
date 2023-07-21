const Sequelize = require("../config/Sequelize");
const { DataTypes } = require("sequelize");

const playlist = Sequelize.define(
  "playlist",
  {
    id_playlist: {
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
    sort_title: DataTypes.STRING,
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnail_m: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    tableName: "playlist", // tên bảng trong database
    timestamps: false, // nếu không sử dụng trường createdAt và updatedAt
  }
);
export default playlist;
