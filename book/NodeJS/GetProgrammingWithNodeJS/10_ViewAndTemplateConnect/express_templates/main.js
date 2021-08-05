const homeController = require("./controllers/homeController");
const middlewareController = require("./controllers/middlewareController");
const userSignUpProcessor = require("./controllers/userSignUpProcessor");
const port = 3000,
    express = require("express"),
    ejs = require("ejs"),
    layouts = require("express-ejs-layouts"),
    app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(layouts);

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.use(middlewareController.checkReqBodyAndQuery);

app.post("/", homeController.sendPostRes);

app.post("/signup", userSignUpProcessor.sendPostRes);

app.use("/name/:myName", homeController.respondWithName);

app.get("/items/:vegetable", homeController.sendReqParam);

app.listen(app.get("port"), () => {
    console.log(`Server is running in ${app.get("port")} port`);
});
