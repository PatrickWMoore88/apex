"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "legends",
      [
        {
          name: "Bangalore",
          real_name: "Anita Williams",
          gender: "Female",
          age: 35,
          role: "Offensive",
          home_world: "Gridiron",
          back_story:
            "Born into a military family where she, her parents, and her four older brothers all served in the IMC Armed Forces, 40138416, callsign Bangalore, has been an exceptional soldier since she was young. She was top of her class at the IMC Military Academy and the only cadet who could take apart a Peacekeeper, equip it with a Precision Choke hop-up, and put it back together in under twenty seconds – blindfolded. Three years ago, Anita and her brother Jackson were ordered to retrieve a mercenary fleet from the Outlands to aid in the IMC's fight against the Frontier Militia. However, their unit lost contact with IMC HQ and were ambushed on arrival. The squad scattered, but Jackson stayed behind to give his sister time to escape. Alone and with no way home, Anita put her training, extensive weapon knowledge, and competitive spirit to work by joining the Apex Games. Now, she fights to raise money for passage back to the IMC home base, where she hopes to reunite with what remains of her family.",
          prim_passive: 1,
          sec_passive: null,
          tactical: 1,
          ultimate: 1,
          imageURL: "/images/268px-Bangalore_Icon.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bloodhound",
          real_name: "Unknown",
          gender: "Non-binary",
          age: null,
          role: "Recon",
          home_world: "Unknown",
          back_story:
            "Bloodhound is known across the Outlands as one of the greatest game hunters the Frontier has ever seen – and that's about all anyone knows. Their  identity is a mystery wrapped in layers of rumors: they are fabulously wealthy, a bloodthirsty murderer, a Goliath whisperer, a former slave, half bat, and a dozen other things depending on who's doing the whispering. All anyone truly knows is that Bloodhound is a force to be reckoned with in the Apex Games, having won atleast two championships. Bloodhound's unparalleled tracking skills are a boon to any team they join, helping them root out hidden opponents and tracking the enemy's movements. Calling on Earth's Old Norse Gods to guide them, Bloodhound believes that destiny is a path that has already been laid out, eventually carrying all to their death. But with that knowledge comes strength, because until that day comes, Bloodhound knows they can't be stopped.",
          prim_passive: 2,
          sec_passive: null,
          tactical: 2,
          ultimate: 2,
          imageURL: "/images/268px-Bloodhound_Icon.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Caustic",
          real_name: "Alexander Maxwell Nox",
          gender: "Male",
          age: 48,
          role: "Defensive",
          home_world: "Gaea",
          back_story:
            "Alexander Maxwell Nox was born to Arthur Rutherford Nox and Katerina Ticacek Nox on February 25, 2685. He worked as a research scientist for Humbert Labs on his homeworld Gaea, the Frontier's leading manufacturer of pesticide gases. With a glut of pesticides needed to protect the growing Frontier colonies’ crops, Humbert Labs was constantly on the hunt for better and stronger formulas. Nox was one of their brightest scientists and worked day and night developing new gases. But to make sure they worked, he needed to test them on more than just inert tissue: he needed something living. As he toiled in secret, Nox began to see the beauty in his creations and their ability to destroy anything they touched. But the head of Humbert Labs, Dr. Franklin Humbert, soon discovered his gruesome experiments, and their confrontation ended with the lab in flames and its chief dead. Today, Nox is missing and presumed deceased, his supposed body found and identified by his mother, charred and beyond recognition. 10 years later, Caustic now finds new test subjects in the Apex Games, where he puts his gaseous creations to work and observes their effects with great interest.",
          prim_passive: 3,
          sec_passive: 12,
          tactical: 3,
          ultimate: 3,
          imageURL: "/images/268px-Caustic_Icon.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Crypto",
          real_name: "Tae Joon Park",
          gender: "Male",
          age: 31,
          role: "Recon",
          home_world: "Gaea",
          back_story:
            "Crypto specializes in secrets; he knows how to uncover them, and how to keep them. A brilliant hacker and encryption expert, he uses aerial drones to spy on his opponents in the Apex Arena without being seen. Orphans raised on the streets of Suotamo, Tae Joon and his foster sister Mila Alexander escaped a life of squalor by becoming computer engineers, designing drones used by the Syndicate to transmit the Apex Games throughout the Outlands. But one day, Tae Joon and Mila accidentally discovered a prediction algorithm used by the Syndicate to rig bets for the Apex Games, leading to Mila’s mysterious murder - and the framing of Tae Joon for it. With his reputation destroyed, and the Syndicate after him, he gave up his identity, his face and his family in order to facilitate his redemption. Wanting to get closer to the people who framed him, Tae Joon wanted to join the games but thought he wouldn't be able to pass the games' qualifiers. He did what he does best by hacking into the games' mainframe and putting himself in their records as a legend, but not before blowing up Kings Canyon's Repulsor Tower to serve as a distraction. This allowed the entry of hostile wildlife on Kings Canyon and disruption of the games. Now joining the games as the combatant known as Crypto, he seeks justice - and revenge.",
          prim_passive: 4,
          sec_passive: null,
          tactical: 4,
          ultimate: 4,
          imageURL: "/images/268px-Crypto_Icon.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Gibraltar",
          real_name: "Makoa Gibraltar",
          gender: "Male",
          age: 30,
          role: "Defensive",
          home_world: "Solace",
          back_story:
            "Gibraltar is a gentle giant with a wild side. The son of two S.A.R.A.S. (Search and Rescue Association of Solace) volunteers, he has always been skilled at getting others out of dangerous situations that are common in the Outlands. However, he only began to understand the value of protecting others when he and his boyfriend stole his father's motorcycle, took it on a joyride, and got trapped by a deadly mudslide. His parents saved them, and his father lost an arm in the process. Gibraltar has never forgotten that sacrifice and has devoted his life to helping those in need. The Apex Games didn't change that, but they changed what it meant. Many of Gibraltar's friends and colleagues have competed in the Games for extra money, fame, and glory over the years, and some never came home. Gibraltar joined to keep them safe and, for the first time, his skills as a rescuer and his rebellious nature worked together. He's now become an icon in the Apex Games, putting himself in the line of fire to protect his squad and send his opponents running for cover.",
          prim_passive: 5,
          sec_passive: 12,
          tactical: 5,
          ultimate: 5,
          imageURL: "/images/268px-Gibraltar_Icon.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lifeline",
          real_name: "Ajay Che",
          gender: "Female",
          age: 24,
          role: "Support",
          home_world: "Psamathe",
          back_story:
            "Ajay Che isn't someone you would expect to find in the Apex Games. Once the child of wealthy war profiteers, she left home when she learned of the damage her family had caused and enlisted in the Frontier Corps, a humanitarian organization that aids Frontier communities in need. She's since devoted her life to helping others and joined the Apex Games to fund the Frontier Corps with her winnings. Since no one in the Games is innocent — they all know what they signed up for — and every one of her victories means help for those in need, Lifeline has no problem engaging in the popular bloodsport. Or so she tells herself. She may seem sarcastic and callous, but deep down she wants to help people and make the world a better place. If that means taking a few people down in the process, so be it.",
          prim_passive: 6,
          sec_passive: 13,
          tactical: 6,
          ultimate: 6,
          imageURL: "/images/268px-Lifeline_Icon.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mirage",
          real_name: "Elliott Witt",
          gender: "Male",
          age: 30,
          role: "Offensive",
          home_world: "Solace",
          back_story:
            "Mirage is the kind of guy who likes to stand out. The youngest of four brothers, he perfected the art of fooling around to get attention. The one thing he took seriously was Holo-Pilot technology: introduced to the illusion-creating tech by his famed engineer mother Evelyn Witt, he pored over the mechanisms and learned all he could about them. Even when his brothers went missing during the Frontier War, Mirage and his mother continued to develop holo devices, and the work brought them closer. While working as a bartender on the Paradise Lounge in Solace City to make some extra money, Mirage heard amazing stories from his patrons about the Apex Games and the wealth and glory that came with victory. As good as both of those sounded, he knew he couldn't risk leaving his mother childless – until she gave him a set of customized holo devices and told him to follow his dream. Mirage is now the life of the Apex Games, outwitting opponents and charming audiences across the Outlands.",
          prim_passive: 7,
          sec_passive: null,
          tactical: 7,
          ultimate: 7,
          imageURL: "/images/268px-Mirage_Icon.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Octane",
          real_name: "Octavio Silva",
          gender: "Male",
          age: 24,
          role: "Offensive",
          home_world: "Psamathe",
          back_story:
            "One day, Octavio Silva was bored. In fact, he was bored most days. Heir to the preoccupied CEOs of Silva Pharmaceuticals and wanting for nothing in life, he entertained himself by performing death-defying stunts and posting holovids of them for his fans to gawk over. So, this day, he decided to set the course record for a nearby Gauntlet by launching himself across the finish line – using a grenade. He later recounted that day as the single greatest day in his life. As he lay in triage hours later, the doctors informed him that the damage done to his legs meant his daredevil days were over. That didn’t sit well with Octavio, who turned to an old friend for help: Ajay Che, who he guilted into forging an order to replace his legs with bionic ones. Suddenly able to repair his limbs at a moment’s notice, Octavio decided petty online stunts weren’t enough: the ultimate adrenaline rush, the Apex Games, was calling. Now, he’s going to become an Apex Champion doing the most incredible, death-defying moves anyone’s ever seen. Maybe in the arena, he won’t be so bored.",
          prim_passive: 8,
          sec_passive: null,
          tactical: 8,
          ultimate: 8,
          imageURL: "/images/268px-Octane_Icon.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Pathfinder",
          real_name: "MRVN",
          gender: "Male",
          age: null,
          role: "Support",
          home_world: "Unknown",
          back_story:
            "Pathfinder is the picture of optimism, despite his circumstances. A MRVN (Mobile Robotic Versatile eNtity) modified to specialize in location scouting and surveying, he booted up decades ago in an abandoned laboratory with no idea who created him or why. With only his MRVN designation to hint at his identity, Pathfinder set off in search of his creator. Pathfinder has learned much in his travels since then (like how to make a mean Eastern Leviathan Stew) but hasn't come any closer to finding his creator. Still, he's never given up hope, and took odd jobs in order to gain information about his maker. It was during a chance meeting with bartender Elliott Witt in Solace City that he learned about the Apex Games. Wishing to gain a following—and hopefully draw the attention of his maker, he joined the popular bloodsport. In the meantime, he remains enthusiastic and helpful, always ready to make new friends (then shoot them).",
          prim_passive: 9,
          sec_passive: 13,
          tactical: 9,
          ultimate: 9,
          imageURL: "/images/268px-Pathfinder_Icon.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Wattson",
          real_name: "Natalie Paquette",
          gender: "Female",
          age: 22,
          role: "Defensive",
          home_world: "Solace",
          back_story:
            "Natalie Paquette is a familiar face in the Apex Games, though for a different reason than most. Daughter of the Games’ lead electrical engineer Luc Paquette, she studied his manuals to stay close to him, and discovered her calling at a young age. Though she could be completely distracted one moment and hyper-focused the next, electricity grounded her – its ordered, predictable flow made sense in a way the rest of the world didn’t. She devoured every book she could on the subject, and eventually became such a skilled engineer that she was commissioned by the Syndicate to build the Apex Games’ Modified Containment Ring. Unfortunately, her father died the day it was revealed, leaving her alone. At her lowest moment, a group of competitors invited her to return to the arena with them, assuring her she would always have a home. She now fights alongside her friends in the arena she helped build, destroying incoming missiles, recharging shields, creating fences, and using her pylon to silence fights that get too loud. Nobody knows the arena better than Wattson – anyone who underestimates her is in for a shock.",
          prim_passive: 10,
          sec_passive: 13,
          tactical: 10,
          ultimate: 10,
          imageURL: "/images/268px-Wattson_Icon.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Wraith",
          real_name: "Renee Blasey",
          gender: "Female",
          age: 32,
          role: "Offensive",
          home_world: "Typhon",
          back_story:
            "Subject 611367, Codenamed 'Wraith', is a whirlwind fighter, able to execute swift and deadly attacks and manipulate spacetime by opening rifts in the fabric of reality. Years ago, she woke up in an IMC Detention Facility for the Mentally Ill with no memory of her life before. She also began hearing a distant voice whispering in her mind that would keep her awake for days on end, nearly driving her insane. She was on the facility one day when a portal opened before she was to be sedated. A person wearing a purple helmet comes out and scares the facility staff away. The person berated her for not fighting back and revealed herself to her. She was her from another dimension, on a quest for revenge on the people who experimented on her. With this Voidwalker's help, she learned to trust the voices and was given the device needed for her to safely manipulate the void. Using a portal to the Voidwalker's dimension enabled her to escape her facility, arriving in Kings Canyon still under construction for the Apex Games. Determined to uncover her true identity, Wraith began a quest to find out more about the experiments and herself. Many of the old research facilities, however, are buried beneath the heavily guarded arenas used for the Apex Games. She now returns from where she arrived on this world and joined the competition, and with every match she gets closer to the truth.",
          prim_passive: 11,
          sec_passive: 13,
          tactical: 11,
          ultimate: 11,
          imageURL: "/images/268px-Wraith_Icon.png",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("legends", null, {});
  }
};
