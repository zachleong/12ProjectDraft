import {getUserFromJWT} from "../jwtHandlers/getUserFromJWT";

function getUserCredentials (req, res, next) {
    let jwt = req.get("auth");
    if (jwt) {
        res.locals.thisUser = getUserFromJWT(jwt);

        next();
    }
    else {
        res.locals.thisUser = getUserFromJWT(jwt);

        next();
    }
}

export {getUserCredentials};