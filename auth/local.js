const express = require("express");
const app = express();
const session = require("express-session");
const models = require("../models");
const pbkdf2 = require("pbkdf2");
const axios = require("axios");
const bodyParser = require("body-parser");
const router = express.Router();

require("dotenv").config();

var salt = process.env.SALT_KEY;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    unset: "destroy"
  })
);

app.use(function(req, res, next) {
  console.log(req.method, req.path);
  next();
});

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

function encryptionPassword(password) {
  var key = pbkdf2.pbkdf2Sync(password, salt, 36000, 256, "sha256");
  var hash = key.toString("hex");
  return hash;
}

// Passport Setup
const passport = require("passport");
router.use(passport.initialize());
router.use(passport.session());

router.get("/success", (req, res) => {
  console.log(req.session);
  if (req.isAuthenticated()) {
    res.redirect("/signed_in");
  } else {
    res.send("Not Authorized!");
  }
});
router.get("/error", (req, res) => {
  res.send("Error Please Try Again");
});

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  models.user.findOne({ where: { id: id } }).then(function(user) {
    done(null, user.id);
  });
});

// Passport Local Authentication
const localStrategy = require("passport-local").Strategy;
passport.use(
  new localStrategy(function(username, password, done) {
    models.user
      .findOne({
        where: {
          name: username
        }
      })
      .then(function(user) {
        if (!user) {
          return done(null, false);
        }
        if (user.password != encryptionPassword(password)) {
          return done(null, false);
        }
        return done(null, user);
      })
      .catch(function(err) {
        return done(err);
      });
  })
);

router.get("/login", (req, res) => {
  res.render("login");
});

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/error" }),
  (req, res) => {
    res.redirect("/success?username=" + req.user.name);
  }
);

router.get("/signed_in", (req, res) => {
  models.user
    .findOne({
      where: {
        id: req.session.passport.user
      }
    })
    .then(function(user) {
      let platform = user.dataValues.platform;
      let screen_name = user.dataValues.screen_name;
      if (platform == "XBOX") {
        var platformId = 1;
      } else if (platform == "PSN") {
        var platformId = 2;
      } else if (platform == "Origin / PC") {
        var platformId = 5;
      }
      apiCall(screen_name, platformId).then(data => {
        console.log(apexData[0].metadata.legend_name);
        console.log(apexData[0].stats[0]);
        console.log(apexData[0].stats[1]);
        console.log(apexData[0].stats[2]);
        console.log(apexData[1].metadata.legend_name);
        console.log(apexData[1].stats[0]);
        console.log(apexData[1].stats[1]);
        console.log(apexData[1].stats[2]);
        res.render("./account/dashboard", {
          username: req.body.user_name,
          legend1Name: data[0].metadata.legend_name,
          legend1StatTracker1: data[0].stats[0].metadata.name,
          legend1StatTracker1Data: data[0].stats[0].value,
          legend1StatTracker2: data[0].stats[1].metadata.name,
          legend1StatTracker2Data: data[0].stats[1].value,
          legend1StatTracker3: data[0].stats[2].metadata.name,
          legend1StatTracker3Data: data[0].stats[2].value,
          legend2Name: data[1].metadata.legend_name,
          legend2StatTracker1: data[1].stats[0].metadata.name,
          legend2StatTracker1Data: data[1].stats[0].value,
          legend2StatTracker2: data[1].stats[1].metadata.name,
          legend2StatTracker2Data: data[1].stats[1].value,
          legend2StatTracker3: data[1].stats[2].metadata.name,
          legend2StatTracker3Data: data[1].stats[2].value,
          legend3Name: data[2].metadata.legend_name,
          legend3StatTracker1: data[2].stats[0].metadata.name,
          legend3StatTracker1Data: data[2].stats[0].value,
          legend3StatTracker2: data[2].stats[1].metadata.name,
          legend3StatTracker2Data: data[2].stats[1].value,
          legend3StatTracker3: data[2].stats[2].metadata.name,
          legend3StatTracker3Data: data[2].stats[2].value,
          legend4Name: data[3].metadata.legend_name,
          legend4StatTracker1: data[3].stats[0].metadata.name,
          legend4StatTracker1Data: data[3].stats[0].value,
          legend4StatTracker2: data[3].stats[1].metadata.name,
          legend4StatTracker2Data: data[3].stats[1].value,
          legend4StatTracker3: data[3].stats[2].metadata.name,
          legend4StatTracker3Data: data[3].stats[2].value
        });
      });
    });
});

router.get("/registration", (req, res) => {
  res.render("registration");
});

router.post("/register", async (req, res) => {
  // try {
  await models.user
    .findOne({
      where: { name: req.body.user_name }
    })
    .then(function(registeredUser) {
      if (registeredUser) {
        console.log(new Error("Sorry, please try a different User Name"));
        res.redirect("/registration");
      } else {
        models.user
          .create({
            name: req.body.user_name,
            password: encryptionPassword(req.body.password),
            screen_name: req.body.screen_name,
            platform: req.body.platform
          })
          .then(function(user) {
            res.redirect("/login");
          });
      }
    });
});

router.get("/logout", (req, res) => {
  if (session) {
    req.session.destroy();
    req.logout();
    console.log("Session was destroyed");
    res.redirect("login");
  } else {
    console.log("Session still active");
  }
});

module.exports = router;
