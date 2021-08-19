const httpStatus = require("http-status-codes");

exports.pageNotFoundError = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render("error");
};

exports.internalServerError = (req, res) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`Error occurred: ${error.stack}`);
    res.httpStatus(errorCode);
    res.send(`${errorCode} | Sorry, our applicatoin is taking a nap!`);
}