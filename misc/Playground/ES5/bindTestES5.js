const BindTest = (function() {
    function BindTest(name) {
        this.name = name;
        this.bindFunc = this.bindFunc.bind(this);
    }

    BindTest.prototype.bindFunc = function() {
        console.log("bind", this.name);
    }

    BindTest.prototype.notBindFunc = function() {
        console.log("not bind", this.name);
    }

    return BindTest;
})()

const obj = {
    name: "hello"
}

const obj2 = {
    name: "world"
}

const obj3 = {
    name: "fooo"
}

// const bindTest = new BindTest("piupiu");

// bindTest.bindFunc();
// bindTest.notBindFunc();

// const bindFunc = bindTest.bindFunc;
// const notBindFunc = bindTest.notBindFunc;

// bindFunc();
// notBindFunc();

// const bindFunc2 = bindTest.bindFunc.bind(obj);
// console.log("bindFunc2");
// bindFunc2();


function bind(originalFunction, context) {
    console.log("bind");
    return function () {
        console.log(context);
        originalFunction.call(context);
    };
}

function orgFunc() {
    console.log(this.name);
}


const newFunc = bind(orgFunc, obj);
const newFunc2 = bind(newFunc, obj2);
const newFunc3 = bind(newFunc2, obj3);

newFunc();
newFunc2();
newFunc3();
