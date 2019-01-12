"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(user_class, user_id) {
        this.user_class = user_class;
        this.user_id = user_id;
    }
    User.prototype.getUserID = function () {
        return this.user_id;
    };
    User.prototype.getUserClass = function () {
        return this.user_class;
    };
    return User;
}());
exports.User = User;
