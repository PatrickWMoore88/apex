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

var screen_name, platform;

function platformChange(platform) {
  if (platform == "XBOX") {
    var platformId = 1;
  } else if (platform == "PSN") {
    var platformId = 2;
  } else if (platform == "Origin / PC") {
    var platformId = 5;
  }
  return platformId;
}

function apiCall(screen_name, platformId) {
  var apexData = axios
    .get(
      "https://public-api.tracker.gg/apex/v1/standard/profile/" +
        platformId +
        "/" +
        screen_name,
      {
        headers: {
          "TRN-Api-Key": "bea1468c-980b-4702-82a9-49d9fb838403"
        }
      }
    )
    .then(res => {
      console.log(apexData);
    })
    .catch(err => {
      console.log(err);
    });
}
// function pickedData(response) {
//   var res = response;
//   return res;
// }

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
  res.send("Welcome " + req.query.name + " You Have Logged In!");
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
  new localStrategy(function(name, password, done) {
    models.user
      .findOne({
        where: {
          name: name
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
    res.redirect("/success?name=" + req.user.name);
  }
);

app.post("/register", encryptionPassword, function(req, res) {
  models.user
    .create({
      name: req.body.username,
      password: req.body.password,
      screen_name: req.body.screen_name,
      platform: req.body.platform
    })
    .then(function(user) {
      console.log(user);
      let platform = user.dataValues.platform;
      let screen_name = user.dataValues.screen_name;
      let platformId = platformChange(platform);
      console.log(platformId);
      let apexData = apiCall(screen_name, platformId);
      console.log(apexData);
      // apiCall(screen_name, platformId);
      // res.redirect("/login");
      res.send("Welcome ");
    });
});

app.post("/login", encryptionPassword, function(req, res) {
  models.user
    .findOne({
      where: {
        name: req.body.username,
        password: req.body.password
      }
    })
    .then(function(user) {
      console.log("There was an User");
      platformChange(platform);
      // apiCall(screen_name, platformId);
      console.log(user);
      res.send("Welcome " + screen_name);
    });
});

// Dynamic Port Setting
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("App Listening on Port " + port));
