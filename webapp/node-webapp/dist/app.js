"use strict";
exports.__esModule = true;
var express = require("express");
var getUserCredentials_1 = require("./middleware/getUserCredentials");
var app = express();
var port = 3000;
app.set("view engine", "pug");
var renderindex = function (req, res, next) {
    res.render("index", {
        title: "website title",
        message: res.locals.userinfo
    });
};
app.get("/", getUserCredentials_1.getUserCredentials, renderindex);
app.listen(port, function () {
    console.log("listening on port " + port);
});
