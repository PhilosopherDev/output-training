let a = 1;
{
    let b = 2;
    var c = 3;
    console.log(a,b,c); // 1 2 3
}
console.log(a,b,c); // ReferenceError: b is not defined