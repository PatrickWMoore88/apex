"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "helmets",
      [
        {
          name: "Level 1 Helmet",
          perk: null,
          rarity: "Common (White)",
          damage_reduction: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Level 2 Helmet",
          perk: null,
          rarity: "Rare (Blue)",
          damage_reduction: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Level 3 Helmet",
          perk: null,
          rarity: "Epic (Purple)",
          damage_reduction: 25,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Level 4 Helmet",
          perk:
            "Fast Charge: Tactical and Ultimate reacharge time reduced by 25%",
          rarity: "Legendary (Gold)",
          damage_reduction: 25,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("helmets", null, {});
  }
};
