const port = 3000,
    express = require("express"),
    app = express();

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.use((req, res, next) => {
    console.log(`request made to ${req.url}`);
    console.log(`request query ${req.query}`);
    console.log(`request query stringify: ${JSON.stringify(req.query)}`);
    next();
});

app.post("/", (req, res) => {    
    console.log("req.body", req.body);
    console.log("req.body stringify", JSON.stringify(req.body));
    console.log("req.query", req.query);
    res.send("POST successful!");
});

app.get("/items/:vegetable", (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
