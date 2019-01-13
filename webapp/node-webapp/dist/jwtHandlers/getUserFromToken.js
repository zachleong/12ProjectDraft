"use strict";
exports.__esModule = true;
var user_1 = require("../dataStructures/user");
function getUserFromToken(token, user_name, password) {
    var thisUser = new user_1.User("default_user", token, user_name, password);
    return thisUser;
}
exports.getUserFromToken = getUserFromToken;
