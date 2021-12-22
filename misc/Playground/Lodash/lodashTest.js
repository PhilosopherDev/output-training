const _ = require('lodash');
console.log("lodash");

const a = [1,2,3,4];
const b = _.map(a, (function () {
    const uniqueId = Math.random();
    return function (val) { 
        console.log(uniqueId);
        return val*2 
    }
})());
console.log(b);



