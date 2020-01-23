"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "weapons",
      [
        {
          name: "VK-47 Flatline",
          dps: 190,
          type: "Assault Rifle",
          rarity: "Common",
          ammo_type: 2,
          imageURL: "/images/vk-47-flatline-featured.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hemlok Burst AR",
          dps: 180,
          type: "Assault Rifle",
          rarity: "Common",
          ammo_type: 2,
          imageURL: "/images/hemlok-burst-ar-featured.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "R-301 Carbine",
          dps: 168,
          type: "Assault Rifle",
          rarity: "Common",
          ammo_type: 1,
          imageURL: "/images/r-301-apex-legends.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "HAVOC Rifle",
          dps: 167,
          type: "Assault Rifle",
          rarity: "Common",
          ammo_type: 3,
          imageURL: "/images/havoc-rifle-featured.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Alternator SMG",
          dps: 138,
          type: "Sub Machine Gun",
          rarity: "Common",
          ammo_type: 1,
          imageURL: "/images/alternator-smg-featured.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Prowler Brust PDW",
          dps: 186,
          type: "Sub Machine Gun",
          rarity: "Common",
          ammo_type: 2,
          imageURL: "/images/prowler-burst-pdw-featured.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "R-99",
          dps: 216,
          type: "Sub Machine Gun",
          rarity: "Common",
          ammo_type: 1,
          imageURL: "/images/r-99-smg-featured.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Devotion LMG",
          dps: 255,
          type: "Light Machine Gun",
          rarity: "Common",
          ammo_type: 3,
          imageURL: "/images/devotion-lmg-featured.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "M600 Spitfire",
          dps: 170,
          type: "Light Machine Gun",
          rarity: "Common",
          ammo_type: 2,
          imageURL: "/images/m600-spitfire-apex-legends.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "L-STAR EMG",
          dps: 228,
          type: "Light Machine Gun",
          rarity: "Legendary (Gold)",
          ammo_type: null,
          imageURL: "/images/l-star-emg-apex-legends.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Longbow DMR",
          dps: 78,
          type: "Sniper Rifle",
          rarity: "Common",
          ammo_type: 2,
          imageURL: "/images/longbow-dmr-featured.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "G7 Scout",
          dps: 155,
          type: "Sniper Rifle",
          rarity: "Common",
          ammo_type: 1,
          imageURL: "/images/g7-scout-featured.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Triple Take",
          dps: 101,
          type: "Sniper Rifle",
          rarity: "Common",
          ammo_type: 3,
          imageURL: "/images/triple-take-featured.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // {
        //   name: "Charge Rifle",
        //   dps: null,
        //   type: "Sniper Rifle",
        //   rarity: "Common",
        //   ammo_type: 3,
        //   createdAt: new Date(),
        //   updatedAt: new Date()
        // },
        {
          name: "Kraber .50-cal Sniper",
          dps: 87,
          type: "Sniper Rifle",
          rarity: "Legendary (Gold)",
          ammo_type: null,
          imageURL: "/images/kraber-apex-legends.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "EVA-8 Auto",
          dps: 134,
          type: "Shotgun",
          rarity: "Common",
          ammo_type: 4,
          imageURL: "/images/eva-8-auto-featured.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mozambique Shotgun",
          dps: 135,
          type: "Shotgun",
          rarity: "Common",
          ammo_type: 4,
          imageURL: "/images/mozambique-featured.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Peacekeeper",
          dps: 106,
          type: "Shotgun",
          rarity: "Common",
          ammo_type: 4,
          imageURL: "/images/peacekeeper-featured.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mastiff Shotgun",
          dps: 230,
          type: "Shotgun",
          rarity: "Legendary (Gold)",
          ammo_type: null,
          imageURL: "/images/mastiff-featured.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "RE-45 Auto",
          dps: 137,
          type: "Pistols",
          rarity: "Common",
          ammo_type: 1,
          imageURL: "/images/re-45-featured.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "P2020",
          dps: 93,
          type: "Pistols",
          rarity: "Common",
          ammo_type: 1,
          imageURL: "/images/p2020-featured.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Wingman",
          dps: 117,
          type: "Pistols",
          rarity: "Common",
          ammo_type: 2,
          imageURL: "/images/wingman-featured.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("weapons", null, {});
  }
};
