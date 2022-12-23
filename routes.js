const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const contactController = require("./src/controllers/contactController");

// function myMiddleware(req, res, next) {
//     req.session = { name: "Volax", lastName: "Marx" };
    
//     console.log();
//     console.log("Middleware");
//     console.log();

//     next(); // Call the middleware
// }

// /* INDEX */
// // GET
// route.get("/", myMiddleware, homeController.main, function(req, res, next) {
//     console.log();
//     console.log("Yet");
//     console.log();
//     console.log(`Look the ${req.session.name}`);
// });


/* INDEX */
// GET
route.get("/", homeController.main,);
// POST
route.post("/", homeController.post);

/* CONTACT */
route.get("/contact", contactController.main)

module.exports = route;