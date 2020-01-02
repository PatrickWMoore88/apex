"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "extended_clips",
      [
        {
          name: "Light Extended Mag: Level 1",
          perk: "Increase Mag Capacity: Small Amount",
          rarity: "Common (White)",
          ammo_type: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Light Extended Mag: Level 2",
          perk:
            "Increase Mag Capacity: Medium Amount with a Slightly Faster Reload",
          rarity: "Rare (Blue)",
          ammo_type: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Light Extended Mag: Level 3",
          perk:
            "Increase Mag Capacity: Large Amount with a Noticeably Faster Reload",
          rarity: "Epic (Purple)",
          ammo_type: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Heavy Extended Mag: Level 1",
          perk: "Increase Mag Capacity: Small Amount",
          rarity: "Common (White)",
          ammo_type: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Heavy Extended Mag: Level 2",
          perk:
            "Increase Mag Capacity: Medium Amount with a Slightly Faster Reload",
          rarity: "Rare (Blue)",
          ammo_type: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Heavy Extended Mag: Level 3",
          perk:
            "Increase Mag Capacity: Large Amount with a Noticeably Faster Reload",
          rarity: "Epic (Purple)",
          ammo_type: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Energy Extended Mag: Level 1",
          perk: "Increase Mag Capacity: Small Amount",
          rarity: "Common (White)",
          ammo_type: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Energy Extended Mag: Level 2",
          perk:
            "Increase Mag Capacity: Medium Amount with a Slightly Faster Reload",
          rarity: "Rare (Blue)",
          ammo_type: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Energy Extended Mag: Level 3",
          perk:
            "Increase Mag Capacity: Large Amount with a Noticeably Faster Reload",
          rarity: "Epic (Purple)",
          ammo_type: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("extended_clips", null, {});
  }
};
