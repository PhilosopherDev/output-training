"use strict";

const httpStatus = require("http-status-codes"),
  contentTypes = require("./content-types"),
  utils = require("./utils");

// Router Singleton
class Router {
  constructor () {
    this.routes = {
      GET: {},
      POST: {}
    };

    this.handle = this.handle.bind(this);
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
  }
  
  handle(req, res) {
    try {      
      this.routes[req.method][req.url](req, res);
    } catch (e) {
      res.writeHead(httpStatus.OK, contentTypes.html);
      utils.getFile("views/error.html", res);
    }
  };

  get(url, action) {
    this.routes["GET"][url] = action;
  };
  
  post(url, action) {
    this.routes["POST"][url] = action;
  };
}

module.exports = new Router();


/** Legacy */

// const routes = {
//   GET: {},
//   POST: {}
// };

// exports.handle = (req, res) => {
//   try {
//     routes[req.method][req.url](req, res);
//   } catch (e) {
//     res.writeHead(httpStatus.OK, contentTypes.html);
//     utils.getFile("views/error.html", res);
//   }
// };

// exports.get = (url, action) => {
//   routes["GET"][url] = action;
// };

// exports.post = (url, action) => {
//   routes["POST"][url] = action;
// };