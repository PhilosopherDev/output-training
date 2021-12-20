// // 1번 예제 - 6이 여섯번 실행됨.
// function outer() {
//     var i; // closure
//     for (i = 0; i <= 5; i++) {
//         setTimeout(function() {
//             console.log(i);
//         }, i*100);
//     }
// }
// outer();

// // 2번 예제 - 6이 여섯번 실행됨. let i 가 outer2 함수 블록에 붙기 때문에 마찬가지로 closure
// function outer2() {
//     let i; // closure
//     for (i = 0; i <= 5; i++) {
//         setTimeout(function() {
//             console.log(i);
//         }, i*100);
//     }
// }
// outer2();

// // 3번 예제 - j 변수를 만들어줘도 마찬가지로 closure라 5가 6번 실행됨
// function outer3() {
//     var i; // closure
//     for (i = 0; i <= 5; i++) {
//         var j = i;
//         setTimeout(function() {
//             console.log(j, this); // this = timeout. function이 선언된 곳은 outer3 이지만, 실행되는 곳은 timeout 이다.
//         }, j*100);
//     }
// }
// outer3();

// 4번 예제 - scope 닫아주기, for 문이 돌 때마다 IIFE 로 새로운 scope 가 생기고 그 안의 j 에 해당 시점의 i 가 적용된 채로 그 j 는 고정된다.
// for 문 모든 시점에 실행 컨텍스트 실행되고 끝나고가 반복되어 반복된 갯수 만큼의 새로운 실행 컨텍스트와 그 안의 j 가 있는거다. 마찬가지로 클로저다. 
// function outer4() {
//     var i; // closure
//     for (i = 0; i <= 5; i++) {
//         (function() {
//             var j = i; // j 는 클로저. 새로운 실행 컨텍스트에서의 클로저. 
//             setTimeout(function() {
//                 console.log(j);
//                 // console.log(this); // this = timeout. function이 선언된 곳은 outer3 이지만, 실행되는 곳은 timeout 이다.
//             }, j*100);
//         })()
//     }
// }
// outer4();

// 5번 예제 - for 문 안에 let 으로 변수를 생성해주면, 반복될 때마다 블록스코프에 할당된 변수를 새로 만들어서 넣어준다. 반복할 때마다 선언된다. 
function outer5() {
    for (var i = 0; i <= 5; i++) {
        let j = i;
        setTimeout(function() {
            console.log(j);
        }, j*100);
    }
}
outer5();