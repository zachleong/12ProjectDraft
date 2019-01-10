const uuid = require("uuid")

function getUserCredentials (req, res, next) {
    res.locals.userinfo = "sometext" + " " + uuid()

    next()
}

module.exports = getUserCredentials