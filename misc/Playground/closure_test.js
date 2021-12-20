const closureTest = (function outerFunc() {
    let a = 1;
    function innerFunc1() {
        console.log({a});
        function innerFunc2() {
            function innerFunc3() {
                console.log(++a);
            }
            return innerFunc3;
        }
        return innerFunc2;
    }
    return innerFunc1;
})();

closureTest()()();
closureTest()()();
closureTest()()();
closureTest()()();