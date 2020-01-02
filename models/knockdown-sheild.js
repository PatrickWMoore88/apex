"use strict";
module.exports = (sequelize, DataTypes) => {
  const knockdown_sheild = sequelize.define(
    "knockdown_sheild",
    {
      name: DataTypes.STRING,
      perk: DataTypes.STRING,
      rarity: DataTypes.STRING,
      health: DataTypes.INTEGER
    },
    {}
  );
  knockdown_sheild.associate = function(models) {
    // associations can be defined here
  };
  return knockdown_sheild;
};
