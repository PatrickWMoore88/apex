'use strict';
module.exports = (sequelize, DataTypes) => {
  const tactical = sequelize.define('tactical', {
    name: DataTypes.STRING,
    cool_down: DataTypes.STRING,
    damage: DataTypes.STRING,
    duration: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  tactical.associate = function(models) {
    // associations can be defined here
  };
  return tactical;
};