import {getUserFromToken} from "../jwtHandlers/getUserFromToken";
import {is_alive} from "./is_alive";

function getUserCredentials (req, res, next) {
    if (req.cookies.token && is_alive(req.cookies.token)) {
        let token = req.cookies.token;
        let user_name = req.cookies.user;
        let password = req.cookies.pass;
        res.locals.thisUser = getUserFromToken(token, user_name, password);

        next();
    }
    else {
        res.redirect("/login");

    }
}

export {getUserCredentials};