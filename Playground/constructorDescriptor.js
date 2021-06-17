const myObj = {};

var constructor = Object.getOwnPropertyDescriptor(myObj.__proto__, "constructor");
console.log(constructor); 
/* enumerable 이 false 다.
  {
    value: [Function: Object],
    writable: true,
    enumerable: false, 
    configurable: true
  }
*/