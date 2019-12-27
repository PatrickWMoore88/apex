'use strict';
module.exports = (sequelize, DataTypes) => {
  const sight = sequelize.define('sight', {
    name: DataTypes.STRING,
    perk: DataTypes.STRING,
    rarity: DataTypes.STRING,
    range: DataTypes.STRING,
    zoom: DataTypes.STRING,
    variable_zoom: DataTypes.BOOLEAN
  }, {});
  sight.associate = function(models) {
    // associations can be defined here
  };
  return sight;
};