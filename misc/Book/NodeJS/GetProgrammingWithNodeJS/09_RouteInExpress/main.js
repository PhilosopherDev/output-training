const homeController = require("./Controller/homeController");
const middlewareController = require("./Controller/middlewareController");
const userSignUpProcessor = require("./Controller/userSignUpProcessor");
const port = 3000,
    express = require("express"),
    app = express();

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.use(middlewareController.checkReqBodyAndQuery);

app.post("/", homeController.sendPostRes);

app.post("/signup", userSignUpProcessor.sendPostRes);

app.get("/items/:vegetable", homeController.sendReqParam);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
