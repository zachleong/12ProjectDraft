const express = require("express");

import {getUserCredentials} from "./middleware/getUserCredentials";
import { userInfo } from "os";

const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", __dirname + "/../views");
console.log(__dirname);

let renderindex = function (req, res, next) {
    res.render("index", {
        title: "website title",
        message: "user class is: " + res.locals.user_class,
        message2: "user id is: " + res.locals.user_id,
    });
}
app.get("/", getUserCredentials, renderindex);

app.listen(port, function () {
    console.log("listening on port " + port);
})
