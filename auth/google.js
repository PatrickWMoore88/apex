const express = require("express");
// const app = express();
const session = require("express-session");
const models = require("../models");
const pbkdf2 = require("pbkdf2");
// const axios = require("axios");
const bodyParser = require("body-parser");
const router = express.Router();

require("dotenv").config();

var salt = process.env.SALT_KEY;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    unset: "destroy"
  })
);

router.use(function(req, res, next) {
  console.log(req.method, req.path);
  next();
});

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
  if (req.isAuthenticated()) {
    res.send("Welcome " + req.user.name + " You Have Logged In!");
  } else {
    res.send("Not Authorized!");
  }
});
router.get("/error", (req, res) => {
  res.send("Error Please Try Again");
});

passport.serializeUser(function(user, done) {
  done(null, user[0].dataValues.id);
});

passport.deserializeUser(function(id, done) {
  models.user.findOne({ where: { id: id } }).then(function(user) {
    done(null, user[0].dataValues.id);
  });
});

var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback"
    },
    (accesstoken, tokenSecret, profile, done) => {
      models.user
        .findOrCreate({
          where: {
            googleid: profile.id,
            display_name: profile.displayName,
            name: profile.displayName
          }
        })
        .then(user => {
          console.log(
            "User Has Been Found/Created: " + user[0].dataValues.name
          );
          done(null, user);
        });
    }
  )
);

router.get(
  "/auth/google",
  passport.authenticate("google", {
    // scope: [
    //   "https://www.googleapis.com/auth/userinfo.profile",
    //   "https://www.googleapis.com/auth/userinfo.email"
    // ]
    scope: ["profile"]
  }),
  (req, res) => {}
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    models.user
      .findOne({
        where: {
          id: req.session.passport.user
        }
      })
      .then(user => {
        res.redirect("/googlereg");
      });
  }
);

router.get("/googlereg", (req, res) => {
  res.render("googlereg");
});

router.post("/googlereg", async (req, res) => {
  await models.user
    .update(
      {
        screen_name: req.body.screen_name,
        password: encryptionPassword(req.body.password),
        platform: req.body.platform
      },
      { where: { id: req.session.passport.user } }
    )
    .then(user => {
      res.render("login");
    });
});

module.exports = router;
