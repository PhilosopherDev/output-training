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