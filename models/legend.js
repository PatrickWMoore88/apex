"use strict";
module.exports = (sequelize, DataTypes) => {
  const legend = sequelize.define(
    "legend",
    {
      name: DataTypes.STRING,
      real_name: DataTypes.STRING,
      gender: DataTypes.STRING,
      age: DataTypes.INTEGER,
      role: DataTypes.STRING,
      home_world: DataTypes.STRING,
      back_story: DataTypes.TEXT,
      prim_passive: DataTypes.INTEGER,
      sec_passive: DataTypes.INTEGER,
      tactical: DataTypes.INTEGER,
      ultimate: DataTypes.INTEGER,
      imageURL: DataTypes.TEXT
    },
    {}
  );
  legend.associate = function(models) {
    // associations can be defined here
  };
  return legend;
};
