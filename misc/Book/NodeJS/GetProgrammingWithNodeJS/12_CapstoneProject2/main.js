const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");
const express = require("express"),
    app = express(),
    layouts = require("express-ejs-layouts");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(layouts);

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Confetti Cuisine!");
    res.end();
});

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedContactForm);


app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});