/**
 * Lexical Scope 
 * => 정적 스코프. 함수가 선언될 떄 scope 가 결정된다. 
 * 그래서 foo() 안에서 bar() 를 실행해도, bar 가 foo 바깥 scope 이기 때문에 
 * foo 안의 a 인 200 이 아니라, 선언할 때 결정된 scope 의 a 인 10 이 설정된다. 
*/

/**
 * outer 함수가 실행될 때 = outer 함수의 실행 컨텍스트가 생성될 때.
 * 호이스팅을 통해 변수의 정의와 함수의 선언이 끌어올려진다 (코드 상위로 위치한다)+ 변수 객체에 할당한다. a, foo, bar 가 해당된다. 
 * outer 의 lexical scope, 정적 스코프 안에 a, foo, bar 가 포함됐다는 이야기다. 
 * 
 * 그리고 foo 가 실행될 때, foo 에 관한 실행 컨텍스트가 생성되고, 
 * 마찬가지로 호이스팅을 통해 foo 내부의 변수 정의와 함수 선언이 끌어올려진다 + 활성 객체에 할당한다. a 만 해당된다. 
 * 
 * 다음으로 bar 가 foo 의 실행 컨텍스트 내부에서 실행되면서 bar 의 실행 컨텍스트를 만들고,
 * 또 호이스팅을 하려고 보나 정의 되거나 선언한 변수, 함수가 없으므로 끌어올려지는 내용은 없다 + 활성 객체에 할당된 게 없다. 
 * 이후 bar 의 실행 컨텍스트 안에서 console.log(a) 를 실행하면서 
 * console 의 log 메소드의 실행 컨텍스트가 만들어지고 그 안에서 argument 로 넘겨진 a 의 값을 확인하려고 a 를 넘긴 bar 를 확인한다.
 * bar 안의 scope 에는 정의된 a 가 없다. 
 * 그래서 부모 scope 를 chain 을 타고 올라가는데 그게 foo 가 아니라 bar 가 선언된 outer 의 lexical scope 다.
 */

function outer() {
    var a = 10;

    function foo() {
        var a = 200;
        bar();
    }

    function bar() {
        console.log(a);
    }

    foo(); // 10
    bar(); // 10
}

outer();