exports.checkReqBodyAndQuery = (req, res, next) => {
    console.log("-------checkReqBodyAndQuery---------");
    console.log(`request made to ${req.url}`);
    console.log(`request query ${req.query}`);
    console.log(`request query stringify: ${JSON.stringify(req.query)}`);
    console.log("------------------------------------");
    next();
}