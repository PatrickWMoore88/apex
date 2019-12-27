'use strict';
module.exports = (sequelize, DataTypes) => {
  const armor = sequelize.define('armor', {
    name: DataTypes.STRING,
    perk: DataTypes.STRING,
    rarity: DataTypes.STRING,
    health: DataTypes.INTEGER
  }, {});
  armor.associate = function(models) {
    // associations can be defined here
  };
  return armor;
};