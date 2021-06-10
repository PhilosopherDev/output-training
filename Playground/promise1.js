/**
 * promise
 */

/** Promise 가 어떻게 만들어졌을지 한 번 생각해봤다. */
function PromiseMimic(callbackFn) {
    
    this.callbackFn = callbackFn;

    this.then2 = function(callback) {
        this.callbackFn(callback);
    }

    this.catch2 = function(callback) {
        
    }

}

function promiseTest() {
    return new PromiseMimic(function(resolve, reject) {
        setTimeout(function() {
            console.log("hello");
        }, 500);
     
        resolve();
    });
}

/** 
 * 실제랑 다른 점이 실제는 .then 을 실행하지 않아도 위의 new Promise 에 넣어준 함수가 실행한다는 점이다. 
 * 실제 Promise 생성자는 실행자 함수를 인자로 받는다.
 */
const promise = promiseTest();

// promise.then2(function() {
//     console.log("resolved!!");
// });


/** 아래는 실제 Promise */
function promiseTest2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("world");
        }, 500);
        if (false) {
            reject();
        }
        resolve();
    });
}

const promise2 = promiseTest2();
console.log(promise2);
console.log(promise2 instanceof Promise); // true
console.log(Object.getPrototypeOf(promise2) === Promise.prototype); // true
console.log(Promise.prototype.constructor); // [Function: Promise]

// promise2.then(function() {
//     console.log("resolved!!");
// }).catch(function() {
//     console.log("rejected TT");
// });

setTimeout(function() {
    console.log("after 500ms")
    promise2.then(function() {
        console.log("resolved!!");
    });
    promise2.then(function() {
        console.log("resolved!!");
    });
    promise2.then(function() {
        console.log("resolved!!");
    });
}, 1000);

/** promise 3번째 테스트 */
const promise3 = new Promise(function(resolve, reject) {
    resolve("hello");
    console.log("test");
});

promise3.then(function(e) {
    console.log({e});
});