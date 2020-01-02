"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "passives",
      [
        {
          name: "Double Time",
          cool_down: "N/A",
          duration: "2 Seconds",
          description:
            "Taking fire while sprinting makes you move faster for a brief time. Double Time activates upon being hit, or when bullets/grenades barely miss you, giving you a 30% increase in run speed.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tracker",
          cool_down: "N/A",
          duration: "90 Seconds",
          description:
            "See tracks left behind by your foes. Actions performed by enemies leave markers that Bloodhound can see. See below for all actions that leave evidence. Clues will note how long ago they occurred. Bloodhound can ping clues for teammates, although specific details are not communicated. While following trails of clues, Bloodhound can also see ravens manifest around enemy tracks.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nox Vision",
          cool_down: "N/A",
          duration: "N/A",
          description:
            "Allows you to see enemies through Nox Gas. Caustic is immune to the effects of Nox Gas whether it belongs to him or an enemy Caustic. Enemies inside the gas created from your tactical and ultimate abilities are highlighted green, similar to a threat scope. This vision is not obstructed by walls or other obstacles.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Neurolink",
          cool_down: "N/A",
          duration: "Until Destroyed",
          description:
            "Crypto and his teammates see what the Surveillance Drone detects up to a 30 meter radius. The drone will highlight nearby doors, supply bins, traps and enemies in its line of sight. Enemies are more noticeably marked with a triangle. Enemies seen by the drone will see 'DRONE DETECTED' on their HUD.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Gun Shield",
          cool_down: "N/A",
          duration: "Until Destoryed",
          description:
            "Aiming down sights deploys a gun shield that blocks incoming fire. While aiming, Gibraltar will have an energy shield in front of him with 75 health that protects his upper body from incoming fire while allowing him to shoot out. The shield can be disabled. Once broken, the shield has a long cooldown. It may be regenerated quicker by using shield cells or shield batteries. The health of the energy shield can be seen on both the left and right sides while aiming down sights. The cooldown meter can also be seen refilling the 1-8 bars of energy meter.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Combat Medic",
          cool_down: "N/A",
          duration: "N/A",
          description:
            "Revive knocked down teammates faster while protected by a shield wall. Healing items are used 25% faster. Generates a shield wall roughly in front of Lifeline whenever she is in the act of reviving a teammate. If she cancels or completes the revive, the shield wall will dissipate immediately. The shield wall blocks all damage and projectiles from passing through it, even bullets and grenades from allies. Lifeline revives allies in only 4 seconds, faster than the normal 5 seconds it takes for all other Legends. All consumable healing items take 75% as long to use, compared to other legends.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Encore!",
          cool_down: "N/A",
          duration: "5 Seconds",
          description:
            "Automatically drop a decoy and cloak for 5 seconds when knocked down. Leaves a decoy that enemies can attempt to perform finishers on.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Swift Mend",
          cool_down: "N/A",
          duration: "N/A",
          description:
            "Automatically restores health over time. While not taking damage, Octane restores 1 health every 2 seconds.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Insider Knowledge",
          cool_down: "N/A",
          duration: "7 Seconds",
          description:
            "Scan a survey beacon to reveal the Ring's next location. Allows you to access the 12 survey beacons available on the map in any given match to determine the circle location after the currently marked circle. The interaction with the survey beacon takes 7 seconds, during which you are vulnerable.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Spark of Genius",
          cool_down: "N/A",
          duration: "N/A",
          description:
            "Instead of charging a bit of your Ultimate, Ultimate Accelerants fully charge it, and standing near interception pylons boosts your Tactical Ability recharge. Perimeter Security charges have 4-second cooldowns instead of 30 when near an Interception Pylon, made by either you or another Wattson.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Voices from the Void",
          cool_down: "N/A",
          duration: "N/A",
          description:
            "A voice warns you when danger approaches. As far as you can tell, it's on your side. You hear a spectral voice audibly warn you if: An enemy is aiming at you, An enemy with a sniper rifle is aiming at you, A grenade is thrown at you, There are traps nearby, There are many enemies nearby, or Many people have died near you. When you hear the voice, you can share the info with your squadmates.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Fortified",
          cool_down: "N/A",
          duration: "N/A",
          description:
            "Reduces damage taken by 15%. Immunity to slow effects from weapon fire.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Low Profile",
          cool_down: "N/A",
          duration: "N/A",
          description:
            "More difficult to hit, incoming damage increased by 5%.",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("passives", null, {});
  }
};
