// Express, Body-Parser, and Encrytion Setup
const express = require("express");
const app = express();
const models = require("./models");
const bodyParser = require("body-parser");
const pbkdf2 = require("pbkdf2");
const crypto = require("crypto");
const axios = require("axios");

var salt = crypto.randomBytes(20).toString("hex");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.use(function(req, res, next) {
  console.log(req.method, req.path);
  next();
});

var screenName, platform;

function apiCall() {
  axios
    .get(
      //   "https://public-api.tracker.gg/apex/v1/standard/profile/2/Day_Man3030",
      "https://public-api.tracker.gg/apex/v1/standard/profile/" +
        platform +
        "/" +
        screenName,
      {
        headers: {
          "TRN-Api-Key": "bea1468c-980b-4702-82a9-49d9fb838403"
        }
      }
    )
    .then(res => {
      console.log(res.data.data.children[0].metadata.legend_name);
      console.log(res.data.data.children[1].metadata.legend_name);
      console.log(res.data.data.children[2].metadata.legend_name);
      console.log(res.data.data.children[3].metadata.legend_name);
    })
    .catch(err => {
      console.log(err);
    });
}

function encryptionPassword(req, res, next) {
  var key = pbkdf2.pbkdf2Sync(req.body.password, salt, 36000, 256, "sha256");
  var hash = key.toString("hex");
  var prf = "pbkdf2_sha256";
  var iterations = "36000";

  req.body.password = `${prf}$${iterations}$${salt}$${hash}`;
  next();
}

// Passport Setup
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

app.get("/success", (req, res) => {
  res.send("Welcome " + req.query.username + " You Have Logged In!");
});
app.get("/error", (req, res) => {
  res.send("Error Logging In");
});

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  models.user.findOne({ where: { id: id } }).then(function(user) {
    cb(null, user);
  });
});

// Passport Local Authentication
const localStrategy = require("passport-local").Strategy;

passport.use(
  new localStrategy(function(username, password, done) {
    models.user
      .findOne({
        where: {
          username: username
        }
      })
      .then(function(user) {
        if (!user) {
          return done(null, false);
        }
        if (user.password != password) {
          return done(null, user);
        }
        return done(null, user);
      })
      .catch(function(err) {
        return done(err);
      });
  })
);

app.post(
  "/",
  passport.authenticate("local", { failureRedirect: "/error" }),
  function(req, res) {
    res.redirect("/success?username=" + req.user.username);
  }
);

app.post("/register", encryptionPassword, function(req, res) {
  models.user
    .create({
      username: req.body.username,
      password: req.body.password,
      screenName: req.body.screenName,
      platform: req.body.platform
    })
    .then(function(user) {
      res.send(user);
    });
});

app.post("/login", encryptionPassword, function(req, res) {
  models.user
    .findOne({
      where: {
        username: req.body.username,
        password: req.body.password,
        screenName: req.body.screenName,
        platform: req.body.platform
      }
    })
    .then(function(user) {
      console.log("There was an User");
      console.log(user);
      res.send(user);
    });
});

// Dynamic Port Setting
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("App Listening on Port " + port));
