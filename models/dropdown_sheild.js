'use strict';
module.exports = (sequelize, DataTypes) => {
  const dropdown_sheild = sequelize.define('dropdown_sheild', {
    name: DataTypes.STRING,
    perk: DataTypes.STRING,
    rarity: DataTypes.STRING,
    health: DataTypes.INTEGER
  }, {});
  dropdown_sheild.associate = function(models) {
    // associations can be defined here
  };
  return dropdown_sheild;
};