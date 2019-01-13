"use strict";
exports.__esModule = true;
var express = require("express");
var mustache = require("mustache-express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var getUserCredentials_1 = require("./middleware/getUserCredentials");
var renderLogin_1 = require("./middleware/renderLogin");
var authenticate_1 = require("./middleware/authenticate");
var renderIndex_1 = require("./middleware/renderIndex");
// import { userInfo } from "os";
var app = express();
var port = 3000;
app.use(bodyParser());
app.use(cookieParser());
app.engine("html", mustache());
app.set("view engine", "html");
app.set("views", __dirname + "/../views");
//app routes
app.get("/", getUserCredentials_1.getUserCredentials, renderIndex_1.renderIndex);
app.get("/login", renderLogin_1.renderLogin);
app.post("/login", authenticate_1.authenticate);
//catch any other requests and render 404 page
app.all("*", function (req, res) {
    res.render("404", {
        url: req.url
    });
});
app.listen(port, function () {
    console.log("listening on port " + port);
});
