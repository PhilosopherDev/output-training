/**
 * 함수 오버로딩: 한 함수에 여러 시그니처를 두는 것. 같은 함수라 해도 인수의 타입과 개수의 차이를 두는 시그니처를 가지는 것.
 * 자바스크립트 함수에는 시그니처가 없다. 
 * 시그니처가 없어서 함수 오버로딩도 없다.
 */

function sayMessage(message) {
    console.log(message);
}

function sayMessage() {
    console.log("Default message");
}

sayMessage("Hello!"); // Default message, 인수를 넣었음에도 아래 함수로 실행된다.

// 위는 아래와 같다.
var sayMessage2 = new Function("message", "console.log(message);");

sayMessage2 = new Function("console.log(\"Default message\");")

sayMessage2("Hello!"); // Default message

/**
 * 오버로딩 흉내내기
 * 사용할 것 같지 않긴하다.
 */

function sayMessage3(message) {
    if (arguments.length === 0) {
        message = "Default message";
    }

    console.log(message);
}

sayMessage3("Hello!"); // Hello!
sayMessage3(); // Default message

