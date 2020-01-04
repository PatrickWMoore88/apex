// Express, Body-Parser, and Encrytion Setup
const express = require("express");
const app = express();
const session = require("express-session");
const models = require("./models");
const bodyParser = require("body-parser");
const pbkdf2 = require("pbkdf2");
// const crypto = require("crypto");
const axios = require("axios");
const accountRouter = require("./routes/account");
const exploreRouter = require("./routes/explore");
require("dotenv").config();

var salt = Process.env.SALT_KEY;

app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "La Li Lu Le Lo",
    resave: false,
    saveUninitialized: true,
    unset: "destroy"
  })
);
app.use(express.static(__dirname + "/public"));
app.use("/account", accountRouter);
app.use("/explore", exploreRouter);

app.use(function(req, res, next) {
  console.log(req.method, req.path);
  next();
});

var apexData = [];
var legendInfo = {};

function apiCall(screen_name, platformId) {
  return axios
    .get(
      "https://public-api.tracker.gg/apex/v1/standard/profile/" +
        platformId +
        "/" +
        screen_name,
      {
        headers: {
          "TRN-Api-Key": Process.env.API_KEY
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
app.use(passport.initialize());
app.use(passport.session());

app.get("/success", (req, res) => {
  if (req.isAuthenticated()) {
    res.send("Welcome " + req.user.name + " You Have Logged In!");
  } else {
    res.send("Not Authorized!");
  }
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

app.get("/", (req, res) => {
  res.render("index");
});

app.post(
  "/",
  passport.authenticate("local", { failureRedirect: "/error" }),
  function(req, res) {
    res.redirect("/success");
  }
);

app.get("/registration", (req, res) => {
  res.render("registration");
});

app.post("/register", async (req, res) => {
  try {
    await models.user
      .findOne({
        where: { name: req.body.user_name }
      })
      .then(function(registeredUser) {
        if (!registeredUser) {
          console.log("No User");
          res.redirect("/login");
        }

        if (registeredUser != req.body.user_name) {
          // throw new Error("Sorry, please try a different User Name");
          models.user.create({
            name: req.body.user_name,
            password: encryptionPassword(req.body.password),
            screen_name: req.body.screen_name,
            platform: req.body.platform
          });
        } else {
          throw new Error("Sorry, please try a different User Name");
          // models.user.create({
          //   name: req.body.user_name,
          //   password: JSON.stringify(req.body.password),
          //   screen_name: req.body.screen_name,
          //   platform: req.body.platform
          // });
        }
      });
  } catch (error) {
    console.log(error, req.body.user_name);
  }
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  models.user
    .findOne({
      where: {
        name: req.body.user_name,
        password: encryptionPassword(req.body.password)
        // screen_name: req.body.screen_name,
        // platform: req.body.platform
      }
    })
    .then(function(user) {
      console.log(user);
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
        // for (var i = 0; i < apexData.length; i++) {
        //   var metadata = "metadata_" + apexData[i].metadata.legend_name;
        //   var stats = "stats_" + apexData[i].metadata.legend_name;
        //   legendInfo[metadata] = apexData[i].metadata;
        //   legendInfo[stats] = apexData[i].stats[i];
        // }
        // console.log(legendInfo);
        console.log(apexData[0].metadata.legend_name);
        console.log(apexData[0].stats);
      });
      res.render("./account/dashboard");
    });
  // res.render("./account/dashboard");
});

// Dynamic Port Setting
const port = process.env.PORT || 8080;
app.listen(port, () => console.log("App Listening on Port " + port));
