'use strict';
module.exports = (sequelize, DataTypes) => {
  const ultimate = sequelize.define('ultimate', {
    name: DataTypes.STRING,
    cool_down: DataTypes.STRING,
    damage: DataTypes.STRING,
    duration: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  ultimate.associate = function(models) {
    // associations can be defined here
  };
  return ultimate;
};