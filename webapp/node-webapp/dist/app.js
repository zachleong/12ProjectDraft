"use strict";
exports.__esModule = true;
var express = require("express");
var mustache = require("mustache-express");
var getUserCredentials_1 = require("./middleware/getUserCredentials");
var app = express();
var port = 3000;
app.engine("html", mustache());
app.set("view engine", "html");
app.set("views", __dirname + "/../views");
var renderindex = function (req, res, next) {
    res.render("index", {
        title: "website title",
        message: "user class is: " + res.locals.thisUser.getUserClass(),
        message2: "user id is: " + res.locals.thisUser.getUserID()
    });
};
app.get("/", getUserCredentials_1.getUserCredentials, renderindex);
//catch any other requests and render 404 page
app.get("*", function (req, res) {
    res.render("404", {
        url: req.url
    });
});
app.listen(port, function () {
    console.log("listening on port " + port);
});
