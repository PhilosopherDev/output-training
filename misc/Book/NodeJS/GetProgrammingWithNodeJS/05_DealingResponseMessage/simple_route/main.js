const routeResponseMap = {
    "/": "<h1>Welcome</h1>",
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>Learn More About Us</h1>",
    "/hello": "<h1>Say hello by emailing us here</h1>",
    "/error": "<h1>Sorry the page you are looking for is not here</h1>"
}

const port = 3000;
http = require("http");
httpStatus = require("http-status-codes");
app = http.createServer((req, res) => {
    if (req.url === "/error") {
        res.writeHeader(httpStatus.NOT_FOUND, {
            "Content-Type": "text/html"
        });
        res.end(routeResponseMap[req.url]);
    } else if (routeResponseMap[req.url]) {
        res.writeHeader(httpStatus.OK, {
            "Content-Type": "text/html"
        });
    
        res.end(routeResponseMap[req.url]);
    } else {
        setTimeout(() => {
            res.end(routeResponseMap["/"]);
        }, 2000);
    }
    
}).listen(port);