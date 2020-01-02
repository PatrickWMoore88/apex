"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ammo_types",
      [
        {
          name: "Light Rounds",
          stack_size: 80,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Heavy Rounds",
          stack_size: 80,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Energy Ammo",
          stack_size: 16,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Shotgun Shells",
          stack_size: 80,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ammo_types", null, {});
  }
};
