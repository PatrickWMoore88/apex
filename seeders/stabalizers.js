"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stabalizers",
      [
        {
          name: "Barrel Stabilizer: Level 1",
          recoil_reduction: "10%",
          perk: null,
          rarity: "Common (White)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Barrel Stabilizer: Level 2",
          recoil_reduction: "15%",
          perk: null,
          rarity: "Rare (Blue)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Barrel Stabilizer: Level 3",
          recoil_reduction: "20%",
          perk: null,
          rarity: "Epic (Purple)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Barrel Stabilizer: Level 4",
          recoil_reduction: "20%",
          perk: "Reduces visual muzzle flash",
          rarity: "Legendary (Gold)",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stabalizers", null, {});
  }
};
