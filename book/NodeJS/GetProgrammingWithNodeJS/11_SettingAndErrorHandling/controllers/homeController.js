exports.sendReqParam = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
}

exports.sendPostRes = (req, res) => {    
    console.log("-------sendPostRes---------");
    console.log("req.body", req.body);
    console.log("req.body stringify", JSON.stringify(req.body));
    console.log("req.query", req.query);
    res.send("POST successful!");
    console.log("---------------------------");
}

exports.respondWithName = (req, res) => {
    let name = req.params.myName;
    /**
     * 넘기는 name 변수가 index.ejs 에서 사용하는 변수랑 동일해야 한다. 
     * index.ejs 로 ejs 까지 명시 안해도 되는건 app.set 으로 viewengine 을 ejs 로 명시했기 때문이다.
     */
    res.render("index", { name }); 
}