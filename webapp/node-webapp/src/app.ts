const express = require("express");
const mustache = require("mustache-express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

import {getUserCredentials} from "./middleware/getUserCredentials";
import {renderLogin} from "./middleware/renderLogin";
import {authenticate} from "./middleware/authenticate";
import {renderIndex} from "./middleware/renderIndex";
// import { userInfo } from "os";

const app = express();
const port = 3000;

app.use(bodyParser());
app.use(cookieParser());
app.engine("html", mustache());
app.set("view engine", "html");
app.set("views", __dirname + "/../views");

//app routes
app.get("/", getUserCredentials, renderIndex);
app.get("/login", renderLogin);

app.post("/login", authenticate);

//catch any other requests and render 404 page
app.all("*", (req, res) => {
    res.render("404", {
        url: req.url,
    });
});
app.listen(port, function () {
    console.log("listening on port " + port);
});
