"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(user_class, user_id, user_name, user_pass) {
        this.user_class = user_class;
        this.user_id = user_id;
        this.user_name = user_name;
        this.user_pass = user_pass;
    }
    User.prototype.getUserID = function () {
        return this.user_id;
    };
    User.prototype.getUserClass = function () {
        return this.user_class;
    };
    User.prototype.getUserName = function () {
        return this.user_name;
    };
    User.prototype.getUserPass = function () {
        return this.user_pass;
    };
    return User;
}());
exports.User = User;
