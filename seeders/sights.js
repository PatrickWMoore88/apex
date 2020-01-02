"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "sights",
      [
        {
          name: "1x Holo",
          perk: null,
          rarity: "Common (White)",
          range: "Short Range",
          zoom: "1x",
          variable_zoom: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "1x HCOG 'Classic'",
          perk: null,
          rarity: "Common (White)",
          range: "Short Range",
          zoom: "1x",
          variable_zoom: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "1x-2x Variable Holo",
          perk: null,
          rarity: "Rare (Blue)",
          range: "Short to Mid Range",
          zoom: "1x or 2x",
          variable_zoom: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "2x HCOG 'Bruiser'",
          perk: null,
          rarity: "Rare (Blue)",
          range: "Short to Mid Range",
          zoom: "2x",
          variable_zoom: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "6x Sniper",
          perk: null,
          rarity: "Rare (Blue)",
          range: "Long Range",
          zoom: "6x",
          variable_zoom: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "3x HCOG 'Ranger'",
          perk: null,
          rarity: "Epic (Purple)",
          range: "Mid Range",
          zoom: "3x",
          variable_zoom: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "2x-4x Variable AOG",
          perk: null,
          rarity: "Epic (Purple)",
          range: "Mid to Long Range",
          zoom: "2x or 4x",
          variable_zoom: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "4x-8x Variable Sniper",
          perk: null,
          rarity: "Epic (Purple)",
          range: "Long Range",
          zoom: "4x or 8x",
          variable_zoom: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "1x Digital Threat",
          perk: "Threats are Highlighted Red",
          rarity: "Legendary (Gold)",
          range: "Short Range",
          zoom: "1x",
          variable_zoom: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "4x-10x Digital Sniper Threat",
          perk: "Threats are Highlighted Red",
          rarity: "Legendary (Gold)",
          range: "Long Range",
          zoom: "4x or 10x",
          variable_zoom: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("sights", null, {});
  }
};
