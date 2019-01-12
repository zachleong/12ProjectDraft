"use strict";
exports.__esModule = true;
var getUserFromJWT_1 = require("../jwtHandlers/getUserFromJWT");
function getUserCredentials(req, res, next) {
    var jwt = req.get("auth");
    if (jwt) {
        var thisUser = getUserFromJWT_1.getUserFromJWT(jwt);
        res.locals.user_class = thisUser.getUserClass();
        res.locals.userid = thisUser.getUserID();
        next();
    }
    else {
        var thisUser = getUserFromJWT_1.getUserFromJWT(jwt);
        res.locals.user_class = thisUser.getUserClass();
        res.locals.user_id = thisUser.getUserID();
        next();
    }
}
exports.getUserCredentials = getUserCredentials;
