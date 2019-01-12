const uuid = require("uuid");
import {User} from "../dataStructures/user";
import {getUserFromJWT} from "../jwtHandlers/getUserFromJWT";

function getUserCredentials (req, res, next) {
    let jwt = req.get("auth");
    if (jwt) {
        let thisUser = getUserFromJWT(jwt);
        res.locals.user_class = thisUser.getUserClass();
        res.locals.userid = thisUser.getUserid();

        next();
    }
}

export {getUserCredentials};