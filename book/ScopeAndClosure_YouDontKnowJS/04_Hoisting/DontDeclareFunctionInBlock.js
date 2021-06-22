/**
 * 책에선 b 가 나왔는데, node에서도 브라우저에서도 TypeError로 나온다. 레퍼런스 에러는 아니다. 
 * 실행되면서 호이스팅은 됐는데 접근은 안되는건지.
 */

// foo(); // TypeError: foo is not a function - 레퍼런스 에러가 아니다.
console.log(foo); // undefined

var a = true;

if (a) {
    function foo () {
        console.log("a");
    }
} else {
    function foo () {
        console.log("b");
    }
}