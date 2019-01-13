import {User} from "../dataStructures/user";

function getUserFromToken (token, user_name, password) {
    let thisUser = new User("default_user", token, user_name, password);
    return thisUser;
}

export { getUserFromToken };