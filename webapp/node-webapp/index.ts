const express = require("express")

const getUserCredentials = require("./middleware/getUserCredentials.js")

const app = express()
const port = 3000

app.set("view engine", "pug")

let renderindex = function (req, res, next) {
    res.render("index", {
        title: "website title",
        message: res.locals.userinfo,
    })
}
app.get("/", getUserCredentials, renderindex)

app.listen(port, function () {
    console.log("listening on port " + port)
})
