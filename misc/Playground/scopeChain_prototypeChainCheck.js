var b = "scope b";

function ProtoTest(a) {
//     this.a = a || "prototest a";
    this.b = "bbbb";
}

ProtoTest.prototype.a = "prototype a";
// ProtoTest.prototype.b = "prototype b";

// var protoTest = new ProtoTest("property a");

// console.log(protoTest.a);
// console.log(protoTest.b);

function Test() {
    var b = "Test scope b";

    function ProtoTest2() {
        console.log(b);
    }

    ProtoTest2.prototype = new ProtoTest();

    const protoTest2 = new ProtoTest2("abcd");

    console.log(protoTest2.a);
    console.log(protoTest2.b);

    console.log(protoTest2.hasOwnProperty('a'), protoTest2.__proto__.hasOwnProperty('a'), protoTest2.__proto__.__proto__.hasOwnProperty('a'))
    console.log(protoTest2.hasOwnProperty('b'), protoTest2.__proto__.hasOwnProperty('b'), protoTest2.__proto__.__proto__.hasOwnProperty('b'))
}

Test();