"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ultimates",
      [
        {
          name: "Rolling Thunder",
          cool_down: "270 Seconds",
          duration: "13 Seconds",
          description:
            "Call in an artillery strike that slowly creeps across the landscape. Bangalore throws a flare, and several rows of missiles land sequentially in front of the flare then stick for 8 seconds before exploding. Since they land in rows, this creates a sort of wave of explosions moving forward from the flare. Each explosion deals 40 damage and slows enemies. This ability cannot damage yourself or squadmates, but it will still cause the slowing effect.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Beast of the Hunt",
          cool_down: "180 Seconds",
          duration: "35 Seconds",
          description:
            "Enhances your senses, allowing you to move faster and highlighting your prey. Increases your speed by 30%. Your vision turns black and white, with the exception of enemies, which are highlighted in red. Enemy footprints are also highlighted in red. Certain things will retain a little color, including the edge of The Ring, grenade explosions, and various enemy abilities. Can be used with Eye of the Allfather.png Eye of the Allfather.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nox Gas Grenade",
          cool_down: "120 Seconds",
          duration: "20 Seconds",
          description:
            "Blankets a large area in Nox gas. Deals ever-increasing damage from 4 to 10 for every second spent in the gas. Other than the wider area, the gas's function is identical to that of the Gas Traps.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Drone EMP",
          cool_down: "180 Seconds",
          duration: "2 Seconds",
          description:
            "Charge up an EMP blast from your drone. Deals 50 shield damage, slows players and disables traps. Takes 3 seconds to charge before detonating. Affects all players in its 30 meter radius, even through walls and cover. The slow lasts roughly 1-2 seconds.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Defensive Bombardment",
          cool_down: "180 Seconds",
          duration: "6 Seconds",
          description:
            "Call in a concentrated mortar strike on a marked position. Throws a smoke grenade that marks a 24 meter radius around it for a mortar strike. Explosives continuously rain down on the area, dealing 40 damage per hit and shell-shocking players. The area is clearly marked for all players with red circles indicating where mortar shells will hit.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Care Package",
          cool_down: "360 Seconds",
          duration: "N/A",
          description:
            "Call in a drop pod with a combination of 3 high-quality attachments, consumables, and/or gear. Care Packages come with 3 item slots, each slot containing one of the following: Slot 1 (right slot relative to where the care package was called): Epic body shield, helmet, or knockdown shield. Slot 2 (left slot): shield cell, shield batteries, syringes, medkits, or phoenix kits. Slot 3 (front slot): Lvl 3 Weapon Attachments, 4x-10x Digital Sniper Threat or a 1x Digital Threat. Lifeline Care packages will never contain Care Package Weapons like the Mastiff, Kraber or the L-STAR. Unlike natural air drops, Lifeline's care packages are blue, and are not marked on the map or announced. They still emit a blue light when unopened. Takes 15 seconds to land once called in.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Vanishing Act",
          cool_down: "150 Seconds",
          duration: "5 Seconds",
          description:
            "Mirage deploys a team of decoys to distract enemies while he cloaks. When activated, turns Mirage invisible for 5 seconds, and creates a ring of 6 stationary decoys around where he activated it. The decoys will only move if they attempt to stand over an edge and fall. While cloaked, Mirage cannot fire weapons or use any items, but does gain a slight speed boost. Mirage can cancel out of cloak early. It takes a second to pull out a weapon again once decloaked.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Launch Pad",
          cool_down: "90 Seconds",
          duration: "Until Destroyed",
          description:
            "Deploy a jump pad that catapults anyone through the air. Launch Pads have 200 Health. Up to 4 Launch Pads can be active on the map at once. Jumping just as you make contact with the Launch Pad will make your jump arc higher.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Zipline Gun",
          cool_down: "120 Seconds",
          duration: "N/A",
          description:
            "Create a zipline for everyone to use. Creates a zipline between your current location and a target location, which you, your teammates, and enemies can use to move quickly between both points. The other end of the zipline can be attached to any surface, allowing them to lead to places that players can't stand. The maximum length of the zipline is 100 meters. Up to 4 ziplines can be active on the map at once.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Interception Pylon",
          cool_down: "180 Seconds",
          duration: "Until Destroyed",
          description:
            "Place an electrified pylon that destroys incoming ordnance and repairs damaged shields as long as it stands (Max: 1). Deploying a new interception pylon at the max amount will destroy the oldest pylon. Recharges around 2 shields per second. The Pylon has 150 Health. The Pylon is neutral, and therefore can recharge enemy shields and shoot down your squad's ordnance. The shield recharge effect doesn't stack if there are other Pylons nearby. The Pylon won't protect you from any ordnance or airstrike if it hasn't got clear sight or if the ordnance has already landed. The Pylon can be destroyed by shooting it. It can also block doors and is climbable.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dimensional Rift",
          cool_down: "150 Seconds",
          duration: "60 Seconds",
          description:
            "Link two locations with portals for 60 seconds, allowing anyone to use them. Wraith places one end of a portal where she activates the ability, then runs to another location and places the other end. Players can then pass through the portal to take that same path through the void at 5x the speed they would otherwise. It can be used in either direction. Wraith can run for 11 seconds before placing the other end of the portal. The 'timer' does not count down while standing still. While running to place the other end, Wraith cannot use any weapons, items, or map features, but she does receive a 25% speed bonus and can use Into the Void. Players taking the portal are invulnerable and leave a faint blue trail, much like Wraith while using Into the Void.",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ultimates", null, {});
  }
};
