"use strict";
module.exports = (sequelize, DataTypes) => {
  const extended_clip = sequelize.define(
    "extended_clip",
    {
      name: DataTypes.STRING,
      perk: DataTypes.STRING,
      rarity: DataTypes.STRING,
      ammo_type: DataTypes.INTEGER
    },
    {}
  );
  extended_clip.associate = function(models) {
    // associations can be defined here
  };
  return extended_clip;
};
