const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const accountRouter = require("./routes/account");
const authLocal = require("./auth/local");
const authGoogle = require("./auth/google");
require("dotenv").config();

app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(authLocal);
app.use(authGoogle);
app.use(express.static(__dirname + "/public"));
app.use("/account", accountRouter);

app.get("/", (req, res) => {
  res.render("index");
});

var port = process.env.PORT || 8080;
app.listen(port, () => console.log("App Listening on Port " + port));
