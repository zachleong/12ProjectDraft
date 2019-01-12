"use strict";
exports.__esModule = true;
var uuid = require("uuid");
var getUserFromJWT_1 = require("../jwtHandlers/getUserFromJWT");
function getUserCredentials(req, res, next) {
    var jwt = req.get("auth");
    if (jwt) {
        var thisUser = getUserFromJWT_1.getUserFromJWT(jwt);
        res.locals.user_class = thisUser.getUserClass();
        res.locals.userid = thisUser.getUserid();
        next();
    }
}
exports.getUserCredentials = getUserCredentials;
