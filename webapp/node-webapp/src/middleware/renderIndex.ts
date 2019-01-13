let renderIndex = function (req, res, next) {
    res.render("index", {
        title: "Website Title",
        message: "user class is: " + res.locals.thisUser.getUserClass(),
        message2: "user id is: " + res.locals.thisUser.getUserID(),
        username: "Your username is: " + res.locals.thisUser.getUserName(),
        password: "Your password is: " + res.locals.thisUser.getUserPass(),
        
    });
}

export {renderIndex};