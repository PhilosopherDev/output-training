// person.ts
class Person {
    private name: string;
    public age: number;
  
    constructor(name: string, age?: number) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      return "Hello, " + this.name;
    }
    
    static sayBye() {
        return "Hello, " + this.name;
    }
  }
  
  const person = new Person('Lee');
  
  console.log(person.sayHello());