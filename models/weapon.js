"use strict";
module.exports = (sequelize, DataTypes) => {
  const weapon = sequelize.define(
    "weapon",
    {
      name: DataTypes.STRING,
      dps: DataTypes.STRING,
      type: DataTypes.STRING,
      rarity: DataTypes.STRING,
      ammo_type: DataTypes.INTEGER,
      imageURL: DataTypes.TEXT
      // stabalizer: DataTypes.INTEGER,
      // extended_clip: DataTypes.INTEGER,
      // stock: DataTypes.INTEGER,
      // sight: DataTypes.INTEGER
    },
    {}
  );
  weapon.associate = function(models) {
    // associations can be defined here
  };
  return weapon;
};
