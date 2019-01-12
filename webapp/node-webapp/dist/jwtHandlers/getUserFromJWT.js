"use strict";
exports.__esModule = true;
var user_1 = require("../dataStructures/user");
var uuid = require("uuid");
function getUserFromJWT(jwt) {
    var thisUser = new user_1.User("default_user", uuid());
    return thisUser;
}
exports.getUserFromJWT = getUserFromJWT;
