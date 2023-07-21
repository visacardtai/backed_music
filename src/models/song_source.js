const Sequelize = require("../config/Sequelize");
const { DataTypes } = require("sequelize");

const song_source = Sequelize.define(
  "song_source",
  {
    id_source: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    source_128: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    source_320: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    // Other model options go here
    tableName: "song_source", // tên bảng trong database
    timestamps: false, // nếu không sử dụng trường createdAt và updatedAt
  }
);
export default song_source;
