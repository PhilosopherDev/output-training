class BindTest {
    constructor(name) {
        this.name = name;
        this.bindFunc = this.bindFunc.bind(this);
    }

    bindFunc() {
        console.log("bind", this.name);
    }

    notBindFunc() {
        console.log("not bind", this);
    }
}

const bindTest = new BindTest("marti");
const bindFunc = bindTest.bindFunc;
const notBindFunc = bindTest.notBindFunc;
bindTest.bindFunc();
bindTest.notBindFunc();

bindFunc();
notBindFunc();

