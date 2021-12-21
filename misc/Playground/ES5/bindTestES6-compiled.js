"use strict";

var _createClass = function () { 
    function defineProperties(target, props) { 
        for (var i = 0; i < props.length; i++) { 
            var descriptor = props[i]; 
            descriptor.enumerable = descriptor.enumerable || false; 
            descriptor.configurable = true; 
            if ("value" in descriptor) descriptor.writable = true; 
            Object.defineProperty(target, descriptor.key, descriptor); 
        } 
    } 
    return function (Constructor, protoProps, staticProps) { 
        if (protoProps) defineProperties(Constructor.prototype, protoProps); 
        if (staticProps) defineProperties(Constructor, staticProps); return Constructor; 
    }; 
}();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BindTest = function () {
    function BindTest(name) {
        _classCallCheck(this, BindTest);

        this.name = name;
        this.bindFunc = this.bindFunc.bind(this);
    }

    _createClass(BindTest, [{
        key: "bindFunc",
        value: function bindFunc() {
            console.log("bind", this.name);
        }
    }, {
        key: "notBindFunc",
        value: function notBindFunc() {
            console.log("not bind", this);
        }
    }]);

    return BindTest;
}();

var bindTest = new BindTest("marti");
var bindFunc = bindTest.bindFunc;
var notBindFunc = bindTest.notBindFunc;
bindTest.bindFunc();
bindTest.notBindFunc();

bindFunc();
notBindFunc();

BindTest.prototype.bindFunc();
BindTest.prototype.notBindFunc();