const express = require("express");
const route = express.Router();

/* CONTROLLERS */
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");


/* INDEX */
// GET
route.get("/", homeController.index,);

/* LOGIN */
route.get("/login", loginController.index);
route.post("/login/register", loginController.register);

module.exports = route;