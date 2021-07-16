/** 
 * 목적  
 * 1. fs.readFile 을 사용해 실제 html 파일을 serve 한다. 
 */

// my code 
const port = 3000;
http = require("http");
httpStatus = require("http-status-codes");
fs = require("fs");

app = http.createServer((req, res) => {
    console.log(req.url);
    
    const resMap = {
        "/": function () {
            fs.readFile("./views/index.html", "utf-8", (err, data) => {
                if (err) {
                    throw err;
                }
                res.end(data);
            });
        }
    }
    
    res.writeHeader(httpStatus.OK, {
        "Content-Type": "text/html"
    });
    
    if (resMap[req.url]) {
        resMap[req.url]();
    } else {
        var resMessage = "<h1>Static message!</h1>";
        res.end(resMessage);
    }
    
    
}).listen(port);

// book code
