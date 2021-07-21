const port = 3000, http = require("http"), httpStatus = require("http-status-codes"), fs = require("fs");

const sendErrorResponse = res => {
    res.writeHead(httpStatus.NOT_FOUND, {
        "Content-Type": "text/html"
    });
    res.write("<h1>File Not Found!</h1>");
    res.end();
};

http.createServer((req, res) => {
    let url = req.url;
    console.log({url}); // "/" 가 앞에 포함되서 온다. 
    if (url.indexOf(".html") !== -1) {
        res.writeHead(httpStatus.OK, {
            "Content-Type": "text/html"
        });
        customReadFile(`views${url}`, res);
    } else if (url.indexOf(".js") !== -1) {
        res.writeHead(httpStatus.OK, {
            "Content-Type": "text/js"
        });
        customReadFile(`public/js${url}`, res);
    } else if (url.indexOf(".css") !== -1) {
        res.writeHead(httpStatus.OK, {
            "Content-Type": "text/css"
        });
        customReadFile(`public/css${url}`, res);
    } else if (url.indexOf(".jpg") !== -1) {
        res.writeHead(httpStatus.OK, {
            "Content-Type": "image/jpg"
        });
        customReadFile(`public/images${url}`, res);
    } else {
        sendErrorResponse(res);
    }
}).listen(port);

function customReadFile(path, res) {
    console.log({path});
    if (fs.existsSync(path)) { // 파일 있는지 확인
        fs.readFile(path, (err, data) => {
            if (err) {
                console.log(err);
                sendErrorResponse(res);
            }
            res.write(data);
            res.end();
        });
    } else {
        sendErrorResponse(res);
    }
}