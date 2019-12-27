'use strict';
module.exports = (sequelize, DataTypes) => {
  const bag = sequelize.define('bag', {
    name: DataTypes.STRING,
    perk: DataTypes.STRING,
    rarity: DataTypes.STRING,
    slot_count: DataTypes.INTEGER
  }, {});
  bag.associate = function(models) {
    // associations can be defined here
  };
  return bag;
};