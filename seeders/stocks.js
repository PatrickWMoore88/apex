"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stocks",
      [
        {
          name: "Standard Stock: Level 1",
          sway_reduction: "15%",
          rarity: "Common (White)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Standard Stock: Level 2",
          sway_reduction: "25%",
          rarity: "Rare (Blue)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Standard Stock: Level 3",
          sway_reduction: "35%",
          rarity: "Epic (Purple)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sniper Stock: Level 1",
          sway_reduction: "15%",
          rarity: "Common (White)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sniper Stock: Level 2",
          sway_reduction: "25%",
          rarity: "Rare (Blue)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sniper Stock: Level 3",
          sway_reduction: "35%",
          rarity: "Epic (Purple)",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stocks", null, {});
  }
};
