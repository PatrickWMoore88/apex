"use strict";
module.exports = (sequelize, DataTypes) => {
  const stock = sequelize.define(
    "stock",
    {
      name: DataTypes.STRING,
      sway_reduction: DataTypes.STRING,
      rarity: DataTypes.STRING
    },
    {}
  );
  stock.associate = function(models) {
    // associations can be defined here
  };
  return stock;
};
