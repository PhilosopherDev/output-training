const path = require("path");
const httpStatus = require("http-status-codes");

exports.respondNoResourceFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode).sendFile(`./public/${errorCode}.html`, { root: "./"});
};

exports.resspondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log("==================================");
    console.log(`ERROR occurred: ${error.stack}`);
    console.log("==================================");
    res.status(errorCode).sendFile(`./public/${errorCode}.html`, { root: "./" });
};