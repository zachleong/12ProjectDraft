"use strict";
exports.__esModule = true;
var uuid = require("uuid");
function authenticate(req, res, next) {
    res.cookie("token", uuid());
    res.cookie("user", req.body.Username);
    res.cookie("pass", req.body.Password);
    res.redirect("/");
}
exports.authenticate = authenticate;
