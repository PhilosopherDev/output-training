function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
        target[propertyKey]();
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
        target[propertyKey]();
    }
}

class C {
    @f()
    @g()
    methodName() {
        console.log("methodName!!");
    }
}