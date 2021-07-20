/** 
 * 목적  
 * 1. fs.readFile 을 사용해 실제 html 파일을 serve 한다. 
 */

// my code 
// const port = 3000;
// http = require("http");
// httpStatus = require("http-status-codes");
// fs = require("fs");

// app = http.createServer((req, res) => {
//     console.log(req.url);
    
//     const resMap = {
//         "/": function () {
//             fs.readFile("./views/index.html", "utf-8", (err, data) => {
//                 if (err) {
//                     throw err;
//                 }
//                 res.end(data);
//             });
//         }
//     }
    
//     res.writeHeader(httpStatus.OK, {
//         "Content-Type": "text/html"
//     });
    
//     if (resMap[req.url]) {
//         resMap[req.url]();
//     } else {
//         var resMessage = "<h1>Static message!</h1>";
//         res.end(resMessage);
//     }
    
    
// }).listen(port);

// book code
const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    fs = require("fs");

// const routeMap = {
//     "/": "views/index.html"
// };
// http.createServer((req, res) => {
//     res.writeHead(httpStatus.OK, {
//         "Content-Type": "text/html"
//     });
//     if (routeMap[req.url]) {
//         fs.readFile(routeMap[req.url], (error, data) => {
//             res.write(data);
//             res.end();
//         });
//     } else {
//         res.end("<h1>Sorry, not found.</h1>")
//     }
// })
// .listen(port);
// console.log(`The server has started and is listening on port number: ${port}`);

//book code2
const getViewUrl = (url) => {
    return `views/${url}.html`;
}

http.createServer((req, res) => {
    let viewUrl = getViewUrl(req.url);
    fs.readFile(viewUrl, (err, data) => {
        if (err) {
            res.writeHead(httpStatus.NOT_FOUND);
            res.write("<h1>FILE NOT FOUND</h1>");
        } else {
            res.writeHead(httpStatus.OK, {
                "Content-Type": "text/html"
            });
            res.write(data);
        }
        res.end();
    });
})
.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);