'use strict';
module.exports = (sequelize, DataTypes) => {
  const ammo_type = sequelize.define('ammo_type', {
    name: DataTypes.STRING,
    stack_size: DataTypes.INTEGER
  }, {});
  ammo_type.associate = function(models) {
    // associations can be defined here
  };
  return ammo_type;
};