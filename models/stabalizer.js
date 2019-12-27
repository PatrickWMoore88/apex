'use strict';
module.exports = (sequelize, DataTypes) => {
  const stabalizer = sequelize.define('stabalizer', {
    name: DataTypes.STRING,
    perk: DataTypes.STRING,
    rarity: DataTypes.STRING
  }, {});
  stabalizer.associate = function(models) {
    // associations can be defined here
  };
  return stabalizer;
};