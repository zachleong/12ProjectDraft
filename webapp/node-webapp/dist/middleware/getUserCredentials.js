"use strict";
exports.__esModule = true;
var getUserFromToken_1 = require("../jwtHandlers/getUserFromToken");
var is_alive_1 = require("./is_alive");
function getUserCredentials(req, res, next) {
    if (req.cookies.token && is_alive_1.is_alive(req.cookies.token)) {
        var token = req.cookies.token;
        var user_name = req.cookies.user;
        var password = req.cookies.pass;
        res.locals.thisUser = getUserFromToken_1.getUserFromToken(token, user_name, password);
        next();
    }
    else {
        res.redirect("/login");
    }
}
exports.getUserCredentials = getUserCredentials;
