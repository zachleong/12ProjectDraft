import {User} from "../dataStructures/user";
const uuid = require("uuid");

function getUserFromJWT (jwt) {
    let thisUser = new User("default_user", uuid());
    return thisUser;
}

export { getUserFromJWT };