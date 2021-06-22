// import fs from "fs";
// import * as fs from "browserfs";
// const fs = require("fs");

var button = document.getElementById("button");
button.addEventListener("click", function(e) {
    console.log("111");
    setTimeout(function() {
        console.log("222");
        setTimeout(function() {
            console.log("333");
        }, 500);
    }, 500);
});