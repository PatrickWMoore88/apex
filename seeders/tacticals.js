"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "tacticals",
      [
        {
          name: "Smoke Launcher",
          cool_down: "33 Seconds",
          duration: "15 Seconds",
          description:
            "Fire a high-velocity smoke canister that explodes into a smoke wall on impact. Has two charges, allowing it to be used twice in a row. The launcher allows Bangalore to fire canisters farther than grenades can be thrown. Upon landing, the canister splits into three, which land in a line perpendicular to where it was launched from. The canister's explosion deals 10 damage to enemies.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Eye of the Allfather",
          cool_down: "35 Seconds",
          duration: "1.5 Seconds",
          description:
            "Briefly reveal hidden enemies, traps, and clues throughout structures ahead of you. n a 125° cone in front of you, all enemies, traps, and Loot Ticks are highlighted and tracked to be seen by you and your allies. It will also tell you how many hostiles were detected. Traps and Loot Ticks will remain highlighted for as long as they exist. Enemies caught in the scan will see 'SONAR DETECTED' on their HUD.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nox Gas Trap",
          cool_down: "25 Seconds",
          duration: "12.5 Seconds",
          description:
            "Drop Canisters that release deadly Nox gas when shot or triggered by enemies. You can hold up to three charges of this ability, and up to six traps can be active on the map at once, and you're able to pick up unused traps to regain a charge. Your enemies and teammates will be slowed inside the gas and are unable to sprint. If one Trap affects an enemy it will deal 4 damage/sec, increased by 1 every hit to a maximum of 10. Your ultimate and any other trap affecting the same enemy will deal only 1 (it doesn't increase) damage. The trap and the gas cloud deal health damage only ignoring shields. Shooting the top of the trap will cause it to go off. Shooting the base will destroy it without releasing gas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Surveillance Drone",
          cool_down: "40 seconds",
          duration: "Until Destroyed",
          description:
            "Deploys an aerial drone. The drone can be deployed and flown up to 200 meters away from Crypto. If the drone is 240+ meters away from Crypto, it'll automatically be recalled. When not being piloted manually, the drone can be parked in midair or recalled to Crypto. The recall takes 3 seconds. The drone can be used to open doors and supply bins, and can pick up teammates' banner cards. It must be within 7 meters to do this. Looking at a banner display with the drone lists the number of enemy squads within the 200 meter radius. Crypto is left stationary while piloting the drone. Taking damage while in drone view will force Crypto out of it.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dome of Protection",
          cool_down: "30 Seconds",
          duration: "18 Seconds",
          description:
            "Throw down a dome-shield that blocks attacks for 18 seconds. Healing items are 25% faster within the dome. Throws a large disc, which upon landing projects a dome shield around it. The dome has a radius of 6 meters. The shield stops all incoming and outgoing bullets and projectiles, while allowing players to move through it. While inside the dome, all consumable healing items take 3/4ths as long to use. Take note that enemies can also do this while inside your dome.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "D.O.C. Heal Drone",
          cool_down: "60 Seconds",
          duration: "20 Seconds or 450 health restored",
          description:
            "Call your Drone of Compassion to automatically heal nearby players over time. Places a hovering healing drone which heals all players within 3 meters. Heals 7.5 health per second. Players can push the drone around by walking into it, and if it goes over a cliff it falls very slowly. Can be destroyed by The Ring.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Psyche Out",
          cool_down: "15 Seconds",
          duration: "15 Seconds or Until Destroyed",
          description:
            "Send out a holographic decoy to confuse the enemy. When used, a hologram duplicate of Mirage is sent in a straight line to wherever the real Mirage targeted. The decoy will replicate whether Mirage was walking, running, or crouching, and if used in midair will have the same momentum as Mirage. It cannot climb walls or ride ziplines. Upon reaching the targeted location, the decoy stands still and performs the 'inspect weapon' animation. The decoy will vanish upon taking damage, and an icon will appear indicating where the enemy that damaged it is. This icon appears for Mirage's whole squad, and also indicates distance. The decoy will also automatically vanish after 15 seconds, which is when the ability re-activates. This ability may be activated twice while skydiving from the dropship or jump towers.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Stim",
          cool_down: "2 Seconds",
          duration: "6 Seconds",
          description:
            "Move 30% faster for six seconds, at the cost of 10 health. Using stim when at 10 health or below will put you on 1 health. While active, Octane is affected less by attacks that cause slowdown.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Grappling Hook",
          cool_down: "13 Seconds",
          duration: "Until Hook is Drawn In or 90° Angle is reached. ",
          description:
            "Grapple to get to out-of-reach places quickly. Throws a grappling hook that will attach to the first solid object it hits (including players and ziplines) and pull you towards it. The maximum length of the grappling hook is 21 meters. There is a circle on Pathfinder's crosshairs that turns blue to indicate when the surface you're pointing at is within grapple range. By aiming to the side, you can swing in that direction instead of being pulled straight in. The grapple will disconnect after swinging to a 90° angle, and you will keep your momentum. The grappling hook can also attach to players, pulling the two of you together.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Perimeter Security",
          cool_down: "30 Seconds",
          duration: "Until Destroyed",
          description:
            "Connect nodes to create electrified fences that damage and slow enemies. (Max:12) Deploying a new node at the max amount will destroy the oldest node. Nodes must be within 20 meters to be able to create a fence between them. It stuns and damages enemies, and pings the breached fence's location. The damage is 10 each tick and the slow lasts roughly 1-2 seconds. A node can be connected with up to 2 other nodes at the same time. They can also be picked up to refund a charge. Fences will temporarily disengage when Wattson or her squadmates pass through them. Doors that get in the way of a fence will shatter.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Into the Void",
          cool_down: "25 Seconds",
          duration: "3 Seconds",
          description:
            "Reposition quickly through the safety of void space, avoiding all damage. Upon activation, Wraith enters the void for 3 seconds. While in the void, the screen will turn greyscale and you become invulnerable, but also unable to see enemies or their actions. Enemies can see a whispy blue trail showing where you're going while in the void. While in the void, Wraith is unable to interact with some objects in the world, including doors and objects placed by abilities, but can use ziplines. There is a brief delay when entering and exiting the void during which Wraith is unable to perform any other action.",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tacticals", null, {});
  }
};
