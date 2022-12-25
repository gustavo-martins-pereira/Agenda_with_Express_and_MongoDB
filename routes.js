const express = require("express");
const route = express.Router();

/* CONTROLLERS */
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");
const contactController = require("./src/controllers/contactController");

const { loginRequired } = require("./src/middlewares/middleware");


/* INDEX */
// GET
route.get("/", homeController.index,);

/* LOGIN */
// GET
route.get("/login", loginController.index);
route.get("/login/logout", loginController.logout);

// POST
route.post("/login/register", loginController.register);
route.post("/login/login", loginController.login);

/* CONTACT */
// GET
route.get("/contact", loginRequired, contactController.index);
route.get("/contact/:id", loginRequired, contactController.editIndex);
route.get("/contact/delete/:id", loginRequired, contactController.delete);

// POST
route.post("/contact/register", loginRequired, contactController.register);
route.post("/contact/edit/:id", loginRequired, contactController.edit);

module.exports = route;