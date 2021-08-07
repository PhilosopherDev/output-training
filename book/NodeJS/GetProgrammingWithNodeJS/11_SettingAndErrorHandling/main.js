const homeController = require("./controllers/homeController");
const middlewareController = require("./controllers/middlewareController");
const userSignUpProcessor = require("./controllers/userSignUpProcessor");
const port = 3000,
    express = require("express"),
    ejs = require("ejs"),
    layouts = require("express-ejs-layouts"),
    app = express();

/** express 에서 사용하는 port 변수를 적용하는 코드 */ 
app.set("port", process.env.PORT || 3000);

/** view engine 으로 사용할 파일을 정하는 코드, 이 코드로 인해 view engine에서 사용하는 코드의 확장자를 정하지 않아도 된다. */
app.set("view engine", "ejs");

/** express-ejs 의 변하지 않고 계속 나타나는 layout 관련 처리를 위한 라이브러리 사용 */
app.use(layouts);

/** body-parser 에서 하던 부분이 express 에 포함됨 */
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

/** middleware 로 request body, query 확인하는 코드 */
app.use(middlewareController.checkReqBodyAndQuery);

/** routing */

/** app.use 로 해도 작동하고, app.get 으로 해도 작동한다. ejs 파일 app.render 로 보여주는 코드 */
app.use("/name/:myName", homeController.respondWithName);

/** get route */
app.get("/items/:vegetable", homeController.sendReqParam);

/** post route */
app.post("/", homeController.sendPostRes);
app.post("/signup", userSignUpProcessor.sendPostRes);

/** server listen */
app.listen(app.get("port"), () => {
    console.log(`Server is running in ${app.get("port")} port`);
});
