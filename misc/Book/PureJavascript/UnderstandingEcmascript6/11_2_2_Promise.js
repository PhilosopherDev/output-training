/**
 * 11.2.2 미확정 프로미스 만들기
 */

let fs = require("fs");

function readFile(filename) {    
    return new Promise(function(resolve, reject) {
        /** 프로미스 실행자(현재 이 함수)는 소스코드의 프로미스 실행자 이후 코드보다 먼저 실행된다. */
        console.log("111");
        // 비동기 연산 수행
        fs.readFile(filename, { encoding: "utf8"}, function(err, contents) {

            // 에러 검사
            if (err) {
                reject(err);
                return;
            }

            // 성공시 수행
            resolve(contents);
        });
    });
}

let promise = readFile("11_2_2_test.txt");

/** 위에 프로미스 실행자 안에 있는 111 이 아래 222 보다 먼저 찍힌다. */
console.log("222");

promise.then(function(contents) {
    // 성공시 작업 큐 맨 뒤에 추가되는 함수: 그래서 비동기로 실행된다.
    console.log(contents);
}).catch(function(err) {
    // 실패시 작업 큐 맨 뒤에 추가되는 함수: 그래서 비동기로 실행된다.
    console.error(err.message);
});

/** 위의 promise then/catch 가 비동기로 실행되기 때문에 아래 333 이 먼저 실행된다 */
console.log("333");