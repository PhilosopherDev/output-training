const fs = require("fs"),
    httpStatus = require("http-status-codes"),
    contentType = require("./content-types");

module.exports = {
    getFile: (file, res) => {
        fs.read(`./${file}`, (error, data) => {
            if (error) {
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentType.html);
                res.end("<h1>There was an error serving content</h1>");
            }
            res.end(data);
        })
    }
}