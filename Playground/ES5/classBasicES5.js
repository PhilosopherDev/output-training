"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(name, age) {
        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: "sayName",
        value: function sayName() {
            console.log(this.name);
        }
    }]);

    return Person;
}();

var Programmer = function (_Person) {
    _inherits(Programmer, _Person);

    function Programmer(name) {
        _classCallCheck(this, Programmer);

        return _possibleConstructorReturn(this, (Programmer.__proto__ || Object.getPrototypeOf(Programmer)).call(this));
    }

    _createClass(Programmer, [{
        key: "sayCode",
        value: function sayCode() {
            console.log("Hello world! ", this.name);
        }
    }]);

    return Programmer;
}(Person);

var programmer = new Programmer("Byungmin", 31);
console.log({ programmer: programmer });
console.log(programmer.name);
console.log(programmer.hasOwnProperty("name"), programmer.hasOwnProperty("age"));
console.log(programmer.__proto__.__proto__.constructor);
programmer.sayName();
programmer.sayCode();

Person.prototype.sayName = function () {
    console.log("changed!!", this.name);
};

programmer.sayName();
programmer.sayCode();
