/**
 * You don't know js - closure 예제 5.5.1 
 */

var MyModules = (function Manager() {
    var modules = {};

    function define(name, deps, impl) {
        for (var i=0; i<deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);
    }

    function get(name) {
        return modules[name];
    }

    return {
        define: define,
        get: get,
        modules
    };
})();

MyModules.define("bar", [], function() {
    return {
        hello: function hello(who) {
            return "Let me introduce: " + who;
        }
    };
});

MyModules.define("baz", [], function() {
    return {
        sayHi: function sayHi(who) {
            return "Say Hi to " + who;
        }
    }
});

MyModules.define("foo", ["bar", "baz"], function(bar, baz) {
    var hungry = "hippo123";
    return {
        awesome: function awesome() {
            console.log(bar.hello(hungry).toUpperCase());
            console.log(baz.sayHi(hungry).toLowerCase());
        }
    };
});

var bar = MyModules.get("bar");
var foo = MyModules.get("foo");

console.log(
    bar.hello("hippo")
)

console.log(
    bar.hello("eligator")
)

foo.awesome();
console.log(MyModules.modules);