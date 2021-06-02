/**
 * 생성자만으로는 코드 중복까지 제거할 수 없다. (인스턴스 100개 = 각자의 메소드 100개)
 * 모든 인스턴스가 한 메소드를 공유하도록 만드는 것이 훨씬 더 효율적일 것이다. 
 * 이를 위해 등장한 것이 prototype 이다.
 */

var book = {
    title: "The Principle OfObject Oriented Javascript"
}

console.log("title" in book); // true
console.log(book.hasOwnProperty("title")); // true
console.log("hasOwnProperty" in book) // true, **in 과 hasOwnProperty 를 구분**. in 은 상위 prototype 에 있는 것도 확인한다.
console.log(book.hasOwnProperty("hasOwnProperty")); // false, hasOwnProperty는 해당 객체에 직접 존재하는 proeprty를 확인해준다. false 이므로 사용은 했으나 book 자체에는 없다. 
console.log(Object.prototype.hasOwnProperty("hasOwnProperty")); // true, prototype chaining => Object prototype property에 있다.