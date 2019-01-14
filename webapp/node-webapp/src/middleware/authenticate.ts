const uuid = require("uuid");

function authenticate (req, res, next) {
    res.cookie("token", uuid());
    res.cookie("user", req.body.Username);
    res.cookie("pass", req.body.Password);
    
    res.redirect("/");
}

export {authenticate};