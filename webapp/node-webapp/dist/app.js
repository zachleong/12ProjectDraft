"use strict";
exports.__esModule = true;
var express = require("express");
var getUserCredentials_1 = require("./middleware/getUserCredentials");
var app = express();
var port = 3000;
app.set("view engine", "pug");
app.set("views", __dirname + "/../views");
console.log(__dirname);
var renderindex = function (req, res, next) {
    res.render("index", {
        title: "website title",
        message: "user class is: " + res.locals.user_class,
        message2: "user id is: " + res.locals.user_id
    });
};
app.get("/", getUserCredentials_1.getUserCredentials, renderindex);
app.listen(port, function () {
    console.log("listening on port " + port);
});
