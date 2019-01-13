"use strict";
exports.__esModule = true;
var getUserFromJWT_1 = require("../jwtHandlers/getUserFromJWT");
function getUserCredentials(req, res, next) {
    var jwt = req.get("auth");
    if (jwt) {
        res.locals.thisUser = getUserFromJWT_1.getUserFromJWT(jwt);
        next();
    }
    else {
        // res.locals.thisUser = getUserFromJWT(jwt);
        res.redirect("/login");
        // next();
    }
}
exports.getUserCredentials = getUserCredentials;
