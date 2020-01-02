"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "armors",
      [
        {
          name: "Level 1 Body Shield",
          perk: null,
          rarity: "Common (White)",
          health: 50,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Level 2 Body Shield",
          perk: null,
          rarity: "Rare (Blue)",
          health: 75,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Level 3 Body Shield",
          perk: null,
          rarity: "Epic (Purple)",
          health: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Level 4 Body Shield",
          perk: "Fast Heal: Healing Items are used 50% faster",
          rarity: "Legendary (Gold)",
          health: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("armors", null, {});
  }
};
