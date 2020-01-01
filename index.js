// Express, Body-Parser, and Encrytion Setup
const express = require("express");
const app = express();
const models = require("./models");
const bodyParser = require("body-parser");
const pbkdf2 = require("pbkdf2");
const crypto = require("crypto");
const axios = require("axios");
const accountRouter = require("./routes/account");
const exploreRouter = require("./routes/explore");

var salt = crypto.randomBytes(20).toString("hex");

app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));
app.use("/account", accountRouter);
app.use("/explore", exploreRouter);

app.use(function(req, res, next) {
  console.log(req.method, req.path);
  next();
});

var screen_name, platform;
var apexData = [];
var legendInfo = {};

function platformChange(platform) {
  app.get("/register");
  models.user
    .findOne({
      where: {
        platform: req.body.platformId
      }
    })
    .then(function(platform) {
      if (platform == "XBOX") {
        var platformId = 1;
      } else if (platform == "PSN") {
        var platformId = 2;
      } else if (platform == "Origin / PC") {
        var platformId = 5;
      }
      console.log(platformId);
      return platformId;
    });
  return platformId;
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
          "TRN-Api-Key": "bea1468c-980b-4702-82a9-49d9fb838403"
        }
      }
    )
    .then(res => {
      this.res = res.data.data.children;
      apexData = this.res;
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

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/registration", (req, res) => {
  res.render("registration");
});

app.post(
  "/",
  passport.authenticate("local", { failureRedirect: "/error" }),
  function(req, res) {
    res.redirect("/success?name=" + req.user.name);
  }
);

app.post("/register", encryptionPassword, function(req, res) {
  models.user.create({
    name: req.body.user_name,
    password: JSON.stringify(req.body.password),
    screen_name: req.body.screen_name,
    platform: req.body.platform
  });
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", encryptionPassword, function(req, res) {
  models.user
    .findOne({
      where: {
        name: req.body.user_name,
        password: req.body.password
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
        for (var i = 0; i < apexData.length; i++) {
          var metadata = "metadata_" + apexData[i].metadata.legend_name;
          var stats = "stats_" + apexData[i].metadata.legend_name;
          legendInfo[metadata] = apexData[i].metadata;
          legendInfo[stats] = apexData[i].stats[i];
        }
        res.render("/account/dashboard");
      });
    });
});

// Dynamic Port Setting
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("App Listening on Port " + port));
