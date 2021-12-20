const arr = [1,2,3,4,5,6,7,8,9];

// arr.map((val) => {
//     const uniqueId = Math.random();
//     console.log(val, uniqueId);
//     console.log(this);
// });

arr.forEach((() => {
    const uniqueId = Math.random();
    return (val) => {
        console.log(val, uniqueId);
        // console.log(this);
    }
})());
console.log("===============================");

const instanceTest = (function instanceTest() {
    const uniqueId = Math.random();
    return function (val) {
        console.log(val, uniqueId);
        // console.log(this);
    }
})()

arr.forEach(instanceTest);

console.log("===============================");
var instancetest2 = (() => {
    const uniqueId = Math.random();
    return function (val) {
        console.log(val, uniqueId);
        // console.log(this);
    }
})();

for (let i=1; i<10; i++) {
    instancetest2(i);
}

console.log("===============================");
for (let i=1; i<10; i++) {
    var instancetest3 = (() => {
        const uniqueId = Math.random();
        return function (val) {
            console.log(val, uniqueId);
            // console.log(this);
        }
    })();
    instancetest3(i);
}

console.log("===============================");

function callbackTest(callback, idx) {
    callback(idx);
}

var instancetest4 = (() => {
    const uniqueId = Math.random();
    return function (val) {
        console.log(val, uniqueId);
        // console.log(this);
    }
})();
for (let i=1; i<10; i++) {
    callbackTest(instancetest4, i);
}

console.log("===============================");
for (let i=1; i<10; i++) {
    var instancetest5 = (() => {
        const uniqueId = Math.random();
        return function (val) {
            console.log(val, uniqueId);
            // console.log(this);
        }
    })();
    callbackTest(instancetest5, i);
}
