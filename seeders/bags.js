"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "bags",
      [
        {
          name: "Level 1 Backpack",
          perk: null,
          rarity: "Common (White)",
          slot_count: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Level 2 Backpack",
          perk: null,
          rarity: "Rare (Blue)",
          slot_count: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Level 3 Backpack",
          perk: null,
          rarity: "Epic (Purple)",
          slot_count: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Level 4 Backpack",
          perk:
            "Guardian Angel: Restores 50 shield and 75 health after a revive",
          rarity: "Legendary (Gold)",
          slot_count: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("bags", null, {});
  }
};
