/**
 * 생성자 훔치기
 * 일반적으로 프로토타입 상속은 메소드 상속을 위해 사용하고, 
 * 생성자 훔치기는 프로퍼티 상속을 위해 사용한다. 
 */

function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

function Square(size) {
    Rectangle.call(this, size, size); // Rectangle이 호출될 때 Square의 this를 가지고 넘어가서 new Squre() 할 때 SquareInstance.length 와 SqaureInstance.width 가 size 로 할당된다.
}

var square = new Square(8);
console.log(square); // Square { length: 8, width: 8 }

// 프로토타입 상속으로 메소드 상속하는 부분은 일부러 생략했다. 상속자 훔치기는 상속받을 생성자에서 정의한 프로퍼티를 다시 정의하는 것을 방지할 수 있다.

