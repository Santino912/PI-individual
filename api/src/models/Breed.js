const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Breeds", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lifeSpan: {
      type: DataTypes.STRING,
    },
    breedFor: {
      type: DataTypes.STRING,
    },
    breedGroup: {
      type: DataTypes.STRING,
    },
  }),
    {
      timestamps: false,
    };
};
