"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      password: DataTypes.TEXT,
      screen_name: DataTypes.STRING,
      platform: DataTypes.STRING,
      display_name: DataTypes.STRING,
      googleid: DataTypes.TEXT
    },
    {}
  );
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
