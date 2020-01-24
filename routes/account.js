const express = require("express");
const router = express.Router();
const models = require("../models");
const pbkdf2 = require("pbkdf2");
const axios = require("axios");

require("dotenv").config();

var salt = process.env.SALT_KEY;

function encryptionPassword(password) {
  var key = pbkdf2.pbkdf2Sync(password, salt, 36000, 256, "sha256");
  var hash = key.toString("hex");
  return hash;
}

function apiCall(screen_name, platformId) {
  return axios
    .get(
      "https://public-api.tracker.gg/apex/v1/standard/profile/" +
        platformId +
        "/" +
        screen_name,
      {
        headers: {
          "TRN-Api-Key": process.env.API_KEY
        }
      }
    )
    .then(res => {
      this.res = res.data.data.children;
      apexData = this.res;
      return apexData;
    })
    .catch(err => {
      console.log(err);
    });
}

router.get("/", (req, res) => {
  res.render("account");
});

router.get("/dashboard", (req, res) => {
  models.user
    .findOne({
      where: {
        id: req.session.passport.user
      }
    })
    .then(function(user) {
      req.session.passport.platform = user.dataValues.platform;
      req.session.passport.screen_name = user.dataValues.screen_name;
      let platform = req.session.passport.platform;
      let screen_name = req.session.passport.screen_name;
      if (platform == "XBOX") {
        var platformId = 1;
      } else if (platform == "PSN") {
        var platformId = 2;
      } else if (platform == "Origin / PC") {
        var platformId = 5;
      }
      apiCall(screen_name, platformId).then(data => {
        res.render("./account/dashboard", {
          username: req.session.passport.screen_name,
          legend1Name: data[0].metadata.legend_name,
          legend1Image: data[0].metadata.icon,
          legend1StatTracker1: data[0].stats[0].metadata.name,
          legend1StatTracker1Data: data[0].stats[0].value,
          legend1StatTracker2: data[0].stats[1].metadata.name,
          legend1StatTracker2Data: data[0].stats[1].value,
          legend1StatTracker3: data[0].stats[2].metadata.name,
          legend1StatTracker3Data: data[0].stats[2].value,
          legend2Name: data[1].metadata.legend_name,
          legend2Image: data[1].metadata.icon,
          legend2StatTracker1: data[1].stats[0].metadata.name,
          legend2StatTracker1Data: data[1].stats[0].value,
          legend2StatTracker2: data[1].stats[1].metadata.name,
          legend2StatTracker2Data: data[1].stats[1].value,
          legend2StatTracker3: data[1].stats[2].metadata.name,
          legend2StatTracker3Data: data[1].stats[2].value,
          legend3Name: data[2].metadata.legend_name,
          legend3Image: data[2].metadata.icon,
          legend3StatTracker1: data[2].stats[0].metadata.name,
          legend3StatTracker1Data: data[2].stats[0].value,
          legend3StatTracker2: data[2].stats[1].metadata.name,
          legend3StatTracker2Data: data[2].stats[1].value,
          legend3StatTracker3: data[2].stats[2].metadata.name,
          legend3StatTracker3Data: data[2].stats[2].value
        });
      });
    });
});

router.get("/management", (req, res) => {
  res.render("account/management", {
    username: req.session.passport.screen_name
  });
});

router.get("/manageScreenNameAndPlatform", (req, res) => {
  res.render("account/manageScreenNameAndPlatform", {
    username: req.session.passport.screen_name
  });
});

router.post("/updateScreenNameAndPlatform", async (req, res) => {
  await models.user
    .update(
      { screen_name: req.body.screen_name, platform: req.body.platform },
      { where: { id: req.session.passport.user } }
    )
    .then(user => {
      res.render("login");
    });
});

router.get("/managePassword", (req, res) => {
  res.render("account/managePassword", {
    username: req.session.passport.screen_name
  });
});

router.post("/updatePassword", async (req, res) => {
  await models.user
    .update(
      { password: encryptionPassword(req.body.password) },
      { where: { id: req.session.passport.user } }
    )
    .then(user => {
      res.render("login");
    });
});

router.get("/manageDelete", (req, res) => {
  res.render("account/manageDelete", {
    username: req.session.passport.screen_name
  });
});

// router.get("/deleteAccount", (req, res) => {
//   res.redirect("/deleteAccount");
// });

router.post("/deleteAccount", async (req, res) => {
  await models.user
    .destroy({ where: { id: req.session.passport.user } })
    .then(user => {
      req.session.destroy();
      // res.render("./login");
      res.redirect("../registration");
    });
});

router.get("/legends", (req, res) => {
  models.legend.findAll().then(data => {
    res.render("account/exploreLegends", {
      legends: data,
      username: req.session.passport.screen_name
    });
  });
});

router.get("/legends/:name", async (req, res) => {
  models.legend
    .findOne({
      where: { name: req.params.name }
    })
    .then(data => {
      res.render("account/legend", {
        legends: data,
        username: req.session.passport.screen_name
      });
    });
});

router.get("/weapon-types", (req, res) => {
  res.render("account/weapon-types", {
    username: req.session.passport.screen_name
  });
});

router.get("/weapon-types/assault-rifles", (req, res) => {
  models.weapon.findAll({ where: { type: "Assault Rifle" } }).then(data => {
    console.log(data);
    res.render("account/explore-assault-rifles", {
      weapons: data,
      username: req.session.passport.screen_name
    });
  });
});

router.get("/weapon-types/assault-rifles/:name", async (req, res) => {
  models.weapon
    .findOne({
      where: { name: req.params.name }
    })
    .then(data => {
      console.log(data);
      res.render("account/weapon", {
        weapons: data,
        username: req.session.passport.screen_name
      });
    });
});

router.get("/weapon-types/smgs", (req, res) => {
  models.weapon.findAll({ where: { type: "Sub Machine Gun" } }).then(data => {
    res.render("account/explore-smgs", {
      weapons: data,
      username: req.session.passport.screen_name
    });
  });
});

router.get("/weapon-types/smgs/:name", async (req, res) => {
  models.weapon
    .findOne({
      where: { name: req.params.name }
    })
    .then(data => {
      res.render("account/weapon", {
        weapons: data,
        username: req.session.passport.screen_name
      });
    });
});

router.get("/weapon-types/lmgs", (req, res) => {
  models.weapon.findAll({ where: { type: "Light Machine Gun" } }).then(data => {
    res.render("account/explore-lmgs", {
      weapons: data,
      username: req.session.passport.screen_name
    });
  });
});

router.get("/weapon-types/lmgs/:name", async (req, res) => {
  models.weapon
    .findOne({
      where: { name: req.params.name }
    })
    .then(data => {
      res.render("account/weapon", {
        weapons: data,
        username: req.session.passport.screen_name
      });
    });
});

router.get("/weapon-types/pistols", (req, res) => {
  models.weapon.findAll({ where: { type: "Pistols" } }).then(data => {
    res.render("account/explore-pistols", {
      weapons: data,
      username: req.session.passport.screen_name
    });
  });
});

router.get("/weapon-types/pistols/:name", async (req, res) => {
  models.weapon
    .findOne({
      where: { name: req.params.name }
    })
    .then(data => {
      res.render("account/weapon", {
        weapons: data,
        username: req.session.passport.screen_name
      });
    });
});

router.get("/weapon-types/shotguns", (req, res) => {
  models.weapon.findAll({ where: { type: "Shotgun" } }).then(data => {
    res.render("account/explore-shotguns", {
      weapons: data,
      username: req.session.passport.screen_name
    });
  });
});

router.get("/weapon-types/shotguns/:name", async (req, res) => {
  models.weapon
    .findOne({
      where: { name: req.params.name }
    })
    .then(data => {
      res.render("account/weapon", {
        weapons: data,
        username: req.session.passport.screen_name
      });
    });
});

router.get("/weapon-types/snipers", (req, res) => {
  models.weapon.findAll({ where: { type: "Sniper Rifle" } }).then(data => {
    res.render("account/explore-snipers", {
      weapons: data,
      username: req.session.passport.screen_name
    });
  });
});

router.get("/weapon-types/snipers/:name", async (req, res) => {
  models.weapon
    .findOne({
      where: { name: req.params.name }
    })
    .then(data => {
      res.render("account/weapon", {
        weapons: data,
        username: req.session.passport.screen_name
      });
    });
});

module.exports = router;
