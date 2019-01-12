import {getUserFromJWT} from "../jwtHandlers/getUserFromJWT";

function getUserCredentials (req, res, next) {
    let jwt = req.get("auth");
    if (jwt) {
        let thisUser = getUserFromJWT(jwt);
        res.locals.user_class = thisUser.getUserClass();
        res.locals.userid = thisUser.getUserID();

        next();
    }
    else {
        let thisUser = getUserFromJWT(jwt);
        res.locals.user_class = thisUser.getUserClass();
        res.locals.user_id = thisUser.getUserID();

        next();
    }
}

export {getUserCredentials};