"use strict";
exports.__esModule = true;
var renderIndex = function (req, res, next) {
    res.render("index", {
        title: "website title",
        message: "user class is: " + res.locals.thisUser.getUserClass(),
        message2: "user id is: " + res.locals.thisUser.getUserID()
    });
};
exports.renderIndex = renderIndex;
