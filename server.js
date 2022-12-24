// NODE MODULES
require("dotenv").config();
const express = require("express");

const app = express();
const path = require("path");

// DATABASE
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log("Connection been successful");
        app.emit("Done");
    })
    .catch(e => console.log(e));

// SECTION
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const sessionOptions = session({
    secret: "gfsdgdfgsdgsdfsdfg()",
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);

app.use(flash());

// USER MODULES
const routes = require("./routes");
const myMiddleware = require("./src/middlewares/middleware");


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

app.use(myMiddleware);

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(routes);


app.on("Done", () => {
    app.listen(3000, () => {
        console.log("Server running in http://localhost:3000");
    });
});