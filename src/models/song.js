const Sequelize = require("../config/Sequelize");
const { DataTypes } = require("sequelize");

const song = Sequelize.define(
  "song",
  {
    id_song: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnail_m: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    tableName: "song", // tên bảng trong database
    timestamps: false, // nếu không sử dụng trường createdAt và updatedAt
  }
);
export default song;
