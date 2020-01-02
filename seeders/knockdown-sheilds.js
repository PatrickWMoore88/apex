"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "knockdown_sheilds",
      [
        {
          name: "Level 1 Knockdown Shield",
          perk: null,
          rarity: "Common (White)",
          health: 200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Level 2 Knockdown Shield",
          perk: null,
          rarity: "Rare (Blue)",
          health: 450,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Level 3 Knockdown Shield",
          perk: null,
          rarity: "Epic (Purple)",
          health: 750,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Level 4 Knockdown Shield",
          perk: "Resurrection: Can self-resurrect once.",
          rarity: "Legendary (Gold)",
          health: 750,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("knockdown_sheilds", null, {});
  }
};
