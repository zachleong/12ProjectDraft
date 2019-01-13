const express = require("express");
const mustache = require("mustache-express");

import {getUserCredentials} from "./middleware/getUserCredentials";
import { userInfo } from "os";

const app = express();
const port = 3000;

app.engine("html", mustache());
app.set("view engine", "html");
app.set("views", __dirname + "/../views");

let renderindex = function (req, res, next) {
    res.render("index", {
        title: "website title",
        message: "user class is: " + res.locals.thisUser.getUserClass(),
        message2: "user id is: " + res.locals.thisUser.getUserID(),
    });
}
//app routes
app.get("/", getUserCredentials, renderindex);

//catch any other requests and render 404 page
app.all("*", (req, res) => {
    res.render("404", {
        url: req.url,
    });
});
app.listen(port, function () {
    console.log("listening on port " + port);
});
