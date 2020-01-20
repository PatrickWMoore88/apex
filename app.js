// Express, Body-Parser, and Encrytion Setup
const express = require("express");
const app = express();
const session = require("express-session");
const models = require("./models");
const bodyParser = require("body-parser");
// const pbkdf2 = require("pbkdf2");
// const axios = require("axios");
const accountRouter = require("./routes/account");
const exploreRouter = require("./routes/explore");
const authLocal = require("./auth/local");
const authGoogle = require("./auth/google");

require("dotenv").config();

var salt = process.env.SALT_KEY;

app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(authLocal);
app.use(authGoogle);

app.use(
  session({
    secret: process.env.SECRET,
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

// function apiCall(screen_name, platformId) {
//   return axios
//     .get(
//       "https://public-api.tracker.gg/apex/v1/standard/profile/" +
//         platformId +
//         "/" +
//         screen_name,
//       {
//         headers: {
//           "TRN-Api-Key": process.env.API_KEY
//         }
//       }
//     )
//     .then(res => {
//       this.res = res.data.data.children;
//       apexData = this.res;
//       return apexData;
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

// function encryptionPassword(password) {
//   var key = pbkdf2.pbkdf2Sync(password, salt, 36000, 256, "sha256");
//   var hash = key.toString("hex");
//   return hash;
// }

// // Passport Setup
// const passport = require("passport");
// app.use(passport.initialize());
// app.use(passport.session());

// app.get("/success", (req, res) => {
//   if (req.isAuthenticated()) {
//     res.send("Welcome " + req.user.name + " You Have Logged In!");
//   } else {
//     res.send("Not Authorized!");
//   }
// });
// app.get("/error", (req, res) => {
//   res.send("Error Please Try Again");
// });

// passport.serializeUser(function(user, cb) {
//   cb(null, user.id);
// });

// passport.deserializeUser(function(id, cb) {
//   models.user.findOne({ where: { id: id } }).then(function(user) {
//     cb(null, user);
//   });
// });

app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/registration", (req, res) => {
//   res.render("registration");
// });

// app.post("/register", async (req, res) => {
//   // try {
//   await models.user
//     .findOne({
//       where: { name: req.body.user_name }
//     })
//     .then(function(registeredUser) {
//       if (registeredUser) {
//         console.log(new Error("Sorry, please try a different User Name"));
//         res.redirect("/registration");
//       } else {
//         models.user
//           .create({
//             name: req.body.user_name,
//             password: encryptionPassword(req.body.password),
//             screen_name: req.body.screen_name,
//             platform: req.body.platform
//           })
//           .then(function(user) {
//             res.redirect("/login");
//           });
//       }
//     });
// });

// app.get("/login", (req, res) => {
//   res.render("login");
// });

// app.post("/login", async (req, res) => {
//   try {
//     let dbuser = await models.user
//       .findOne({
//         where: {
//           name: req.body.user_name,
//           password: encryptionPassword(req.body.password)
//         }
//       })
//       .then(function(user) {
//         // req.session.user_id = dbuser.id;
//         if (!req.body.name === user.dataValues.name) {
//           res.send("Sorry you are not authorized!");
//         } else {
//           console.log(user);
//           let platform = user.dataValues.platform;
//           let screen_name = user.dataValues.screen_name;
//           if (platform == "XBOX") {
//             var platformId = 1;
//           } else if (platform == "PSN") {
//             var platformId = 2;
//           } else if (platform == "Origin / PC") {
//             var platformId = 5;
//           }
//           apiCall(screen_name, platformId).then(data => {
//             console.log(apexData[0].metadata.legend_name);
//             console.log(apexData[0].stats[0]);
//             console.log(apexData[0].stats[1]);
//             console.log(apexData[0].stats[2]);
//             console.log(apexData[1].metadata.legend_name);
//             console.log(apexData[1].stats[0]);
//             console.log(apexData[1].stats[1]);
//             console.log(apexData[1].stats[2]);
//             res.render("./account/dashboard", {
//               username: req.body.user_name,
//               legend1Name: data[0].metadata.legend_name,
//               legend1StatTracker1: data[0].stats[0].metadata.name,
//               legend1StatTracker1Data: data[0].stats[0].value,
//               legend1StatTracker2: data[0].stats[1].metadata.name,
//               legend1StatTracker2Data: data[0].stats[1].value,
//               legend1StatTracker3: data[0].stats[2].metadata.name,
//               legend1StatTracker3Data: data[0].stats[2].value,
//               legend2Name: data[1].metadata.legend_name,
//               legend2StatTracker1: data[1].stats[0].metadata.name,
//               legend2StatTracker1Data: data[1].stats[0].value,
//               legend2StatTracker2: data[1].stats[1].metadata.name,
//               legend2StatTracker2Data: data[1].stats[1].value,
//               legend2StatTracker3: data[1].stats[2].metadata.name,
//               legend2StatTracker3Data: data[1].stats[2].value,
//               legend3Name: data[2].metadata.legend_name,
//               legend3StatTracker1: data[2].stats[0].metadata.name,
//               legend3StatTracker1Data: data[2].stats[0].value,
//               legend3StatTracker2: data[2].stats[1].metadata.name,
//               legend3StatTracker2Data: data[2].stats[1].value,
//               legend3StatTracker3: data[2].stats[2].metadata.name,
//               legend3StatTracker3Data: data[2].stats[2].value,
//               legend4Name: data[3].metadata.legend_name,
//               legend4StatTracker1: data[3].stats[0].metadata.name,
//               legend4StatTracker1Data: data[3].stats[0].value,
//               legend4StatTracker2: data[3].stats[1].metadata.name,
//               legend4StatTracker2Data: data[3].stats[1].value,
//               legend4StatTracker3: data[3].stats[2].metadata.name,
//               legend4StatTracker3Data: data[3].stats[2].value
//             });
//           });
//         }
//       });
//   } catch (e) {
//     console.log(e);
//   }
// });

// app.get("/logout", (req, res) => {
//   if (session) {
//     req.session.destroy();
//     req.logout();
//     console.log("Session was destroyed");
//     res.redirect("login");
//   } else {
//     console.log("Session still active");
//   }
// });

// Dynamic Port Setting
var port = process.env.PORT || 8080;
app.listen(port, () => console.log("App Listening on Port " + port));
