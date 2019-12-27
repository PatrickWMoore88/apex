'use strict';
module.exports = (sequelize, DataTypes) => {
  const passive = sequelize.define('passive', {
    name: DataTypes.STRING,
    cool_down: DataTypes.STRING,
    duration: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  passive.associate = function(models) {
    // associations can be defined here
  };
  return passive;
};