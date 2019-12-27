'use strict';
module.exports = (sequelize, DataTypes) => {
  const helment = sequelize.define('helment', {
    name: DataTypes.STRING,
    perk: DataTypes.STRING,
    rarity: DataTypes.STRING,
    health: DataTypes.INTEGER
  }, {});
  helment.associate = function(models) {
    // associations can be defined here
  };
  return helment;
};