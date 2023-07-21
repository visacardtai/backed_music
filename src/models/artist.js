const Sequelize = require("../config/Sequelize");
const { DataTypes } = require("sequelize");

const artist = Sequelize.define(
  "artist",
  {
    id_artists: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    biography: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    national: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    real_name: {
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
  },
  {
    // Other model options go here
    tableName: "artist", // tên bảng trong database
    timestamps: false, // nếu không sử dụng trường createdAt và updatedAt
  }
);
export default artist;
