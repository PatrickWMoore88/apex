"use strict";
module.exports = (sequelize, DataTypes) => {
  const helmet = sequelize.define(
    "helmet",
    {
      name: DataTypes.STRING,
      perk: DataTypes.STRING,
      rarity: DataTypes.STRING,
      damage_reduction: DataTypes.INTEGER
    },
    {}
  );
  helmet.associate = function(models) {
    // associations can be defined here
  };
  return helmet;
};
